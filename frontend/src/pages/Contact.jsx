

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-sm ">
        <h2 className="heading text-center ">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_pera">
          Got a technical review? want to send feedback about beta features? let
          us Know.
        </p>
        <form action="#" className="space-y-8">
          <div className="">
            <label htmlFor="enail" className="form_label">
              Your Email{" "}
            </label>
            <input
              type="email"
              className="form_input mt-2"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="">
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text"
              className="form_input mt-2"
              id="subject"
              placeholder="Let us know how can help you"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message"
            className="form_label"
            >
              Your Message
            </label>
            <textarea
            rows={6}
              type="text"
              className="form_input mt-2"
              id="message"
              placeholder="Leave a comment...."
            />
          </div>
    
                <button
                  type="submit"
                  className="bg-primaryColor btn rounded sm:w-fit"
                >
                  SignUp
                </button>
   
        </form>
      </div>
    </section>
  );
};

export default Contact;
