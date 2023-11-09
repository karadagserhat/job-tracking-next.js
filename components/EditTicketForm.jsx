'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const EditTicketForm = () => {
  const router = useRouter();
  const startingTicketData = {
    company: '',
    description: '',
    priority: 1,
    status: 'pending',
    category: 'Frontend Developer',
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error('Failed to update ticket');
      }
    } else {
      const res = await fetch('/api/Tickets', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        //@ts-ignore
        'Content-Type': 'application/json',
      });
      if (!res.ok) {
        throw new Error('Failed to create ticket');
      }
    }
*/

    const res = await fetch('/api/topics', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      //@ts-ignore
      'Content-Type': 'application/json',
    });
    if (!res.ok) {
      throw new Error('Failed to create job');
    }

    router.refresh();
    router.push('/');
  };

  const categories = [
    'Frontend Developer',
    'Backend Developer',
    'Full-Stack Developer',
  ];

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h3>Create Job</h3>
        <label>Company</label>
        <input
          id="company"
          name="company"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.company}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories?.map((category, _index) => (
            <option key={_index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="pending">pending</option>
          <option value="interview">interview</option>
          <option value="declined">declined</option>
        </select>
        <input
          type="submit"
          className="btn max-w-xs"
          // value={EDITMODE ? 'Update Ticket' : 'Create Ticket'}
          value="Create Job"
        />
      </form>
    </div>
  );
};
export default EditTicketForm;
