"use client";
import "@/app/lib/styles/space.css";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export function Modal(props: {
  is_open: boolean;
  winner: boolean;
  onClose: () => void;
}) {
  const { is_open, winner, onClose } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(is_open);
  }, [is_open]);

  const handleClose = (value: boolean) => {
    setOpen(value);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="memory-game-container relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mx-auto flex items-center justify-center rounded-full ">
                {/* {winner ? (
                  <CheckIcon
                    aria-hidden="true"
                    className="h-12 w-12 text-green-600"
                  />
                ) : (
                  <XCircleIcon
                    aria-hidden="true"
                    className="h-12 w-12 text-red-600"
                  />
                )} */}
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-white"
                >
                  {winner
                    ? "Parabéns! Você conseguiu"
                    : "Ops! Não foi dessa vez"}
                </DialogTitle>
                {/* <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur amet labore.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => handleClose(false)}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:max-w-xs text-center bg-gradient-to-r from-blue-400 to-blue-600 hover:shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
              >
                Voltar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
