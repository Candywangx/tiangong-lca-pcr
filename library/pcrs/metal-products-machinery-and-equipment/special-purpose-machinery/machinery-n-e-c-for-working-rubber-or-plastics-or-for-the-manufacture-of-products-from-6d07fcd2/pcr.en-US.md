---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-working-rubber-or-plastics-or-for-the-manufacture-of-products-from-6d07fcd2
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Machinery n.e.c. for working rubber or plastics or for the manufacture of products from these materials

## 1. Scope and Applicability

This candidate covers the FULL rubber/plastics working and products-manufacturing machinery n.e.c. category, not only an injection machine. Declare the actual principal function and supplied configuration: tangential/intermeshing batch mixing, open two-roll milling, calendering, vulcanisation, single/twin-screw extrusion and included line equipment, injection, continuous extrusion blow moulding, thermoforming, and other eligible architectures. Rubber compounds and thermoplastics are not interchangeable test recipes. Dedicated cutting of already-hard rubber/plastic belongs to44222; independent moulds and parts remain separate. Source: `un-cpc-44915`.

HF BANBURY establishes counterrotating tangential rotors, mixing chamber, hydraulic hopper, lubrication and dust seals; INTERMIX establishes intermeshing rotors, cooling/hard surfacing and a VIC alternative with adjustable rotor gap. These are different actual model architectures, not universal clearances or manufacturing inputs. Rodolfo Comerio shows forged-alloy-steel calender rolls, ground surfaces, jacketed stainless cooling rolls, bearings and hydraulic gap adjustment; its open mills have independent reducers, oil-lubricated roller bearings and steel structure. Sources: `hf-banbury`; `hf-intermix`; `comerio-technology`.

ENGEL all-electric e-motion operates movements with servo-electric drives and has injection/clamping and optional robot/conveyor integration, so hydraulic oil is conditional. Krauss KME identifies screw, bimetal cylinder, nitrided bush and gearbox; KE shows modular extrusion with actual cooling/degassing and optional downstream equipment. The short Krauss portfolio page establishes only the existence of single/twin-screw, rubber extrusion/rollerhead and pelletiser families, not their BOM or manufacturing sequence. Sources: `engel-electric`; `krauss-kme`; `krauss-ke`; `krauss-extrusion`.

Kautex KSH establishes continuous extrusion, servo/hydraulic alternatives, actual mould/blow-pin movements, handling and optional deflashing; its container examples are customer outputs, not machine barrels or machine mass. ILLIG RDM shows roll-fed or inline sheet feed, double-servo forming/punching, lower-table support, heating and handling. HF tyre curing presses distinguish hydraulic pressure architecture and electric eCuring heating from conventional steam heating. No marketing throughput, energy savings, cycle time, container volume, rating or operational formulation becomes a factory default. Sources: `kautex-blow`; `illig-forming`; `hf-curing`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-working-rubber-or-plastics-or-for-the-manufacture-of-products-from-6d07fcd2 |
| classification_refs | CPC3.0:44915 |
| covered_products | Complete machinery n.e.c. working rubber or plastics or manufacturing products from those materials: mixing, milling, calendering, vulcanising, injection, extrusion, blow moulding, thermoforming and actual other eligible processes |
| excluded_products | Independently supplied moulds44916, parts44949, metallurgy/metal casting44310, pulp/paper converting44913, additive manufacturing44920 and machine tools cutting already-hard plastics/rubber44222. Separate general-purpose machines and customer-produced polymer/rubber goods are outside this machinery reference. Ambiguous hybrid lines require actual principal-function and delivered-scope review |
| representative_product | Complete accepted machine of one actual configuration; no representative mass |
| production_route | Actual mechanical fabrication, supplied mixing/milling/calendering/injection/extrusion/blow/forming/curing architecture, finishing, drive/control and factory testing; make/buy |
| market_state | Complete accepted delivered configuration with actual included components and retained initial lubricant; net mass excludes packing/test materials |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply complete rubber/plastics working and products-manufacturing machinery, not user processing service |
| How much | 1 kg accepted net complete machine mass of the same configuration |
| How well | Meets declared material/mechanism/safety and actual acceptance plan |
| How long or cycle | One manufacturing/delivery period; no default lifetime |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete machinery n.e.c. working rubber or plastics or manufacturing products from these materials; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal function; rubber/plastics material; model revision; mixing/milling/calendering/curing/injection/single-twin-screw/extrusion/blow/forming or other architecture; electric/hydraulic/hybrid; pressure/heating design; make-buy; actual supplied moulds/tools/retained fills/accessories; factory-trial recipe; calibrated net mass/N; site/period; native unit/utility interfaces; waste/releases/uncertainty |

Declare all qualifiers in the package; the category reference establishes no factory recipe, quantity or performance default.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `physical_basis` | material/water/species | Mass | kg | Each term uses own assay/water fraction/wet-dry basis/density at actual temperature/stocks/reactions/returns; gross mass not contained element. |
| `utility_basis` | energy and gases | Delivered energy or volume | MJ; m3 | Electricity1 kWh=3.6 MJ; gas keeps m3 and actual T/P or declared standard conditions, mass conversion uses matching measured density; heat supply/return each own mass times own enthalpy/common datum; distinguish gross/already-net, return deducted once. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, mechanical/control assembly, integration, factory test/rework, common services, waste and packing through accepted release. |  |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought frame/rotor/screw-barrel/roll/press/motor/controller includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. |  |
| `factory_use` | production | Include actual factory loaded mixing/milling/calendering/injection/extrusion/blow/forming/curing trials, actual test materials, cleaning water, electricity and consumed lubricant. Recovered trial materials uses measured returns and stocks. User rubber compounds/plastic articles/tyres and downstream plant operation are not machine manufacturing output. |  |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown rotor/roll/barrel hard-surface or treatment formulation requires actual supplied-state evidence. |  |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual input supplied grade/completion state/delivery interface |
| starting_condition_role | Factory receipt boundary |
| product_classification_scope | Complete machinery n.e.c. working rubber or plastics or manufacturing products from those materials: mixing, milling, calendering, vulcanising, injection, extrusion, blow moulding, thermoforming and actual other eligible processes |
| recursive_input_rule | Same-category bought precursor upstream once; subsequent site work only; pair/cancel internal transfers |
| upstream_dataset_requirement | Actual grade/formulation/state/geography/period/provider; gaps explicit |
| disclosure | supplied list/make-buy/retained fill/factory test charge/conditional absence/denominator/uncertainty |

### Configuration and supplied-state matrix

| Configuration | Actual conditional interface | Evidence limits |
| --- | --- | --- |
| Internal mixing and open milling | Actual tangential/intermeshing chamber and rotors, hopper/ram, cooling/seals; actual two-roll mill with independent drives, bearings and steel structure | Rotor gap/grade, hard surfacing, lubricant and hydraulic architecture collected per model; no universal rubber recipe |
| Calendering | Actual roll number/position, forged-alloy-steel rolls, ground finish, gap system and included cooling/winding modules | Customer-requested materials and purchased complete versus own fabrication separated; no default chrome bath |
| Injection moulding | Actual electric/hydraulic/hybrid injection screw, clamping, heaters, controls and included robot/handling | All-electric excludes unperformed hydraulic operation; supplied mould inclusion reviewed, independent mould44916 |
| Extrusion and integrated lines | Actual single/twin-screw screw/barrel, liner/bush, drive, cooling/degassing, heads and included downstream modules | KME bimetal/nitrided example differs from KE wet-liner architecture; catalogue alone proves no fabrication recipe |
| Blow moulding | Actual continuous extruder/head, parison control, mould and blow-pin movements, handling and optional deflashing | Hydraulic/electric wall-thickness adjustment and delivered mould scope separate; containers are test/user outputs |
| Thermoforming | Actual roll or inline-extruded sheet feed, heating, servo forming/punching and included handling | Actual sheet grade/form and pressure/vacuum architecture, not PET granules or nameplate cycle defaults |
| Vulcanising and other eligible architectures | Actual locking/pressure and heated mould/platen, hydraulic/electric actuation, steam or electric heating; other eligible principal functions declared | Factory trial cure ingredients measured atomically; no shipped chemical/test tyre or universal heat recipe |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Mechanical structure and processing-component fabrication | conditional | Only actual onsite casting/forming/welding/machining and evidenced finishing or hard-surface work; bought completed parts bypass embedded manufacture | foreground | per 1 kg reference flow |
| `finish` | Cleaning and protective finishing | conditional | Actual cleaning/coating/cure and formulation only; finished bought modules need subsequent work only | foreground | per 1 kg reference flow |
| `integration` | Machinery integration | required | Actual mixing/milling/calendering/injection/extrusion/blow/forming/curing architecture, drives, controls and supplied tools/fills/accessories | foreground | per 1 kg reference flow |
| `test` | Factory qualification and rework | required | Only actual no-load/loaded/pressure/safety tests performed; each trial polymer/rubber/chemical grade separate from machine mass; attributable failures retained | foreground | per 1 kg reference flow |
| `dispatch` | Packing and accepted release | required | Actual accepted complete supplied configuration; review whether moulds/fills/accessories are shipped; packing and trial products excluded | foreground | per 1 kg reference flow |
| `services` | Residual utilities and actual generation | conditional | Only unassigned residual and actual onsite generation within the common period | foreground | per 1 kg reference flow |

### Process: Mechanical structure and processing-component fabrication (`fabrication`)

Only actual onsite casting/forming/welding/machining and evidenced finishing or hard-surface work; bought completed parts bypass embedded manufacture。

#### Inputs

##### Product flows

###### Low-carbon cold-rolled steel sheet (`steel_sheet`)

Only actual low-carbon cold-rolled steel sheet issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows.

- Selected flow: Low-carbon cold-rolled steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Further-worked flat stainless steel (`stainless`)

Only actual further-worked flat stainless steel issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows. Actual further-worked flat stainless stock and documented alloy; raw cold sheet/finished assembly different.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Straight hot-rolled steel shaft bar (`steel_bar`)

Only actual straight hot-rolled steel shaft bar issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows.

- Selected flow: Straight hot-rolled steel shaft bar
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Welded carbon-steel pipe (`steel_pipe`)

Only actual welded carbon-steel pipe issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows. Actual welded carbon-steel pipe grade and pressure-design specification matching supplied stock, not seamless or complete installed vessel.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Aluminium structural extrusion (`aluminium`)

Only actual aluminium structural extrusion issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows. Actual extruded aluminium profile grade, not ingot or complete machine frame.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Cast-iron furnace charge (`cast_iron`)

Only actual cast-iron furnace charge issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows.

- Selected flow: Cast-iron furnace charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Liquid metalworking fluid (`cutting_fluid`)

Only actual liquid metalworking fluid issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows. Actual liquid metalworking formulation and concentration, not aerosol/gas or assumed mineral-oil recipe; own assay/water fraction and stocks.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Uncoated steel welding wire (`weld_wire`)

Only actual uncoated steel welding wire issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows. Only actual drawn non-alloy uncoated steel welding wire of documented chemistry/diameter; not flux-cored, copper-coated or service welding input.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous argon welding supply (`argon`)

Only actual gaseous argon welding supply issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Argon, gaseous `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Chromium trioxide plating feedstock (`chromium`)

Only actual chromium trioxide plating feedstock issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows. No default Cr plating: actual selected CrVI route, carrier/water, deposited Cr and species-specific hazardous wastes/releases need independent factory evidence; nitriding and other hard surfacing are different routes.

- Selected flow: Chromium trioxide plating feedstock
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`fabrication_electricity`)

Only actual delivered alternating-current electricity issued to evidenced onsite fabrication, machining or surface work, with supplied grade/chemistry, own assay, moisture, stock and paired returns recorded. This feedstock is separate from a completed bought module; charge only actually performed operations. Other actual alloy additions, carriers, process gases or bath chemicals each require separate atomic rows. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Unprocessed external steel production scrap (`scrap`)

Actual outgoing unprocessed external steel production scrap transfer only: measured own gross mass, species/contamination assay, moisture/wet-dry basis and beginning/end stocks; pair internal returns and separately document actual receiver and treatment route. No avoided-product credit. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Chromium-bearing plating sludge (`plating_waste`)

Actual outgoing chromium-bearing plating sludge transfer only: measured own gross mass, species/contamination assay, moisture/wet-dry basis and beginning/end stocks; pair internal returns and separately document actual receiver and treatment route. No avoided-product credit.

- Selected flow: Chromium-bearing plating sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Cleaning and protective finishing (`finish`)

Actual cleaning/coating/cure and formulation only; finished bought modules need subsequent work only。

#### Inputs

##### Product flows

###### Dry polymer powder-coating formulation (`powder`)

Only actual dry polymer powder-coating formulation used by the documented cleaning or coating/cure route; measure own issue, formulation/assay, moisture, recovery/returns and stocks. Finished purchased components already embed their upstream finish; onsite charge includes only subsequent performed work. No default solvent concentration or polymer recipe. Actual dry polymer powder formulation, own resin/additive grade, reclaim and cure; not a default polymer type.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Isopropanol (`ipa`)

Only actual isopropanol used by the documented cleaning or coating/cure route; measure own issue, formulation/assay, moisture, recovery/returns and stocks. Finished purchased components already embed their upstream finish; onsite charge includes only subsequent performed work. No default solvent concentration or polymer recipe. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Process water (`water`)

Only actual process water used by the documented cleaning or coating/cure route; measure own issue, formulation/assay, moisture, recovery/returns and stocks. Finished purchased components already embed their upstream finish; onsite charge includes only subsequent performed work. No default solvent concentration or polymer recipe. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`finish_electricity`)

Only actual delivered alternating-current electricity used by the documented cleaning or coating/cure route; measure own issue, formulation/assay, moisture, recovery/returns and stocks. Finished purchased components already embed their upstream finish; onsite charge includes only subsequent performed work. No default solvent concentration or polymer recipe. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Industrial cleaning wastewater (`wastewater`)

Actual outgoing industrial cleaning wastewater transfer only: measured own gross mass, species/contamination assay, moisture/wet-dry basis and beginning/end stocks; pair internal returns and separately document actual receiver and treatment route. No avoided-product credit. Physical wastewater to treatment is a technosphere transfer, distinct from individually measured species released to an environmental compartment.

- Selected flow: Industrial cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Dry powder-coating overspray waste (`sludge`)

Actual outgoing dry powder-coating overspray transfer only; measured own mass, cured/uncured state, resin/additive assay, moisture and beginning/end stocks. Pair internal powder recovery, document actual receiver route. Wet sludge, captured liquid and filter media require separate actual identities. No avoided-product credit. Only actual dry powder-coating overspray waste matching supplied waste type; wet sludge or captured liquid/filter media separately needs exact identity and assay.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Machinery integration (`integration`)

Actual mixing/milling/calendering/injection/extrusion/blow/forming/curing architecture, drives, controls and supplied tools/fills/accessories。

#### Inputs

##### Product flows

###### Finished cast-iron machine frame (`frame`)

Only an actual supplied finished cast-iron machine frame of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Finished cast-iron machine frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comerio-technology

###### Complete plastics extruder screw-and-barrel module (`screw_barrel`)

Only an actual supplied complete plastics extruder screw-and-barrel module of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Complete plastics extruder screw-and-barrel module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: krauss-kme; krauss-ke

###### Complete rubber internal-mixer rotor assembly (`rotor`)

Only an actual supplied complete rubber internal-mixer rotor assembly of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Complete rubber internal-mixer rotor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: hf-banbury; hf-intermix

###### Finished forged-alloy-steel calender roll (`roll`)

Only an actual supplied finished forged-alloy-steel calender roll of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Finished forged-alloy-steel calender roll
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comerio-technology

###### Complete injection moulding clamp module (`clamp`)

Only an actual supplied complete injection moulding clamp module of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Complete injection moulding clamp module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: engel-electric

###### Finished steel plastics injection mould (`mould`)

Only actual specified supplied grade/component and documented make/buy. Complete bought state includes embedded manufacture once; own manufacture uses its actual atomic feedstocks and operations. Partial states receive only subsequent site work. Installed tools/fills belong in accepted net mass only when actually included; factory consumption and loose spares separate. Only actual complete supplied steel plastics injection mould with declared cavity/tool specification. Independent mould supply remains44916; temporary factory trial tool absent from shipment stays out of Dnet.

- Selected flow: Moulding boxes for metal foundry, mould bases, moulding patterns, moulds for metal (except ingot moulds), metal carbides, glass, mineral materials, rubber or plastics `da241301-584e-4c9c-baa7-2208878acd1d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: un-cpc-44915; engel-electric; kautex-blow

###### Complete rubber curing-press heating platen (`curing`)

Only an actual supplied complete rubber curing-press heating platen of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Complete rubber curing-press heating platen
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: hf-curing

###### Finished electric resistance heater band (`heater`)

Only an actual supplied finished electric resistance heater band of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate. Only actual supplied finished non-carbon electric heating resistance element matching heater-band construction, rated voltage and thermal design; no generic domestic water heater or retained heat quantity.

- Selected flow: Electric heating resistors, except of carbon `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: hf-curing; illig-forming

###### Complete industrial induction motor (`motor`)

Only an actual supplied complete industrial induction motor of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate. Only actual supplied industrial AC induction motor fitting CPC46112 interface and actual voltage/power/type; generic entry does not determine winding, magnet or metal recipe. Bundled drive counted once.

- Selected flow: Electric motor `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete industrial servo motor (`servo_motor`)

Only an actual supplied complete industrial servo motor of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate. Only actual complete supplied AC servo motor of CPC46112 subtype matching voltage/power and motor/drive separation; not drive electronics or DC motor.

- Selected flow: Electric drive, servo motor `89a4fdf2-5cce-4df3-b372-14407f92dd28`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: engel-electric; illig-forming

###### Included industrial-robot servo motor-drive inverter (`servo_drive`)

Only an actual included industrial-robot servo inverter matching the robot electronics interface, voltage and completion state; not a general machine servo drive by name alone. Motor hardware separately measured, bundled motor/drive scope counted once. Only included industrial-robot servo inverter, actual robot interface and <=1000V rating; not a proxy for every machine servo drive.

- Selected flow: Motor drive inverter `39b22d41-f69b-4d89-9cf2-25677e06c707`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: engel-electric

###### Finished ball bearing (`bearing`)

Only an actual supplied finished ball bearing of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate. Actual independently supplied ball/roller bearing of specified matching subtype, not wind-pitch bearing.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Vulcanized rubber transmission belt (`belt`)

Only an actual supplied vulcanized rubber transmission belt of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate. Actual finished vulcanized rubber power-transmission belt; not uncured belt, leather or transport service.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete industrial gearbox (`gearbox`)

Only an actual supplied complete industrial gearbox of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Complete industrial gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete hydraulic power pump (`pump`)

Only an actual supplied complete hydraulic power pump of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate. Only actual complete supplied hydraulic liquid pump with documented mechanism/pressure and supplier interface; not vacuum service, a complete power unit or generic gaseous pump.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: hf-banbury; hf-curing

###### Complete hydraulic clamp cylinder (`cylinder`)

Only an actual supplied complete hydraulic clamp cylinder of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Complete hydraulic clamp cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comerio-technology; hf-curing

###### Complete industrial vacuum pump (`vacuum`)

Only an actual supplied complete industrial vacuum pump of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate. Only actual complete industrial vacuum pump matching actual mechanism/supplied scope; broad air compressor entry is not a utility-vacuum service or compressor proxy.

- Selected flow: Air or vacuum pumps, air or other gas compressors `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: krauss-ke

###### Complete extrusion blow-moulding head (`blow_head`)

Only an actual supplied complete extrusion blow-moulding head of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Complete extrusion blow-moulding head
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: kautex-blow

###### Programmable industrial controller (`plc`)

Only an actual supplied programmable industrial controller of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate. Only actual supplied industrial PLC hardware matching rated voltage/interfaces/completion state, not software service or bare board.

- Selected flow: Programmable logic controller `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Insulated copper power cable (`cable`)

Only actual supplied complete insulated copper low-voltage power cable of documented conductor, insulation/sheath and voltage <=1000V; native Length m is measured from receipt/cut records and installed lengths. Mass, if needed for machine BOM, uses that actual cable measured linear density kg/m; energy-valued cable is rejected. Upstream cable once, only subsequent site installation. Only actual insulated copper <=1000V power cable with extruded insulation/sheath. Native Length m; own actual cable linear density kg/m if a separate BOM mass conversion is needed.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_length.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_length`
- Sources:

###### Complete thermocouple temperature probe (`thermocouple`)

Only an actual supplied complete thermocouple temperature probe of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: Complete thermocouple temperature probe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### EPDM sealing gasket (`seal`)

Only an actual supplied epdm sealing gasket of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate.

- Selected flow: EPDM sealing gasket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Mineral lubricating oil (`oil`)

Only actual mineral lubricating oil of documented formulation and retained fill in the selected supplied architecture. Separately measure retained versus factory-consumed quantity, own assay/water, density at temperature, stocks and drained returns; prefilled bought modules exclude duplicate fill. Electric-only architectures need no presumed hydraulic lubricant.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Hydraulic fluid retained initial fill (`hydraulic`)

Only actual hydraulic fluid retained initial fill of documented formulation and retained fill in the selected supplied architecture. Separately measure retained versus factory-consumed quantity, own assay/water, density at temperature, stocks and drained returns; prefilled bought modules exclude duplicate fill. Electric-only architectures need no presumed hydraulic lubricant. Actual matching retained hydraulic base-oil/additive formulation; native m3 at measured temperature. If measured by mass use that fluid own measured density. Prefilled modules exclude duplicate issue; all-electric architectures need no presumed hydraulic fill.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

###### Lubricating grease (`grease`)

Only actual lubricating grease of documented formulation and retained fill in the selected supplied architecture. Separately measure retained versus factory-consumed quantity, own assay/water, density at temperature, stocks and drained returns; prefilled bought modules exclude duplicate fill. Electric-only architectures need no presumed hydraulic lubricant.

- Selected flow: Lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`integration_electricity`)

Only an actual supplied delivered alternating-current electricity of the documented configuration, matching completion state and physical design. Complete bought module embeds upstream manufacture once; site-made equivalent uses actual atomic feedstocks and operations. Measure included module mass and count installed scope once; independent parts or customer equipment are separate. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory qualification and rework (`test`)

Only actual no-load/loaded/pressure/safety tests performed; each trial polymer/rubber/chemical grade separate from machine mass; attributable failures retained。

#### Inputs

##### Product flows

###### Polypropylene granules factory-trial charge (`pp`)

Only actual performed factory trial with this specified feedstock/formulation: measure own issue/returns/stocks, dry/wet basis, moisture and assay. Polymer or rubber charge and resulting trial products are not machine output net mass; all other actual additives/fillers/cure ingredients/purge species each require their own atomic rows. No universal test recipe, cycle duration or customer-use input. Only actual supplied PP granulate CAS9003-07-0 and supplier grade; not filament, recycled PP with conflicting PVC classification or finished articles. Actual trial consumption only, no universal recipe.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### HDPE granules factory-trial charge (`hdpe`)

Only actual performed factory trial with this specified feedstock/formulation: measure own issue/returns/stocks, dry/wet basis, moisture and assay. Polymer or rubber charge and resulting trial products are not machine output net mass; all other actual additives/fillers/cure ingredients/purge species each require their own atomic rows. No universal test recipe, cycle duration or customer-use input.

- Selected flow: HDPE granules factory-trial charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### PET sheet factory thermoforming trial (`pet_sheet`)

Only actual performed factory trial with this specified feedstock/formulation: measure own issue/returns/stocks, dry/wet basis, moisture and assay. Polymer or rubber charge and resulting trial products are not machine output net mass; all other actual additives/fillers/cure ingredients/purge species each require their own atomic rows. No universal test recipe, cycle duration or customer-use input.

- Selected flow: PET sheet factory thermoforming trial
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### SBR rubber factory mixer-trial charge (`rubber`)

Only actual performed factory trial with this specified feedstock/formulation: measure own issue/returns/stocks, dry/wet basis, moisture and assay. Polymer or rubber charge and resulting trial products are not machine output net mass; all other actual additives/fillers/cure ingredients/purge species each require their own atomic rows. No universal test recipe, cycle duration or customer-use input.

- Selected flow: SBR rubber factory mixer-trial charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comerio-technology

###### Rubber-grade carbon black factory-trial charge (`carbon_black`)

Only actual performed factory trial with this specified feedstock/formulation: measure own issue/returns/stocks, dry/wet basis, moisture and assay. Polymer or rubber charge and resulting trial products are not machine output net mass; all other actual additives/fillers/cure ingredients/purge species each require their own atomic rows. No universal test recipe, cycle duration or customer-use input.

- Selected flow: Rubber-grade carbon black factory-trial charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comerio-technology

###### Sulfur factory vulcanisation-trial charge (`sulfur`)

Only an actually performed, compatible CN conventional sulphur-curing tyre-rubber compound factory trial using this supplied elemental sulphur grade and supplier interface. Measure own issue/returns/stocks, assay and wet/dry basis. This is neither a recipe for all rubber nor an identity for every sulphur system; incompatible supply must not use the UUID. Trial cure ingredients and tyre products remain outside machine net mass, and all other actual ingredients need their own atomic rows. Only actual elemental sulphur excluding sublimed/precipitated/colloidal supply, documented grade and chemistry, with an actually compatible CN conventional sulphur-curing tyre-rubber compound factory trial and supplier interface. Other rubber compounds, other sulphur systems or incompatible supply must not use this UUID.

- Selected flow: Sulfur `6aac9c7b-dd66-470c-b8a0-66bbfa4fc208`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Tap water factory pressure/cooling-test charge (`tap_water`)

Actual factory pressure/cooling-test water only, measured own issue/returns, dissolved-species assay, stocks and retained/evaporated/discharged water. No universal test duration; test water excluded from machine net output. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Compressed air factory-test supply (`compressed_air`)

Actual factory blowing/pressure/thermoforming test air only; preserve native m3 and actual T/P or defined standard basis with own density for mass conversion. Bought air and own-compressor electricity not duplicate. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

###### Purchased natural-gas industrial heat factory-test supply (`heat`)

Only actual matching delivered thermal interface during factory trials; supplier fuel upstream, not fictional site combustion. Actual supply/return states and gross/already-net contract reconcile return once; electric heater load belongs to electricity. Only actual matching CN natural-gas industrial-heat delivered Energy interface; provider must match actual factory-test delivery. Own metering, gross/net return and supply state required; supplier fuel stays upstream.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Delivered alternating-current electricity (`test_electricity`)

Actual allocated process electricity; residual services ONLY unassigned common-period imports/generation/exports/storage after all subprocess loads reconciled. User operation is downstream, no nameplate power default. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Factory-test polypropylene offcuts (`plastic_waste`)

Actual outgoing factory-test polypropylene offcuts transfer only: measured own gross mass, species/contamination assay, moisture/wet-dry basis and beginning/end stocks; pair internal returns and separately document actual receiver and treatment route. No avoided-product credit. Factory trials only; recovered trial offcuts cancel through paired return and are not an extra external waste. Rubber cure state and polymer grade remain explicit.

- Selected flow: Factory-test polypropylene offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Factory-test cured SBR rubber scrap (`rubber_waste`)

Actual outgoing factory-test cured sbr rubber scrap transfer only: measured own gross mass, species/contamination assay, moisture/wet-dry basis and beginning/end stocks; pair internal returns and separately document actual receiver and treatment route. No avoided-product credit. Factory trials only; recovered trial offcuts cancel through paired return and are not an extra external waste. Rubber cure state and polymer grade remain explicit. Only actual non-hard cured SBR scrap matching outgoing rubber-waste composition and receiver route, not assumed tyre waste or purchased uncured compound. Own cure state, moisture, fillers and contamination measured.

- Selected flow: Waste rubber `b4818cb7-cbef-403a-9fc3-a12fe8baf092`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Waste mineral lubricating oil (`oil_waste`)

Actual outgoing waste mineral lubricating oil transfer only: measured own gross mass, species/contamination assay, moisture/wet-dry basis and beginning/end stocks; pair internal returns and separately document actual receiver and treatment route. No avoided-product credit. Only actual used contaminated mineral lubricant with own water/contaminant fraction; never presume disposal/recycling. Only actual used contaminated mineral lubricant Waste transfer mass; measured own water/contamination and receiver treatment, no disposal or recycling default.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Packing and accepted release (`dispatch`)

Actual accepted complete supplied configuration; review whether moulds/fills/accessories are shipped; packing and trial products excluded。

#### Inputs

##### Product flows

###### Corrugated cardboard dispatch material (`cardboard`)

Actual supplied packing grade and conversion state; measured own issue/returns/stocks and evidenced reuse. Packing excluded from machine net mass; no assumed reuse count. Actual C/E/F corrugated board, fibre>=80%, recycled-containing with actual fraction documented; not every finished box.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### LDPE wrapping foil (`film`)

Actual supplied packing grade and conversion state; measured own issue/returns/stocks and evidenced reuse. Packing excluded from machine net mass; no assumed reuse count. Only actual noncellular, nonselfadhesive, nonreinforced, nonlaminated unsupported PE-LD foil; other polymer/supported film separately resolved.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wooden EURO pallet (`pallet`)

Actual supplied packing grade and conversion state; measured own issue/returns/stocks and evidenced reuse. Packing excluded from machine net mass; no assumed reuse count. Only actual EURO wooden pallet; issue/returns/reuse documented, no default reuse count.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`dispatch_electricity`)

Actual allocated process electricity; residual services ONLY unassigned common-period imports/generation/exports/storage after all subprocess loads reconciled. User operation is downstream, no nameplate power default. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rubber or plastics working/manufacturing machinery n.e.c. (`reference_product`)

Complete accepted declared supplied configuration only, including actual retained fills and supplied tools/moulds/accessories; no presumed mould inclusion. Exclude packing/rejects/test polymers from net mass.

- Selected flow: Rubber or plastics working/manufacturing machinery n.e.c.
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44915

##### Waste flows

##### Elementary flows

### Process: Residual utilities and actual generation (`services`)

Only unassigned residual and actual onsite generation within the common period。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`services_electricity`)

Actual allocated process electricity; residual services ONLY unassigned common-period imports/generation/exports/storage after all subprocess loads reconciled. User operation is downstream, no nameplate power default. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`co2`)

Only actual measured emitted species/origin/air compartment: use matched post-control concentration and exhaust flow, same sampling period/state corrections and independently measured fugitives. Allocate to actual fabrication/finish/test emitter once; captured dust/media is Waste, not air emission; residual unexplained is not a release. Other actual emitted species each need separate atomic cards. Only actual measured fossil-origin CO2 to ordinary unspecified air; not biogenic, indoor, water or long-term release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Fossil carbon monoxide to unspecified air (`co`)

Only actual measured emitted species/origin/air compartment: use matched post-control concentration and exhaust flow, same sampling period/state corrections and independently measured fugitives. Allocate to actual fabrication/finish/test emitter once; captured dust/media is Waste, not air emission; residual unexplained is not a release. Other actual emitted species each need separate atomic cards. Only actual measured fossil-origin CO to ordinary unspecified air; carbon closure alone cannot determine CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Water vapour to unspecified air (`vapour`)

Only actual measured emitted species/origin/air compartment: use matched post-control concentration and exhaust flow, same sampling period/state corrections and independently measured fugitives. Allocate to actual fabrication/finish/test emitter once; captured dust/media is Waste, not air emission; residual unexplained is not a release. Other actual emitted species each need separate atomic cards. Only actual water vapour to ordinary unspecified air, measured moisture/evaporation and actual state; not evapotranspiration or long-term release.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Isopropanol to unspecified air (`ipa_air`)

Only actual measured emitted species/origin/air compartment: use matched post-control concentration and exhaust flow, same sampling period/state corrections and independently measured fugitives. Allocate to actual fabrication/finish/test emitter once; captured dust/media is Waste, not air emission; residual unexplained is not a release. Other actual emitted species each need separate atomic cards. Only actual emitted IPA CAS67-63-0 to ordinary unspecified air, matched post-control sampling; not indoor, soil, liquid capture or long-term release.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### PM10 particulate matter to unspecified air (`dust`)

Only actual measured emitted species/origin/air compartment: use matched post-control concentration and exhaust flow, same sampling period/state corrections and independently measured fugitives. Allocate to actual fabrication/finish/test emitter once; captured dust/media is Waste, not air emission; residual unexplained is not a release. Other actual emitted species each need separate atomic cards. Only actual measured PM10 fraction to ordinary unspecified air; neither unsized dust, >PM10, PM2.5 nor captured powder is this species.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated machine models or use machine mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | accepted net mass per machine | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | attributable quantity / accepted machines | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | attributable energy / accepted machines | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | attributable waste / accepted machines | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | Use matched species/compartment measured or verified actual technology factors; investigate closure, capture not destruction, residual not air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | attributable emission / accepted machines | sampling/flow/combined uncertainty |
| cp_volume | all | specific supplied gas/fluid | meter | gas/fluid identity; delivered volume; actual T/P or standard conditions; density; Q; N | Meter native volume at actual state: gas T/P, liquid temperature and composition state. Mass conversion uses that actual stream measured density, not generic factors. | m3 | each batch/continuous meter | common manufacturing period | same configuration/supply interface | attributable volume / accepted machines | T/P/flow/density/calibration |
| cp_length | integration | actual insulated low-voltage copper cable | length_meter | actual conductor/insulation/sheath and voltage; measured length m; cutting/installed/return; own linear density kg/m; stocks; Q; N | Reconcile native m against received/cut/installed length and return/stocks. If BOM mass is needed use that actual cable measured linear density kg/m, not a generic copper-mass or energy proxy. | m | each cut/installation lot | common manufacturing period | actual configuration cable supply interface | attributable length / accepted machines | calibrated length/cut sheet/actual construction/linear density |

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-family mean | calibration/period ledger |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| cohort_raw | cohort | Naccepted, Dnet and Qattr share configuration/period. Dnet sums calibrated accepted net masses; M=Dnet/Naccepted, q_item=Qattr/Naccepted, q_ref=Qattr/Dnet. Qattr includes rejects/rework/factory tests; Dnet excludes packing/rejects/consumed trial charge. Preserve each native numerator unit. | calibration/actual-period ledgers |
| species_sampling | emissions | Post-control species concentration times matched same-period gas/liquid flow and duration with T/P/wet-dry/unit corrections; fugitives independently measured. Unknown residual not air release, capture not destruction; each metal/chemical/water term uses own assay/water fraction/density/stocks/reactions/paired returns. | actual concentration/flow/period/state records |
| contained_assay | physical balances | Each input/product/scrap/sludge/liquid/release uses own measured gross mass times own assay and wet/dry basis; gross alloy/sludge is not contained metal. Every water term uses own water fraction and density at actual temperature, including product retention/reaction/evaporation/discharge/beginning-end stocks; internal returns pair/cancel. | term-specific measurement/assay/moisture/stocks |
| solvent_fates | solvent records | Record recovered return/product retention/captured liquid or media/demonstrated destruction/wastewater separately. Recovered/retained/captured and wastewater/media are non-air fates; capture not destruction. Investigate unknown residual, never turn it into air release. | actual material/sampling/abatement records |
| utility_residual | energy | Reconcile common-period imports plus actual generation minus exports/storage changes against fabrication/finish/integration/test/dispatch loads; shared row ONLY unassigned residual. Investigate negative residual against period/units/combined uncertainty without clipping. | calibrated subprocess/site meters |
| heat_return | thermal interface | Gross heat equals measured supply kg times own MJ/kg minus independently measured return kg times return own MJ/kg, with common datum and actual T/P. Gross supply deducts return once; already-net bill never deducts again. Physical steam/condensate mass separate from heat; supplier boiler fuel not onsite combustion. | separate supply/return metering/thermodynamic state/invoice |
| cohort | all inventory rows | Same configuration/common period Qattr includes attributable reject/rework/test; Naccepted counts accepted complete machines; Dnet sums calibrated accepted net masses including actual supplied installed tools/retained fills/accessories, excluding packing/rejects/consumed test charge. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Preserve each numerator native unit and explicit conversion; no mixed configurations. | calibrated net mass/supplied list/acceptance/cohort raw-period records |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm principal function, rubber/plastics mixing/milling/calendering/injection/extrusion/blow/forming/curing function, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
| `denominator` | all inventory rows | All inventory uses the same accepted cohort and common period. Verify calibrated accepted net mass and N; reject and packaging mass excluded. Check q_item=Q/N then normalization by same mean M; mixed configurations are invalid. |  |
| `double_count` | make_buy | Reconcile complete bought modules versus own materials and operations, retained fills/accessories versus factory consumption, paired internal transfers and external inputs. Count each actual burden once. |  |
| `water_close` | physical water records | For each term use its own measured water fraction, density and wet/dry basis: fresh and input moisture plus reaction water and beginning stocks minus final stocks, retained product, discharge and evaporation; internal returns cancel paired. Investigate measured closure against combined sampling/meter/allocation uncertainty; no universal tolerance. |  |
| `species_close` | material and chemical records | Close each contained metal/chemical separately using each input, product, scrap, sludge, liquid and release own matched assay and dry/wet basis, reaction stoichiometry and stocks. Gross mass is not contained element. No all-inventory mass rule applies to energy or transport. |  |
| `solvent_close` | solvent records | Distinguish retained solvent, recovered return, captured liquid/media, demonstrated destruction, wastewater/non-air residual and actual species air release. Capture is not destruction; an unexplained residual must be investigated, not assigned to air. |  |
| `utility_close` | energy records | Reconcile purchased imports, actual on-site generation, exports and storage changes with assigned fabrication/finish/integration/test/dispatch loads in the same period and units. Shared row ONLY unassigned residual; investigate negative residual against period, unit and combined measurement uncertainty without clipping. |  |
| `steam_close` | steam and condensate | Use supply kg times supply own MJ/kg and return kg times return own MJ/kg at measured pressure/temperature relative to common zero. If gross supply, subtract return once; if already-net invoice, do not subtract again. Keep physical steam/condensate mass balance independent from energy. |  |
| `species_emissions` | air releases | Validate every emitted species and compartment independently. Fuel carbon balance cannot alone establish CO or NOx. NO2 mass is not NOx reported as NO2 equivalent; keep reporting conventions and actual species identities distinct. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual configuration factory foreground production and models with explicit completed upstream links |
| excluded_use | Cross-family functional equivalence, default customer processing service, default weight/manufacturing factors, complete footprint with missing providers |
| required_metadata | Section3 qualifiers, raw-period denominator, actual architecture/make-buy/boundary |
| required_quality_disclosure | collection coverage, provider/identity/recipe gaps, allocation/combined uncertainty, all conditions/exclusions |
| update_trigger | model/architecture/recipe/supply state/geography/measurement/factory-test/treatment changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| engel-electric | handbook | e-motion all-electric injection moulding machine; publication date unconfirmed; original snapshot 2026-10-02; https://www.engelglobal.com/en/products/injection-moulding-machines/all-electric-injection-moulding-machine | Product architecture/category boundary; not factory recipe or quantitative default |
| comerio-technology | handbook | Rodolfo Comerio Technologies; publication date unconfirmed; original snapshot 2026-10-02; https://comerio.it/en/technologies/ | Product architecture/category boundary; not factory recipe or quantitative default |
| hf-curing | handbook | Tyre Curing Presses; publication date unconfirmed; original snapshot 2026-10-02; https://www.hf-group.com/en/products/tyre-curing-presses | Product architecture/category boundary; not factory recipe or quantitative default |
| krauss-extrusion | handbook | Extrusion systems and extruders; publication date unconfirmed; original snapshot 2026-10-02; https://www.kraussmaffei.com/en/extrusion-technology/products?lang=en | Product architecture/category boundary; not factory recipe or quantitative default |
| kautex-blow | handbook | KSH Series extrusion blow moulding machine; publication date unconfirmed; original snapshot 2026-10-02; https://www.kautex-group.com/en/machine/ksh/ | Product architecture/category boundary; not factory recipe or quantitative default |
| illig-forming | handbook | RDM76K4G automatic roll-fed thermoforming machine; publication date unconfirmed; original snapshot 2026-10-02; https://www.illig.de/en-de/solutions/RDM-76K-4G | Product architecture/category boundary; not factory recipe or quantitative default |
| krauss-ke | handbook | Single-screw Extruder KE; publication date unconfirmed; original snapshot 2026-10-02; https://www.kraussmaffei.com/en/products/single-screw-extruder-ke | Product architecture/category boundary; not factory recipe or quantitative default |
| krauss-kme | handbook | Single-screw Extruder KME; publication date unconfirmed; original snapshot 2026-10-02; https://www.kraussmaffei.com/en/products/single-screw-extruder-kme | Product architecture/category boundary; not factory recipe or quantitative default |
| hf-intermix | handbook | INTERMIX E and VIC intermeshing mixers; publication date unconfirmed; original snapshot 2026-10-02; https://www.hf-group.com/en/products/batch-mixers/intermix-intermeshing-mixers | Product architecture/category boundary; not factory recipe or quantitative default |
| hf-banbury | handbook | BANBURY tangential mixers; publication date unconfirmed; original snapshot 2026-10-02; https://www.hf-group.com/en/products/batch-mixers/banbury-tangential-mixers | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44915 | official_guidance | Central Product Classification (CPC) Version 3.0 Structure; CPC Version 3.0, structure dated 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product architecture/category boundary; not factory recipe or quantitative default |
