# Reference Flow Decision Rules

Reference flow guidance belongs in PCR records and reusable modules. Deterministic tooling should validate consistency with the selected PCR; it should not silently invent category methodology.

Material PCRs should define one reference flow object rather than separate free-text and UUID-backed alternatives. Use a `Field` / `Value` table for reference amount, product flow UUID, flow property UUID, unit group UUID, reference unit, and category-specific required qualifiers.

Choose the reference quantity together with the inventory denominator. A reference of M kg for one complete machine
may use per-machine amounts, provided M is the measured net mass of the same accepted configuration. A reference of
1 kg collected per machine needs the explicit division by M and linked measurement/collection rules. A PCR can require
M to be measured during dataset production; it need not contain a made-up machine weight. See
[Measurement and unit rules](measurement-unit-rules.md) for the finite check and bilingual examples.
