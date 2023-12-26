import { onAuthStateChanged } from "firebase/auth";

function SignIn() {
  const [user, setUser] = useState(null);
  const handleSignIn = () => {
    signInWithPopup(auth, provider); 
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("email", user.email);
      } else {
        setUser(null);
        localStorage.removeItem("email");
      }
    });

    return unsubscribe; // Cleanup the listener when the component unmounts
  }, []);

  const handleClick = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.email}!</p>
      ) : (
        <button onClick={handleSignIn}>Sign In With Google</button>
      )}
    </div>
  );
}

export default SignIn;
