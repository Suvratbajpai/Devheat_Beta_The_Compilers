const nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div class="container d-flex gap-5 align-items-center">
                        <a class="navbar" href="#">
                            <img
                                src="/images/hackedin_logo1.png"
                                alt="logo"
                                width="100"
                                height="54"
                                className="rounded"
                            />
                        </a>

                        <a class="navbar-brand text-white" href="#">
                            Hackathons
                        </a>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <form className="d-flex" role="search">
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                SignUp/Login
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default nav;
