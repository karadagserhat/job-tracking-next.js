import connectMongoDB from '@/libs/mongodb';
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // const { title, description } = await request.json();
    const body = await request.json();
    const topicData = body.formData;
    await connectMongoDB();
    await Topic.create(topicData);
    return NextResponse.json({ message: 'Topic Created' }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get('id');
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: 'Topic deleted' }, { status: 200 });
// }
