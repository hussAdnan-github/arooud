"use client";

import Edite from "./Edite";
export const columns = [
  {
    accessorKey: "id",
    cell: ({ row }) => {
      const payment = row.original;
      return <Edite dataRow={row} />;
    },
  },
  {
    accessorKey: "goal_ar",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "image_goal",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "message_ar",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "image_message",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "idea_ar",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "image_idea",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "vision_ar",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "image_vision",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "create_at",
    cell: ({ row }) => {
      const date = row.getValue("create_at");
      return <div className="text-right text-xl font-bold">{date}</div>;
    },
  },
];
