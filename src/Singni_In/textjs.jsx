import React, { useState } from "react";
import {
  Stack,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import {
  Person as PersonIcon,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import "./styleSingni.css";

export const SingniIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormError({ ...formError, [name]: "" }); // Limpa o erro ao digitar
  };

  const clearError = () => {
    setFormError({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearError();
    let isValid = true;

    // Validação do nome
    if (formData.name.trim() === "" || formData.name.length < 3) {
      setFormError((prev) => ({
        ...prev,
        name: "O nome deve ter pelo menos 3 caracteres.",
      }));
      isValid = false;
    }

    // Validação do email
    if (!isValidEmail(formData.email)) {
      setFormError((prev) => ({
        ...prev,
        email: "Digite um e-mail válido.",
      }));
      isValid = false;
    }

    // Validação da senha
    if (formData.password.length < 6) {
      setFormError((prev) => ({
        ...prev,
        password: "A senha deve ter pelo menos 6 caracteres.",
      }));
      isValid = false;
    }

    if (isValid) {
      console.log("Formulário válido! Enviar dados...");
      // Aqui você pode enviar os dados para o backend ou Firebase
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const [formErrors, setFormErrors] = useState({});

  const validaLogin = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" }); // Remove erro ao digitar
  };

  const validateForm = () => {
    let errors = {};

    // Validação do e-mail
    if (!formData.email.trim()) {
      errors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "E-mail inválido.";
    }

    // Validação da senha
    if (!formData.password.trim()) {
      errors.password = "A senha é obrigatória.";
    } else if (formData.password.length < 6) {
      errors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Retorna true se não houver erros
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login válido:", formData);
      // Aqui você pode chamar a função de login ou API
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "grey",
        padding: "10px",
      }}
    >
      <div className={`container ${isRegistering ? "active" : ""}`}>
        {/* LOGIN */}
        <div className="form-box login">
      <form onSubmit={handleSubmitLogin}>
        <h2 className="primariH1Clor">Login</h2>

        {/* E-mail */}
        <div className="input-box">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={formData.email}
            onChange={validaLogin}
          />
          <PersonIcon className="iconFilde" />
        </div>
        <p className={`error-message ${formErrors.email ? "show" : ""}`}>
          {formErrors.email}
        </p>

        {/* Senha */}
        <div className="input-box">
          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel>Senha</InputLabel>
            <Input
              name="password"
              type={showPasswordLogin ? "text" : "password"}
              value={formData.password}
              onChange={validaLogin}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                  >
                    {showPasswordLogin ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <p className={`error-message ${formErrors.password ? "show" : ""}`}>
          {formErrors.password}
        </p>

        <div className="forgot-link">
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button className="btn" type="submit">
          Logar
        </button>
        <p>Ou cadastre-se nas plataformas sociais</p>

        <div className="social-media">
          <a href="#">
            <GoogleIcon />
          </a>
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
        </div>
      </form>
    </div>

        {/* CADASTRO */}
        <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1 className="primariH1Clor">Cadastro</h1>

            <div className="input-box">
              <TextField
                sx={{ width: "100%" }}
                label="Nome"
                variant="outlined"
                size="small"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!formError.name}
              />
              <p className={`error-message ${formError.name ? "show" : ""}`}>
                {formError.name}
              </p>
            </div>

            <div className="input-box">
              <TextField
                sx={{ width: "100%" }}
                type="email"
                label="E-mail"
                variant="outlined"
                size="small"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!formError.email}
              />
              {formError.email && (
                <p className="error-message">{formError.email}</p>
              )}
            </div>

            <div className="input-box">
              <TextField
                sx={{ width: "100%" }}
                label="Senha"
                variant="outlined"
                size="small"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!formError.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formError.password && (
                <p className="error-message">{formError.password}</p>
              )}
            </div>

            <div className="forgot-link">
              <a href="#">Esqueceu a senha?</a>
            </div>

            <button className="btn">Cadastre-se</button>
            <p>Ou cadastre-se nas plataformas sociais</p>

            <div className="social-media">
              <a href="#">
                <GoogleIcon />
              </a>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>
          </form>
        </div>

        {/* TOGGLE LOGIN / CADASTRO */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-right">
            <h1
              style={{
                color: "#fff",
                marginBottom: "10px",

                "@media (max-width:650px)": {
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "20px",
                },
              }}
            >
              Olá, bem-vindo!
            </h1>
            <p>Não tem uma conta?</p>
            <button className="btn login-btn" onClick={toggleForm}>
              Cadastre-se
            </button>
          </div>

          <div className="toggle-panel toggle-left">
            <h1
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "5px",
              }}
            >
              {" "}
              Bem-vindo de volta!
            </h1>
            <p>Já tem uma conta?</p>
            <button className="btn registr-btn" onClick={toggleForm}>
              {" "}
              Login
            </button>
          </div>
        </div>
      </div>
    </Stack>
  );
};
