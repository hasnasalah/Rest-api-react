interface ErrorMessageProps{
    message:string;
}


export default function ErrorMessage  ({message}: ErrorMessageProps ) {
  return(
  <div className="error-container">
    <p className="error-message">Error: {message}</p>
  </div>
  );
}
