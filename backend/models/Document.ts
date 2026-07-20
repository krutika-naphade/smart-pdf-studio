import mongoose, { Schema, Document as MongooseDocument } from "mongoose";

export interface IDocument extends MongooseDocument {
  customerName: string;
  email?: string;
  phone?: string;
  address?: string;
  invoiceNumber: string;
  amount: number;
  dueDate: Date;
  status: "Pending" | "Paid";
}

const documentSchema = new Schema<IDocument>(
  {
    customerName: {
      type: String,
      required: [true, "Customer name is required"],
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },

    invoiceNumber: {
      type: String,
      required: [true, "Invoice number is required"],
      unique: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount cannot be negative"],
    },

    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },

    status: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model<IDocument>("Document", documentSchema);

export default Document;
