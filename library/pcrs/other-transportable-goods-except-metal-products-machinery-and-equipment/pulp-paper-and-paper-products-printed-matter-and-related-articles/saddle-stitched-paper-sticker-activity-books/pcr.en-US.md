---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.saddle-stitched-paper-sticker-activity-books
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Dry assembly of saddle-stitched paper sticker activity books from supplied printed sheets

## 1. Scope and Applicability

This method covers one physical construction: a flexible paper sticker activity book containing printed non-adhesive content pages and printed kiss-cut coated-cellulose-paper stickers, dried removable water-borne acrylic PSA and siliconized paper release liners, bound together by metal saddle stitches. The receiving foreground starts with supplied fully printed/cut/finished sheets and cover, then inspects, collates, folds, stitches, trims and packs. All upstream operations remain in the linked system. This is an authored boundary abstraction, not a claim that the cited integrated manufacturers outsource their printing. [china4u-sticker; sunnywell-sticker; basf-psa]

UNSD expressly excludes sticker books from CPC3.0:32292 and points to 32690. The residual 32690 title does not prescribe a single product or route. The mapping covers only the narrower subset, for this exact paper/PSA/liner/stapled construction; it cannot cover the rest of the residual class. Contents, intended audience and marketing labels do not independently establish PCR identity. [un-cpc3-2025]

Removability here concerns the specified printed-paper adherend after application, not merely release from the liner. Verify the supplied PSA grade and agreed peel/residue/fibre-damage tests at declared dwell, conditioning and substrate; permanent/high-tack grades and UV-acrylic hotmelts require a separate applicability review. A portfolio of other label uses does not extend this scope. [basf-psa]

The substantive differences are the delivered liner/matrix-inclusive reference mass, separate adhesive-contaminated composite losses, peelability and liner-integrity acceptance, and collation/stapling of unlike sheet components. Existing loose coated-paper image-print, wet-flexo PSA label, EVA paperback and heatset magazine methods can support matching upstream subprocesses but do not directly define this complete product and denominator.

Exclude loose labels/decals, blank sticker-collection albums without supplied stickers, all-sticker pads without content pages, synthetic sticker facestock, toy/pop-up books, hardcover/EVA/PUR/glued/spiral bindings, security printing, and onsite printing, wet coating/lamination, kiss-cutting or combustion. Supplied surface finishes are recorded as real layers in supplier backgrounds, never hidden as bare paper. Bringing excluded onsite stages into foreground requires a reviewed explicit extension with atomic inventories and replacement of corresponding supplier stages. No historical recipe, grammage, page count, loss, factor or factory quantity is a universal default. [sunnywell-sticker; china4u-sticker; basf-psa]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.saddle-stitched-paper-sticker-activity-books |
| classification_refs | CPC 3.0 32690; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Paper sticker activity books with the explicit component structure and receiving/finishing route in section1 |
| excluded_products | All constructions and onsite routes excluded in section1 |
| representative_product | Flexible paper activity booklet with supplied paper PSA sticker pages on paper liners and metal saddle stitches |
| production_route | Supplied finished sheets/cover → receiving/QC → collate/fold → metal saddle stitch → trim/QC → transport pack |
| market_state | Accepted complete dry book at finishing gate, with unpeeled stickers/liners/matrix |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply coordinated paper activity pages and peelable paper stickers in one stapled booklet |
| How much | 1 kg net accepted complete sticker activity books |
| How well | Declared size/page/sticker configuration; correct collation and stitch/trim; agreed release/peel/adhesion tests and intact liner; no universal equivalence by mass across designs |
| How long or cycle | One production campaign to factory-gate acceptance; no fixed reuse count or service life |
| reference_flow_link | `finished_book` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Site/campaign/configuration; content/cover/sticker page counts and dimensions; paper grades/moisture; PSA chemistry, removable grade, adherend/dwell/conditioning and dry coat mass; liner/silicone/matrix mass and retained status; actual surface-finish layers; supplied print/cut/coat backgrounds and handoff; wire grade/coating; acceptance/peel tests; net mass/packing tare; utility supply country, voltage/provider; treatment routes; allocation and unresolved evidence |

Every qualifier must be declared in traceable data-package metadata or collection records. UUID identity alone does not establish a linked supplier dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted complete lots on calibrated scales through cp_output. Retained liners, matrix, adhesive, finishes and staples belong to net book mass. Exclude transport packing and rejects. |
| `common_denominator` | all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | All rows and collection aggregation use per 1 kg reference flow over the same site/campaign/configuration. Divide measured attributable campaign exchanges by measured accepted net book mass. Zero/missing denominator blocks normalization. Counts and areas cannot replace measured mass. |
| `composite_basis` | sticker_sheets, cover_sheets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Incoming delivered composite wet/as-received mass is distinct from dry facestock, dry adhesive, liner and finish masses. Derive fractions only from actual supplier assay/area-coat records and measured moisture. Never apply a bare-sticker provider quantity to a liner-inclusive sheet or count component backgrounds twice. |
| `electricity_units` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter delivered electricity; 1 kWh = 3.6 MJ. Preserve the native Net calorific value property for this electric-energy identity and its provider boundary; it is not proof of delivered steam heat. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received fully printed/kiss-cut/finished sticker laminate sheets, printed content sheets and cover; steel wire and actual transport carton |
| starting_condition_role | Supplier-finished-part handoff; prior production linked once, not excluded |
| product_classification_scope | Paper PSA/liner saddle-stitched activity-book subset only; proposed CPC3.0:32690 narrower |
| recursive_input_rule | Purchased complete books/reworked books retain their prior-production history; no recursion into own final output. In-plant returns remain internal physical transfers. |
| upstream_dataset_requirement | Actual paper/pulp/coating, printing, PSA polymer/coating/drying, liner/silicone, kiss-cutting, supplied surface finishes, steel, packing, utility and receiving-treatment providers with compatible amount bases |
| disclosure | Physical layers/configuration, foreground handoff, supplier routes and amount bases, timing/site, controls, data gaps and downstream study scenarios |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_scope` | physical applicability | Require the explicit paper/PSA/paper-liner/stapled activity-book structure; do not substitute a marketing category for construction or assign whole residual coverage. | `un-cpc3-2025`; `china4u-sticker` |
| `b_foreground` | p_assemble | Include receiving losses, QC/collation/folding/stapling/trimming, actual dust capture, packing, attributed electricity/maintenance and all measured waste/net releases. Printing/coating/laminating/kiss-cutting are supplied stages; onsite occurrence requires explicit scope extension and replacement of corresponding upstream stages. | `sunnywell-sticker`; `china4u-sticker` |
| `b_upstream` | supplied parts | Include complete actual pulp/paper manufacture and coating, drying/calender/cutting/broke/wastewater; supplied printing ink/plate/wash/energy/emissions; PSA polymer/coat/dry losses; liner silicone and retained finishes. BREF7.1.4/7.1.10 concerns paper mills, not binder factors; wood/plywood sources do not establish paper processing. EPA ink guidance distinguishes supplier routes without prescribing default retained percentages. | `jrc-paper-bref-2015`; `epa-offset-ctg-2006`; `basf-psa` |
| `b_ledgers` | physical and allocated ledgers | Report one foreground assembly unit with separate stage meters. Internal transfers match at both ends in mass, moisture and composition. Keep unallocated material/water/fossil-and-biogenic-carbon and energy balances separate from allocated environmental burdens; never multiply physical co-product output by allocation shares. Retained delivered liner/matrix is product, not site waste. Include incoming supplier packing, shipment packing, returns and maintenance stocks in whole-site physical ledgers. Match supplier returns at both ends; they are not consumption or automatically waste, but their attributable transport, inspection and handling remain. Shipped packing leaves the physical gate while remaining outside net book reference mass. Reuse moves existing packing stock; never book it again as a new carton purchase. |  |
| `b_releases` | nature boundary | Distinguish collected dust from outdoor releases and filterable fractions from cumulative/condensable PM. Include fugitive releases using a site-specific valid protocol; stack Method201A cannot measure open-room exposure or be extended to droplet-laden exhaust. Add actual moisture exchange and other emissions as individually identified exchanges; do not force a mass residual into PM. Keep actual upstream/treatment biogenic CO2 in LCI even if a climate reporting metric excludes it. | `epa-method201a-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_assemble` | Receiving, sheet assembly, saddle stitching, trimming and packing | required | Stated received-part construction | foreground | `finished_book` |

Physical map: supplied sheet components → receiving/QC → collate/fold → wire staple → trim/QC → pack. Keep each stage’s unallocated stocks, rejects, water/carbon and handoffs. One reported final output avoids duplicate reference identity; known internal part transfers are retained in the physical stage records. Conditional cards have no positive default and absence requires evidence.

### Process: Sticker book assembly (`p_assemble`)

#### Inputs

##### Product flows

###### Printed kiss-cut coated-paper acrylic-PSA sticker sheet on siliconized paper liner (`sticker_sheets`)

Receive one finished printed, kiss-cut laminate: coated cellulose-paper facestock, dried removable water-borne acrylic PSA and siliconized paper liner. Record each retained layer, ink, any actual surface finish, moisture and delivered matrix. One purchased complete-sheet exchange includes facestock, dry PSA, siliconized liner and all delivered matrix; do not add separate foreground purchases of its embodied adhesive, silicone or liner. Reconcile the layer ledger to delivered composite mass without counting the matrix area twice. Supplier kiss-cutting leaves the liner intact; no onsite coating or kiss-cutting is presumed. The paper-label candidate does not establish the identity and reference-mass inclusion of the whole delivered liner-backed sheet, so its UUID stays unresolved.

- Selected flow: Printed kiss-cut coated-paper acrylic-PSA sticker sheet on siliconized paper liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_parts divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources: `china4u-sticker`; `sunnywell-sticker`; `basf-psa`

###### Offset-printed sheets (`content_sheets`)

Receive already printed non-adhesive coated-paper content sheets, before folding/binding. Verify conventional sheetfed wet-offset printing and complete ink setting at handoff. The selected press-stage intermediate is not the finished book and is not an in-plant-only transfer record. Record furnish, coating, ink, moisture, dimensions and actual supplier background.

- Selected flow: Offset-printed sheets `aa6d7b70-e247-4651-bd5f-692e988aebd7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_parts divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources: `china4u-sticker`; `sunnywell-sticker`

###### Printed Matter (`cover_sheets`)

Receive one printed flexible coated-paperboard cover. Declare any supplied protective layer, its chemistry, dry retained mass and supplying process. The broad mechanical-print identity contains the physical paper-cover subset. Its full comment discusses postal printed-matter fee conventions and paper-3D prototypes; neither is a postal-service flow, a required prototype route or evidence of this supplier recipe. It does not establish any particular laminate/varnish provider.

- Selected flow: Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_parts divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources: `china4u-sticker`; `sunnywell-sticker`

###### Steel Wire (`stitch_wire`)

Receive non-alloy steel wire for metal staples formed along the folded spine. Record diameter, grade, coating and retained/cut-end masses. Broad steel-wire identity is conditional on actual non-alloy steel composition; no hot-dip/quench route, zinc percentage or recycled content is assumed. Coating/grade/provider compatibility remains a separate link requirement.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_parts divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources: `china4u-sticker`; `sunnywell-sticker`

###### Alternating current (`electricity`)

Meter actual grid-average AC below 1 kV for receiving, collation/folding, stitching, trimming, dust collection, compressed air and packing. This selected flow specifies location of supply CN; use it only for a documented CN supply. Other countries or voltages require a separately verified replacement, not an assumed geographic substitution. Require the actual grid/year/location and loss boundary; neither hydro-only supply nor a voltage-transformation service replaces consumed grid electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable campaign exchange through cp_energy divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Complete outgoing corrugated transport carton (`carton`)

Weigh the actual empty corrugated transport carton, including supplied joints, separately from net book mass. Record material/grade, moisture, closing configuration and provider. Actual separate closure tape, film, pallet or labels require their own cards; no generic packaging percentage is assigned. This is one complete container, not unconverted board or only joint adhesive. The available box UUID fixes primary/recycled fibre fractions not established for this construction; no compatible unrestricted complete-container UUID is confirmed.

- Selected flow: Complete outgoing corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_parts divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Incoming complete corrugated supplier carton (`incoming_carton`)

Conditional one complete corrugated carton received around supplied sheet components. Weigh its actual material, moisture, joints and contamination separately from the supplied component mass. Account for stocks, supplier returns, reuse into outgoing packing and segregated discard. If its supply burden is already included in the sheet provider, retain this physical exchange and reconcile that inclusion without charging a second production burden. No unrestricted compatible complete-container UUID is confirmed; a board or fixed-fibre-fraction box is not a substitute.

- Selected flow: Incoming complete corrugated supplier carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_parts divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Mineral lubricating oil for finishing machinery (`lubricating_oil`)

Conditional mineral lubricating oil actually consumed in finishing-machine maintenance. Measure withdrawals, returns and retained machine stock by grade. A total-synthesis lubricating-oil record with a petroleum-refining comment is not accepted for this mineral-oil identity; no general oil recipe or dose is assumed.

- Selected flow: Mineral lubricating oil for finishing machinery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_maintenance divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`
- Sources:

#### Outputs

##### Product flows

###### Printed Matter (`finished_book`)

Accepted complete saddle-stitched sticker activity book. Include cover/content pages, stickers, retained PSA/ink/finishes, release liners, delivered matrix, moisture and staple wire in net reference mass. Exclude transport carton and rejects. Broad mechanically printed paper identity contains this subset without an opposing route/material restriction; The full native comment discusses postal printed-matter fee conventions and paper-3D prototypes. Its product type, paper-print route, factory state, Mass reference and classification jointly support this physical subset; neither comment establishes postal service or a prototype process. No background process is inferred from identity. There is one final product output only.

- Selected flow: Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg.
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `source_rule`
- Collection protocol: `cp_output`
- Sources: `china4u-sticker`; `sunnywell-sticker`

##### Waste flows

###### waste paper (unspecified) (`paper_trims`)

Segregated printed non-adhesive paper/board trimmings, as generated. Broad waste-paper identity is restricted here to this single measured stream; record ink/coating/finish contamination, moisture and actual recipient. No clean-paper recovery yield or recycled-content credit is presumed.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_waste divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `china4u-sticker`; `sunnywell-sticker`

###### Printed paper acrylic-PSA siliconized-liner composite trimmings (`sticker_trims`)

One composite offcut stream of the received printed paper/acrylic-PSA/siliconized-paper laminate. Keep actual ink/finish contamination and component fractions. Do not relabel it as clean waste paper, pure adhesive or bare separator-paper scrap; no matching complete-composite UUID is confirmed.

- Selected flow: Printed paper acrylic-PSA siliconized-liner composite trimmings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_waste divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `china4u-sticker`; `sunnywell-sticker`

###### Rejected assembled paper sticker activity book (`reject_books`)

One rejected assembled sticker-book stream, retaining its actual paper/adhesive/liner/finish/wire composition. Record units and measured net mass. Internal rework is not an external waste exchange; dismantled separately shipped constituents need distinct cards and a reconciliation to the original reject mass.

- Selected flow: Rejected assembled paper sticker activity book
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_waste divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `china4u-sticker`; `sunnywell-sticker`

###### Steel scrap, offcuts (`wire_scrap`)

Steel wire cut ends from staple formation at the stitcher, not silicon-wafer cutting wire or assumed incoming-wire straightening waste. The selected cutting-offcut waste identity includes this steel stream and leaves treatment outside its boundary. Record coating, contamination, measured mass and receiving treatment without an assumed recycling credit.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_waste divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `china4u-sticker`; `sunnywell-sticker`

###### Collected printed-paper cutting dust (`collected_dust`)

Separately collected dry printed-paper cutting dust, with actual pigment/mineral/PSA/liner/finish contamination from its capture location. Weigh collector stocks and offsite dispatch. This solid waste is not outdoor particulate release and is not automatically paper-recyclable. No exact powder-state/composition UUID is confirmed.

- Selected flow: Collected printed-paper cutting dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_waste divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Used lubricating oil (`spent_oil`)

Conditional used mineral lubricating oil from the documented maintenance grade. The selected record permits petroleum/synthetic used lubricant without prescribing treatment; only this task’s petroleum-based subset is used. Keep contamination, storage change, mass and actual licensed receiving route; no dilution water or solvent is silently included.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_maintenance divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`
- Sources:

###### waste paper (unspecified) (`incoming_carton_waste`)

One segregated discarded incoming corrugated-paper packaging stream. Record actual polymer/adhesive contamination and recipient; the broad waste-paper identity does not imply clean packaging or a universal 2% loss. Reused cartons remain in physical stocks and are not also counted as new purchases.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_waste divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Conditional actual dry-cutting particles of nominal aerodynamic size at or below 2.5 micrometres crossing into outdoor air after controls, air subcompartment unspecified. Quantify through cp_air; no default dust factor, indoor-exposure substitution or upper-atmosphere/soil identity is used.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_air divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method201a-2020`

###### particles (PM2.5 - PM10) (`pm_mid`)

Conditional actual outdoor fraction above 2.5 and at or below 10 micrometres. Derive only from compatible cumulative PM10 and PM2.5 results or directly recovered fraction masses; never add cumulative PM10 as another emitted row.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_air divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method201a-2020`

###### particles (> PM10) (`pm_coarse`)

Conditional actual outdoor particles above 10 micrometres. Use the corresponding size-fraction mass from a valid sampling train, or total minus PM10 only after matching sampling/recovery/temperature/basis and demonstrating complete compatible total coverage. Unknown coarse fraction remains pending; it is not zero or a correction flow.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange through cp_air divided by accepted net book mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method201a-2020`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_subdivide` | shared operations | Use dedicated campaign/stage measurements first. For shared finishing electricity and labour-supported service loads use documented causal machine runtime/load evidence, retaining start-up and reject work. Do not assume page counts, price or mass prove a causal share. |  |
| `a_residual` | joint burdens | If subdivision or a justified causal relationship cannot resolve remaining joint burdens, define and justify a separate study allocation with complete physical and value evidence (actual sale quantities, price, currency, price date, valuation boundary and any conversion); keep unallocated totals and shares summing to one. Unknown allocation blocks affected dataset completeness. Physical output is unchanged by these shares. |  |
| `a_waste` | residues | Classify recipients using actual contamination and acceptance. Waste does not become a co-product because it is sold or labelled recyclable. Apply declared study recycling/end-of-life rules once, with actual treatment; neither supplier recycled content nor outgoing scrap gives an automatic avoided-burden credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `p_assemble` | finished_book | acceptance weighing | lot/configuration; accepted count; net book mass; packing tare; moisture; page/liner/matrix/staple composition; acceptance tests | Calibrated net lot weighing excluding removable transport packing; reconcile counts and delivered complete configuration. Count/area QA checks use measured actual book mass, not a catalogue grammage default. | kg | each accepted lot | same declared campaign; retain actual dates | one stated site/configuration, suppliers explicitly linked | per 1 kg reference flow | calibration, stock reconciliation, original records and uncertainty/limits |
| `cp_parts` | `p_assemble` | product inputs | material lot records | SKU/provider; received/returned/opening/closing mass; moisture; sheet area/count; layer assay/coat/liner/matrix/finish; component elemental-carbon assay and fossil/biogenic origin; wire grade; background reference basis; external/internal return sender/receiver; incoming/shipped packing and reuse stock; inlet/outlet air T/P/RH/volume and material conditioning/moisture change | Calibrated scales and reconciled supplier stock/assay records; weigh each received physical component. Use actual moisture/elemental-carbon analyses or matched supplier certificates and carbon-origin records; no fixed carbon fraction or biomass-balance substitution. Reconcile wet/dry/area bases and retain source uncertainty; purchased composites count once, their constituents are upstream decomposition only. Reconcile supplier returns and every stage transfer on both sides. Measure received packing separately even if its supply burden is bundled in the component provider; do not charge it twice. Record shipped packing and closure materials as physical gate outputs outside net reference mass. | kg | each lot and inventory change | same declared campaign; retain actual dates | one stated site/configuration, suppliers explicitly linked | per 1 kg reference flow | calibration, stock reconciliation, original records and uncertainty/limits |
| `cp_energy` | `p_assemble` | electricity | stage meter record | meter/calibration; kWh; stage running/idle/setup; compressor/dust-capture allocation; grid supply country/voltage/year/location/provider; incoming and outgoing energy, stock change and heat dissipation with measurement/estimate uncertainty | Read calibrated submeter and actual shared-meter attribution records; reconcile energy totals and supplier delivered-electricity boundary. No steam or fuel inferred from electrical-property naming. Track electrical work and resulting heat dissipation once; internal compressed air is not another purchased-electricity exchange. Document the physical energy balance and uncertainty; no invented heat quantity or automatic zero for missing losses. | kWh; MJ | each shift/campaign | same declared campaign; retain actual dates | one stated site/configuration, suppliers explicitly linked | per 1 kg reference flow | calibration, stock reconciliation, original records and uncertainty/limits |
| `cp_waste` | `p_assemble` | waste outputs | segregated waste ledger | stream; source stage; kg; opening/closing stock; moisture; paper/ink/coating/PSA/liner/finish/steel contamination; component carbon assay and origin; recipient/treatment; rework status | Segregated calibrated bin/dispatch weighing with recipient evidence. Keep solid collector dust separate from outdoor releases and shipped liner/matrix separate from offsite waste. Reject dismantling and internal rework preserve physical history. | kg | each collection/dispatch and stock change | same declared campaign; retain actual dates | one stated site/configuration, suppliers explicitly linked | per 1 kg reference flow | calibration, stock reconciliation, original records and uncertainty/limits |
| `cp_maintenance` | `p_assemble` | lubricating_oil; spent_oil | maintenance lot ledger | grade/SDS; withdrawals/returns; machine stocks; run hours; spent oil moisture/contamination and recipient | Weigh actual grade withdrawals, retained stocks and separately dispatched used oil; assign causally to campaign equipment work. Non-use requires records; spills/wipes/other grades need separate atomic rows. | kg | each maintenance and campaign | same declared campaign; retain actual dates | one stated site/configuration, suppliers explicitly linked | per 1 kg reference flow | calibration, stock reconciliation, original records and uncertainty/limits |
| `cp_air` | `p_assemble` | pm_fine; pm_mid; pm_coarse | emission measurement campaign | outlet/control; operating hours; air volume T/P wet/dry basis; fractional filter/cyclone masses; blanks/recovery/detection limits; fugitive protocol; aerodynamic cut basis | Use a competent laboratory with documented applicable sampling, calibration, representative operating coverage and unit basis. For dry droplet-free stationary exhaust, Method201A describes filterable particle size cuts; satisfy its complete sampling/temperature/recovery conditions. It is not a fugitive/indoor method or proof of total/condensable coverage. Survey fugitive pathways separately with an independently justified site protocol; unsupported quantities remain unknown. | kg; mg/m3; m3; h | representative runs with campaign/control changes | same declared campaign; retain actual dates | one stated site/configuration, suppliers explicitly linked | per 1 kg reference flow | calibration, stock reconciliation, original records and uncertainty/limits |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_campaign` | all inventory rows | For each row divide its measured net attributable campaign numerator in its declared unit by accepted net complete book mass in kg; no numerical consumption default. Final reference output is 1 kg. | cp_parts; cp_energy; cp_waste; cp_maintenance; cp_air; cp_output | per 1 kg reference flow |  |
| `physical_reconciliation` | physical ledgers | Reconcile opening stock plus received material against accepted complete books, external wastes/releases and closing stock in the same moisture/composition basis. Keep separate water and fossil/biogenic-carbon ledgers; measure changing moisture or add actual elementary moisture exchanges rather than assigning residuals to dust. Account explicitly for external supplier returns, shipped packing and maintenance retained stocks. Distinguish net H2O sorption/desorption from throughflow ambient-air humidity using measured material-water change and inlet/outlet air T/P/RH on matched wet/dry volume bases. Do not treat all exhaust moisture as product evaporation or use dry solids to close a wet-mass balance. Identify actual cross-boundary moisture in its correct direction/phase/medium as separate atomic exchanges before completing a dataset; unknown is not zero. Separately reconcile electrical input, useful work, stored energy and heat dissipation, retaining estimation uncertainty without creating an environmental credit. Set tolerance from actual instrument uncertainty and unresolved terms, never a universal percentage. | cp_parts; cp_output; cp_waste; cp_maintenance; cp_air | unallocated physical balances |  |
| `particle_intervals` | pm_fine; pm_mid; pm_coarse | Use matched campaign/control/sampling bases. PM2.5 is cumulative fine mass; PM2.5–PM10 is PM10 minus PM2.5; >PM10 is directly recovered oversize mass or compatible verified total minus PM10. Reject negative/incompatible differences; never sum PM2.5 and cumulative PM10. Method201A filterable and condensable coverage remain distinct. | cp_air | three disjoint outdoor fractions | `epa-method201a-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_parts` | supplied components | Resolve every physical layer/state and amount-compatible supplier stage, including upstream removed matrix/liner and coating/drying water. Missing layer masses, provider unit basis or offsite waste fate prevents a complete linked dataset. | cp_parts; supplier primary records |
| `dq_acceptance` | finished_book | Retain agreed liner release and separate removable adhesion tests on the specified printed-paper adherend, including PSA grade, dwell/conditioning, peel/residue/fibre damage, liner integrity, configuration and stitching/trim acceptance tests. Manufacturer safety/quality claims are not an actual product test or certification. | cp_output; actual test records |
| `dq_completeness` | all rows | Retain actual quantities, limits, non-use evidence and named unresolved identities separately. Blank UUID, unknown emission or missing supplier data is not zero or a verified substitute; identity lookup is not dataset quality approval. | all collection records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | finished_book | Require exactly one final reference output and calibrated liner/matrix-inclusive accepted mass. Match reference amount, inventory denominator, collection aggregation and EN/ZH scope. Missing qualifiers/reference basis fails completeness. |  |
| `v_chain` | all inputs and wastes | Check flow type, physical state, route/CAS, official localized names, native reference property/unit group/unit and each row’s provider quantity compatibility. Native region, route, pressure, concentration, composition and phase restrictions are hard matching conditions, not gaps waived by later collection. Broad identity does not excuse an opposing route or omitted liner; unresolved rows need an explicit reviewed physical match before dataset linkage. |  |
| `v_ledgers` | physical balances and allocation | Reconcile unallocated mass/water/carbon/energy/internal links, supplier returns, incoming and shipped packing, maintenance and reject/rework/waste stocks before allocation. Check separate burden shares and donor/receiver consistency; actual negative differences or unexplained residuals block affected data acceptance. |  |
| `v_air` | air releases | Require disjoint size fractions and correct outdoor medium, actual control/measurement coverage, no duplicated captured solids and no unsupported zero. Preserve unknown >PM10/fugitives/condensables; methods do not themselves prove a measurement was performed. | `epa-method201a-2020` |
| `v_boundary` | scope/provider review | Reject substituted bare stickers, textbook UUIDs explicitly excluding sticker books, incompatible synthetic media/binding/routes, duplicated supplier stages or untracked onsite extensions. Candidate methodology is not independent scientific approval or accepted CPC mapping. | `un-cpc3-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Explicit route-matched sticker activity book supply in declared downstream studies |
| allowed_use | Only measured documented configuration with complete supplier/treatment links and stated uncertainty; assess additional distribution/use/end-of-life separately |
| excluded_use | Whole CPC32690 averages, label-only/bare-sticker substitution, other bindings/materials, safety approval or generic per-book default quantity |
| required_metadata | All reference qualifiers; geography/date/technology, supply handoffs, layer masses, moisture, utilities, recipients, allocation and original evidence |
| required_quality_disclosure | Coverage/performed/skipped checks; source independence and limits; unresolved identity/provider/quantity; measurement uncertainty and non-use evidence |
| update_trigger | Change in paper/PSA/liner/finish/wire/binding/print route, supplier boundary, site/control/meter method, accepted design or better evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | [UNSD CPC3.0 Explanatory Notes, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf); PDF/printed149 and152; read2026-10-12 | Sticker-book exclusion from32292 and32690 residual coordinate; no manufacturing recipe |
| `sunnywell-sticker` | handbook | [Sunnywell Child Sticker Printing with a Book](https://www.sunnywellprinter.com/child-sticker-printing-with-a-book.html); specific example and surrounding options; read2026-10-12 | Actual paper sticker booklet/saddle stitching/laminated cover capability; single-producer case, all quantities/prices discarded |
| `china4u-sticker` | handbook | [Chinaprinting4u Children’s Sticker Book Printing](https://www.chinaprinting4u.com/sticker-book-printing); Paper and Binding sections; read2026-10-12 | Distinct content/cover/sticker paper components and saddle-stapling capability; not selected recipe/provider proof |
| `basf-psa` | handbook | [BASF Solutions for Pressure-Sensitive Adhesives](https://www.basf.com/dam/jcr:af4f1f47-5762-36bc-97b9-ab5d4358ec87/basf/www/hk/documents/en/products-industries/dispersions/adhesives/BASF_PSA_brochure_EN.pdf); PDF3 printed3–4, Specialty Paper Label / Books & Publications; read2026-10-12; edition date unstated | Independent removable acrylic-dispersion paper-sticker application capability; portfolio guidance, no exact SKU/dose/safety approval |
| `jrc-paper-bref-2015` | official_guidance | [JRC Production of Pulp, Paper and Board BREF, 2015](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf); 7.1.4 PDF703/printed665, 7.1.10 PDF708/printed670; read2026-10-12 | Actual upstream paper manufacture/broke/cutting/dust; not binder/printer emission factors or wood-processing data |
| `epa-offset-ctg-2006` | official_guidance | [EPA Offset Lithographic/Letterpress CTG, September2006](https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf); PDF13/printed7; read2026-10-12 | Upstream conventional offset absorption/oxidative route versus heatset/radiation route; no historical retention or emission percentages used |
| `epa-method201a-2020` | official_guidance | [EPA Method201A, October7,2020](https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf); sections1–3/PDF1–3; EPA internet copy with its version caveat; read2026-10-12 | Conditional droplet-free stationary-source filterable-size measurement and limits; no general factor, legal-compliance or fugitive-monitoring claim |
