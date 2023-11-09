import connectMongoDB from '@/libs/mongodb';
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const topicData = body.formData;
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { ...topicData });
    return NextResponse.json({ message: 'Topic updated' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const foundTopic = await Topic.findOne({ _id: id });
    return NextResponse.json({ foundTopic }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Topic deleted' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
