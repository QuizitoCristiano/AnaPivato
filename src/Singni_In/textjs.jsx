import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  getFirestore,
} from "firebase/firestore";
import "./styleSingni.css";

export const SingniIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    let errors = {};
    if (isRegistering) {
      if (!formData.name.trim() || formData.name.length < 3) {
        errors.name = "O nome deve ter pelo menos 3 caracteres.";
      }
    }
    if (!formData.email.trim()) {
      errors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "E-mail inválido.";
    }
    if (!formData.password.trim()) {
      errors.password = "A senha é obrigatória.";
    } else if (formData.password.length < 6) {
      errors.password = "A senha deve ter pelo menos 6 caracteres.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const auth = getAuth();
      const firestore = getFirestore();
      const usersCollection = collection(firestore, "users");
      try {
        if (isRegistering) {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          const user = userCredential.user;
          await updateProfile(user, { displayName: formData.name });

          const userDocRef = doc(usersCollection, user.uid);
          await setDoc(userDocRef, {
            id: user.uid,
            email: formData.email,
            name: formData.name,
          });

          alert("Usuário cadastrado com sucesso!");

          // Preencher dados do login
          setFormData({
            name: "",
            email: formData.email,
            password: "",
          });

          // Redirecionar para a seção de login
          toggleForm();

        } else {
          // Aqui você pode implementar o login, se necessário
        }
      } catch (error) {
        alert("Erro ao criar usuário: " + error.message);
      }
    } else {
      console.log("Formulário inválido, corrigir erros.");
    }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "2rem",
        margin: "2rem",
        padding: "3rem",
        borderRadius: "10px",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className={`container ${isRegistering ? "active" : ""}`}>
        {/* LOGIN */}
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h2 className="primariH1Clor">Login</h2>
            <div className="input-box">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <PersonIcon className="iconFilde" />
            </div>
            <p className={`error-message ${formErrors.email ? "show" : ""}`}>
              {formErrors.email}
            </p>
            <div className="input-box">
              <FormControl sx={{ width: "100%" }} variant="standard">
                <InputLabel>Senha</InputLabel>
                <Input
                  name="password"
                  type={showPasswordLogin ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
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
            <button className="btn" type="submit">
              Logar
            </button>
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
                error={!!formErrors.name}
              />
              <p className={`error-message ${formErrors.name ? "show" : ""}`}>
                {formErrors.name}
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
                error={!!formErrors.email}
              />
              {formErrors.email && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  {formErrors.email}
                </p>
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
                error={!!formErrors.password}
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
              {formErrors.password && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  {formErrors.password}
                </p>
              )}
            </div>
            <button className="btn">Cadastre-se</button>
          </form>
        </div>

        {/* TOGGLE LOGIN / CADASTRO */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-right">
            <h1 style={{ color: "#fff", marginBottom: "10px" }}>
              Olá, bem-vindo!
            </h1>
            <p>Não tem uma conta?</p>
            <button className="btn login-btn" onClick={toggleForm}>
              Cadastre-se
            </button>
          </div>
          <div className="toggle-panel toggle-left">
            <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "#fff", marginBottom: "10px" }}>
              Bem-vindo de volta!
            </h1>
            <p>Já tem uma conta?</p>
            <button className="btn register-btn" onClick={toggleForm}>
              Login
            </button>
          </div>
        </div>
      </div>
    </Stack>
  );
};
