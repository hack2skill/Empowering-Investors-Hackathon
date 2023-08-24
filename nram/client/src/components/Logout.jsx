export default function Logout() {

    const handleLogout = () => {
        // Delete token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    
        // Redirect to home page
        window.location.href = '/';
      };

  return (
    <button
      onClick={handleLogout}
      className="text-2xl font-bold cursor-pointer hover:text-violet-500 transition-colors"
    >
      Logout
    </button>  )
}
