
// AI Wrap Designer App (React + Tailwind)
// Built for Adrenaline Ink / AI Wrap Lab

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function WrapDesigner() {
  const [logo, setLogo] = useState(null);
  const [model, setModel] = useState('');

  const sledModels = [
    'Polaris 9R 155 Matryx Slash',
    'Polaris RMK Khaos 155',
    'Ski-Doo Summit X Gen5',
    'Ski-Doo Freeride Turbo',
    'Arctic Cat M8000 Hardcore Alpha',
    'Lynx Shredder RE',
    'Yamaha Mountain Max 800',
    'Ski-Doo Backcountry X-RS',
    'Polaris Pro RMK AXYS',
    'Custom Build...'
  ];

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(file);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-10">
      <h1 className="text-4xl font-bold text-red-600 mb-6">AI Wrap Designer</h1>

      <Card className="bg-zinc-900 border-red-600 mb-6">
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">1. Upload Your Logo</h2>
          <Input type="file" accept="image/*" onChange={handleLogoUpload} className="bg-zinc-800 text-white border-red-600" />
          {logo && <p className="text-sm mt-2">Uploaded: {logo.name}</p>}
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-red-600 mb-6">
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">2. Select Your Sled</h2>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full bg-zinc-800 text-white p-2 rounded border border-red-600"
          >
            <option value="">-- Choose Make & Model --</option>
            {sledModels.map((sled, idx) => (
              <option key={idx} value={sled}>{sled}</option>
            ))}
          </select>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-red-600 mb-6">
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">3. Preview Wrap (3D Viewer Placeholder)</h2>
          <div className="aspect-video w-full bg-zinc-800 border border-dashed border-red-600 flex items-center justify-center text-sm text-red-400">
            3D Viewer Coming Soon
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-red-600">
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">4. Wrap Assistant</h2>
          <Textarea
            className="w-full bg-zinc-800 text-white border-red-600"
            placeholder="Ask the Wrap Assistant anything..."
            rows={4}
          />
          <Button className="mt-2 bg-red-600 hover:bg-red-700 text-white">Send</Button>
        </CardContent>
      </Card>
    </div>
  );
}
