function Form() {
  return (
    <div className="form-container">
      <h1 className="form-title">SIGN UP FOR UPDATES FROM LE SSERAFIM</h1>
      <form className="form">
        <input
          type="email"
          className="form-input"
          placeholder="ENTER YOUR EMAIL"
        />
        <button type="submit" className="form-button">
          SIGN UP
        </button>
      </form>
      <p className="form-disclaimer">
        EMAILS WILL BE SENT BY OR ON BEHALF OF UMG RECORDINGS SERVICES, INC.
        2220 COLORADO AVENUE, SANTA MONICA, <br></br> <br></br>CA 90404 (310)
        865-4000. YOU MAY WITHDRAW YOUR CONSENT AT ANY TIME. SEE PRIVACY POLICY
        AT &nbsp;
        <a href="">HTTP://PRIVACY.UMUSIC.COM</a>.
      </p>
    </div>
  );
}
export default Form;
