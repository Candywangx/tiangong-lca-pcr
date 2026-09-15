---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.musical-audio-discs-tapes-or-other-physical-media
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Musical audio discs, tapes or other physical media

## 1. Scope and Applicability

This PCR supports foreground data production for new physical carriers sold with recorded musical audio. Replicated audio CD is the representative route; CD-R recording, PVC vinyl pressing and bulk-reel cassette duplication are conditional routes. Each dataset fixes one carrier construction, programme and supply state. This methodology is needed to distinguish content reproduction, carrier manufacture, title-dependent tooling, yield loss and packaging burdens.

Other physical music carriers remain within category scope, but a dataset for a different construction must first document the actual route and add its concrete exchanges. A CD inventory is not a proxy for flash media, multilayer optical discs or historical shellac records. Blank carriers, video products, audiobooks, non-musical recordings, downloads, streaming and playback equipment are excluded reference products. Sources: `un-cpc-3-0-structure-2025`; `cci-recording-media-care`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.musical-audio-discs-tapes-or-other-physical-media |
| classification_refs | CPC 3.0: 47610 |
| covered_products | Recorded musical audio on physical carriers; one specified construction per dataset |
| excluded_products | Blank media; video; audiobooks; non-musical recordings; downloads; streaming; playback hardware |
| representative_product | Replicated audio CD with declared programme and packaging |
| production_route | Purchased intermediates and tooling → carrier replication/recording → inspection and packaging |
| market_state | New recorded carrier, quality accepted and packaged at factory gate |



## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply accepted recorded musical audio on the declared physical carrier |
| How much | 1 kg |
| How well | Readable/playable approved programme, correct sequence and declared carrier-specific physical acceptance; report acceptance method |
| How long or cycle | One completed manufacturing campaign normalized to output; playback service life is not assumed |
| reference_flow_link | `finished_music_media` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Musical audio discs, tapes or other physical media `db247acc-87c3-406b-b093-15268b24a617` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | carrier format and construction; musical programme identifier and duration; recording technology and playback format; accepted unit count and measured net mass per unit; integral shell/label boundary; packaging bill of materials; recording quality acceptance; plant and reporting period; supplier starting conditions; recycled fraction; utility geography and voltage |



Declare every qualifier in dataset metadata or equivalent product records. The 1 kg basis is a manufacturing declared unit, not evidence that equal masses deliver equal listening service. Album comparisons require aligned programme, fidelity, media count, use and end-of-life scenarios. Sources: `weber-music-delivery-2010`

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | accepted media | Mass | kg | Net music-bearing carrier mass includes integral cassette shell and attached label; excludes jewel case, sleeve, booklet, wrap and shipping carton. Preserve count and measured per-item mass. |
| count_conversion | items and packaging | Mass | kg | Mass = count × measured mean unit mass; document sampling by format and lot. Convert music-program units separately using media count per album. |
| tape_conversion | bulk tape and splices | Mass | kg | Mass = used length × measured linear mass. Tape duration does not identify length without recording speed, tracks/sides and leader allowance. |
| energy_conversion | purchased electricity | Net calorific value | MJ | Preserve delivered electrical energy; 1 kWh = 3.6 MJ. Do not convert to primary energy within the exchange or add grid emissions as direct site emissions. |
| gas_conditions | gaseous natural gas | Volume | m3 | Declare reference temperature, pressure and dry/wet basis; convert meter readings consistently. An energy invoice needs a supplier-specific calorific value to infer volume. |
| water_density | supplied water and blowdown | Mass | kg | Convert measured volume with documented density and temperature; distinguish withdrawal, recirculation, evaporation and discharge. |



## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier-delivered formulated resin, finished stamper, coated tape or blank optical carrier and purchased components, with documented upstream burdens |
| starting_condition_role | Foreground collection interface; does not remove upstream manufacture from the lifecycle boundary |
| product_classification_scope | Recorded musical physical media; CPC context does not substitute for carrier state |
| recursive_input_rule | One supplier interface per purchased same-category input; internal transfers tracked once |
| upstream_dataset_requirement | Cover actual formulation, component manufacture, supplier energy, inbound transport and waste treatment; disclose geography, technology and unresolved coverage |
| disclosure | Declare starting state, exclusions, integrated versus purchased operations and separate gate-to-gate from upstream-linked results |



| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_scope | manufacturing_system | Compile a cradle-to-factory-gate manufacturing dataset including acquired materials and components, their upstream production and inbound transport, mastering, carrier production or recording, attributable utilities, packaging and treatment of production waste. Publish gate-to-gate observations separately from linked upstream results. | `ghg-protocol-product-standard-2011` |
| boundary_route | carrier_construction | Declare one carrier construction and route per dataset. Replicated CDs need moulding, metallization and protection; CD-R recording starts with supplied blank discs; PVC vinyl needs pressing; bulk tape duplication needs recording and loading. A format name alone cannot justify using another route inventory. | `nist-optical-disc-care-2003`; `cci-recording-media-care`; `nac-cassette-production-2026` |
| boundary_supplied_components | supply_boundary | For purchased finished stampers, coated/slit tape, assembled shells, printed labels and packaging, obtain upstream datasets covering all embedded constituents and conversion. If these are made on site, replace the purchased-component boundary with measured production and its atomic exchanges; do not count both. Include attributable master preparation even for short runs. | `nist-optical-disc-care-2003`; `nac-cassette-mastering-2026`; `gz-media-music-manufacturing` |
| boundary_completeness | site_instantiation | The cards are a core collection structure. Before a site dataset is complete, add each actual omitted exchange, including a specific process chemical, spent lacquer, spent stamper, exported resin scrap, printing colour, fuel, purchased steam, refrigerant loss or measured combustion species. Record individual composition, amount and destination; absence needs evidence and a missing UUID is never a cut-off. |  |
| boundary_recursion | same_category_inputs | When already recorded musical media are purchased for repacking or further processing, record their delivered state and a supplier dataset once. Stop physical tracing at that documented supplier interface, not at the classification label. Internal transfers are reconciled without duplicate external inputs or final outputs. |  |
| boundary_downstream | excluded_stages | Distribution after the factory gate, retail, playback devices and listening energy, consumer travel, and consumer end-of-life are separate downstream scenarios. Creative performance, copyright and royalties are outside this physical manufacturing dataset; disclose that exclusion. Do not claim a complete listening-service comparison or full product-GHG conformance from this partial lifecycle. | `weber-music-delivery-2010`; `ghg-protocol-product-standard-2011` |



## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mastering | Master preparation and tooling | conditional | Purchased stampers for replicated CDs or pressed vinyl | foreground manufacturing | 1 kg accepted recorded media |
| optical | Optical replication or CD-R recording | conditional | Declared optical audio medium | foreground manufacturing | 1 kg accepted recorded media |
| vinyl_pressing | Vinyl pressing | conditional | Declared PVC grooved audio disc | foreground manufacturing | 1 kg accepted recorded media |
| tape_duplication | Tape duplication and loading | conditional | Declared bulk-reel cassette route | foreground manufacturing | 1 kg accepted recorded media |
| site_energy | Site energy and water | required | All production routes; individual fuel and water conditions apply | foreground manufacturing | 1 kg accepted recorded media |
| finishing | Finishing, packaging and release | required | All accepted media; each packaging component is conditional | foreground manufacturing | 1 kg accepted recorded media |



Processes are foreground collection partitions of one integrated manufacturing system. Internal work-in-progress quantities are reconciled in batch logs; only the released carrier is the reference output. Apply each card condition without duplicating the common utility or finishing ledger.

### Process: Master preparation and tooling (`mastering`)

#### Inputs

##### Product flows

###### Nickel disc stamper (`nickel_stamper`)

For replicated CDs or pressed vinyl using purchased finished nickel stampers: collect tool mass, replacements and lifetime good-copy count.

- inclusion_condition: For replicated CDs or pressed vinyl using purchased finished nickel stampers

- Selected flow: Nickel disc stamper

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Tool replacement mass allocated by lifetime accepted copies, divided by accepted media mass

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_mastering`

- Sources: `nist-optical-disc-care-2003`; `gz-media-music-manufacturing`

### Process: Optical replication or CD-R recording (`optical`)

#### Inputs

##### Product flows

###### Polycarbonate granulate (`polycarbonate_granulate`)

For replicated CD moulding: collect optical grade, external resin use and internal regrind separately.

- inclusion_condition: For replicated CD moulding

- Selected flow: Polycarbonate granulate `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_optical`

- Sources: `nist-optical-disc-care-2003`

###### Aluminium sputtering target (`aluminium_target`)

For replicated-CD metallization: weigh target consumption and recoverable remainder separately.

- inclusion_condition: For replicated-CD metallization

- Selected flow: Aluminium sputtering target

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_optical`

- Sources: `nist-optical-disc-care-2003`

###### UV-curable acrylate protective lacquer (`uv_lacquer`)

For this declared CD lacquer formulation: retain recipe, solids content, net issue mass and application loss.

- inclusion_condition: For this declared CD lacquer formulation

- Selected flow: UV-curable acrylate protective lacquer

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_optical`

- Sources: `nist-optical-disc-care-2003`

###### Blank recordable compact disc (CD-R) (`blank_cd_r`)

For CD-R recording only: measure blank-disc count and mass. Its upstream supply already contains substrate, dye, metal and lacquer manufacture.

- inclusion_condition: For CD-R recording only

- Selected flow: Blank recordable compact disc (CD-R)

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_optical`

- Sources: `nist-optical-disc-care-2003`

#### Outputs

##### Waste flows

###### Waste compact disc (`waste_compact_disc`)

For rejected complete CDs sent off site: distinguish replicated and recordable construction and retain destination and weighed mass.

- inclusion_condition: For rejected complete CDs sent off site

- Selected flow: Waste compact disc

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_optical`

- Sources: `nist-optical-disc-care-2003`

### Process: Vinyl pressing (`vinyl_pressing`)

#### Inputs

##### Product flows

###### PVC record-pressing compound (`pvc_record_compound`)

For PVC record pressing: collect formulation, colour, external recycled fraction and net feed; record internal trim return separately.

- inclusion_condition: For PVC record pressing

- Selected flow: PVC record-pressing compound

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_vinyl_pressing`

- Sources: `cci-recording-media-care`; `gz-media-music-manufacturing`

#### Outputs

##### Waste flows

###### Waste PVC record pressing trim (`waste_pvc_record`)

For solid PVC trim exported from the site: record composition, mass and treatment. Internal regrind is not an exported waste.

- inclusion_condition: For solid PVC trim exported from the site

- Selected flow: PVC `cacd273c-d5c5-4f38-91c2-660d8a86498b`

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_vinyl_pressing`

- Sources: `cci-recording-media-care`; `gz-media-music-manufacturing`

### Process: Tape duplication and loading (`tape_duplication`)

#### Inputs

##### Product flows

###### Unrecorded ferric-oxide polyester audio tape (`blank_audio_tape`)

For bulk-reel cassette duplication: collect consumed length and measured linear mass; supplied coated tape includes film, magnetic coating and binder upstream.

- inclusion_condition: For bulk-reel cassette duplication

- Selected flow: Unrecorded ferric-oxide polyester audio tape

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_tape_duplication`

- Sources: `cci-recording-media-care`; `nac-cassette-mastering-2026`; `nac-cassette-production-2026`

###### Empty audio cassette shell assembly (`cassette_shell`)

For loading tape into purchased shells: count and weigh the single assembled component including hubs, screws and leader.

- inclusion_condition: For loading tape into purchased shells

- Selected flow: Empty audio cassette shell assembly

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_tape_duplication`

- Sources: `cci-recording-media-care`; `nac-cassette-mastering-2026`; `nac-cassette-production-2026`

###### Polyester adhesive audio splicing tape (`splicing_tape`)

For cassette loading with polyester-backed splice tape: collect length and linear mass; adhesive is included in the purchased composite tape.

- inclusion_condition: For cassette loading with polyester-backed splice tape

- Selected flow: Polyester adhesive audio splicing tape

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_tape_duplication`

- Sources: `cci-recording-media-care`; `nac-cassette-mastering-2026`; `nac-cassette-production-2026`

#### Outputs

##### Waste flows

###### Waste polyester magnetic audio tape (`waste_audio_tape`)

For loose tape cuts and rejected tape leaving the site: weigh coated tape and record destination. Rejected loaded cassettes require a distinct waste exchange.

- inclusion_condition: For loose tape cuts and rejected tape leaving the site

- Selected flow: Waste polyester magnetic audio tape

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_tape_duplication`

- Sources: `cci-recording-media-care`; `nac-cassette-mastering-2026`; `nac-cassette-production-2026`

### Process: Site energy and water (`site_energy`)

#### Inputs

##### Product flows

###### Electricity (`electricity`)

Collect purchased electricity for mastering, replication, recording, cooling, compressed-air generation, printing, packing and attributable storage in one allocation ledger.

- inclusion_condition: When this physical exchange is present in the declared route

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`

- Flow property / unit: Net calorific value / MJ; property `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`

- Amount rule: Allocated metered kWh × 3.6 MJ/kWh divided by accepted media mass

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_site_energy`

###### Process Water (`process_water`)

When supplied make-up water is used for cooling or cleaning: meter external input, excluding internal circulation; retain quality and source.

- inclusion_condition: When supplied make-up water is used for cooling or cleaning

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_site_energy`

###### natural gas in the gaseous state (`natural_gas`)

When natural gas is burned on site for heat: collect corrected volume, reference temperature, pressure and composition. Do not also purchase internally generated heat.

- inclusion_condition: When natural gas is burned on site for heat

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`

- Flow property / unit: Volume / m3; property `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_site_energy`

#### Outputs

##### Waste flows

###### Cooling tower blowdown wastewater (`cooling_blowdown`)

When cooling-tower blowdown is sent to treatment: collect mass, additives and destination; distinguish it from evaporation and spent cleaning solution.

- inclusion_condition: When cooling-tower blowdown is sent to treatment

- Selected flow: Cooling tower blowdown wastewater

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_site_energy`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

For direct on-site fossil combustion to air: use measured CO2 or corrected gas volume with a verified supplier-specific fossil CO2 factor. Grid emissions remain upstream.

- inclusion_condition: For direct on-site fossil combustion to air

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Measured direct fossil CO2, or corrected gas volume × verified site-specific factor, divided by accepted media mass

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_site_energy`

### Process: Finishing, packaging and release (`finishing`)

#### Inputs

##### Product flows

###### Label, paper (`paper_label`)

When purchased paper labels are attached to media: count and weigh them; declare printing and adhesive supply boundaries. Embedded vinyl labels enter media mass.

- inclusion_condition: When purchased paper labels are attached to media

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_finishing`

- Sources: `nac-cassette-production-2026`

###### UV-curable black screen-printing ink (`uv_black_ink`)

For direct CD screen printing with this single formulation: collect net issued ink mass. Each additional colour or formulation is a separate exchange.

- inclusion_condition: For direct CD screen printing with this single formulation

- Selected flow: UV-curable black screen-printing ink

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_finishing`

- Sources: `nist-optical-disc-care-2003`

###### Polystyrene CD jewel case (`cd_jewel_case`)

When a purchased polystyrene CD jewel case is supplied: count and weigh cases; cassette cases and other polymers need distinct exchanges.

- inclusion_condition: When a purchased polystyrene CD jewel case is supplied

- Selected flow: Polystyrene CD jewel case

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_finishing`

- Sources: `weber-music-delivery-2010`

###### Printed paperboard record sleeve (`paperboard_sleeve`)

When purchased printed paperboard sleeves enclose media: count and weigh them and declare coating and printing in the supplier dataset.

- inclusion_condition: When purchased printed paperboard sleeves enclose media

- Selected flow: Printed paperboard record sleeve

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_finishing`

- Sources: `gz-media-music-manufacturing`

###### Printed paper CD booklet (`printed_booklet`)

When a purchased printed booklet is included: count and weigh it; booklet mass is packaging rather than reference media mass.

- inclusion_condition: When a purchased printed booklet is included

- Selected flow: Printed paper CD booklet

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_finishing`

- Sources: `weber-music-delivery-2010`

###### Low-density polyethylene packaging film (`ldpe_film`)

Only when LDPE film is actually used: weigh net film issue. Cellophane and polypropylene require distinct exchanges.

- inclusion_condition: Only when LDPE film is actually used

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_finishing`

###### Corrugated cardboard box (`corrugated_box`)

When bulk shipping cartons are used: count and weigh cartons and allocate by actual packing count; prevent duplicate inbound supplier packaging.

- inclusion_condition: When bulk shipping cartons are used

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_finishing`

- Sources: `weber-music-delivery-2010`

#### Outputs

##### Product flows

###### Musical audio discs, tapes or other physical media (`finished_music_media`)

One specified medium construction per dataset; count and weigh accepted music-bearing units. Include integral shell and label, exclude removable packaging.

- inclusion_condition: When this physical exchange is present in the declared route

- Selected flow: Musical audio discs, tapes or other physical media `db247acc-87c3-406b-b093-15268b24a617`

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: 1 kg accepted recorded media; retain measured count and net unit mass

- Value mode: `fixed_value`

- Specificity: `product_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_finishing`

- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Waste corrugated cardboard packaging (`waste_corrugated_box`)

When corrugated packaging is discarded inside the foreground boundary: weigh segregated waste and document recycling or disposal destination.

- inclusion_condition: When corrugated packaging is discarded inside the foreground boundary

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`

- Flow property / unit: Mass / kg; property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Net campaign quantity converted by the measurement rules and divided by accepted media mass (kg)

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg accepted recorded media, packaging excluded from denominator

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_finishing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_processes | First separate product campaigns and directly meter attributable processes. If unavoidable, allocate by a demonstrated physical relationship; use economic allocation only with a documented reason that physical allocation is unsuitable and a sensitivity analysis. | `ghg-protocol-product-standard-2011` |
| allocation_tooling | mastering_and_stampers | Allocate master and stamper preparation by documented lifetime accepted copies of that title/format, including test and failed runs in the burden numerator. Record replacements and partial tool lives; do not assume infinite reuse. |  |
| allocation_utilities | site_energy | Use route submetering where possible. Otherwise allocate campaign electricity by measured power-time demand, process heat by measured heat demand and packaging by actual unit counts; reconcile shares to the site meter. Music duration alone is not a causal allocation basis for moulding. |  |
| allocation_recycling | scrap_and_recycled_content | Track internal regrind as an internal loop, counting reprocessing energy and loss once. Apply a disclosed recycled-content approach to external recyclate and waste treatment; do not subtract hypothetical virgin-material displacement from the factory-gate result. Sold usable off-spec media require separate product accounting, not automatic waste status. | `ghg-protocol-product-standard-2011` |



## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mastering | mastering | Tool ledger | batch_and_meter_records | tool_id; title_id; format; mass_kg; installation/removal_date; good_copies; failed_copies; supplier | Weigh purchased tools and reconcile replacements and lifetime batch logs. | kg; count | Each tool change and campaign | Entire declared reporting period; complete campaigns; retain dates and product mix | Named plant and included suppliers; no undocumented multi-site pooling | Allocate preparation to actual accepted copies, then normalize by accepted media mass. | Calibration, invoices, stock reconciliation, sample plan, uncertainty and acceptance records |
| cp_optical | optical | Optical batch log | batch_and_meter_records | lot_id; optical_route; resin_grade; resin_kg; target_before/after_kg; lacquer_kg; solids_fraction; blank_count; blank_mass_kg; accepted_count; reject_kg; internal_regrind_kg | Weigh issues and returns; meter line runs; inspect samples for content readability and surface defects. | kg; count | Every production batch | Entire declared reporting period; complete campaigns; retain dates and product mix | Named plant and included suppliers; no undocumented multi-site pooling | Use net external consumption; include start-up and rejects; keep CD-R and replication data separate. | Calibration, invoices, stock reconciliation, sample plan, uncertainty and acceptance records |
| cp_vinyl_pressing | vinyl_pressing | Pressing batch log | batch_and_meter_records | lot_id; compound_formula; external_recycled_fraction; feed_kg; internal_trim_return_kg; exported_trim_kg; accepted_count; net_record_mass_kg | Reconcile hopper issues and weighed trim; inspect approved audio and physical record quality. | kg; count | Every pressing campaign | Entire declared reporting period; complete campaigns; retain dates and product mix | Named plant and included suppliers; no undocumented multi-site pooling | Separate internal return from external feed and exported waste before normalization. | Calibration, invoices, stock reconciliation, sample plan, uncertainty and acceptance records |
| cp_tape_duplication | tape_duplication | Duplication and loading log | batch_and_meter_records | lot_id; tape_type; length_m; linear_mass_kg_per_m; shell_count; shell_mass_kg; splice_length_m; splice_linear_mass; accepted_count; reject_tape_kg; programme_minutes | Measure tape use and component masses; reconcile loader counters and sample playback against the approved master. | m; kg; count; min | Every duplication campaign | Entire declared reporting period; complete campaigns; retain dates and product mix | Named plant and included suppliers; no undocumented multi-site pooling | Convert lengths and counts to mass using measurements; account for leaders and cutting loss. | Calibration, invoices, stock reconciliation, sample plan, uncertainty and acceptance records |
| cp_site_energy | site_energy | Meter and emissions ledger | batch_and_meter_records | meter_id; time_start/end; kWh; gas_m3; gas_reference_conditions; water_kg; blowdown_kg; emission_measurement_or_factor; allocation_driver; operating_hours | Use calibrated meters, bills and emissions measurements or verified site-specific factors; retain factor source and boundary. | kWh; MJ; m3; kg | Meter intervals reconciled each reporting period | Entire declared reporting period; complete campaigns; retain dates and product mix | Named plant and included suppliers; no undocumented multi-site pooling | Reconcile allocation shares to site totals; normalize once by campaign accepted mass. | Calibration, invoices, stock reconciliation, sample plan, uncertainty and acceptance records |
| cp_finishing | finishing | Release, packaging and supply ledger | batch_and_meter_records | lot_id; medium_format; programme_id; accepted_count; unit_mass_kg; packing_count; component_mass_kg; net_ink_kg; stock_changes; waste_kg; supplier_dataset; inbound_transport; delivery_boundary | Weigh carriers and each packaging component; reconcile invoices, stock movements, supplier production/transport coverage and release inspection. | kg; count; min; tonne-km | Each lot and reporting period | Entire declared reporting period; complete campaigns; retain dates and product mix | Named plant and included suppliers; no undocumented multi-site pooling | Accepted carrier mass is the denominator; packaging masses and supply links stay separately traceable. | Calibration, invoices, stock reconciliation, sample plan, uncertainty and acceptance records |



### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | q_i = Q_i,allocated / M_good; M_good = N_good × measured mean carrier mass. Keep all input, output and stock quantities on the same time boundary. | quantity; allocation_share; accepted_count; unit_mass | normalized_exchange |  |
| tool_share | mastering | Allocate total attributable tool and master burden by batch good-copy count / lifetime good-copy count; then normalize. Reconcile partial lifetimes at update. | tool_mass; good_copy_history | allocated_tool_mass |  |
| site_share | site_energy | Allocated quantity = site quantity × measured causal share; all shares must reconcile to the metered total. | meter_quantity; causal_driver | allocated_utility |  |
| supply_link | upstream_dataset | Link each net purchased physical input once to compatible production and inbound-transport data; report coverage and avoid duplicating embedded components. | supplier; product_state; quantity; transport | upstream_link | `ghg-protocol-product-standard-2011` |



### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | Retain exact formulation, supplied state, batch, supplier and destination; resolve missing flows before downstream claims of full matching | Bills of materials and supplier specifications |
| coverage | reporting period | Cover full campaigns including setup, test runs, rejects, shutdowns and stock changes; disclose gaps and seasonal or product-mix bias | Batch/meter reconciliation |
| quality | accepted output | Record sample method, approved audio/content criteria, playback equipment and physical checks; do not use theoretical output as accepted output | Release and rejection logs |
| uncertainty | all quantities | Retain measurement uncertainty and actual variability; no literature-derived default amount or numeric range is supplied by this PCR | Calibration and source applicability assessment |



## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | Require recorded musical content, a declared physical carrier and all reference qualifiers. Blank media, video, spoken-word-only products and playback hardware cannot be the reference output. | `un-cpc-3-0-structure-2025` |
| validate_rows | inventory | Every instantiated exchange must be atomic, have a quantity and unit, and link to a collection record or calculation. Each UUID must match flow type, state and measurement; a missing UUID must remain explicit. |  |
| validate_balance | campaign | Reconcile external material inputs plus opening stocks with accepted media, separate packaging, waste, emissions and closing stocks. Investigate discrepancies against instrument uncertainty and documented transformations rather than inventing a generic tolerance. |  |
| validate_route | process_coverage | Require every applicable process and site-specific extension, matched supplier boundaries and one utility ledger. CD-R supply must not duplicate replicated-CD constituent inputs; coated tape must not duplicate upstream coating manufacture. |  |
| validate_quality | release_and_data | Use campaign acceptance records for readable, correctly sequenced content and carrier-specific physical inspection. Retain failed copies in consumption and reject records. Assess technological, geographic and temporal representativeness, completeness and measurement reliability. | `nist-optical-disc-care-2003`; `cci-recording-media-care`; `ghg-protocol-product-standard-2011` |
| validate_ranges | quantitative_evidence | Use measured foreground values. External inferred intervals require at least two independent original sources with compatible carrier state, unit and boundary and an explained synthesis. One publication’s scenarios are not independent; exact normalization and unit conversion are not ranges. |  |



## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Manufacturing input to a declared physical-music product lifecycle or distribution model |
| allowed_use | Same carrier construction, product state, technology and supply boundary; scaled by measured mass/count conversion |
| excluded_use | Unqualified substitution across formats; complete streaming-versus-physical comparisons; retail/playback/end-of-life claims without added scenarios |
| required_metadata | carrier format and construction; musical programme identifier and duration; recording technology and playback format; accepted unit count and measured net mass per unit; integral shell/label boundary; packaging bill of materials; recording quality acceptance; plant and reporting period; supplier starting conditions; recycled fraction; utility geography and voltage |
| required_quality_disclosure | Collection dates, instruments, sample coverage, allocation, supplier links, waste routes, UUID gaps, uncertainty and partial lifecycle boundary |
| update_trigger | Carrier or formulation change; new supplier/grid; route or packaging change; revised yield, tooling life or evidence; significant coverage correction |



## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | [UNSD, CPC Version 3.0 structure, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv); accessed 2026-09-09 | Official rows 476, 47610, 47530, 47540, 47620, 47691, 47699 and 84321; recorded-music scope and exclusions. Original local CSV SHA-256 matches supplied cache: 5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c. |
| nist-optical-disc-care-2003 | official_guidance | [Byers, Care and Handling of CDs and DVDs, NIST SP 500-252 (2003)](https://nvlpubs.nist.gov/nistpubs/legacy/sp/NISTspecialpublication500-252.pdf); accessed 2026-09-09 | Original sections 3.1–3.5: polycarbonate, stamper replication, reflective metal, protective lacquer, printing surfaces and distinct recordable construction. No quantities adopted. |
| cci-recording-media-care | official_guidance | [Canadian Conservation Institute, Iraci, Caring for audio, video and data recording media](https://www.canada.ca/en/conservation-institute/services/preventive-conservation/guidelines-collections/caring-audio-video-data-recording-media.html); accessed 2026-09-09 | Original grooved-media Table 1 and magnetic/optical sections: PVC record composition, coated tape and medium-specific construction. |
| gz-media-music-manufacturing | extension_guidance | [GZ Media, Music manufacturing services](https://www.gzmedia.com/music/); accessed 2026-09-09 | Original Music, Print & Packaging and More Sustainable Music sections: mastering, galvanization, pressing, assembly and internal waste reuse. |
| nac-cassette-production-2026 | extension_guidance | [National Audio Company, From Master to Mixtape: Part 2 (2026)](https://www.nationalaudiocompany.com/blog/from-master-to-mixtape-part-2/); accessed 2026-09-09 | Original Production and Delivery sections: reel duplication, labels or imprinting, packaging and dispatch. No speeds adopted. |
| nac-cassette-mastering-2026 | extension_guidance | [National Audio Company, From Master to Mixtape: Part 1 (2026)](https://www.nationalaudiocompany.com/blog/from-master-to-mixtape-part-1/); accessed 2026-09-09 | Original mastering workflow: cue-driven tape cutting and splicing into shells. Audio-quality numerical claims are not adopted. |
| ghg-protocol-product-standard-2011 | standard | [WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011)](https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf); accessed 2026-09-09 | Original chapters 7–9: boundary disclosure, data quality, allocation hierarchy and recycling consistency; adapted bookkeeping, not a claim of full product-GHG conformance. |
| weber-music-delivery-2010 | literature | [Weber, Koomey and Matthews, The Energy and Climate Change Implications of Different Music Delivery Methods (2010), accessible archival PDF](https://fepropaz.com/wp-content/uploads/2019/10/weber2010.pdf); DOI: 10.1111/j.1530-9290.2010.00269.x; accessed 2026-09-10 | Verified original text: Methods and Assumptions (printed p. 756) and CD and CD Packaging Production (printed p. 759). It distinguishes one-album delivery equivalence from this PCR’s factory-gate mass normalization and confirms that its historical CD/CD-R case does not establish carrier-specific manufacturing activity ranges. |
