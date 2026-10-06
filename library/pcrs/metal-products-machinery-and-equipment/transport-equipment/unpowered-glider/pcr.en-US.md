---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.unpowered-glider
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured composite unpowered gliders

## 1. Scope and Applicability

Manufacturing foreground of a new complete configured non-inflatable unpowered rigid-wing sailplane with locally moulded glass/carbon-epoxy airframe and bonded sandwich construction. The selected route is approved wet layup with controlled curing and actual declared core/structural reinforcement, not a universal production recipe. Existing woven-glass fabric, electrical wiring and aircraft-engine material/component PCRs cover upstream products, not this propulsion-free complete aircraft integration. No complete material glider PCR was identified in the manifest scan. Balloons/dirigibles, hang gliders, inflatable craft, powered or motor-assisted sailplanes, kit/incomplete airframes, separately supplied parts, all-metal/wood/prepreg routes, repair and refurbishment are excluded. Exclude customer flight, aerotow/winch services during use, glide performance, passenger transport, airfield infrastructure, lifetime and disposal. Performed manufacturing acceptance trials remain inside their measured factory boundary. Historical LS8 configuration/weighing evidence and a separate manufacturer’s carbon production example do not establish one combined model recipe or current factory quantities. Candidate authored methodology awaits independent scientific review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.unpowered-glider |
| classification_refs | CPC 3.0 49610; narrower semantic candidate; no accepted mapping |
| covered_products | New accepted configured wet-layup composite unpowered rigid-wing glider |
| excluded_products | Other non-powered aircraft forms, propulsion-assisted craft, other airframe routes, loose parts/use/repair |
| representative_product | Historical LS8 rigid-wing complete configuration and separate Schempp-Hirth composite production example; actual accepted model governs |
| production_route | Wet reinforcement/epoxy moulding and controlled cure; bond/trim/inspect; conditional finish; mechanical and cockpit integration; complete empty-mass acceptance |
| market_state | New complete accepted aircraft at specified manufacturing gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of one complete configured unpowered rigid-wing glider |
| How much | 1 kg accepted net complete unit; actual verified M kg per accepted glider |
| How well | Meet current controlled layup/cure/bond, dimensions, structural inspection, control travel/release/gear and complete configuration acceptance criteria; preserve actual records, not invented tolerances or certification |
| How long or cycle | One manufacturing delivery; no flight-hour, glide-distance or lifetime unit |
| reference_flow_link | `finished_glider` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Balloons and dirigibles, gliders, hang gliders and other non-powered aircraft `1b1f7cc3-1fb0-4c7d-9735-454a34fd1006` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Aircraft serial/model; full wing-span/winglet/tail configuration; approved resin/fibre precursor/core/layup/cure/bond/finish route; full as-built BOM and make-or-buy scope; permanent gear/control/tow release/cockpit/instruments/electrical equipment and retained charges; site/period; performed tests; actual empty-state weighing method, calibration/original weights/tare and independent mass balance; positive net M kg; dry ballast tanks and excluded people/payload/fixtures/packaging; matched supply/transport/waste links |

Declare required qualifiers in metadata or equivalent notes. The broad public Mass product identity does not supply a model weight or equal flight function; its use is restricted to the exact accepted unpowered rigid-wing configuration.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `electric_energy` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual supplied stage energy;1kWh=3.6MJ. Keep measured energy and actual attribution records; normalize per-unit MJ by M. |

## 5. System Boundary

The foreground begins with actual resin, dry reinforcement/core and independently scoped purchased equipment at plant and ends at complete configured manufacturing acceptance. Include actual mould preparation, measured layup/cure/temperature control, structural bonding, cured trimming/drilling/inspection, conditional finishing, outfitting, rework and performed acceptance work. Vacuum consolidation, oven post-cure, machining coolant, release agent, acetone cleaning and gelcoat are included only when actual controlled route records show them; no autoclave, solvent emission or cure condition is universally mandatory. Expand actual vacuum film, peel ply, breather, abrasives, filters, catalyst, radio/battery/wiring, lubrication, trim ballast, ballast plumbing, packaging, transport and other missing specific exchanges from the full BOM/route before claiming complete foreground coverage. Purchased complete airframe shells would change this local moulding boundary and cannot be counted with their duplicated resin/fibre/cure. Link upstream production and receiving treatment only through matched independent datasets; this document does not establish complete cradle-to-gate coverage. Operational flights, customer tow/winch and maintenance remain outside.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual unmixed stock and independently scoped complete equipment at plant |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | Complete configured composite unpowered rigid-wing aircraft; narrower CPC49610 |
| recursive_input_rule | Count a supplied assembly once, including its stated internals; expand local fabrication separately |
| upstream_dataset_requirement | Match material chemistry/form/precursor, equipment design/completeness, actual provider geography/voltage and waste receiver route |
| disclosure | Manufacturing foreground with explicit unresolved identities, current BOM/weight/route observations and missing links |
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_supplied` | assemblies | Reconcile supply inclusion, independently measured installed component kg and net complete-aircraft M; subtract nothing without measured state corrections. Included fluid/finish/hardware is not a duplicate separate receipt. |  |
| `boundary_acceptance` | factory tests | Include actual control/release/gear checks and performed trial/rework. If an actual manufacturing flight acceptance uses a tug or winch, add separately identified measured supplied test service and actual energy/receiver exchanges; do not assign towing fuel to the unpowered glider or infer operating-life flights. Test payload and water are not retained net M. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mould` | Composite shell and spar moulding | required | Actual approved dry reinforcement/epoxy layup, core installation and controlled cure | foreground | same accepted glider; q_item / M |
| `join` | Structural bonding trimming and inspection | required | Approved joint preparation/bonding, cured trim/drilling and structural checks | foreground | same accepted glider; q_item / M |
| `finish` | Conditional surface finishing | conditional | Only actual approved local gelcoat/finishing work | foreground | same accepted glider; q_item / M |
| `outfit` | Mechanical cockpit and instrument integration | required | Actual gear/control/tow release/canopy/seat/instrument installed configuration | foreground | same accepted glider; q_item / M |
| `acceptance` | Complete assembly function inspection and physical mass acceptance | required | Declared full wing configuration and equipment, actual tests and calibrated empty-state mass evidence | final_product | finished_glider; 1 kg |

### Process: Composite shell and spar moulding (`mould`)

#### Inputs

##### Product flows

###### Unmixed DGEBA epoxy base resin (`epoxy_base`)

Only if the current approved wet-lamination formulation actually uses supplied DGEBA base resin matching this identity. Record supplier certificate, reactive diluents and actual retained formulation; a filled or blended resin outside this identity needs its own unresolved card. Weigh net issues/returns before separately counted hardener. Historical repair resin trade names establish neither DGEBA purity nor a new-production recipe.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Unmixed amine-curing-agent formulation for epoxy lamination (`hardener`)

One actual supplier-certified amine-curing formulation in the approved resin system, with exact SDS constituents and concentration retained in dataset qualifiers. Record net supplied kg, lot and actual mix record; count base resin separately and do not infer a mixing ratio from a repair manual. Other curing chemistry requires a different card.

- Selected flow: Unmixed amine-curing-agent formulation for epoxy lamination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Dry woven E-glass reinforcement fabric (`glass_fabric`)

One actual dry woven E-glass fabric architecture from the approved ply schedule; retain weave, sizing and areal mass from supplier evidence and measured issued/returned kg. Do not prescribe any historical repair ply count. Stock area may be recorded additionally but conversion to kg requires measured roll/area mass for this lot. The selected manufactured woven-glass identity is broader than E-glass grade and sizing; actual certification must qualify these. Its general comment refers to made-up textile articles, inconsistent boilerplate not adopted as a production route.

- Selected flow: Woven fabrics (including narrow fabrics) of glass fibres `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Dry PAN-based carbon-fibre spar roving (`carbon_roving`)

Only actual supplied dry PAN-derived carbon spar reinforcement matching the approved design and precursor certificate. Weigh issued/returned kg and identify tow/sizing/lot; this broad fibre identity supplies no fibre fraction, layup orientation or embodied impact. A woven or preimpregnated fabric is not silently substituted for this supplied dry-roving card.

- Selected flow: Polyacrylonitrile-based carbon fiber `1289c769-931c-4746-9ae6-b8294d9bc1c9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Rigid cellular PVC sandwich-core sheet (`pvc_core`)

Only the actual certified rigid cellular PVC core sheet specified for this configuration; weigh cut stock issues/returns and retain thickness, cell structure and measured state. This is not a universal core material for all sailplanes. No numerical density or kg/m2 from the historical repair list is used. Different approved cores require their own row.

- Selected flow: Rigid cellular PVC sandwich-core sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Aqueous polyvinyl-alcohol mould-release solution (`pva_release`)

Conditional on actual approved tooling practice using this single aqueous PVA release formulation. Retain actual PVA mass concentration and weigh supplied wet solution excluding container; water already in the formulation is not an additional water receipt. Do not assume wax, silicone or a universal release dose.

- Selected flow: Aqueous polyvinyl-alcohol mould-release solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_mould`)

Actual stage-attributed user-side electricity below1kV. Public identity applies only to a matching CN grid-average supplier; other geography/voltage/provider needs a separately verified flow. Record mould temperature control, actual curing, trimming tools, assembly and inspection demand only where performed, including idle/rework. Meter kWh and convert to MJ; no machine-rating or universal curing-energy estimate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Contained uncured mixed epoxy-lamination residue (`mixed_epoxy_residue`)

Actual unused mixed lamination resin/hardener formulation leaving plant as one wet residue stream. Weigh excluding container and retain reaction state, constituents and receiver; it is not pure resin, cured composite or an air emission.

- Selected flow: Contained uncured mixed epoxy-lamination residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Structural bonding trimming and inspection (`join`)

#### Inputs

##### Product flows

###### Uncured filled epoxy structural-bonding formulation (`epoxy_adhesive`)

One actually approved mixed filled epoxy bonding formulation for this glider’s shells and structural joints. Weigh actual mixed usage/returns and retain resin, curing agent, filler and included solvent scope; these constituents are not counted again as separate supplied receipts. Record surface preparation, bondline procedure and inspection from current production records, without imported repair cure limits.

- Selected flow: Uncured filled epoxy structural-bonding formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Liquid acetone cleaning solvent (`acetone_cleaner`)

Only actual approved cleaning using supplier-certified liquid acetone CAS67-64-1; weigh net issue/recovered solvent kg and record concentration. This specific optional cleaning route is not implied by composite manufacturing. Included adhesive/coating solvent is not separately received acetone.

- Selected flow: Liquid acetone cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_join`)

Actual stage-attributed user-side electricity below1kV. Public identity applies only to a matching CN grid-average supplier; other geography/voltage/provider needs a separately verified flow. Record mould temperature control, actual curing, trimming tools, assembly and inspection demand only where performed, including idle/rework. Meter kWh and convert to MJ; no machine-rating or universal curing-energy estimate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Segregated cured glass-epoxy laminate offcut (`gfrp_offcut`)

Actual segregated cured GFRP trimming offcut leaving plant to named receiver, measured dry net kg with resin/fibre composition and contamination. Exclude uncured resin, collected sanding dust and internally reused pieces. No theoretical recycling credit.

- Selected flow: Segregated cured glass-epoxy laminate offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Segregated cured carbon-epoxy laminate offcut (`cfrp_offcut`)

Actual segregated cured CFRP trimming offcut exported to an identified receiver, weighed separately from GFRP and uncured resin. Retain carbon/resin state and actual receiver route; recycled carbon-fibre product identity is not this waste export.

- Selected flow: Segregated cured carbon-epoxy laminate offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Collected spent acetone cleaning solvent (`spent_acetone`)

Conditional actual collected acetone-containing spent cleaning liquid exported to identified waste receiver. Measure wet net kg and analysed acetone concentration/dissolved resin; separate internal solvent recovery and atmospheric loss. No implication that dilute laboratory acetone stock is this waste.

- Selected flow: Collected spent acetone cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Immediate airborne particulate matter without a size fraction (`trim_air_dust`)

Only observed quantified residual atmospheric release from actual trimming/sanding after installed capture/control. Retain measured particle composition, size distinction, sample concentration/flow/time and uncertainty. Selected identity is immediate air unspecified particle size and unspecified air submedium; PM10/PM2.5 require their own flows. Captured filter material is a separate waste, not an air release.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Immediate acetone emission to unspecified air (`acetone_air`)

Only measured residual CAS67-64-1 acetone released to outdoor air during actually performed acetone cleaning after controls. Quantify compound-specific mass using representative sampling or a documented closed solvent balance resolving recovery, residue and retention, with uncertainty. Reject indoor-air, agricultural-soil and upper-atmosphere candidates. No assumed all-solvent evaporation or generic VOC proxy.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Conditional surface finishing (`finish`)

#### Inputs

##### Product flows

###### Uncured polyester surface-gelcoat formulation (`gelcoat`)

Optional only where the actual production finish plan uses this one supplied polyester gelcoat formulation. Retain exact resin/catalyst/pigment/volatile scope and measured mixed issues, recovery and retained cured coating. The maintenance repair gelcoat page does not prove mandatory factory finish or prescribed mixing/cure values.

- Selected flow: Uncured polyester surface-gelcoat formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_finish`)

Actual stage-attributed user-side electricity below1kV. Public identity applies only to a matching CN grid-average supplier; other geography/voltage/provider needs a separately verified flow. Record mould temperature control, actual curing, trimming tools, assembly and inspection demand only where performed, including idle/rework. Meter kWh and convert to MJ; no machine-rating or universal curing-energy estimate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

### Process: Mechanical cockpit and instrument integration (`outfit`)

#### Inputs

##### Product flows

###### One grade of finished steel assembly bolt (`steel_bolt`)

Only actual installed steel bolts of one certified design/grade, weighed in kg net issue less returns. Preserve drawing and installed count for traceability; split unlike bolt grades and exclude bolts already included in supplied gear/control assemblies. Broad fastener identity does not establish aerospace grade or acceptance.

- Selected flow: Steel fasteners `cad280ce-7850-46a1-9060-4f8b68bf5532`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete framed transparent glider cockpit canopy (`canopy`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Complete framed transparent glider cockpit canopy
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete retractable main landing-gear module without wheel (`landing_gear`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Complete retractable main landing-gear module without wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete glider main wheel tyre and brake assembly (`wheel`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Complete glider main wheel tyre and brake assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete aircraft tow-hook release assembly (`tow_release`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Complete aircraft tow-hook release assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel rudder-control cable assembly (`rudder_cable`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Finished steel rudder-control cable assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Finished aluminium-alloy flight-control pushrod assembly (`pushrod`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Finished aluminium-alloy flight-control pushrod assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete mechanical glider wing airbrake assembly (`airbrake`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Complete mechanical glider wing airbrake assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete aircraft pilot restraint harness (`harness`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Complete aircraft pilot restraint harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete mechanical aircraft airspeed indicator (`airspeed`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Complete mechanical aircraft airspeed indicator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete mechanical aircraft pressure altimeter (`altimeter`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Complete mechanical aircraft pressure altimeter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete fixed composite glider cockpit seat shell (`seat`)

One actual approved supplied aircraft component design, measured installed supplied net kg with its drawing, material, serial/count and receipt included hardware recorded. The split landing gear/wheel cards apply only when separately received; complete wheel/brake scope is one physical supplied assembly. Aluminium pushrod/steel cable and composite seat apply only to those certified designs. A complete purchased module replaces its included constituents and supplier operations; local fabrication requires separate actual stock/operation cards. Additional instrument/electrical/safety equipment must be expanded from the actual full BOM.

- Selected flow: Complete fixed composite glider cockpit seat shell
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_outfit`)

Actual stage-attributed user-side electricity below1kV. Public identity applies only to a matching CN grid-average supplier; other geography/voltage/provider needs a separately verified flow. Record mould temperature control, actual curing, trimming tools, assembly and inspection demand only where performed, including idle/rework. Meter kWh and convert to MJ; no machine-rating or universal curing-energy estimate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

### Process: Complete assembly function inspection and physical mass acceptance (`acceptance`)

#### Inputs

##### Product flows

###### User-side low-voltage AC factory electricity (`electricity_acceptance`)

Actual stage-attributed user-side electricity below1kV. Public identity applies only to a matching CN grid-average supplier; other geography/voltage/provider needs a separately verified flow. Record mould temperature control, actual curing, trimming tools, assembly and inspection demand only where performed, including idle/rework. Meter kWh and convert to MJ; no machine-rating or universal curing-energy estimate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete configured unpowered rigid-wing glider (`finished_glider`)

One accepted complete configured non-inflatable unpowered rigid-wing glider with declared wings/tail, permanent cockpit/control/landing gear and delivered equipment, counted once. No propulsion engine, propeller or propulsion battery. Empty water-ballast tanks and no pilot, service payload, temporary fixture or packaging. Its manufacture is scaled to1kg physical net M; broad public aircraft category is narrowed by these qualifiers.

- Selected flow: Balloons and dirigibles, gliders, hang gliders and other non-powered aircraft `1b1f7cc3-1fb0-4c7d-9735-454a34fd1006`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared tooling/production | Separate actual aircraft order/configuration and meter identifiable mould/cure/trim/finish/test work first. For shared cure batches use recorded thermal cycle, occupancy and metered demand with demonstrated causal allocation; aircraft count or kg is not universally causal. Preserve total energy/stock, actual rejected trials/rework and accepted denominator, with sensitivity and intermediate records. |  |
| `allocation_recovery` | waste and reuse | Record internal dry-stock reuse and solvent recovery separately from actual exports. Use subdivision or demonstrated causal allocation for a real co-product; disclose alternatives and sensitivity if unavailable. No automatic recycling yield, avoided virgin fibre/resin credit or price-based rule. Capture and emission are separate mass destinations. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | reference product | controlled complete-unit acceptance weight | configuration; accepted net mass M; aircraft serial; original component/support weights; calibration/tare; dry tanks; installed equipment; independently measured state corrections and mass balance | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted aircraft/configuration change | declared representative current production period | named actual manufacturing site | accepted net mass per unit | original actual calibrated empty-state weighings and independent component balance |
| `cp_stock` | all processes | single chemical/material stock | stock issue and batch record | single material/SDS/lot/formulation; issues; returns; retained amount; rejects/rework; mix/cure/ply record; accepted count | Weigh net actual stock issues/returns and match each approved ply/mix/joint/finish batch; retain supplied chemistry and inclusion. Record measured consumption, cured retention and residues separately. No catalogue resin/fibre fraction or repair mix-ratio proxy. | kg | each lot and reporting period | declared representative current production period | named actual manufacturing site | actual attributable stock kg / accepted units of the same configuration | scale/tare, supplier/SDS, signed batch/ply/cure records and balances |
| `cp_parts` | outfit | single supplied component | receipt installed-weight and configuration record | one component/drawing/material/serial/count; supplied net kg; installed kg; included hardware/charges; returns; accepted count | Measure actual installed supplied component kg, keeping count/serial for traceability. Reconcile complete modules and split gear/wheel receipts, avoiding included fastener/fluid duplication. Independent component mass checks complete M. | kg | each design/lot and aircraft | declared representative current production period | named actual manufacturing site | actual installed supplied kg / accepted units of the same configuration | calibrated receipt/installed weight, drawings and inclusion/serial reconciliation |
| `cp_energy` | all processes | single electricity interface | meter and stage attribution | meter/site/provider/voltage; gross energy kWh; period/batch/cycle/idle/rework; actual accepted count; causal attribution | Read calibrated electricity meters at the actual supply/stage interface; retain stage/batch duration and actual sharing evidence. Convert kWh to MJ using1kWh=3.6MJ, preserving imports and explicit supplier gate. | MJ | each batch/period and route change | declared representative current production period | named actual manufacturing site | actual attributed stage MJ / accepted units of the same configuration | meter calibration, invoices/cycles and causal balance |
| `cp_waste` | all processes | single physical waste stream | segregated receiver shipment | one waste chemistry/cure/contamination; net kg/tare; source process; reuse/recovery; receiver route; accepted count | Weigh each separately identified actual exported stream excluding container and retain receiver tickets and state analysis. Do not merge GFRP/CFRP, cured/uncured material, spent solvent and captured dust. | kg | each shipment and period | declared representative current production period | named actual manufacturing site | actual exported net waste kg / accepted units of the same configuration | scale/tare, analytical and receiver/source balance |
| `cp_emission` | join | single residual atmospheric substance | sampled air release | substance/CAS/particle fraction; air submedium; post-control sample concentration/flow/time; limits/uncertainty; actual accepted count | Quantify actual post-control particulate or separately acetone mass with compound/medium-specific measurements; for acetone a documented closed solvent balance may support quantity if recovery/residue/retention are resolved. Retain uncertainty and distinguish absent, not measured and below detection; none is automatic zero. | kg | representative actual route/control period | declared representative current production period | named actual manufacturing site | actual released kg / accepted units of the same configuration | sampling/lab calibration, operating duration and substance balance |
| `cp_configuration` | all processes | complete glider configuration | controlled as-built acceptance | model/serial; full wing/winglet/tail configuration; complete BOM/route revision; equipment/ballast tanks; make-or-buy; actual tests; delivery state | Trace current approved as-built BOM, layup/cure/bond procedures, deviations and performed tests. Qualify complete delivered equipment and net empty state; retain independently measured state corrections rather than source catalogue weights. | kg | each aircraft/configuration and route change | declared representative current production period | named actual manufacturing site | qualifiers accompany each same-configuration accepted unit | signed drawing/BOM/procedure/inspection and physical-state records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | order records | For one actual same configuration, attribute measured period totals to accepted aircraft through documented causal records and compute q_item from attributed exchange / accepted aircraft. Keep raw totals, rejects/rework, accepted count and intermediate values. Do not pool different wing/equipment configurations without an explicit physical model. | cp_stock; cp_parts; cp_energy; cp_mass | q_item |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | Controlled acceptance M must originate in current actual calibrated empty-aircraft weighing for the same complete serial/configuration, preserving original readings, component/support identification, level/support conditions, calibration, zero, auxiliary support tare and uncertainty. The actual method may sum separately weighed distinct complete parts or use a demonstrated complete supported-aircraft weighing method; reconcile the same complete installed configuration and all independent component masses. No fictional whole-aircraft platform scale is prescribed. A measured support reaction reported as force requires the actual metrological force-to-mass basis, not an assumed universal gravity constant. The retained LS8 manual p.2-1 is historical physical-method evidence, not current model records or a universal new-aircraft acceptance protocol. Without actual originals and closure retain the measurement/scientific gap; do not claim observed physically complete data. | dg-ls8-historical; cp_mass; cp_parts; cp_configuration |
| `net_empty_configuration` | accepted glider | M includes the accepted declared complete wings/winglets/tail, structural airframe, permanently installed controls/gear/canopy/seat/harness/instruments and actually delivered permanent non-propulsion equipment and retained working charges once. Declare original as-weighed state and separately measured signed corrections. Exclude pilot, removable service payload/parachute unless explicitly part of the permanent delivered configuration, water ballast, temporary balancing/test loads, supports, lifting equipment and packaging. Dry ballast tank hardware remains. Installed trim weights or cockpit battery must be individually identified and weighed if included. Do not use maximum takeoff mass, catalog empty mass, legal limits, a guessed resin fraction or ballast-filled weight as M. | cp_mass; cp_parts; cp_configuration |
| `route_and_balance` | all exchanges | The current approved full BOM, ply/core architecture, actual supplied chemistry and production travellers determine exact quantities and conditions. Check resin/hardener and adhesive mixture inclusion, reaction/retention and GFRP/CFRP stock-to-product-to-waste balances. Capture is not air emission. Add all actual missing specific equipment, vacuum consumables, charge, cleaning, packaging, test-service, transport and receiver exchanges before completeness claims; validate current acceptance criteria, rework, limits, uncertainty and supply links. No universal yield, resin ratio, cure cycle, core density, equipment weight or service life is set. | cp_stock; cp_parts; cp_energy; cp_waste; cp_emission; cp_configuration |
| `source_limits` | external evidence | LS8 retained manual (December2009 baseline, later amendments through June2016) supplies historical system/physical-weighing context only. Its repair resin/fabric/core and finishing lists are not a new-production BOM, cure recipe, density conversion, current legal approval or lifetime mandate. Schempp-Hirth October2018 MINIMOA pp.04/07 supplies a separate historical carbon spar/production example, without proving this glider’s exact formulation, core chemistry or process conditions. Current plant qualification, weighing originals and complete configuration remain independent scientific-review requirements. | dg-ls8-historical; schempp-minimoa-2018 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Verify complete unpowered rigid-wing configuration, positive physically generated M kg and independent mass_provenance/net_empty_configuration. Reference product must equal finished_glider selected flow; a broader product UUID does not establish exact configuration or model weight. |  |
| `validation_route` | all processes | Check actual wet layup/core/cure/bond/finish qualification and performed trimming/outfit/tests, with stage meter and stock/rework/waste balances. No repair prescription substituted for current new-production evidence; purchased modules and internal stocks must not duplicate. |  |
| `validation_identity` | all flow rows | Verify actual type/substance, reference property and unit group, state/concentration/precursor, supply gate and official bilingual name. Bare glass fibre is not woven fabric; wafer-production acetone is not automatically cleaning supply; non-cellular plastic is not PVC foam; generic release agent is not demonstrated PVA solution. Indoor/soil/upper-air acetone is not immediate unspecified outdoor air. Keep unmatched rows unresolved by exact row_id; do not change public properties. |  |
| `validation_claims` | claims | Mechanical PCR pass is not scientific approval, current aircraft legal/type approval, actual plant inventory completeness, mass observation or flight-function equivalence. Require current full manufacturing/weighing/supplier records and matched links for any broader dataset claim. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured wet-layup composite unpowered glider manufacturing foreground; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same accepted complete configured product manufacturing scaled with actual net M and separately matched upstream/transport/receiver links |
| excluded_use | Flight-hour/glide performance, powered craft, other airframe routes, loose parts/use/tow/repair/lifetime/disposal and approval |
| required_metadata | Model/serial/full wing and permanent equipment configuration; current complete BOM/ply/cure/bond/finish procedures; supplied inclusions/charges; site/period/test plan; calibrated current empty weighing originals/tare/state corrections and independent balance; net M kg; causal allocation and matched links |
| required_quality_disclosure | Remaining identity/BOM/route/weight/link gaps, historical evidence applicability, uncertainty/limits, actual trials/rework/recovery/exports and allocation sensitivity |
| update_trigger | Wing/airframe material/layup/core/cure/bond/finish, permanent equipment/make-or-buy, actual empty measurement/delivery state, plant/period/test or provider-interface change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| dg-ls8-historical | handbook | DG Flugzeugbau, Maintenance Manual LS8 (LS8/LS8-a/LS8-b/LS8-18), retained December2009 baseline with amendments through June2016 TN8024; printed1-1/1-3/2-1/10-1/10-2 (physical PDF11/13/30/99/100). Manufacturer original retained by Finnish gliding organisation: https://www.nil.fi/sites/default/files/MM-LS8.pdf | Historical systems and physical weighing example; repair materials checked only to restrict applicability. No current production recipe/density/lifetime/airworthiness or actual M adopted. |
| schempp-minimoa-2018 | handbook | Schempp-Hirth, MINIMOA, issue3 October2018, printed04/07 (physical PDF4/7), Carbon Fibre: The Game Changer and production photograph. https://www.schempp-hirth.com/fileadmin/Minimoa/Minimoa_Sn3_October_2018.pdf | Separate historical carbon-spar development and composite production illustration; does not define LS8 or current factory resin/core recipe, cycle, actual kg or quantity factors. |
