const Navbar = () => {

    return (
        <div>
            <navbar>
                <ul>
                    <div class="row">
                        <div class="col-md-3">
                            <li><p class="logo">Language Translator</p></li>
                        </div>
                        <div class="col-md-5"></div>
                        <div class="col-md-4">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#about">About</a></li>
                        </div>
                    </div>

                </ul>
            </navbar>
        </div>
    );

};

export default Navbar;
