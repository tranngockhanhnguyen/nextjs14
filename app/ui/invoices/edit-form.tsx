'use client';

import { updateInvoice } from '@/app/lib/actions';
import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import InvoivesForm from '@/app/ui/invoices/form';
import { useFormState } from 'react-dom';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const initialState = {
    message: null,
    errors: {},
  };
  const [state, dispatch] = useFormState(updateInvoiceWithId, initialState);

  return (
    <InvoivesForm
      state={state}
      dispatch={dispatch}
      customers={customers}
      invoices={invoice}
      mode="Edit"
    />
  );
}
