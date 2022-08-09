import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer clap-width' style={{ marginTop: "1rem" }}>
      <div className='footer-list'>
        <p>Pizza App © 2022</p>
        <p>
          Powered by{" "}
          <b>
            <a href='https://github.com/wintersalt'>WinterSalt</a>
          </b>{" "}
          and{" "}
          <b>
            <a href='https://github.com/thofnas'>thofnas</a>
          </b>
        </p>
        <p>Made With 🏳️‍🌈</p>
      </div>
    </div>
  )
}

export default Footer
