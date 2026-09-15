---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.bridges-bridge-sections-towers-and-lattice-masts-of-iron-or-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢铁制桥梁、桥梁体段、塔楼及格构杆

## 1. 范围与适用性

本 PCR 适用于作为可运输结构产品供应的钢铁制桥梁、桥梁体段、塔楼及格构杆的工厂制造。适用对象包括完整的工厂制造产品以及可识别的工厂制造分段；无论交付状态为无涂层、涂漆、热喷涂或热浸镀锌，均须声明交付产品状态。

前景边界包括外购钢材及辅助材料的接收与搬运；由制造商实施的划线、切割、钻孔、成形、机加工、焊接、螺栓连接与装配；路线特定的表面清理与防腐处理；检验、放行前返修、厂内转运以及工厂大门交付准备。外购物料的生产由相连的上游数据集表示。

本 PCR 不包括混凝土桥面板和基础，不包括并非由报告制造商永久装入产品的缆索以及机械电气设备，也不包括施工现场架设、土建工程、安装服务、工厂大门后的出厂运输、使用、维护、拆除和寿命终止处理。已建成桥梁资产、钢结构架设服务和桥梁一般施工服务属于不同的产品系统边界。

CPC 名称确定分类身份，本节的语义边界确定规范 PCR 身份。所涵盖的桥梁和塔/格构杆产品共同采用以质量为基准的结构钢制造、连接、表面处理、检验和工厂大门数据生产规则，因此适用同一方法。产品子类和实际制造路线仍是必需限定信息。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.bridges-bridge-sections-towers-and-lattice-masts-of-iron-or-steel |
| classification_refs | CPC 3.0：42110（精确分类语境） |
| covered_products | 工厂制造的钢铁制桥梁、桥梁体段、塔楼、格构杆；随产品供应的永久紧固件和工厂施加的防腐层 |
| excluded_products | 已建成桥梁资产；高架公路；钢结构架设和桥梁施工服务；预制建筑物；本类别以外的其他结构金属产品；临时运输工装；现场安装、使用、维护及寿命终止服务 |
| representative_product | 已放行并可进行后续运输和架设的工厂制造结构钢桥梁体段或塔/格构杆分段 |
| production_route | 按图纸控制的钢板和型钢接收、切割/成形/机加工、焊接或机械连接、路线特定的表面准备与防护、检验和工厂放行 |
| market_state | 制造商工厂大门处的无涂层耐候钢、车间底漆或涂漆钢、热喷涂钢或热浸镀锌钢；按数据集声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供已完成工厂制造、可用于所声明后续运输和架设范围的承载钢铁制桥梁、桥梁体段、塔楼或格构杆产品 |
| How much | 工厂大门处 1,000 kg 已放行产品净质量 |
| How well | 符合所声明图纸、钢级、尺寸公差、连接与焊缝要求、检验状态和防腐规范 |
| How long or cycle | 工厂大门处一个已放行制造批次；所涵盖输出为中间结构产品，因此不包含使用寿命主张 |
| reference_flow_link | 由批次特定的已放行净质量归一化得到 1,000 kg 所声明的涵盖产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 已放行产品净质量 |
| 参考产品流 | 铁或钢制的桥梁、桥部件、门塔及格子桅 `4a0df357-537a-4fce-aa35-87678778a6e4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类；完整产品或分段范围；图纸及其版本；钢级和适用材料规范；产品净质量方法；制造和连接路线；焊接方法及焊材分类；防腐状态和涂层体系；永久紧固件纳入情况；工厂大门放行状态；制造地域；报告期；可获得时披露供应商和再生料含量 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量或计算永久产品组件的已放行净质量，包括永久紧固件以及工厂施加的金属或油漆涂层；排除可重复使用的吊装和运输工装以及单独发运的安装耗材。 |
| `mass_input_consistency` | 钢材、焊材、化学品、涂料和废钢 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越前景边界的实际质量。对于溶液或配制涂料，记录交付产品质量，并在相关时分别声明浓度、固含量、密度换算和未使用退料。 |
| `metered_electricity` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始计量能量单位，并采用可审计的精确单位换算转换为 MJ；不得根据费用推算电量。分别声明电网、用电电压、地域、损耗边界以及任何现场发电或外送电。 |
| `gas_reference_conditions` | 天然气和工业氧气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 仅在同时记录温度、压力、干湿基准以及仪表修正或供应商参考条件时，方可记录计量体积，以保证体积可复现。 |
| `fuel_and_water_basis` | 柴油和工艺用水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录交付或消耗质量。任何体积到质量的换算都必须采用批次或供应商特定的密度，并保留来源记录和参考条件。 |
| `no_cross_route_averaging` | 路线条件性输入和输出 | 所声明行的属性 | 所声明行的单位 | 当某条件性路线不存在时，将相应行标为不适用。不得把镀锌、涂漆、焊接、切割、燃料或用水交换平均分摊到未经历相应操作的产品。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂边界处收到的外购钢板、结构型钢、永久外购组件、焊材、辅助材料、涂层材料、燃料和公用工程 |
| starting_condition_role | 前景工厂制造的外购投入大门 |
| product_classification_scope | 工厂制造的钢铁制桥梁、桥梁体段、塔楼和格构杆；不包括已建成施工资产或架设/施工服务 |
| recursive_input_rule | 如果外购桥梁体段、塔段或其他投入本身属于本 PCR 类别，则将其作为单独产品投入，记录供应商数量，并连接一个终止于该供应商工厂大门的上游数据集；不得静默并入报告工厂自己的输出，也不得形成自引用汇总。 |
| upstream_dataset_requirement | 每种外购物料、公用工程、燃料、化学品和外部制造组件均应连接到地域和技术代表性适当的上游数据集；披露代理数据和供应商特定数据缺口。 |
| disclosure | 声明纳入的工厂操作、外包操作、涂层路线、连接路线、内部退料处理、分配方法、截断、补充原子交换、工厂位置、报告期以及准确的工厂大门放行状态。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | 纳入可归因于接收、制造、连接、路线特定的表面处理、检验、放行前返修、厂内转运和工厂大门发运准备的全部物料、能源、水、废物和直接排放交换。 | `eu-pef-2021-2279`; `fhwa-bridge-welding-reference-manual-2020` |
| `boundary_outsourced_steps` | outsourced_fabrication | 纳入属于已放行产品范围的外包切割、成形、焊接、热处理、表面准备或涂装，采用供应商特定活动数据或披露的代表性数据集；不得仅因其发生在场外而省略。 | `eu-pef-2021-2279` |
| `boundary_exclusions` | downstream_and_capital_scope | 排除施工现场架设、土建工程、工厂大门后的配送、使用、维护、拆除和寿命终止。仅当研究所遵循的方法允许时才排除资本货物，并披露该排除。 | `eu-pef-2021-2279` |
| `boundary_complete_atomic_flows` | foreground_inventory_completeness | 当实际物料、紧固件、焊材、保护气体、磨料、化学品、涂层组分、燃料、公用工程、废物和基本流排放跨越所声明边界时，均须作为单独原子交换补充，即使其未列入下列常见行。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_structural_fabrication` | 一体化结构制造和工厂表面处理 | `required` | 始终纳入；各切割、焊接、清理、涂层、燃料和用水行仅在所声明批次实际采用时适用 | 从收到结构材料，经切割/成形、连接、路线特定表面处理、检验直至放行的前景制造 | 1,000 kg 已放行产品净质量 |

### 过程：一体化结构制造和工厂表面处理（`integrated_structural_fabrication`）

#### 输入

##### 产品流

###### 结构钢板投入（`in_medium_plate`）

根据批次特定的采购和领料记录，记录进入切割、成形、机加工或装配的中厚板。必须声明钢级、尺寸、涂层状态和供应商路线。

- 选定流：中厚板 `53818733-c47c-4e11-a23d-af2720338592`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：所声明批次的实测领用质量减去有记录的未使用退库物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：

###### 热轧结构型钢投入（`in_hot_rolled_large_section`）

将进入切割、钻孔、成形或装配的热轧大型材与钢板分开记录。实际截面形状、钢级和供应商路线是必需限定信息。

- 选定流：热轧大型材 `cbeefeb8-2dfc-48f5-b643-f35aed0d52a1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：所声明批次的实测领用质量减去有记录的未使用型材退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：

###### 药芯焊丝投入（`in_flux_cored_wire`）

仅对使用药芯焊丝电弧焊的批次记录药芯焊丝。所声明焊接工艺使用的其他焊条、焊丝、焊剂和保护气体必须作为单独原子交换补充。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：领用质量减去退回受控库存的密封未使用焊丝
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用药芯焊丝电弧焊时，每 1,000 kg 已放行产品净质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：`fhwa-bridge-welding-reference-manual-2020`

###### 工业氧气投入（`in_industrial_oxygen`）

仅当工业氧气跨越前景边界，用于氧燃料切割、加热或其他声明的制造操作时记录。不得把未采用氧气路线的用量平均计入批次。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：在所声明参考条件下归属于批次的供应商修正或计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用氧气操作时，每 1,000 kg 已放行产品净质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_fuel_records`
- 来源：

###### 气态天然气投入（`in_natural_gas`）

仅对直接燃烧加热、热切割、固化或其他声明工厂用途记录气态天然气。必须披露组成、参考条件和生物质气掺混情况。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按照所声明分配规则归属于批次的修正计量或发票体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：使用天然气时，每 1,000 kg 已放行产品净质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_fuel_records`
- 来源：

###### 外购电力投入（`in_electricity`）

切割、机加工、焊接、通风、压缩空气、涂装、厂内搬运和检验所用外购电力应根据电表记录，或依据工厂总表进行可审计分配。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：归属于所声明批次的外购计量电力，并通过可审计的精确单位换算转换为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_fuel_records`
- 来源：`eu-pef-2021-2279`; `fhwa-bridge-welding-reference-manual-2020`

###### 柴油投入（`in_diesel_fuel`）

分别记录前景边界内自有移动设备、发电机或直接燃烧设备消耗的柴油。仅当承包活动属于产品边界且未由供应商数据集表示时，才纳入承包商燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于批次的实测或库存核算消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：使用柴油时，每 1,000 kg 已放行产品净质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_fuel_records`
- 来源：

###### 工艺用水投入（`in_process_water`）

仅在湿法清洗、漂洗、水基表面处理或其他声明工厂操作中使用时记录工艺用水。闭路循环冷却水或不同供应水质必须单独表示。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于所声明批次的计量或批记录消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用用水操作时，每 1,000 kg 已放行产品净质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_fuel_records`
- 来源：

###### 氢氧化钠投入（`in_sodium_hydroxide`）

仅当所声明表面处理路线使用氢氧化钠时记录。应记录交付溶液质量和浓度，不得混同纯 NaOH 质量与溶液质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：所声明批次消耗的交付产品质量，并记录溶液浓度和未使用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用碱洗操作时，每 1,000 kg 已放行产品净质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：

###### 特高纯锌金属投入（`in_shg_zinc_metal`）

仅当所声明产品的热浸镀锌浴加入该等级时记录特高纯锌金属。其他锌等级、锌铝丝和镀浴合金添加剂属于不同原子交换。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用有记录的镀浴库存核算，将补加质量归属于所声明批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已放行热浸镀锌产品质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：`fhwa-thermal-spray-coatings-2014`

###### 双组分富锌环氧底漆投入（`in_zinc_rich_epoxy_primer`）

仅对采用所声明涂层体系的批次，记录跨越工厂边界的湿态混合双组分富锌环氧底漆。经审计的候选项未验证所需配方，因此其 Tiangong 流 UUID 仍未解决。

- 选定流：双组分富锌环氧底漆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于批次的湿态混合产品施用质量加喷涂和混合损耗，扣除单独计量的可回收退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：使用该底漆时，每 1,000 kg 已放行产品净质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：`fhwa-one-coat-steel-bridges-2011`

##### 废物流

不规定废物投入。如果废物衍生投入跨越边界，应将具体废物流作为原子投入补充，并记录其处理和废物终止状态。

##### 基本流

本常见模式不规定基本流投入。任何实测的基本资源投入均应作为单独原子交换补充。

#### 输出

##### 产品流

###### 已放行参考产品（`out_reference_product`）

已放行输出是通过所声明验收和检验要求的涵盖工厂制造产品的实测或计算净质量。

- 选定流：铁或钢制的桥梁、桥部件、门塔及格子桅 `4a0df357-537a-4fce-aa35-87678778a6e4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由批次特定的已放行产品净质量归一化后为 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 已放行产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_release_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 工业后钢废料输出（`out_post_industrial_steel_scrap`）

将以工业后废钢形式离开制造过程的钢材边角料、切屑和不合格钢件，与退回库存的可重复使用材料以及有色或带涂层危险废物分开计量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：离开前景边界的工业后钢废料实测质量，扣除内部再使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_and_waste_records`
- 来源：

##### 基本流

###### 天然气燃烧产生的化石二氧化碳（`out_co2_fossil_natural_gas`）

对前景边界内天然气燃烧产生的直接化石二氧化碳进行计算或计量，并与上游天然气供应排放分开。现场未燃烧天然气时，该行不适用。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接监测质量，或实测天然气量乘以有记录且与组成和地域相适应的化石 CO2 因子；排除上游排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：燃烧天然气时，每 1,000 kg 已放行产品净质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_records`
- 来源：

###### 柴油燃烧产生的化石二氧化碳（`out_co2_fossil_diesel`）

对前景边界内柴油燃烧产生的直接化石二氧化碳进行计算或计量，并与上游柴油供应排放以及任何声明的生物成分分开。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接监测质量，或实测柴油量乘以有记录且与等级、组成和地域相适应的化石 CO2 因子；排除上游排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：燃烧柴油时，每 1,000 kg 已放行产品净质量；否则不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | foreground_burden_allocation | 通过单独计量、批次记录或以其他方式细分可直接归属于所声明产品批次的操作和公用工程，优先避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_causality` | shared_factory_operations | 无法细分时，采用有记录的因果物理动因，例如实测机器时间、焊缝长度、切割时间、涂装面积、提升质量-距离或占用过程时间。仅在证明产品质量代表共享操作物理因果关系时，方可仅按产品质量分配。 | `eu-pef-2021-2279` |
| `allocation_other_relationship` | residual_multifunctionality | 只有在说明为何无法采用细分、系统扩展和相关物理关系后，方可使用其他关系（包括经济分配）；采用经济分配时披露价格、期间和敏感性。 | `eu-pef-2021-2279` |
| `allocation_scrap_no_hidden_credit` | post_industrial_steel_scrap | 按实测质量和去向记录工业后钢废料。除非研究所遵循的方法明确要求且已披露并避免重复计算，否则不得在本工厂大门清单中计入替代原生钢的避免负荷或回收替代收益。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_consumable_records` | `integrated_structural_fabrication` | `in_medium_plate`; `in_hot_rolled_large_section`; `in_flux_cored_wire`; `in_sodium_hydroxide`; `in_shg_zinc_metal`; `in_zinc_rich_epoxy_primer` | 采购收货、材质证明、库存领退、批次混合和镀浴库存记录 | 产品身份；供应商；批号；等级/配方；领用总量；未使用退料；浓度或固含量；单位；日期；关联产品批次 | 将可追溯收货和领用记录与制造批次核对；可行时采用校准称量并保留换算 | kg | 每次收货和领用；按批次和报告期核对 | 数据集所代表的完整生产期 | 报告工厂内所有纳入生产线和储存/领用点，以及范围内外包记录 | 按原子产品身份汇总消耗量，仅扣除有记录的可重复使用退料，再按已放行产品净质量归一化 | 采购记录；材质证明；库存台账；秤校准；配料单；镀浴核算；批次追溯 |
| `cp_utility_and_fuel_records` | `integrated_structural_fabrication` | `in_industrial_oxygen`; `in_natural_gas`; `in_electricity`; `in_diesel_fuel`; `in_process_water` | 校准分表、供应商发票、储罐/库存核算或设备日志 | 表计起止；修正数量；单位；参考条件；燃料等级；表计位置；运行小时；分配动因；批次；日期 | 优先采用批次或过程分表；否则核对工厂总量并采用有记录的因果动因进行分配 | 各行指定的 m3、MJ 或 kg | 连续或每次交付，至少按月汇总并与批次核对 | 与已放行产品相同期间，相关时包括期初/期末库存 | 所有范围内表计、储罐和设备；排除已计入外包数据集的数量 | 扣除外送和边界外用途，仅分配剩余范围内数量，以可审计方式换算单位，再归一化 | 表计校准；发票；储罐盘点或库存平衡；设备日志；分配工作表；参考条件记录 |
| `cp_product_release_records` | `integrated_structural_fabrication` | `out_reference_product` | 放行证书、校准秤记录、发运质量记录或受图纸控制的永久组件 BOM | 产品子类；批次；图纸版本；组件质量；永久紧固件质量；涂层质量；排除工装质量；验收状态；放行日期 | 优先直接校准称量；否则汇总经核实的永久组件质量，并与发运或地磅数据核对 | kg | 每个已放行批次 | 完整报告期 | 报告工厂放行的全部涵盖产品 | 仅包括已验收永久产品质量；排除可重复工装和未放行/返工库存；归一化前汇总各批次 | 放行证书；检验验收；秤校准；签字 BOM；发运质量核对 |
| `cp_scrap_and_waste_records` | `integrated_structural_fabrication` | `out_post_industrial_steel_scrap` | 分类废物磅单和库存移动记录 | 废物身份；合金/涂层污染；质量；容器皮重；来源批次/过程；内部再使用；去向；日期 | 称量每个外运分类废钢流；归类为废物前核对内部退料 | kg | 每次发运并按月核对 | 与生产记录相同期间 | 范围内所有制造、返修和不合格品区域 | 仅汇总跨越前景边界的废钢，扣除有记录的内部再使用；其他废物保留为单独原子行 | 校准磅单；废物转移联单；回收商收据；内部退料台账 |
| `cp_direct_combustion_records` | `integrated_structural_fabrication` | `out_co2_fossil_natural_gas`; `out_co2_fossil_diesel` | 连续排放监测记录，或燃料消耗与排放因子计算记录 | 燃料行；数量；组成/等级；化石份额；因子值；因子单位；因子来源和年份；氧化假设；监测结果；批次分配 | 具有代表性时采用直接监测；否则将实测燃料量乘以与燃料、地域和期间相容的有记录因子，并保持天然气和柴油分别计算 | kg CO2 | 每个监测区间或燃料核算期；与生产期汇总一致 | 与燃料和已放行产品记录相同期间 | 前景边界内全部直接燃烧源 | 按燃料和来源汇总直接化石 CO2，排除上游供应排放，采用与燃料相同的因果动因分配，再归一化 | 监测 QA 记录或完整因子引文；燃料记录；计算工作簿；分配记录；独立复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 期间或批次数量 × 1,000 / 已放行产品净质量（kg）；舍入前计算并保留未舍入值 | 原子批次或期间数量；已放行产品净质量 | 每 1,000 kg 参考产品的行数量 | `eu-pef-2021-2279` |
| `calc_released_net_mass` | `out_reference_product` | 优先采用校准直接称量。若计算，则汇总已验收永久钢材、永久紧固件和工厂施加涂层质量，仅扣除有记录的可重复使用工装以及不作为产品出售的包装，并与发运质量核对。 | 已验收组件/BOM 质量；涂层质量；秤或发运核对 | 已放行产品净质量 | `eu-pef-2021-2279` |
| `calc_shared_resource_allocation` | 共享公用工程和耗材 | 采用所选因果物理动因分配经核对的范围内总量；共享该总量的全部产品分配比例在归一化前之和必须为 1。 | 经核对的资源总量；产品特定动因值 | 分配给批次的资源数量 | `eu-pef-2021-2279` |
| `calc_direct_fossil_co2` | `out_co2_fossil_natural_gas`; `out_co2_fossil_diesel` | 对每种燃料分别计算：直接化石 CO2 = 实测燃料量 × 有记录的相容化石 CO2 因子，仅按有记录的化石份额调整；不得把上游供应排放计入这些基本流行。 | 实测燃料量；因子；化石份额；采用直接监测时的监测结果 | 按燃料区分的直接化石 CO2 质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_traceability` | 参考产品和钢材投入 | 将每个已放行批次与图纸、产品子类、钢级、材质证明、组件/BOM 记录、连接路线、涂层状态和放行验收相连。 | 图纸登记；材质证明；工艺流转卡；放行证书 |
| `dq_temporal_completeness` | 全部前景行 | 覆盖有代表性的连续生产期；对于经常性生产，通常至少为 12 个月；披露较短批次、停产、非典型项目和库存变化。 | 生产日历；表计/发票期间核对；批次清单 |
| `dq_atomic_completeness` | 前景清单 | 核对实际 BOM、耗材台账、公用工程表计、燃料记录、废物记录和环境许可。将每个补充边界交换作为原子行，并根据所遵循的截断规则说明任何省略。 | 签字的完整性核对和截断日志 |
| `dq_measurement_quality` | 实测数量 | 记录仪器、校准状态、分辨率、参考条件、换算因子和估算比例；标记缺少或过期校准。 | 校准证书；表计登记；换算工作表 |
| `dq_representativeness` | 上游数据集和共享分配 | 评价技术、地域和时间匹配；识别代理数据，并量化基于估算而非直接记录的前景比例。 | 数据质量评价；供应商地域；数据集元数据；分配工作表 |
| `dq_route_separation` | 焊接、涂层、燃料和用水行 | 证明不适用路线已排除，并且路线特定交换未平均计入没有进行相应操作的产品。 | 工艺流转卡；工单；涂层/焊接工艺；批次级分配 |
| `dq_emission_factor_provenance` | 计算的直接排放 | 保留完整因子身份、出版者、版本/年份、燃料基准、地域、单位、氧化和化石份额假设；不得使用无记录的默认因子。 | 因子来源和计算复核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference_flow_and_metadata | 确认参考 UUID、1,000 kg 质量基准、产品子类、图纸/版本、钢级、制造路线、涂层状态、地域、期间和工厂大门放行状态。 | `un-cpc-3-0-structure-2025`; `eu-pef-2021-2279` |
| `validation_process_coverage` | foreground_processes | 确认所有范围内接收、切割/成形/机加工、连接、路线特定表面处理、检验、返修、厂内转运和发运准备操作均由直接数据或披露的范围内外包数据集表示。 | `eu-pef-2021-2279`; `fhwa-bridge-welding-reference-manual-2020` |
| `validation_atomic_inventory` | process_inventory | 确认每个交换是一个实际产品、废物或基本流；补充的焊条、焊剂、气体、紧固件、磨料、涂层、燃料、水质、废物和排放均须拆分，不得使用集合标签。 | `eu-pef-2021-2279` |
| `validation_mass_reconciliation` | steel_and_product_mass | 核对领用钢材 = 已放行产品钢含量 + 工业后钢废料 + 内部退料 + 在制品变化 + 实测过程损失，并调查和披露每项余差。 |  |
| `validation_utility_reconciliation` | electricity_fuels_gases_water | 将分表或分配后的批次总量与工厂表计、发票和期初/期末库存核对；每个共享总量的分配比例之和必须为 1。 | `eu-pef-2021-2279` |
| `validation_route_conditions` | conditional_rows | 根据工单和工艺记录核验每个条件性输入和输出；不存在氧气、天然气、柴油、水、氢氧化钠、镀锌锌、底漆或直接燃烧路线时，必须标为不适用，而不是以零填入平均值。 | `fhwa-bridge-welding-reference-manual-2020`; `fhwa-thermal-spray-coatings-2014`; `fhwa-one-coat-steel-bridges-2011` |
| `validation_coating_compatibility` | coated_products | 确认涂层身份、层次/体系、表面准备、施工地点、湿/干基准和永久涂层质量的纳入，与所声明已放行产品一致。 | `fhwa-thermal-spray-coatings-2014`; `fhwa-one-coat-steel-bridges-2011` |
| `validation_direct_emissions` | direct_combustion | 确认天然气和柴油化石 CO2 行仅包括前景直接燃烧，采用实测燃料或代表性监测，并保留相容因子溯源和化石份额，且不重复计算上游排放。 |  |
| `validation_data_quality` | dataset_release | 确认时间覆盖、校准、来源追溯、数据缺口、代理使用、截断、分配和不确定性披露足以支持所声明下游角色。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 对所声明钢铁制桥梁、桥梁体段、塔楼或格构杆产品的产品特定或工厂平均工厂大门清单数据集 |
| downstream_use | 当产品子类、地域、技术、期间和工厂大门边界匹配时，可在建筑、基础设施、能源或通信系统中用作 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 产品特定建模；范围一致的供应商或工厂基准比较；明确补充运输、架设、使用、维护和寿命终止的下游施工及资产模型 |
| excluded_use | 已建成桥梁或已安装塔的结果；架设/施工服务数据集；通用结构钢生产；使用阶段耐久性主张；消费方法未记录的替代或回收收益 |
| required_metadata | PCR id 和版本/状态；参考 UUID 和数量；产品子类；完整/分段范围；图纸/规范；钢级；连接和涂层路线；净质量方法；工厂和地域；期间；分配；截断；上游数据集清单；补充原子交换 |
| required_quality_disclosure | 前景与估算比例；计量/校准状态；时间、地域和技术代表性；物料和公用工程核对；因子溯源；未解决流身份；不确定性和代理使用 |
| update_trigger | 产品设计或质量、钢级或供应商路线、焊接/装配技术、涂层体系、工厂能源结构、燃料、分配方法、外包范围、排放因子、地域或报告期发生实质变化；或未解决 UUID/范围证据需求得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 数据集（`dataset`） | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，第 42110 行，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | 正式分类身份和英文产品名称 |
| `china-mof-2013-tariff-schedule` | 官方指南（`official_guidance`） | 中华人民共和国财政部，税则表，第 127 页，税则号 73081000 和 73082000，https://gss.mof.gov.cn/gzdt/zhengcefabu/201306/P020130708509079068339.pdf（检索日期：2026-09-05） | 桥梁体段、塔楼和格构杆的专业中文产品术语 |
| `fhwa-bridge-welding-reference-manual-2020` | 手册（`handbook`） | 美国联邦公路管理局，《Bridge Welding Reference Manual》，FHWA-HIF-19-088，2019 年 9 月出版并含 2020 年 9 月勘误，https://www.fhwa.dot.gov/bridge/steel/pubs/hif19088.pdf（检索日期：2026-09-05） | 焊接过程分解、焊材角色、电焊设备、检验和质量记录 |
| `fhwa-one-coat-steel-bridges-2011` | 官方指南（`official_guidance`） | 美国联邦公路管理局，《Performance Evaluation of One-Coat Systems for New Steel Bridges》，FHWA-HRT-11-046，2011 年 6 月，https://www.fhwa.dot.gov/publications/research/infrastructure/bridge/11046/001.cfm（检索日期：2026-09-05） | 磨料表面准备以及富锌底漆/涂层体系的过程范围 |
| `fhwa-thermal-spray-coatings-2014` | 官方指南（`official_guidance`） | 美国联邦公路管理局，《Slip and Creep of Thermal Spray Coatings》，FHWA-HRT-14-083，2014 年 9 月，https://www.fhwa.dot.gov/publications/research/infrastructure/structures/bridge/14083/index.cfm（检索日期：2026-09-05） | 防腐路线区分、喷砂清理、含锌涂层、热浸镀锌和涂层质量记录 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会，委员会建议 (EU) 2021/2279，附件 I《产品环境足迹方法》，《欧盟官方公报》L 471，2021 年 12 月 30 日，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索日期：2026-09-05） | 声明单位和参考流方法、公司特定 BOM 与制造数据、边界和完整性规则、数据质量及分配层级 |
