---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-aluminium
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铝制管材、管道及管件

## 1. 范围与适用性

本 PCR 适用于生产场址工厂门交付的铝或铝合金管材、管道及管件的前景生产。若轧制状态产品、拉拔、焊接、机加工、成形、连接、热处理和表面处理等工序位于声明的前景边界内，均属于本 PCR 的覆盖范围。

前景数据包应声明产品形态、合金牌号及再生含量口径、状态、尺寸与公差、制造路线、表面状态、生产地域、技术和工厂门状态。不包括安装、使用、维护、生产场址工厂门之后的场外配送和寿命终止处理。外购坯锭、板带、化学品、燃料、电力和水的上游生产应采用供应商特定数据集，或采用地域、技术具有代表性的数据集，不得在本 PCR 内重复构造。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-aluminium |
| classification_refs | CPC 3.0: 41536, exact |
| covered_products | 铝或铝合金管材和管道；铝制管件；作为声明产品销售的轧制状态、后续拉拔、焊接、切割、弯曲、机加工、连接、热处理或表面处理形态 |
| excluded_products | 铜、镍、铁、钢、塑料或橡胶管材及管件；产品身份已不再属于管材、管道或管件的铝结构组件；安装和使用服务 |
| representative_product | 在生产场址工厂门交付且符合所声明合金、状态、几何尺寸、公差和表面状态的铝制管材、管道或管件 |
| production_route | 声明一条实际路线：坯锭挤压、挤压后拉拔、轧制板带成形及纵向焊接，或使用铝半成品制造管件；并声明后续全部切割、成形、机加工、连接、热处理和表面处理 |
| market_state | 生产场址工厂门的验收合格可售产品净量，不含可移除工艺废料和不合格品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供铝制管材、管道或管件所声明的几何形态和连接功能 |
| How much | 1,000 kg 验收合格可售产品 |
| How well | 满足所声明合金、状态、尺寸、壁厚、公差、力学性能、连接特征和表面状态 |
| How long or cycle | 数据集所代表的一个生产批次；不包括使用寿命服务 |
| reference_flow_link | 生产场址工厂门验收合格产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 铝管、铝管接头或铝管配件 `ecc836aa-a727-46bb-ad13-4dd96e1c6f56` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；合金牌号；原铝/再生铝含量口径；状态；外形和内孔尺寸或公称规格；壁厚；适用时的管件类型与连接几何；公差/规范；表面状态；制造路线；生产地域；技术；工厂门状态；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 验收合格参考产品及全部铝物料平衡行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用扣除包装、可周转料架、工艺废料和不合格品后的净质量；将验收合格产出缩放为恰好 1,000 kg。 |
| `gas_volume_basis` | 天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或计量表参考温度和压力报告计量气体体积；披露这些参考条件，不得在缺少有记录换算的情况下将气体体积与能量混合。 |
| `electricity_energy_basis` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 换算前保留电力表原始读数；将 kWh 换算为 MJ 时采用 1 kWh = 3.6 MJ，并披露是否包括变压器和场内配电损耗。 |
| `solution_active_mass` | 氢氧化钠和硫酸溶液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录交付溶液质量和浓度；同时报告到货溶液质量与计算的活性物质质量，不得相互替代。 |

## 5. 系统边界

前景边界始于所声明铝原料以及全部外购能源、水、润滑油和表面处理化学品进入场址。若在生产场址发生，边界包括路线特定的坯锭或板带准备、挤压或板带成形与焊接、拉拔、矫直、切割、弯曲、机加工、连接、热处理、清洗、阳极氧化、其他所声明表面处理、检验、内部废料处理、废水处理和直接排放。边界终于生产场址工厂门的验收合格产品。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购铝挤压坯锭、铝板带或其他已披露铝半成品到达生产场址，并识别其合金、再生含量口径、质量、供应商和交付状态 |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | CPC 3.0 代码 41536 所代表的铝制管材、管道和管件；分类仅作背景，不能替代语义产品限定信息 |
| recursive_input_rule | 若外购同类别铝管、管道或管件用于后续制造，应将其连同上游数据集记录一次作为产品输入，不得在同一过程内递归复制其制造 |
| upstream_dataset_requirement | 优先采用供应商特定上游数据集；否则采用在地域、技术、合金、产品状态和再生含量方面具有代表性的数据集并披露替代 |
| disclosure | 声明起始原料形态、供应商或数据源口径、合金、原铝/再生铝含量、路线、全部纳入的精整步骤、内部废料循环、直接排放环境区室和排除的场外作业 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 全部前景数据包 | 纳入从铝原料进入场址到生产场址工厂门验收合格产品的全部场内作业；排除下游配送、安装、使用和寿命终止。 | `usitc-aluminium-extrusions-2022`; `european-aluminium-profile-report-2015` |
| `boundary_route_disclosure` | 成形路线 | 识别产品采用坯锭挤压、挤压后拉拔、轧制板带成形及纵向焊接或管件制造，并且仅纳入实际跨越该路线边界的交换。 | `usitc-aluminium-extrusions-2022`; `european-aluminium-automotive-manual-2002` |
| `boundary_surface_treatment` | 表面处理 | 仅当碱洗和硫酸阳极氧化在生产场址内发生时纳入其交换；否则识别轧制状态或所使用的上游/下游精整数据集。 | `usitc-aluminium-extrusions-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `aluminium_tube_pipe_fitting_manufacturing` | 铝制管材、管道及管件制造 | required | 始终纳入；各交换卡仅在其所述路线或作业实际发生时适用 | 从已识别铝原料开始，经成形、可选拉拔/焊接/制造/热处理/表面处理、检验，至工厂门验收合格产出的汇总前景制造 | 1,000 kg 验收合格铝制管材、管道或管件产出 |

### 过程：铝制管材、管道及管件制造（`aluminium_tube_pipe_fitting_manufacturing`）

#### 输入

##### 产品流

###### 铝挤压坯锭（`in_aluminium_extrusion_billet`）

当所声明产品路线始于坯锭挤压时，记录铝挤压坯锭质量。轧制板带焊管路线或购买同类别管材后制造管件时不得使用本行。

- 选定流：铝挤压坯锭
- 流属性/单位：Mass / kg
- 数量规则：投入生产的坯锭净计量质量减去未使用退回量，再分配至验收合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`usitc-aluminium-extrusions-2022`; `european-aluminium-profile-report-2015`

###### 焊管用铝板带（`in_aluminium_strip`）

仅当路线将铝板带成形为管并对板带边缘进行纵向焊接时记录本输入。

- 选定流：铝板带 `2eac52b0-66e2-4fe0-9329-655d6ee0a1c2`
- 流属性/单位：Mass / kg
- 数量规则：发往焊管线的铝板带净计量质量减去未使用退回量，再分配至验收合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`european-aluminium-automotive-manual-2002`

###### 电力（`in_electricity`）

记录纳入的成形、焊接、拉拔、机加工、热处理、表面处理、污染治理、水处理和辅助作业所消耗的计量外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：纳入作业的计量电力，分配至验收合格产出，并按 `electricity_energy_basis` 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`european-aluminium-profile-report-2015`

###### 气态天然气（`in_natural_gas`）

当在场址燃烧天然气用于坯锭加热、时效、热处理、干燥或其他纳入的热作业时记录本输入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：纳入作业在已披露参考条件下的计量天然气体积，并分配至验收合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`european-aluminium-profile-report-2015`

###### 工艺用水（`in_process_water`）

记录为淬火、冷却补水、清洗、漂洗、表面处理或废水处理准备而跨越场址边界的工艺用水。不得把内部循环水与边界输入合并。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入边界的计量或开票工艺用水质量；由体积换算时采用实测密度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`european-aluminium-profile-report-2015`

###### 润滑油（`in_lubricating_oil`）

记录拉拔、成形、切割、机加工和其他纳入设备所消耗的润滑油。设备内留存的液压油不纳入，除非参考期内发生补充或更换并跨越边界。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存，减期末库存和可回收未使用油，再分配至验收合格产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_consumable_stock_records`
- 来源：`usitc-aluminium-extrusions-2022`

###### 氢氧化钠（`in_sodium_hydroxide`）

仅当纳入的碱洗或蚀刻槽消耗氢氧化钠时记录；声明交付溶液浓度和活性物质质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：纳入槽液消耗的到货溶液质量和活性氢氧化钠质量，并分配至验收合格产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_chemical_records`
- 来源：`usitc-aluminium-extrusions-2022`

###### 硫酸（`in_sulfuric_acid`）

仅当纳入的硫酸阳极氧化槽消耗硫酸时记录；声明交付溶液浓度和活性物质质量。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：纳入阳极氧化槽消耗的到货溶液质量和活性硫酸质量，并分配至验收合格产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_chemical_records`
- 来源：`usitc-aluminium-extrusions-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格铝制管材、管道或管件（`out_reference_product`）

本行是检验和不合格品处理后的参考产品。声明的产品限定信息决定数据集代表该类别中的哪一种产品。

- 选定流：铝管、铝管接头或铝管配件 `ecc836aa-a727-46bb-ad13-4dd96e1c6f56`
- 流属性/单位：Mass / kg
- 数量规则：将验收合格产品净质量缩放至 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`src_unsd_cpc_3_0_2025`

###### 送回收的分类铝工艺废料（`out_aluminium_process_scrap`）

仅在坯锭端料、挤压压余、锯屑、切边、焊瘤刮削物、机加工屑和铝质不合格品作为一种化学相容且已称重的分类铝废料送回收时记录。前景数据包应分别记录物质不同或受污染的流。

- 选定流：送回收的分类铝工艺废料
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界并送回收的分类铝工艺废料净计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`european-aluminium-profile-report-2015`

##### 废物流

###### 废润滑油（`out_used_lubricating_oil`）

参考期内发生润滑油更换或含油维护时，记录移交给废物管理单位的废润滑油。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：废物转移记录上的计量质量，扣除单独回收的可用油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfer_records`
- 来源：`usitc-aluminium-extrusions-2022`

###### 表面处理氢氧化铝污泥（`out_aluminium_hydroxide_sludge`）

仅当纳入的碱洗、蚀刻、阳极氧化、漂洗或废水中和产生富含氢氧化铝并送出场址的污泥时，记录该化学组成明确的污泥。

- 选定流：表面处理氢氧化铝污泥
- 流属性/单位：Mass / kg
- 数量规则：废物转移记录上的湿污泥计量质量，并单独记录实测或实验室测定的干固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfer_records`
- 来源：`usitc-aluminium-extrusions-2022`

##### 基本流

###### 场内燃料燃烧产生的化石源二氧化碳（`out_fossil_carbon_dioxide`）

仅记录场内燃烧产生并从场址直接进入空气的化石源二氧化碳；排除上游电力排放和生物源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址烟道实测量，分配至纳入作业和验收合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`european-aluminium-profile-report-2015`

###### 场内燃烧产生的氮氧化物（`out_nitrogen_oxides`）

仅当受监测排放归入非城市空气或高架烟囱时记录直接氮氧化物。本行不得用于室内空气或城市近地空气区室。

- 选定流：氮氧化物 `191b44d4-90c9-465a-8802-93a651b4fd52`
- 流属性/单位：Mass / kg
- 数量规则：纳入燃烧源的场址烟道实测量，分配至验收合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`european-aluminium-profile-report-2015`

###### 排放至空气（未指定）的铝（`out_aluminium_to_air`）

记录切割、机加工、研磨、抛光或其他纳入作业经污染治理后跨越场址进入空气的实测铝质量。仅在受纳空气区室未指定时使用本行。

- 选定流：铝 `fe0acd60-3ddc-11dd-a72e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场内污染治理后直接空气排放中的实测铝质量，分配至验收合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`usitc-aluminium-extrusions-2022`

###### 排放至淡水的铝（`out_aluminium_to_fresh_water`）

记录场内处理后经直接淡水排放跨越场址边界的实测铝质量。本行不包括排入下水道以及排入海水或未指定水体的流。

- 选定流：铝 `fe0acd60-3ddc-11dd-a732-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：处理后直接淡水排放中的实测铝质量，分配至验收合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_water_emissions`
- 来源：`usitc-aluminium-extrusions-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 路线、生产线及精整作业 | 优先进行过程细分和直接计量。使用机器时间、计量能源、槽液负荷、处理表面积或验收合格质量等有记录的因果量，将共享电力、燃料、水、耗材、废物和排放分配至声明产品。 |  |
| `allocation_scrap_output` | 铝工艺废料 | 将分类铝废料作为明确产出记录并报告去向。不得从坯锭或板带输入中暗中扣除废料，也不得在前景门到门清单内计入替代原铝信用。 | `european-aluminium-profile-report-2015` |
| `allocation_residual_choice` | 无法避免的多产品作业 | 若过程细分和因果分配不可行，对物理性质相似的产出采用验收合格产品质量分配；披露分配因子、受影响交换、共产品和敏感性。只有在物理关系明确不适用时才采用经济分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `aluminium_tube_pipe_fitting_manufacturing` | 铝原料、验收合格产品及分类铝废料 | 经校准秤、生产工单、库存移动和废料发运记录 | 期初库存；收货；退回；投入质量；合格质量；不合格质量；分类废料质量；期末库存；合金；批次；路线 | 将批次或生产活动重量与库存移动和秤票核对 | kg | 每批次或生产活动；每月核对 | 至少连续 12 个代表性月份，生产期不足时采用完整生产期 | 生产场址全部纳入生产线 | 按相容合金和路线求和，采用有记录分配后归一化至 1,000 kg 合格产品 | 秤校准、批次核对、库存差异和废料转移秤票 |
| `cp_energy_records` | `aluminium_tube_pipe_fitting_manufacturing` | 外购电力和天然气 | 分表、总表、公用事业账单和运行日志 | 起止表读数；账单数量；参考条件；设备/生产线；运行时间；停机时间；分配动因 | 优先过程分表，并将分表与场址账单核对 | 电力 MJ；天然气 m3 | 连续或每班；每月核对 | 与产品产出相同期间 | 全部纳入的成形、热工、精整、治理和辅助作业 | 扣除排除负荷，按因果动因分配共享负荷，依第 4 节换算后归一化至参考产出 | 仪表校准、账单核对和负荷分配记录 |
| `cp_water_records` | `aluminium_tube_pipe_fitting_manufacturing` | 工艺用水输入 | 水表、账单、罐液位和补水日志 | 水源；起止表读数；补水；排污；密度；回用/循环；服务作业 | 按水源计量边界补水并排除内部循环 | kg | 连续或每日；每月核对 | 与产品产出相同期间 | 生产场址及纳入水系统 | 按水源汇总边界输入，按计量用量或因果动因分配，归一化至参考产出 | 水表校准、水量平衡、账单和循环回路核对 |
| `cp_consumable_stock_records` | `aluminium_tube_pipe_fitting_manufacturing` | 润滑油 | 采购、领用、退回和库存记录 | 期初库存；采购；领用质量；可回收退回；期末库存；油品牌号；作业 | 库存平衡计算，并用领料单交叉核对 | kg | 每次领用；每月核对 | 与产品产出相同期间 | 纳入的成形和机加工设备 | 期初加采购减可回收退回和期末库存，再分配并归一化 | 盘点、采购发票、领料单和差异调查 |
| `cp_surface_chemical_records` | `aluminium_tube_pipe_fitting_manufacturing` | 氢氧化钠和硫酸 | 配槽日志、加药计量表、采购记录和浓度检测 | 化学品身份；溶液质量；浓度；槽液添加；槽液弃置；产品批次；处理表面积或质量 | 核对加药和库存；按实测浓度计算活性物质质量 | kg 溶液及 kg 活性物质 | 每次添加；按批次及每月核对 | 与纳入表面处理相同期间 | 全部纳入的清洗、蚀刻和阳极氧化槽 | 分别计算各化学品活性质量，按槽液负荷或处理质量分配，归一化至参考产出 | 浓度检测、加药校准、批次日志、SDS 和库存核对 |
| `cp_waste_transfer_records` | `aluminium_tube_pipe_fitting_manufacturing` | 废润滑油和氢氧化铝污泥 | 容器秤、废物联单、实验室报告和转移记录 | 废物身份；毛重/皮重/净重；去向；处理路线；干固体分数；危险状态；日期 | 使用转移净质量，并保持各化学性质不同废物相互分离 | kg | 每次发运；每月核对 | 与产品产出相同期间 | 场址全部纳入废物收集点 | 按精确废物身份汇总，按因果生产量分配共享批次，归一化至参考产出 | 签字联单、秤校准、实验室结果和承包商接收记录 |
| `cp_direct_air_emissions` | `aluminium_tube_pipe_fitting_manufacturing` | 化石源二氧化碳、氮氧化物和排放至空气的铝 | 连续监测、烟道测试或经验证场址物料平衡 | 污染物；浓度；烟气流量；持续时间；烟囱；环境区室；运行状态；治理；不确定度 | 使用实测直接排放，排除上游电力和供应商排放 | kg | 连续监测或每个合规测试活动 | 与生产对齐的代表性运行期 | 全部纳入的场址直接排放点 | 积分污染物质量，按源作业分配，归一化至参考产出 | 监测器校准、测试报告、运行日志和治理记录 |
| `cp_direct_water_emissions` | `aluminium_tube_pipe_fitting_manufacturing` | 排放至淡水的铝 | 排水流量计及认可资质的废水分析 | 铝浓度；流量；日期/时间；受纳区室；处理状态；检出限；不确定度 | 仅针对直接淡水排放，将实测浓度乘以时间匹配的排水流量 | kg | 每个排放混合样或许可监测间隔 | 与生产对齐的代表性期间 | 纳入的直接淡水排放口 | 汇总实测铝质量，分配至纳入生产，归一化至参考产出 | 实验室资质、样品流转记录、流量计校准和排口身份 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 期间交换量 × 1,000 kg / 同期验收合格参考产品净质量 | 期间交换量；验收合格产出净质量 | 每 1,000 kg 参考产品的交换量 |  |
| `calc_active_chemical_mass` | 氢氧化钠和硫酸 | 活性物质质量 = 到货溶液质量 × 实测质量分数 | 溶液质量；实验室或供应商浓度 | kg 活性物质及 kg 到货溶液 |  |
| `calc_material_reconciliation` | 铝物料平衡 | 未解释差额 = 铝原料质量 − 验收合格产品质量 − 分类铝废料质量 − 实测含铝废物/排放质量 − 期末在制品变化 | 铝输入、产品、废料、废物/排放和在制品变化 | 经核对的铝物料平衡差异 |  |
| `calc_direct_discharge_mass` | 排放至淡水的铝 | 排放质量 = 时间匹配的铝浓度 × 排水体积，并披露单位换算和未检出值处理 | 浓度结果；匹配流量；检出限规则 | 排放至淡水的铝质量 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 将每个报告批次关联至产品形态、合金、状态、几何、公差/规范、表面状态、路线和验收记录。 | 生产工单、分析/合格证、图纸或规范及检验放行记录 |
| `dq_temporal_representativeness` | 全部前景记录 | 采用可反映正常路线和精整波动的连续期间；说明停产、开停机、活动生产或少于 12 个月期间的合理性。 | 带日期的计量、生产、库存、实验室和废物记录 |
| `dq_completeness` | 清单边界 | 将物料、能源、水、化学品、废物和排放记录与同一产品产出核对，并说明缺少仪表、估算、排除项和数据缺口。 | 签字核对记录和数据缺口日志 |
| `dq_route_specificity` | 条件交换 | 根据所声明制造路线，将每个坯锭、板带、燃料、化学品、废物和排放卡标为适用或不适用；零值不能代替适用性判断。 | 工艺流程图、设备清单、运行日志和路线声明 |
| `dq_uncertainty` | 实测值和计算值 | 保留足以复现各归一化结果的校准状态、采样设计、检出限、分配不确定度和换算输入。 | 校准证书、实验室报告、计算工作簿和审核追踪 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考产品 | 确认产出属于铝制管材、管道或管件，且第 3 节全部必需限定信息齐全，并与生产及检验记录一致。 | `src_unsd_cpc_3_0_2025` |
| `validation_inventory_accounting` | 清单行 | 要求每个适用行包含一个原子流、属性、单位、数量规则、证据类型、采集协议和归一化基准；要求路线条件行具有有记录的不适用判断。 |  |
| `validation_mass_balance` | 铝输入和产出 | 当输入不能由验收合格产品、分类废料、实测含铝废物/排放和在制品变化解释时，调查经核对铝平衡；披露最终差异及处理。 | `european-aluminium-profile-report-2015` |
| `validation_energy_water` | 电力、天然气和工艺用水 | 将过程记录与场址账单或总表核对，检查换算和参考条件，避免重复计算内部循环或上游排放。 |  |
| `validation_compartments` | 直接排放 | 确认化石源二氧化碳不含电力链排放、氮氧化物采用非城市/高架烟囱区室、排放至空气的铝采用未指定空气、排放至水的铝采用直接淡水；区室不同时使用不同流身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审核后适合作为 `secondary_dataset` 或 `background_dataset` 发布的前景制造数据集 |
| downstream_use | 需要铝制管材、管道或管件工厂门生产数据的产品碳足迹、生命周期清单、过程数据集和 lifecyclemodel 研究 |
| allowed_use | 产品形态、合金、状态、尺寸、表面状态、路线、地域、技术、再生含量口径、时段和边界具有代表性或经明确调整时使用 |
| excluded_use | 不得用作通用原铝数据集、使用阶段或安装模型、非铝管材/管件模型，也不得用于条件交换未获代表的路线/精整方式 |
| required_metadata | PCR id 和版本；产品限定信息；参考流 UUID；场址和地域；参考期；路线和设备；表面处理；原铝/再生含量口径；上游数据集选择；分配；完整性；不确定度；验证状态 |
| required_quality_disclosure | 前景覆盖；仪表和秤校准；物料平衡差异；分配份额；缺失数据和估算；直接排放测量方法；废物去向；代表性和局限 |
| update_trigger | 合金/原料或再生含量、成形或焊接路线、热处理、表面处理、能源或水系统、污染治理、分配、场址地域、供应商数据集或生产技术发生实质变化；否则按组织有记录的数据集复审周期复审 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `src_unsd_cpc_3_0_2025` | official_guidance | 联合国统计司，CPC Version 3.0 结构，2025-06-30，代码 41536。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-04） | 正式产品分类身份和范围锚点 |
| `usitc-aluminium-extrusions-2022` | official_guidance | 美国国际贸易委员会，*Aluminum Extrusions from China*，Publication 5375，2022 年 10 月。https://www.usitc.gov/publications/701_731/pub5375.pdf（检索日期 2026-09-04） | 坯锭挤压、管材拉拔、冷却、拉伸、切割、时效、阳极氧化、化学预处理和制造过程分解 |
| `european-aluminium-profile-report-2015` | dataset | European Aluminium，*Environmental Profile Report for the European Aluminium Industry*，数据年 2015。https://european-aluminium.eu/wp-content/uploads/2022/10/environmental-profile-report-for-the-european-aluminium-industry.pdf（检索日期 2026-09-04） | 挤压边界、坯锭输入、能源/水输入类别、直接产出类别和单列工艺废料回收流 |
| `european-aluminium-automotive-manual-2002` | handbook | European Aluminium Association，*The Aluminium Automotive Manual: Special Materials Production*，version 2002，第 6.2.2 节。https://european-aluminium.eu/wp-content/uploads/2022/11/aam-materials-6-special-materials-production.pdf（检索日期 2026-09-04） | 轧制板带输入及高频焊铝管工序：纵剪、边缘处理、辊弯成形、电阻焊、焊瘤去除、冷却、定径、切割和转运 |
