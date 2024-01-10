'use client';

import { createInvoice } from '@/app/lib/actions';
import { CustomerField } from '@/app/lib/definitions';
import InvoivesForm from '@/app/ui/invoices/form';
import { useFormState } from 'react-dom';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <InvoivesForm state={state} dispatch={dispatch} customers={customers} />
  );
}
