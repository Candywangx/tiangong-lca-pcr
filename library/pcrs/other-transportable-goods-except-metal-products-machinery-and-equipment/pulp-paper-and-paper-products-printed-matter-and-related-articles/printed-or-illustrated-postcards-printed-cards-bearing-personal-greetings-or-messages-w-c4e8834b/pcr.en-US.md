---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.printed-or-illustrated-postcards-printed-cards-bearing-personal-greetings-or-messages-w-c4e8834b
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Sheetfed wet-offset printed, cut and folded greeting cards

## 1. Scope and Applicability

This methodology covers physical folded greeting cards made from purchased dry uncoated chemical-pulp paperboard without mechanical-pulp furnish by conventional sheetfed wet offset using separately metered CMYK conventional non-waterborne oil-based offset paste inks, absorption/oxidation drying, guillotine or die cutting, creasing and folding, and factory-gate quality acceptance. It starts with purchased ready-imaged aluminium offset plates; no onsite plate development, pulping or papermaking is modelled. Their actual upstream burdens remain required.

Keep two explicitly declared variants: no postprint coating, or actual UV-varnish finishing with a documented mercury-lamp curing system. Do not average these routes without product-specific output weights and separate activity records. UV varnish, its curing energy and wastes are absent from the unvarnished variant. A varnished surface is not a film-laminated card. The representative construction is one cut and centre-folded paperboard leaf; exact dimensions, crease geometry, sides printed and artwork coverage are declared by each dataset, never fixed universally.

Envelopes, PE wrapping and paper labels are conditional separately supplied and shipped exchanges, outside the card-body reference mass. No envelope, ornament, adhesive, wrap or packaging count is default. Foil, glitter, ribbons, pop-up structures, attached ornaments, separate adhesives/liners, cartons/pallets, plastic or metal cards, coated base board, digital/letterpress/web-fed/UV-ink printing, LED/electron-beam curing, onsite combustion/oxidation, liquid discharge and laundering routes are outside this bounded inventory. An actual such route requires applicability reassessment and all its own specific material, waste and emission rows; it cannot be hidden in the card, varnish or a packaging aggregate. These exclusions do not authorize omission of any actual in-boundary auxiliary, transport or pollution control. Sources `epa-offset-ctg-2006`, `jrc-sts-2020`, `loxleys-litho`, `loxleys-finishes`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.printed-or-illustrated-postcards-printed-cards-bearing-personal-greetings-or-messages-w-c4e8834b |
| classification_refs | CPC 3.0 32530; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | The declared folded physical paperboard greeting-card construction and two finishing variants. |
| excluded_products | Flat postcards, electronic cards, decorated/laminated/assembled cards and other printing/substrate routes described in section 1. |
| representative_product | A cut, creased, centre-folded uncoated card-stock greeting card. |
| production_route | Purchased substrate/ready-imaged plates → wet sheetfed offset → absorption/oxidation drying → conditional UV varnish/curing → cutting/creasing/folding → inspection and actual pack-out. |
| market_state | Accepted dry folded cards at factory gate; actual moisture and optional accessories disclosed. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a physical printed folded personal greeting/message card. |
| How much | 1 kg accepted card-body output. |
| How well | Declared artwork/colour, dimensions, substrate caliper, fold accuracy, cured-finish state and acceptance specification; no universal equivalence by mass. |
| How long or cycle | One manufacturing campaign to factory-gate acceptance; no service life or message duration asserted. |
| reference_flow_link | `finished_card` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Printed or illustrated postcards, printed cards bearing personal greetings or messages, with or without envelopes or trimmings `a3a55c4a-a523-458b-bf18-5802f5482f6d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Card format/dimensions and unfolded area; fold/crease; uncoated woodfree substrate and actual moisture/furnish/grammage/caliper; each CMYK actual oil-based ink SKU/formulation and print coverage; supplier and plate condition; no-finish or UV-varnish variant, actual coat/retention and mercury lamp; actual IPA/concentrate/cleaner; delivered electricity voltage; separate envelope/film/label identity and mass; site/campaign/acceptance; waste receiver and species/size/medium reporting. |

The selected broad product flow includes this qualified subset without a contrary material or manufacturing limitation. It does not establish functional equivalence with every card/postcard, supplier-background suitability or any default quantity. Qualifiers must appear in dataset metadata or equivalent reference-product records.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg of accepted card-body net mass at measured moisture, including actual retained ink, coating, anti-setoff starch and moisture and excluding envelope/film/label. Measure campaign Q by calibrated weighing; reject gross-pack weight. |
| `batch_basis` | reference denominator | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect full campaign totals B_i in each row's declared native numerator property/unit (including electrical MJ) and accepted net card mass Q in kg for the same route/site/time, then report B_i/Q per 1 kg reference flow. Mass/kg constrains Q, not every numerator. Never normalize by card count alone. Counts may support weighing, with measured lot-specific mass, but do not replace Q. |
| `mixture_basis` | fountain, wash, inks, varnish | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered formulation mass and actual ingredient/volatile/solids basis; convert volume only with measured grade-specific density and conditions. Premix and separately purchased components must not be double counted. |
| `electricity_basis` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Native electrical identity is Net calorific value/MJ; use supplier-compatible electrical meter totals with 1 kWh = 3.6 MJ. This is an electrical conversion, not delivered thermal heat; no steam or gas is in this route. |
| `particle_basis` | air particulate rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use disjoint ≤2.5 μm, >2.5–10 μm and >10 μm mass fractions on the same sampling/control/dry-gas basis; report actual size method. Never add PM2.5 to cumulative PM10 or total dust; unresolved fractions have no zero default. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased dry uncoated woodfree card stock and ready-imaged aluminium plates delivered to the printer; actual consumables and optional accessories. |
| starting_condition_role | purchased_intermediate |
| product_classification_scope | Qualified narrower folded-card subset of CPC3.0 32530; classification label does not extend the route. |
| recursive_input_rule | Finished-card outsourcing is outside this own-printing route. Record returned work-in-progress/rework physically once; no silent recursive reference output. A bought printed card requires a different disclosed starting condition and supplier guidance. |
| upstream_dataset_requirement | Actual provider datasets for substrate including pulping/papermaking/finishing, imaged plates, each ink, chemicals, electricity, accessories, inbound freight and off-site waste treatment. Declare unavailable provider/cut-off; an identity UUID alone is not a provider or complete dataset. |
| disclosure | Declare site, campaign, actual starting inputs, drying/UV variant, electricity supply, outsourced plate processing, pollution controls, transport and any boundary exclusions. Paper BREF7.1.10 is upstream context, not a printing-factor source. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | `card_delivery` | Include make-ready, colour changes, cleaning, ventilation/extraction and conditional finishing/pack-out over the whole campaign; associate all upstream supplied materials and actual transport/treatment. No universal cut-off of small chemicals or packaging. | `epa-offset-ctg-2006`; `uk-sg6-2011` |
| `physical_ledger` | `card_delivery` | Keep a process/stage diagram and pre-allocation physical ledger. Internal stage links carry equal actual amounts at both ends; one integrated foreground output avoids duplicate card references. Water, substrate/ink/coat carbon and accessory balances include stored/retained/exported/emitted quantities. | `jrc-sts-2020`; `eu-pef-2021-allocation` |
| `actual_emissions` | `card_delivery` | Survey actual solvent/ink/coating ingredients and species-specific air/water/soil releases; every additional emitted substance gets one atomic row with its medium. No total-VOC or correction flow may replace a species. No combustion occurs in this route, but any actual biogenic CO2 in foreground or linked background must remain in LCI independently of GHG-accounting convention. | `uk-sg6-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `card_delivery` | Integrated card printing, finishing, folding and delivery | required | Declared route; UV and accessories only when actually present. | foreground_production | 1 kg accepted card-body reference flow |

Stage records remain separate: receipt/stock → make-ready and wet offset → drying → conditional UV-varnish/cure → cutting/creasing/folding → acceptance and actual packing. Internal material moves retain measured wet/dry status and equal link amounts; they are not extra external product outputs. Maintain separate meters/records even though stages share one final reference.

### Process: Integrated greeting-card manufacture (`card_delivery`)

#### Inputs

##### Product flows

###### Unprinted uncoated card substrate (`board`)

Purchased dry, uncoated chemical-pulp card stock without mechanical-pulp furnish; declare fibre furnish, grammage, caliper, moisture, size and supplier. This broad identity is limited to the actual substrate; it does not stand for coated, plastic-laminated or printed stock.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-sts-2020`; `epa-offset-ctg-2006`

###### Low-voltage purchased electricity (`electricity`)

Only grid-average AC delivered below 1 kV. Meter pressing, natural-drying ventilation, cutting, creasing/folding, dust extraction, cleaning and conditional UV curing separately; reconcile shared auxiliaries. Preserve native Net calorific value/MJ identity; metered electrical kWh converts by 3.6 MJ/kWh, with provider voltage, geography, year and loss boundary verified. No heat or fuel is implied.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-offset-ctg-2006`

###### Cyan conventional oil-based offset paste ink (`ink_cyan`)

One separately purchased cyan formulated paste ink, conventionally absorbed/oxidatively dried. Require the actual per-colour SKU/SDS and supplier confirmation of conventional non-waterborne oil-based sheetfed offset paste grade, with absorption/oxidation setting rather than heatset/UV/aqueous drying. Collect the full supplied formulation, pigments, binder, actual petroleum/vegetable-oil origin, all volatile/retained species and provider quantity basis. No soybean species or fixed oil fraction is required merely because an identity exists. The broad native name and offset/lithographic synonyms identify non-water solvent/oil-based printing ink but do not prove this actual paste grade, setting mechanism or provider. Its optional glycol examples and heat-based categorisation are neither mandatory formulation nor a heatset requirement. A common UUID does not merge the four actual colours or establish equal doses, oil/volatile fractions, retention or a common provider.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Magenta conventional oil-based offset paste ink (`ink_magenta`)

One separately purchased magenta formulated paste ink, conventionally absorbed/oxidatively dried. Require the actual per-colour SKU/SDS and supplier confirmation of conventional non-waterborne oil-based sheetfed offset paste grade, with absorption/oxidation setting rather than heatset/UV/aqueous drying. Collect the full supplied formulation, pigments, binder, actual petroleum/vegetable-oil origin, all volatile/retained species and provider quantity basis. No soybean species or fixed oil fraction is required merely because an identity exists. The broad native name and offset/lithographic synonyms identify non-water solvent/oil-based printing ink but do not prove this actual paste grade, setting mechanism or provider. Its optional glycol examples and heat-based categorisation are neither mandatory formulation nor a heatset requirement. A common UUID does not merge the four actual colours or establish equal doses, oil/volatile fractions, retention or a common provider.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Yellow conventional oil-based offset paste ink (`ink_yellow`)

One separately purchased yellow formulated paste ink, conventionally absorbed/oxidatively dried. Require the actual per-colour SKU/SDS and supplier confirmation of conventional non-waterborne oil-based sheetfed offset paste grade, with absorption/oxidation setting rather than heatset/UV/aqueous drying. Collect the full supplied formulation, pigments, binder, actual petroleum/vegetable-oil origin, all volatile/retained species and provider quantity basis. No soybean species or fixed oil fraction is required merely because an identity exists. The broad native name and offset/lithographic synonyms identify non-water solvent/oil-based printing ink but do not prove this actual paste grade, setting mechanism or provider. Its optional glycol examples and heat-based categorisation are neither mandatory formulation nor a heatset requirement. A common UUID does not merge the four actual colours or establish equal doses, oil/volatile fractions, retention or a common provider.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Black conventional oil-based offset paste ink (`ink_black`)

One separately purchased black formulated paste ink, conventionally absorbed/oxidatively dried. Require the actual per-colour SKU/SDS and supplier confirmation of conventional non-waterborne oil-based sheetfed offset paste grade, with absorption/oxidation setting rather than heatset/UV/aqueous drying. Collect the full supplied formulation, pigments, binder, actual petroleum/vegetable-oil origin, all volatile/retained species and provider quantity basis. No soybean species or fixed oil fraction is required merely because an identity exists. The broad native name and offset/lithographic synonyms identify non-water solvent/oil-based printing ink but do not prove this actual paste grade, setting mechanism or provider. Its optional glycol examples and heat-based categorisation are neither mandatory formulation nor a heatset requirement. A common UUID does not merge the four actual colours or establish equal doses, oil/volatile fractions, retention or a common provider.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Externally imaged aluminium offset printing plate (`plate`)

Delivered ready to mount, matched to the image and press; weigh actual aluminium plus imaging coating. Procurement includes upstream imaging/processing. Bare plate substrate, polystyrene sheet and flexographic plate cannot substitute. Record replacement and stock changes, without a universal impression life.

- Selected flow: Imaged aluminium offset printing plate, ready to mount
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Purchased alcohol-free acidic fountain concentrate (`fountain`)

One actual formulated concentrate, purchased separately from water and IPA. Retain supplier product code, SDS, ingredients, concentration and dilution records. Do not count an already premixed working solution in addition to its ingredients; do not assume a standard recipe.

- Selected flow: Alcohol-free acidic offset fountain concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`; `jrc-sts-2020`

###### Separately added isopropanol (`ipa`)

Include only when separately dosed into the fountain system. Verify CAS 67-63-0, delivered purity, mass and any dilution water. Record IPA-free operation explicitly; no ethanol or glycol-ether substitution and no default IPA fraction.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-sts-2020`; `epa-offset-ctg-2006`

###### Delivered tap water (`water`)

Meter fresh tap water used for fountain preparation, replenishment and manual wet cleaning; exclude internally recirculated working liquid from fresh intake. Mass identity requires calibrated weighing or measured source-specific density and metered volume. Link actual water-supply provider; it is not a freshwater abstraction or effluent flow.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-offset-ctg-2006`; `jrc-sts-2020`

###### Low-volatility hydrocarbon blanket wash (`wash`)

Manual contained dispensing to wipes for blankets and ink rollers. Use one actual non-halogenated aliphatic-hydrocarbon formulation with SDS and composition; record its own delivered mass. Inkjet printhead cleaner, hydraulic oil and a neat unconfirmed solvent are not substitutes. Survey every emitted constituent; low volatility does not establish zero emissions.

- Selected flow: Low-volatility non-halogenated aliphatic-hydrocarbon offset blanket wash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-sts-2020`; `epa-offset-ctg-2006`

###### Conditional uncoated maize-starch anti-setoff powder (`powder`)

Include only if the actual purchased printing powder is uncoated maize starch from the stated wet-milling identity. Verify supplier grade, particle size, moisture, chemical coating absence and purity. Talc, calcium carbonate, coated starch and composite powder require different identities; no powder dose is imposed.

- Selected flow: Cornstarch `11077512-b85c-41da-8669-1298c65be402`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Conditional UV varnish formulation (`varnish`)

Only the explicitly declared UV-varnished variant: record actual delivered formulation, spot/all-over area, coat laydown, cured retention, loss, cure dose and lamp system. Unfinished cards have no such exchange; do not replace this with aqueous varnish, oil varnish, foil, adhesive or a pure polymer.

- Selected flow: UV varnish `3a387485-681a-4f40-8bc9-755edfcbad8c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `loxleys-finishes`; `epa-offset-ctg-2006`

###### Conditional mercury UV-curing lamp replacement (`lamp`)

For the mercury-lamp UV-varnish variant only, record actual lamp design, mercury content, mass, service hours and campaign-attributable replacement. A quartz tube or mercury chemical is not the assembled lamp. No lamp lifetime or mercury release factor is imposed. The Loxleys finish offering proves UV-varnish capability, not a mercury installation. Require the actual lamp/curing-system model, manufacturer documentation and lamp/SDS content certificate, spectrum, operating/dark-start records and cure acceptance. Retired/missing/broken lamp mercury must reconcile with stock, licensed waste transfer and actual cleanup/releases; do not force a missing balance into air emissions. UV-ink statements in survey sources do not prove this varnish formulation.

- Selected flow: Mercury-containing UV-curing lamp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `uk-sg6-2011`

###### Conditional unprinted paper envelope (`envelope`)

One purchased unprinted, windowless paper envelope if shipped with the card; disclose fibre/grammage, gum and net mass. The broad stationery identity covers only this envelope subset. It is outside the card reference mass; no default envelope per card.

- Selected flow: Envelopes, letter cards, plain postcards and correspondence cards of paper or paperboard, boxes, pouches, wallets and writing compendiums, of paper or paperboard, containing paper stationery `e75a08f8-57bd-4900-b01b-8482a1dc7546`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `loxleys-litho`

###### Conditional polyethylene wrap (`film`)

Only actual PE single-card wrapping; verify CAS 9002-88-4, film grade, thickness and supplier. Preserve separate shipped film and offcut quantities. The source classification anomaly does not change physical PE identity; verify provider before dataset use. Naked-card delivery has no film.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `loxleys-litho`

###### Conditional paper packaging label (`label`)

One actual purchased paper label, including declared ink/adhesive already in the supplied article; weigh its delivered net mass. Do not silently omit label/adhesive or count the embedded adhesive twice. Different added glue or release liner is a separate exchange when present.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `loxleys-litho`

###### Clean cotton wiping cloth (`wipe_input`)

Actual cotton fabric used for manual cleaning, weighed by replacement or traceable stock withdrawal. Require cotton composition and cleaning grade, not printed apparel cloth or a pre-impregnated composite. Off-site reusable-cloth laundering, if used, is a separate supplied service and must be added before applying this single-use route. Native name/synonyms identify cotton fabric/cloth/woven fabric, while CPC01921 and cotton-fibre prose require source clarification. Verify actual manufactured cloth and finishing/provider; raw cotton fibre does not replace it.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`; `jrc-sts-2020`

###### Actual formulated machine lubricating oil (`maintenance_oil`)

One actual supplied liquid lubricating oil used in the installed press/cutter/folder. Record base oil, additives, grade/viscosity, supplier/SDS, application, stock and equipment instructions. Mineral, PAO and wax/solvent products are not interchangeable. No universal dose, replacement interval or lubricant is prescribed.

- Selected flow: Actual formulated machine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis; include only when actually present with documented applicability.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-sts-2020`; `uk-sg6-2011`

###### Actual formulated machine lubricating grease (`maintenance_grease`)

One actual supplied grease for the installed moving parts; record base oil, thickener/additives, consistency, supplier grade and weighed replenishment. A liquid-oil identity or a wax/solvent lubricant is not the complete grease. Allocate actual shared maintenance activity causally without imposing a brand, recipe or lifetime.

- Selected flow: Actual formulated machine lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis; include only when actually present with documented applicability.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-sts-2020`; `uk-sg6-2011`

###### Complete replaceable rubber-faced offset printing blanket (`blanket`)

One complete replaceable offset blanket fitted to the actual wet-offset press. Record rubber face, fabric backing, other layers, net assembled mass, grade and supplier; a textile blanket or pure rubber raw material is not this composite. Collect actual installation/removal/remaining stock and attribution; no universal blanket lifetime or copy yield.

- Selected flow: Complete replaceable rubber-faced offset printing blanket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis; include only when actually present with documented applicability.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-sts-2020`; `uk-sg6-2011`

#### Outputs

##### Product flows

###### Accepted folded greeting card (`finished_card`)

The only quantitative reference output: accepted card body, printed and cut/creased/folded, with actual retained ink, conditional cured varnish and retained anti-setoff starch, at recorded moisture. Exclude separately shipped envelope, film and label from its mass. No pre-cut card sheets or intermediate card-body output uses this UUID.

- Selected flow: Printed or illustrated postcards, printed cards bearing personal greetings or messages, with or without envelopes or trimmings `a3a55c4a-a523-458b-bf18-5802f5482f6d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: `loxleys-litho`

###### Shipped unprinted paper envelope (`shipped_envelope`)

Same actual component as the input, physically shipped with accepted cards, separately weighed. Reconcile input = shipped + actual damage/offcut + stock change; do not multiply physical output by a burden-allocation share.

- Selected flow: Envelopes, letter cards, plain postcards and correspondence cards of paper or paperboard, boxes, pouches, wallets and writing compendiums, of paper or paperboard, containing paper stationery `e75a08f8-57bd-4900-b01b-8482a1dc7546`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `loxleys-litho`

###### Shipped polyethylene wrap (`shipped_film`)

Same actual component as the input, physically shipped with accepted cards, separately weighed. Reconcile input = shipped + actual damage/offcut + stock change; do not multiply physical output by a burden-allocation share.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `loxleys-litho`

###### Shipped paper packaging label (`shipped_label`)

Same actual component as the input, physically shipped with accepted cards, separately weighed. Reconcile input = shipped + actual damage/offcut + stock change; do not multiply physical output by a burden-allocation share.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `loxleys-litho`

##### Waste flows

###### Unvarnished card-stock rejects and trims (`waste_paper`)

Weigh the actually collected unvarnished paperboard stream; declare ink content, fibre, moisture and accepting recycler. Setup spoilage and trims remain real wastes, never negative substrate.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Conditional UV-coated card rejects (`waste_coated_paper`)

Separate actually UV-coated rejects from unvarnished scrap, with cured coating/ink mass and receiver acceptance. A common broad paper-waste UUID neither proves equal recyclability nor authorizes mixing or an avoided-recycling credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Collected paste-ink residue (`waste_ink`)

One physically collected conventional paste-ink waste stream, with actual colour composition, oil/water and hazard classification. Ink retained on scrap or wipes is counted there, not again here.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Ink/cleaner-contaminated cotton wipes (`waste_wipes`)

Weigh segregated used cotton wipes including retained ink, cleaner and water; document receiver, hazard and composition. Clean textile cutting scraps cannot replace contaminated wiping waste.

- Selected flow: Ink and hydrocarbon-cleaner-contaminated cotton wipes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Spent aqueous fountain liquid exported for treatment (`waste_fountain`)

Only sealed, collected spent fountain liquid leaving for off-site treatment; weigh actual water, IPA and additive content. No onsite process discharge is assumed. It is neither freshwater nor electrolytic-manganese-residue washwater.

- Selected flow: Spent aqueous offset fountain solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Spent imaged aluminium offset plate (`waste_plate`)

Record aluminium, residual coating/ink and recycler acceptance; do not use pure aluminium or waste flexographic photopolymer plate as a complete composite plate waste. The selected broad scrap name and contaminated-scrap synonyms include actual used aluminium articles before recycling; the comment explicitly calls scrap the input to recycling. Record total composite scrap mass and separately assay aluminium/coating/ink. Its recycling-related route label is not evidence that foreground remelting/treatment already occurred or may be omitted upstream/downstream; provider/receiver quantity convention must match.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Conditional uncured UV-varnish residue (`waste_varnish`)

Only actual segregated uncured formulation; record oligomer/monomer, photoinitiator and receiver. Cured coating on reject cards is in waste_coated_paper, not repeated.

- Selected flow: Uncured UV-varnish waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Collected dry paperboard cutting dust (`collected_dust`)

Weigh captured cutting dust with actual ink/coating contamination and receiver. Internal capture is a waste transfer only when exported; reuse inside the unit is recorded as an internal loop, not an emission. Broad waste-paper identity requires an actual segregated cellulose-paper/ink/coating stream and accepting recipient; it cannot cover a starch/dust mixture, metal dust or an unspecified composite. Particle-size air fractions remain separate.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Collected maize-starch anti-setoff powder (`collected_powder`)

Record the separately captured starch powder, contamination and receiver, apart from cutting dust and starch retained on cards. If the streams are physically mixed, document the measured mixture and one confirmed composite waste identity before modelling it.

- Selected flow: Collected maize-starch anti-setoff powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Conditional PE wrapping offcuts (`waste_film`)

Record actual clean PE offcuts with composition and receiver. PET and polypropylene are not PE; source-specific oil-contaminated PE waste is not a substitute.

- Selected flow: Clean polyethylene wrapping-film offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Conditional spent mercury UV lamp (`waste_lamp`)

Whole spent lamp with retained mercury and actual licensed receiver; broken-lamp incidents require separate measured mercury releases by medium and species. Waste lamp mass is not an assumed mercury emission.

- Selected flow: Spent mercury-containing UV-curing lamp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `uk-sg6-2011`

###### Used lubricating oil (`spent_maintenance_oil`)

One separately collected used petroleum-based or synthetic lubricating oil stream at the point of generation. Record actual contamination, stream net mass and recipient; do not include grease, wiping cloth or oil retained on them again. Reused and retained equipment oil stays in the stock/transfer ledger. No default loss fraction or treatment route.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis; include only when actually present with documented applicability.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-sts-2020`; `uk-sg6-2011`

###### Separately collected spent machine lubricating grease (`spent_maintenance_grease`)

One actually removed and separately collected spent grease stream with composition and receiver documented. Used liquid oil is not complete grease. Grease retained on wipes or removed parts is included in those physical streams, not duplicated here; documented absence of a separate collected stream is permitted.

- Selected flow: Separately collected spent machine lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis; include only when actually present with documented applicability.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-sts-2020`; `uk-sg6-2011`

###### Spent composite rubber-faced offset printing blanket (`spent_blanket`)

One actually removed complete blanket, retaining its rubber/fabric layers and actual ink/cleaner contamination. Record net composite mass, receiver and fate; a generic tyre-rubber record does not by itself confirm this full contaminated assembly or treatment. Contaminants are not exported again as separate waste mass.

- Selected flow: Spent composite rubber-faced offset printing blanket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis; include only when actually present with documented applicability.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-sts-2020`; `uk-sg6-2011`

###### Separately collected spent aliphatic-hydrocarbon blanket wash liquid (`spent_wash`)

Only if actual manual cleaning generates a separately collected liquid: record the complete aliphatic-hydrocarbon wash/ink/water stream, concentration and recipient. Do not duplicate liquid retained on wipes, paste-ink residue or spent fountain solution. No direct environmental discharge, unrelated machining coolant or universal liquid-waste quantity is implied.

- Selected flow: Separately collected spent aliphatic-hydrocarbon blanket wash liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis; include only when actually present with documented applicability.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-sts-2020`; `uk-sg6-2011`

##### Elementary flows

###### Isopropanol released to outdoor air (`air_ipa`)

CAS 67-63-0; outdoor air, unspecified subcompartment, Mass/kg. Measure net release across the facility boundary after actual control, including fugitives. Reconcile IPA inputs, stock, liquid/wipe exports and any retention; purchase mass is not automatically emitted.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `uk-sg6-2011`; `jrc-sts-2020`

###### Conditional identified dodecane emission (`air_dodecane`)

Only if CAS 112-40-3 is established in actual ink/cleaner and measured off-gas; outdoor air, unspecified, Mass/kg. It is not total hydrocarbon or NMVOC. Survey all actual emitted constituents and add separate species rows; do not equate a C-range hydrocarbon blend with dodecane.

- Selected flow: dodecane `fe0acd60-3ddc-11dd-a822-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `uk-sg6-2011`; `jrc-sts-2020`

###### Conditional ozone from UV curing (`air_ozone`)

CAS 10028-15-6; only if actual lamp spectrum and measurement establish release. Outdoor air, unspecified, Mass/kg, net after ventilation/abatement. A UV-varnish label alone does not establish ozone generation or an emission factor.

- Selected flow: ozone `08a91e70-3ddc-11dd-9756-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `uk-sg6-2011`; `jrc-sts-2020`

###### Particles up to PM2.5 to outdoor air (`air_pm25`)

Outdoor air, unspecified, Mass/kg; measured residual cutting/spray dust after capture, including fugitives. This is the lowest non-overlapping size fraction, not collected dust or all PM10.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `uk-sg6-2011`; `jrc-sts-2020`

###### Particles above PM2.5 through PM10 to outdoor air (`air_pm10`)

Outdoor air, unspecified, Mass/kg; report only the size interval above PM2.5 through PM10. When compatible cumulative PM10 and PM2.5 are measured, the interval is their difference, never their sum. Unmeasured split remains unresolved.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `uk-sg6-2011`; `jrc-sts-2020`

###### Particles above PM10 to outdoor air (`air_pmover10`)

Outdoor air, unspecified, Mass/kg; separately measured above-PM10 release. If compatible total particulate and cumulative PM10 are available, use their difference. No dust factor or positive release is assumed from dry cutting alone.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `uk-sg6-2011`; `jrc-sts-2020`

###### Water vapour across the facility air boundary (`air_water`)

Outdoor air, unspecified, Mass/kg, from actual net process evaporation. Determine by validated water balance or net exhaust measurement including incoming humidity; not boiler steam delivery, liquid effluent, water abstraction or crop evapotranspiration.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `uk-sg6-2011`; `jrc-sts-2020`

###### Conditional measured mercury release to outdoor air (`air_mercury`)

Conditional actual mercury release to outdoor air, unspecified subcompartment, CAS7439-97-6, Mass/kg. Only documented installed mercury-lamp technology plus an actual incident/release investigation and compatible sampling or validated mercury balance can establish an amount. Lamp count/content, routine UV use or a missing lamp is not an emission factor. Keep intact retired lamps and cleanup residues as complete waste streams; indoor exposure is not automatically an outdoor release. Record mercury species; prefer differentiated native species if the chosen LCIA distinguishes them. Other receiving media require their own verified rows, never this air UUID.

- Selected flow: mercury `fe0acd60-3ddc-11dd-a8c4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual campaign-attributable measured exchange, including stock change, reported on the declared reference basis; include only when actually present with documented applicability.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-sts-2020`; `uk-sg6-2011`

Receipt and maintenance completeness: record paper-stock outer wrap/cores if actually present, chemical/ink/varnish containers and tare/retained residues, actual replacement oils/grease/blankets/filters/parts, and returned/refilled items by material and destination. Add separate verified atomic rows for every actual container material, worn filter/part, extra packaging input/reject or incident-cleanup waste before claiming complete site data; do not invent material types, doses, cycles or pollution releases. Container return/refill and internal reuse stay in paired stock/transfer records. Composite waste mass includes its retained contaminants once; upstream supplier-included packaging or maintenance must not be charged twice. Include actual offsite treatment/service and transport with an explicit provider boundary, without inventing road/sea/air or distance. [jrc-sts-2020; uk-sg6-2011]

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `direct_assignment` | `card_delivery` | First separate actual jobs/variants and directly meter/assign material, spoilage, cleaning, curing and waste activity. Investigate subdivision before sharing burdens; a no-varnish job receives no UV-coating burden. | `eu-pef-2021-allocation` |
| `shared_burdens` | `card_delivery` | For genuinely shared residual burdens, demonstrate a measured physical cause such as machine time with actual load, or printed/coated area for the affected operation. Record driver, all jobs and denominator; total allocated burden must equal the measured total. Mass share is not automatically causal. If no defensible relationship exists, disclose unresolved allocation; do not silently select economic shares. | `eu-pef-2021-allocation` |
| `physical_outputs` | `card_delivery` | Maintain actual cards, scraps, accessories, liquids and dust in the physical ledger, including balances and equal internal links. Keep the allocated environmental-burden account separately: never multiply co-product physical output by an allocation share. Record recycling/treatment receiver; no negative paper input or generic avoided-material credit. | `eu-pef-2021-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `card_delivery` | accepted net card-body mass | primary measurement and traceable records | campaign/lot; variant; artwork; dimensions/fold; calibrated scale; accepted net mass Q; moisture; retained ink/varnish; rejected output; stock | Weigh accepted complete card bodies on a calibrated scale, excluding envelope, film and label; reconcile lot acceptance and moisture. Preserve actual full-campaign Q and variant-specific totals. | kg | Every lot/job and each material/waste transaction; representative time-resolved meters/sampling | Entire declared campaign, including setup, cleaning and rejects; same variant | Declared site and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw readings, invoices/SDS, acceptance, mass/water/carbon reconciliation, stock and uncertainty; no fabricated data |
| `cp_materials` | `card_delivery` | each purchased material and replacement | primary measurement and traceable records | row_id; supplier/product/SDS; colour/grade; delivered composition; wet/dry mass; density/conditions if volumetric; incoming/remaining/returned stock; stage; campaign | Weigh each actual formulation or article separately and reconcile invoices, dispensing and stock; use measured grade-specific density only for volume records. Include make-ready, cleaning and replacement across the full campaign. Record supplier evidence for every grade and condition; no recipe from database metadata. | kg | Every lot/job and each material/waste transaction; representative time-resolved meters/sampling | Entire declared campaign, including setup, cleaning and rejects; same variant | Declared site and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw readings, invoices/SDS, acceptance, mass/water/carbon reconciliation, stock and uncertainty; no fabricated data |
| `cp_energy` | `card_delivery` | purchased low-voltage AC | primary measurement and traceable records | meter id/calibration; opening/closing electrical kWh; stage/variant; actual auxiliary load; supply voltage/provider/year; shared driver; accepted net card mass Q | Read calibrated meters/submeters over the same campaign; reconcile all stage and shared auxiliary totals and supplier boundary. Convert recorded electrical kWh to MJ by 3.6, then use accepted card-body Q. Do not treat Net calorific value metadata as a heat-service measurement. | MJ | Every lot/job and each material/waste transaction; representative time-resolved meters/sampling | Entire declared campaign, including setup, cleaning and rejects; same variant | Declared site and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw readings, invoices/SDS, acceptance, mass/water/carbon reconciliation, stock and uncertainty; no fabricated data |
| `cp_water` | `card_delivery` | fresh supplied water | primary measurement and traceable records | fresh-water meter; measured mass or volume/density/temperature;actual water carried by board, inks, concentrate, wash, varnish and wipes;  replenishment; evaporation; exported spent liquid; retained water; stock; incoming/outgoing exhaust humidity | Meter fresh supplied water separately from internal circulation. For Mass/kg quantity use calibrated mass records or actual density at meter conditions. Reconcile fresh input, stock, card/wipe retention, exported liquid and net evaporation without a generic density or consumption factor. Formulation/material carrier water remains inside its purchased mixture exchange, not a duplicate tap-water input. Preserve full ambient inlet/outlet humidity separately from net anthropogenic evaporation, with compatible exhaust flow/time and wet/dry/T/P basis. | kg | Every lot/job and each material/waste transaction; representative time-resolved meters/sampling | Entire declared campaign, including setup, cleaning and rejects; same variant | Declared site and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw readings, invoices/SDS, acceptance, mass/water/carbon reconciliation, stock and uncertainty; no fabricated data |
| `cp_packaging` | `card_delivery` | each actual shipped accessory | primary measurement and traceable records | row_id; supplier/specification; composition/embedded adhesive; incoming/remaining stock; actual net shipped envelope/film/label mass; offcuts/damage; accepted net card mass Q | Weigh each component independently at input and dispatch, excluding it from card-body Q. Reconcile input, shipment, stock and actual rejects; absence is documented by bill of materials and pack-out records, not an assumed zero. | kg | Every lot/job and each material/waste transaction; representative time-resolved meters/sampling | Entire declared campaign, including setup, cleaning and rejects; same variant | Declared site and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw readings, invoices/SDS, acceptance, mass/water/carbon reconciliation, stock and uncertainty; no fabricated data |
| `cp_waste` | `card_delivery` | each exported waste | primary measurement and traceable records | row_id; stream/container; tare/gross/net; ink/coating/solvent/water/mercury/metal content; receiver/route; stock; collection dates; internal reuse | Weigh segregated streams with calibrated scales and manifest/receiver records. Keep unvarnished/UV-coated paper, ink residue, used wipes, spent liquid, composite plates, uncured varnish, cutting dust, collected starch, PE offcuts and spent lamps distinct. Avoid counting contaminants both in the composite waste and as separate exported mass. | kg | Every lot/job and each material/waste transaction; representative time-resolved meters/sampling | Entire declared campaign, including setup, cleaning and rejects; same variant | Declared site and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw readings, invoices/SDS, acceptance, mass/water/carbon reconciliation, stock and uncertainty; no fabricated data |
| `cp_emissions` | `card_delivery` | each species and disjoint particle interval | primary measurement and traceable records | row_id; CAS/species/source; medium/subcompartment; sampling method/limits; concentration and dry/wet/standard gas conditions; gas flow/time; fugitives; inlet/outlet and abatement; detection limits; actual formulation; water/solvent balance | Use calibrated representative full-campaign sampling or a validated species-specific material balance with retained/exported/control terms; record uncertainty, fugitives and sample/time coverage. Gas mass = compatible concentration × gas volume, corrected once for actual conditions. Identify additional emitted ingredients and add individual atomic species/medium rows. Preserve size-method compatibility; non-detection is not an unqualified zero. | kg | Every lot/job and each material/waste transaction; representative time-resolved meters/sampling | Entire declared campaign, including setup, cleaning and rejects; same variant | Declared site and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw readings, invoices/SDS, acceptance, mass/water/carbon reconciliation, stock and uncertainty; no fabricated data |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_normalization` | all inventory rows | a_i = B_i / Q; B_i is actual attributed full-campaign exchange in its own unit; Q is accepted net card-body mass in kg for the same route and period. For the sole reference output a_i = 1 kg. Preserve raw actual physical totals independently from allocated burdens. | B_i; Q; cp_output | exchange per 1 kg reference flow |  |
| `measured_balances` | `card_delivery` | For each actual conserved material component: opening stock + incoming = closing stock + retained product/accessories + exported waste + actual environmental release; explain measured uncertainty and oxidation/oxygen uptake when applicable. Water and fossil/biogenic carbon require separate component ledgers, not a sum of unlike masses. | Measured component/stock/output/air and liquid records | Pre-allocation physical balance | `jrc-sts-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_provider` | each exchange | A selected broad UUID must contain the physical subset without contrary route/species/native-reference fields; independently verify actual supplier formulation, quantity basis and provider. A blank UUID is an explicit linking gap, not evidence that a near match may be used. | Supplier specification/SDS; direct identities and native chain; receiver agreement |
| `campaign_completeness` | `card_delivery` | Use one coherent site/time/product variant and include setup, reject, cleaning, consumables, actual packaging, stock and controls. Identify missing rows/data/providers and detection/split uncertainty; historical or single-factory amounts are not defaults. | Complete campaign records and actual balance closure |
| `separate_ledgers` | `card_delivery` | Preserve physical stage diagram and equal internal links, physical mass/water/fossil-and-biogenic-carbon balance, and a separately reconciled allocated-burden ledger. No allocation-scaled physical co-product outputs. | Raw stage records and allocation driver audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `finished_card` | Exactly one reference output with 1 kg accepted card-body Mass/kg; EN/ZH quantities, denominator, qualifiers and row identities agree. Associated accessories remain separate physical outputs. |  |
| `validate_routes` | `card_delivery` | Verify actual uncoated substrate, each actual conventional oil-based offset ink and outsourced imaged plate, wet offset/drying, manual cleaning, finish and lamp route. Unresolved identities, providers, additional auxiliaries/species, ingredient formulations or incompatible waste receivers prevent a claim of a complete linked dataset. | `epa-offset-ctg-2006` |
| `validate_environment` | `card_delivery` | Check explicit CAS/species and air/water/soil medium, net plant-boundary release, shared controls, disjoint particles, captured versus emitted dust, water balance and fossil/biogenic carbon. No correction flow, cumulative-PM double count, universal VOC factor or omission of actual biogenic CO2. | `uk-sg6-2011` |
| `validate_physical_and_burden` | `card_delivery` | Check independently the raw physical ledger and shared-burden allocation sums. Internal links match at both ends; shipped accessories plus waste and stock reconcile with input; allocation affects attributable burdens, not physical product or co-product mass. | `eu-pef-2021-allocation` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate greeting-card production process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared same-route card supply, with all actually matched upstream providers and explicit finish/accessory configuration. |
| excluded_use | Universal CPC32530 coverage, postcard/ornament routes, message-service comparison, or a complete dataset claim with unresolved identity/data/provider gaps. |
| required_metadata | Scope/reference qualifiers; site/time; exact flows/providers/native units; route and finish; component composition; actual accessory masses; pollution-control/transport/treatment boundary; allocation drivers. |
| required_quality_disclosure | Collection/coverage and calibration; raw physical versus allocated burden ledgers; uncertain constituent/size split; missing UUID/provider/data; limits and exclusions. |
| update_trigger | Changed construction, furnish, ink/concentrate/cleaner/varnish, lamp technology, supplier basis, electricity, accessories, control/waste route or new emissions evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epa-offset-ctg-2006` | official_guidance | EPA-453/R-06-002, September 2006, Control Techniques Guidelines for Offset Lithographic Printing and Letterpress Printing, printed pp.7–8 / PDF13–14. https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1009O71.txt | Sheetfed paste-ink absorption/oxidation, fountain ingredients, manual cleaning and optional radiation-cured coatings. Historic description only; no VOC/retention percentages or regulatory limits adopted. |
| `jrc-sts-2020` | official_guidance | JRC STS BREF 2020, section 11.2, printed pp.344–346 / PDF383–385. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf | Only explicit general offset/sheetfed clauses on wetting, non-heatset drying and blanket/roller cleaning within the heatset chapter; no heatset dryer or default solvent recipe transposed. |
| `uk-sg6-2011` | official_guidance | UK Sector Guidance Note IPPC SG6 (11), February 2011, Table 9 printed p.32 / PDF38, sheet-fed offset column; section 3.47 printed p.34 / PDF40, cutting/trimming dust and collected waste. https://assets.publishing.service.gov.uk/media/5a80811ded915d74e33facf5/surface-treatment-using-solvents-sector-guidance-note-sg-6-11.pdf | Printing-side solvent, ozone, spent liquid, contaminated wipes, ink and UV-lamp waste survey; printing-side paper dust from cutting/trimming, distinct captured waste and net air release; actual species and amounts need site measurement. No current legal-compliance claim or default emission. |
| `jrc-paper-bref-2015` | official_guidance | JRC Production of Pulp, Paper and Board BREF 2015, section 7.1.10, printed p.670 / PDF708. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Upstream paper-mill finishing/cutting and internal-broke context only; not a greeting-card plant inventory, fibre recipe, dust or water factor. |
| `eu-pef-2021-allocation` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, pp.63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Subdivision then demonstrated relevant physical relationship for shared burdens; no assumed economic share, substitution credit or generic recycling result. |
| `loxleys-litho` | literature | Loxleys, Litho Printing, manufacturer webpage, retrieved 2026-10-12. https://www.loxleys.co.uk/litho-print | One producer demonstrates B1 greeting-card litho, board/envelope procurement, die cutting, folding/inserting and distinct optional pack-out/finishes. Not evidence of this plant using the chosen ink, substrate, cleaner or lamp; no output rate or inventory default adopted. |
| `loxleys-finishes` | literature | Loxleys, Print Finishes, manufacturer webpage, retrieved 2026-10-12. https://www.loxleys.co.uk/print-finishes | Separate CMYK/die-cut and UV spot/all-over varnish capabilities, alongside excluded foil/glitter routes. No formulation, coating mass, cure dose or lamp-type claim. |
