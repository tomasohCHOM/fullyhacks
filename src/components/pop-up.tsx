"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Loading from "./loading";

export default function PopUp({
  title,
  content,
  action
}: {
  title: string;
  content: any;
  action: string;
}) {
  const [isChecked, setCheck] = useState(true);
  return (
    <>
      <input
        type="checkbox"
        id="my-modal"
        checked={isChecked}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-[#201c33]">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              onClick={() => setCheck(false)}
              className="btn border-none bg-[#122a58] normal-case text-white transition-colors duration-300 hover:bg-white hover:text-[#122a58]">
              {action}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

const schema = yup.object({
  bio: yup.string().min(5).max(100).required(),
  discord: yup.string().max(50)
});
type FormData = yup.InferType<typeof schema>;

export function FeedPopUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const router = useRouter();
  const [isChecked, setCheck] = useState(true);
  const [step, setStep] = useState(1);
  const [bio, setBio] = useState("");
  const [discordId, setDiscordId] = useState("");
  const [isLoading, setLoading] = useState(false);
  const goNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const updateUserProfile = async () => {
    setLoading(true);
    const data = {
      bio: bio,
      discordId: discordId
    };
    await axios.put("/api/user", data);
    setLoading(false);
    goNextStep();
    router.refresh();
  };
  return (
    <>
      {step == 1 && (
        <>
          <input
            type="checkbox"
            id="my-modal"
            checked={isChecked}
            className="modal-toggle"
          />
          <div className="modal">
            <div className="feed-popup modal-box">
              <h3 className="text-lg font-bold">Welcome to The Feed 🐘</h3>
              <p className="py-4 font-normal">
                Where you meet other participants and explore other cool things
                about FullyHacks to be best prepared 🎉
              </p>
              <img
                src="/assets/feed.png"
                alt="feed pic"
                className="md:w-[600px]"
              />
              <div className="modal-action">
                <label
                  htmlFor="my-modal"
                  onClick={() => goNextStep()}
                  className="blue-btn normal-case">
                  Continue
                </label>
              </div>
            </div>
          </div>
        </>
      )}
      {step == 2 && (
        <>
          <input
            type="checkbox"
            id="my-modal"
            checked={isChecked}
            className="modal-toggle"
          />
          <div className="modal">
            <div className="feed-popup modal-box">
              <h3 className="text-lg font-bold">
                Let&apos;s introduce yourself 🤩
              </h3>
              <p className="py-4 font-normal">
                Fill out these fields so other participants can see how cool you
                are, it&apos;s a great chance to network before the event,
                you&apos;ll be able to update these information in your profile
                later.
              </p>
              <form
                onSubmit={handleSubmit(updateUserProfile)}
                className="flex w-full flex-col"
                action="">
                <p className="mb-2 font-bold">Your bio:</p>
                <input
                  {...register("bio")}
                  name="bio"
                  onChange={(e) => setBio(e.target.value)}
                  className={`form-input rounded-md ${
                    errors.bio ? "error-form" : ""
                  }`}
                  type="text"
                  placeholder="Hi, I loveee web development, add me on Discord to talk more:)"
                />
                <p className="error-msg">{errors.bio?.message}</p>
                <p className="mb-2 font-bold">Discord Id:</p>
                <input
                  {...register("discord")}
                  name="discord"
                  className={`form-input rounded-md ${
                    errors.discord ? "error-form" : ""
                  }`}
                  onChange={(e) => setDiscordId(e.target.value)}
                  type="text"
                  placeholder="Fullhacker"
                />
                <p className="error-msg">{errors.discord?.message}</p>
                {isLoading ? (
                  <button type="submit" className="blue-btn mt-4 self-end">
                    <Loading isLoading={isLoading} />
                  </button>
                ) : (
                  <button type="submit" className="blue-btn mt-4 self-end">
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
