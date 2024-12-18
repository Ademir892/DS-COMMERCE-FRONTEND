import { useContext, useState } from "react";
import "./styles.css";
import * as forms from "../../../utils/forms";
import * as authService from "../../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../../utils/context-token";
import FormInput from "../../../components/FormInput";

export default function Login() {
  const navigate = useNavigate();

  const { setContextTokenPayload } = useContext(ContextToken);


  const [submitResponseFail, setSubmitResponseFail] = useState(false);


  const [formData, setFormData] = useState<any>({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
      },
      message: "Favor informar um email válido",
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Senha",
    },
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    const dataUpdate = forms.updateAndValidade(formData, name, value);
    setFormData(dataUpdate);
  }

  function handleTurnDirty(name: string){
    const newFormData = forms.dirtyAndValidate(formData, name);
    setFormData(newFormData);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    setSubmitResponseFail(false);

    const formDataValidated = forms.dirtyAndValidateAll(formData);
    if(forms.hasAnyInvalid(formDataValidated)){
      setFormData(formDataValidated);
      return;
    }

    authService
      .loginRequest(forms.toValues(formData))
      .then((response) => {
        authService.saveAccessToken(response.data.access_token);
        setContextTokenPayload(authService.getAccessTokenPayload());
        navigate("/cart");
      })
      .catch(() => {
        setSubmitResponseFail(true);
      });
  }

  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.username}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">{formData.username.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.password}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {
              submitResponseFail &&
              <div className="ds-form-global-error">Usuário ou senha inválidos</div>              
            }


            <div className="dsc-login-form-buttons dsc-mt20">
              <button type="submit" className="dsc-btn dsc-btn-blue">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
