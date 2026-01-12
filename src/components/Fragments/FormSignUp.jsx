import React from 'react';
import LabeledInput from '../Elements/LabeledInput';
import CheckBox from '../Elements/CheckBox';
import Button from '../Elements/Button';

function FormSignUp() {
  return (
    <>
      {/* form start */}
      <div className="mt-16">
        <form>
          <div className="mb-6">
            <LabeledInput
              label="Full Name"
              id="name"
              type="text"
              placeholder="Enter your full name"
              name="name"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="Create a password"
              name="password"
            />
          </div>

          <div className="mb-3">
            <CheckBox
              label="I agree to the Terms & Conditions"
              id="terms"
              type="checkbox"
              name="terms"
            />
          </div>

          <Button>Create Account</Button>
        </form>
      </div>
      {/* form end */}

      {/* link start */}
      <div className="mt-8 flex justify-center">
        <a className="text-primary text-sm font-bold">
          Already have an account? Sign In
        </a>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignUp;
