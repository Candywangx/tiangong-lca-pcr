---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.base-metals-clad-with-silver-and-base-metals-silver-or-gold-clad-with-platinum-not-furt-2dfdd014
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 以贱金属为底的包银材料，以及以贱金属、银或金为底的包铂材料，加工程度未超过半制成

## 1. 范围与适用性

本 PCR 适用于以下半制成金属材料的从工厂大门到工厂大门生产：银以冶金方式结合在贱金属基材上，或铂以冶金方式结合在贱金属、银或金基材上。覆盖的市场状态包括已声明的带、片、板、条、杆、丝或型材，且加工程度未超过半制成。前景数据包必须描述一种具体芯层金属、一种具体包覆金属、层状结构以及一条生产路线。

代表性路线为包银铜带，其工序包括表面准备、冶金结合、轧制、退火、精整、检验及出厂包装。该路线仅用作代表性工艺结构，不作为定量基准。包铂变体及其他贱金属芯层仅在其具体材料投入、结合技术、气氛、热处理、精整工序和直接排放均被明确实例化时方可使用本 PCR。

本 PCR 不包括包覆层不构成冶金复合层的电镀制品、不具有独立包覆结构的贵金属合金、未锻造或粉末状贵金属、精加工零件、首饰、电触点、硬币及其他加工程度超过半制成的制品，也不包括所购金属原料的上游采矿、精炼和生产。`un-cpc-3-0-2025` 确立产品类别边界；`china-mof-research-goods-2026` 核实专业中文术语及“加工程度未超过半制成”的范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.base-metals-clad-with-silver-and-base-metals-silver-or-gold-clad-with-platinum-not-furt-2dfdd014 |
| classification_refs | CPC 3.0: 41350（精确分类语境；映射接受决定在本 PCR 之外维护） |
| covered_products | 以银包覆的半制成贱金属材料；以铂包覆的半制成贱金属、银或金材料；已声明的带、片、板、条、杆、丝或型材 |
| excluded_products | 电镀而非冶金包覆的产品；均质贵金属合金；未锻造金属和粉末；精加工零件、首饰、硬币、触点及加工程度超过半制成的制品 |
| representative_product | 银层质量分数和成品尺寸均已声明的包银紫铜带 |
| production_route | 表面准备、扩散结合或轧制复合、热轧或冷轧、路线特定退火、适用时酸洗或水洗、纵剪或切断、检验和出厂包装 |
| market_state | 生产设施大门处的干燥半制成贵金属复合材料，并声明组成、层状结构、尺寸、表面状态和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可直接用于下游制造且规格已声明的半制成贵金属复合材料 |
| How much | 生产设施大门处 1 kg 合格贵金属复合材料净质量 |
| How well | 符合所声明的芯层和包覆金属、各层质量分数、结合路线、尺寸、状态、表面条件及质量验收准则 |
| How long or cycle | 一个完整生产批次；不为半制成产品指定使用寿命 |
| reference_flow_link | `final_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 半制成包银铜带 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 芯层金属及牌号；包覆金属及纯度；层序和包覆面数；芯层和包覆层质量分数；产品形状和尺寸；结合路线；轧制制度；退火气氛和制度；状态；表面精整；批次成品率；各金属再生料含量；包装状态；设施地理位置；生产期间 |

构建前景数据包时，所有 `必需限定信息` 均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。包铂或非铜芯层实例必须以具体原子流替换代表性材料身份；当该材料不存在时，不得保留代表性的铜或银流行。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及所有金属投入/产出行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化至 1 kg 干燥合格产品净质量。产品质量不包括可重复使用托盘皮重和单独计量的可拆除包装。 |
| `layer_mass_accounting` | 芯层、包覆层、产品及复合边角料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录芯层和包覆层质量。对同一批次的贵金属投入、产品所含贵金属、复合边角料、回收残渣及实测损失进行核算。 |
| `electricity_conversion` | 交流电投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始读数和电压限定信息。由 kWh 转换时采用 1 kWh = 3.6 MJ，并披露变压或配电损失是否位于电表边界内。 |
| `gas_reference_conditions` | 天然气、氮气和氢气投入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积以及采用的温度、压力、干/湿基准、组成或纯度和标准体积换算。 |
| `wastewater_mass_conversion` | 清洗废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接计量质量。若按体积计量废水，则采用该取样流的实测或有据密度换算，并保留原始体积记录。 |
| `reusable_pallet_accounting` | 木制托盘投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录托盘质量、所有权、预计或实测周转次数、损失及返还状态；仅向参考产品分配可归属的首次使用或重复使用份额。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_system_boundary | 纳入所购金属原料的接收和准备、表面清洗、结合、适用时的热轧和冷轧、退火、适用时的酸洗、水洗和干燥、纵剪或切断、检验、场内废物处理和出厂包装。所购金属、电力、燃料、气体、化学品、润滑剂、水和包装材料的上游生产采用链接的上游数据集。 | `ding-et-al-ag-cu-2025`; `eu-jrc-nfm-bref-2017` |
| `boundary_variant_instantiation` | product_variant_scope | 建模对象为一种已声明的芯层/包覆层结构和一条路线。更换贱金属芯层或采用包铂结构时，必须设置具体原子材料流和路线特定工序；不得将备选金属或技术合并为一项交换。 | `un-cpc-3-0-2025`; `ding-et-al-ag-cu-2025` |
| `boundary_wastes_and_emissions` | foreground_outputs | 纳入离开生产线的复合边角料、废酸洗液、清洗废水、场内天然气燃烧产生的直接化石二氧化碳，以及完成数据包中实测的其他路线特定废物或基本流排放。 | `eu-jrc-nfm-bref-2017` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入一体化复合生产线的外购定尺芯层和包覆金属原料，且其组成、表面状态、再生料含量和供应商大门已记录 |
| starting_condition_role | foreground_boundary_input |
| product_classification_scope | 声明的产品必须为半制成包银贱金属结构，或半制成包铂贱金属、银或金结构；CPC 3.0:41350 仅为分类语境，不拥有规范 PCR 身份 |
| recursive_input_rule | 若投入本身属于本 PCR 覆盖的产品，则仅作为外购供应商产品记录一次，并链接上游数据集和声明其复合组成；不得在当前前景生产线内递归复现其制造清单 |
| upstream_dataset_requirement | 芯层金属、包覆金属、电力、天然气、工业气体、硫酸、轧制油、工艺用水、塑料薄膜和木制托盘应优先采用供应商特定数据集；否则披露代表性技术、地理范围、再生料含量和替代关系 |
| disclosure | 声明芯层/包覆层组合、贵金属质量分数、层状结构、结合路线、轧制和退火制度、炉窑能源、保护气氛、湿法清洗路线、边角料回收去向、废水和废酸处理、包装、设施地理位置、数据期间及相对于代表性 Ag/Cu 路线的所有偏离 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_ag_cu_clad_strip_line` | Ag/Cu 表面准备、结合、轧制、退火、精整及出厂包装一体化生产线 | required | 代表性路线；其他覆盖结构必须在相同边界下以具体路线特定原子交换进行实例化 | 前景生产 | 生产设施大门处 1 kg 合格包银铜带净质量 |

### 过程：Ag/Cu 表面准备、结合、轧制、退火、精整及出厂包装一体化生产线（`integrated_ag_cu_clad_strip_line`）

#### 输入

##### 产品流

###### 铜芯层原料（`copper_strip_input`）

紫铜板带作为代表性结构芯层进入生产线。记录跨越生产线边界的合格干质量。

- 选定流：紫铜板带 `7da5ca56-6c6e-41e4-b35b-f274a9a7577c`
- 流属性/单位：Mass / kg
- 数量规则：实测投至该批次的合格铜板带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_inputs`
- 来源：`ding-et-al-ag-cu-2025`; `eu-jrc-nfm-bref-2017`

###### 银包覆层原料（`silver_strip_input`）

半制成银带材作为代表性包覆层进入生产线。由于唯一名称匹配的 Tiangong 公开候选与建筑石材分类冲突，其 UUID 仍未解决。

- 选定流：半制成银带材
- 流属性/单位：Mass / kg
- 数量规则：实测投至该批次的合格银带材质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_inputs`
- 来源：`ding-et-al-ag-cu-2025`

###### 交流电（`alternating_current_input`）

外购交流电为生产线电表边界内的轧制、驱动、通风、泵送、检验和电加热设备供能。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至生产批次的生产线实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 场内热工设备用天然气（`natural_gas_input`）

当结合、退火、干燥或保护气体发生路线使用场内燃气设备时，记录气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：前景生产线内消耗的气态天然气实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 保护气氛用气态氮气（`gaseous_nitrogen_input`）

仅当外购气态氮气跨越场址边界并用于所声明的退火或结合气氛时记录。本未解决的气态流不得以液氮替代。

- 选定流：气态氮气
- 流属性/单位：Volume / m3
- 数量规则：所声明保护气氛路线消耗的外购气态氮气实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 还原气氛用气态氢气（`gaseous_hydrogen_input`）

仅当外购气态氢气作为所声明还原气氛的组分跨越场址边界时记录。

- 选定流：气态氢气
- 流属性/单位：Volume / m3
- 数量规则：所声明还原气氛路线消耗的外购气态氢气实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 冷轧油补充量（`cold_rolling_oil_input`）

进入生产线的冷轧油按外购补充量记录；未跨越前景边界的内部循环油不重复计入。

- 选定流：冷轧油 `a9417245-6f45-4df3-8f04-227ed8a1be58`
- 流属性/单位：Mass / kg
- 数量规则：发放至该批次的外购冷轧油补充量，或依据生产线库存变化分配的补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 酸洗用硫酸（`sulfuric_acid_input`）

当铜材或贵金属复合带表面准备采用酸洗时记录硫酸。必须声明浓度和补充量基准。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：该批次期间加入生产线的新鲜硫酸实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用酸洗时，每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 湿法清洗和水洗用工艺用水（`process_water_input`）

湿法清洗、酸洗、水洗或生产线冷却水跨越场址或前景边界时记录工艺用水。闭路内部循环水不得重复计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于该批次的工艺用水净取用实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：采用湿法工序时，每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 出厂包覆用塑料薄膜（`plastic_film_input`）

当成品卷、片或其他半制成材料在生产设施大门处包覆时记录塑料薄膜。聚合物种类和再生料含量仍为必需的前景限定信息。

- 选定流：塑料薄膜 `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- 流属性/单位：Mass / kg
- 数量规则：发运批次消耗的薄膜实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：采用薄膜包覆时，每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 出厂包装用木制托盘（`wooden_pallet_input`）

当木制托盘随产品跨越设施大门时记录。仅归属已记录的首次使用或重复使用份额。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：托盘质量乘以发运批次的可归属使用份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：采用托盘时，每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_and_packaging_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

代表性一体化生产线没有废物投入。若从其他运营者采购回收的内部贵金属复合废料，则必须作为单独的具体废物投入记录，并披露其组成和回收边界。

##### 基本流

本 PCR 不规定基本流投入。跨越技术系统边界的水和工业气体在上文作为产品投入表示。

#### 输出

##### 产品流

###### 生产设施大门处合格包银铜带（`final_product_output`）

这是完成精整、检验及所声明出厂包装后的参考产品产出。尚未确认精确的 Tiangong 公开产品流 UUID。

- 选定流：半制成包银铜带
- 流属性/单位：Mass / kg
- 数量规则：固定参考产出，等于实测干燥合格产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产设施大门处 1 kg 合格包银铜带净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_waste_and_water_outputs`
- 来源：`un-cpc-3-0-2025`; `ding-et-al-ag-cu-2025`

##### 废物流

###### 银铜复合生产线边角料（`composite_offcuts_output`）

离开前景生产线并送往金属回收的复合边部切料、头尾料和不合格贵金属复合带，应按银铜复合身份记录，不得重分类为仅含铜的废料。

- 选定流：银铜复合边角料
- 流属性/单位：Mass / kg
- 数量规则：移出生产线的 Ag/Cu 复合边角料实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_waste_and_water_outputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 废硫酸酸洗液（`spent_pickling_acid_output`）

采用酸洗时，记录离开前景生产线并送往回收或处理的废酸。该流与水洗废水保持分离。

- 选定流：废硫酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：从酸洗循环排出并转移至回收或处理的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用酸洗时，每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_waste_and_water_outputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 送往处理的清洗废水（`cleaning_wastewater_output`）

湿法清洗、酸洗水洗或生产线冲洗产生的废水，在转移至场内或场外处理时记录。必须表征溶解铜、银、酸度和处理去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：处理前离开生产线的废水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：采用湿法清洗时，每 1 kg 合格贵金属复合带净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_waste_and_water_outputs`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 直接排放至空气的化石二氧化碳（`fossil_co2_output`）

报告前景边界内天然气燃烧产生的化石二氧化碳；本行不包括上游发电产生的排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测总量，或依据实测天然气量和有据燃料碳含量计算的化石 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：场内燃烧天然气时，每 1 kg 合格贵金属复合带净产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_direct_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_lot` | core_cladding_and_product | 通过为一种已声明的芯层/包覆层结构保持批次级物料清单，并分别计量或计算其产品、边角料、公用工程和排放，优先避免分配。 |  |
| `allocation_shared_line` | shared_line_inputs | 当一个计量表服务于多种产品时，根据实测运行时间和设备负荷分配电力、气体、水和生产线辅助材料；仅在质量吞吐量代表物理驱动因素时才采用该基准，并披露敏感性。 | `eu-jrc-nfm-bref-2017` |
| `allocation_scrap_recovery` | composite_offcuts | 将复合边角料作为废物产出报告，并实测其 Ag/Cu 组成和去向。不得在前景清单内计入避免原生金属的抵扣；任何回收抵扣或负担均应在下游模型中一致应用并披露。 | `eu-jrc-nfm-bref-2017` |
| `allocation_reusable_packaging` | wooden_pallets | 按有据的预计或实测周转次数分配可重复使用托盘的生产负担，纳入损失和未返还量，并报告使用份额计算。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging_inputs` | `integrated_ag_cu_clad_strip_line` | 金属原料、轧制油、酸、水、薄膜及托盘投入 | 称量单、采购领用单、储罐或水表、包装领用记录及托盘复用日志 | lot_id; flow identity; supplier; metal grade or chemical concentration; gross and tare mass; meter opening and closing; recycled content; pallet trips; timestamp | 将合格收料和库存变化与声明批次核对；排除未跨越边界的内部循环量 | kg | 每批次，并每月进行库存核对 | 完整生产周期及分配至该批次的开机或换产活动 | 为前景生产线供料的全部设备和储存设施 | 按原子流汇总跨边界净量，并以合格产品产出归一化 | 校准称量或计量记录、采购领用单、签字物料核对表和异常日志 |
| `cp_energy_and_gas_inputs` | `integrated_ag_cu_clad_strip_line` | 电力、天然气、氮气和氢气 | 公用工程计量表、分表历史记录、燃料发票和气体流量计 | lot_id; meter_id; opening and closing reading; unit; voltage; temperature; pressure; dry or wet basis; gas composition or purity; allocation driver; timestamp | 采用生产线分表总量；共用计量表按声明的物理分配因素分配，并保留总量和分配值 | MJ or m3 | 连续或逐批采集，并每月核对 | 完整生产周期，包括分配至该批次的加热、保温、轧制、通风和停机能耗 | 前景生产线及其直接服务的公用工程 | 扣除经核实的非生产用途，分配共用计量表，再按合格产品产出归一化 | 计量表校准、历史数据导出、发票核对、基准条件换算和分配工作表 |
| `cp_product_waste_and_water_outputs` | `integrated_ag_cu_clad_strip_line` | 产品、复合边角料、废酸和清洗废水 | 产品秤、废料秤、酸罐转移记录、废水表、实验室分析和转移联单 | lot_id; stream identity; gross and tare mass or volume; density; Cu and Ag content; pH; acid concentration; destination; timestamp | 在生产线边界分别计量产品、复合边角料、废酸和废水 | kg | 每批次或每次转移，并每月核对 | 完整生产周期及归属于该周期的全部废物流转 | 下游处理或回收之前的前景生产线 | 分别汇总每项原子产出；以有据密度换算体积；按合格产品净质量归一化 | 校准记录、质量平衡核对、实验室报告及废物或回收联单 |
| `cp_fuel_and_direct_emissions` | `integrated_ag_cu_clad_strip_line` | 直接化石二氧化碳 | 烟气实测记录，或燃料计量表加供应商碳含量记录 | lot_id; natural_gas_volume; reference_conditions; fuel_composition; carbon_content; oxidation_basis; measured_stack_co2; timestamp | 优先采用合规直接测量；否则根据采集的燃料量和有据碳含量计算化石 CO2，不纳入上游排放 | kg CO2 | 每批次，或与燃料使用一致的报告期间 | 包括分配至该批次的开机和停机燃烧在内的完整生产周期 | 前景边界内的场内燃烧设备 | 计算或汇总直接化石 CO2，与燃料记录核对，并按产品产出归一化 | 计量表校准、燃料证书、计算工作表，以及适用时的烟气监测 QA 记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_inventory` | all_inventory_rows | 归一化数量 = 批次跨边界数量 / 批次合格产品净质量 | 原子流批次投入或产出；`final_product_output` 质量 | 每 1 kg 参考产品的数量 |  |
| `calc_layer_mass_balance` | core_cladding_product_offcuts | 对每种金属：投入质量 = 合格产品所含金属 + 复合边角料所含金属 + 回收残渣所含金属 + 有据实测损失；报告未核对差额 | 铜和银投入质量；产品分层分析；边角料质量和组成；回收残渣；实测损失 | 金属特定平衡和核对百分比 |  |
| `calc_electricity_mj` | alternating_current_input | 电力 MJ = 实测 kWh × 3.6；保留原始 kWh 和电压等级 | 以 kWh 计的实测电力 | 以 MJ 计的电力 |  |
| `calc_wastewater_mass` | cleaning_wastewater_output | 无法直接计量质量时，废水质量 = 实测废水体积 × 有据废水密度 | 废水体积；密度；取样期间 | 废水质量（kg） |  |
| `calc_pallet_use_share` | wooden_pallet_input | 可归属托盘质量 = 托盘质量 / 有据的预计或实测周转次数，并按记录的损失和未返还情况调整 | 托盘质量；周转次数；损失和返还记录 | 可归属托盘投入质量 |  |
| `calc_fossil_co2` | fossil_co2_output | 有实测化石 CO2 时采用实测值；否则将所采集天然气量和有据化石碳含量换算为完全氧化的 CO2，并披露组成和氧化假设 | 天然气量；基准条件；碳含量或组成；如有则采用烟气实测 CO2 | 直接化石 CO2（kg） |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和金属投入 | 保留规格、组成或化验结果、尺寸、包覆结构、结合路线、热处理、状态、表面精整及批次验收证据。 | 分析证书、产品图纸、工艺流转卡、检验报告和批次放行记录 |
| `dq_temporal_coverage` | 全部前景记录 | 覆盖具有代表性的生产期间，包括正常开机、停机、换产和不合格品处理；披露排除的异常事件。 | 带时间戳的计量表导出、生产日历和异常日志 |
| `dq_mass_balance` | 铜、银、产品、边角料和含金属液体产出 | 对同一批次的金属投入和产出进行核对，在发布前调查任何重大未解释差额。 | 签字的金属核对表和实验室组成记录 |
| `dq_metering` | 电力、气体、水、产品和废物 | 使用校准的计量表或秤；保留原始读数、单位换算、基准条件、分配因素和校准状态。 | 校准证书、原始计量表导出和计算工作簿 |
| `dq_waste_destination` | 复合边角料、废酸和废水 | 记录物理状态、组成、适用时的危险属性、转移量、接收方、处理或回收路线，以及是否采用下游抵扣。 | 转移联单、分析报告、接收方记录和下游模型披露 |
| `dq_uuid_and_localization` | 每个清单行 | 仅当身份、流类型、分类、属性、单位组和产品状态均匹配时才使用经直接核实的 state-100 Tiangong UUID；否则保留具体的双语名称和未解决状态。 | UUID 收据审计或 manifest 中的未解决清单审查元数据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_and_identity` | reference_flow | 确认 1 kg 参考产出、芯层/包覆层身份、各层质量分数、产品形状、结合路线和市场状态共同描述一种受本 PCR 覆盖的半制成贵金属复合材料。 | `un-cpc-3-0-2025`; `china-mof-research-goods-2026` |
| `validate_atomic_inventory` | process_inventory | 确认每项交换均为一个原子产品流、废物流或基本流；每项条件投入均由声明路线支持或标记为不适用；每个 UUID 为空的行继续在 manifest 中登记为未解决。 |  |
| `validate_metal_balance` | metal_mass_balance | 确认铜和银投入分别记录，并对同一批次的产品、复合边角料、回收残渣和实测损失进行核对。 |  |
| `validate_units_and_reference_conditions` | measurement_records | 根据所保留的原始记录确认质量归一化、kWh 到 MJ 换算、气体基准条件、废水密度换算和托盘复用计算。 |  |
| `validate_boundary_and_destinations` | system_boundary | 确认上游供应负担通过链接纳入而未重复计算；场内直接燃烧已纳入；边角料、废酸和废水均有声明的处理或回收去向。 | `eu-jrc-nfm-bref-2017` |
| `validate_source_and_period` | data_quality | 确认 source_id 可解析、前景记录覆盖声明的生产期间，且相对于代表性 Ag/Cu 路线的任何偏离均已披露。 | `ding-et-al-ag-cu-2025`; `eu-jrc-nfm-bref-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明的半制成包银或包铂金属结构的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当产品身份、路线、地理、时间和分配兼容时，可用于产品碳足迹、LCA、生态设计、采购和下游制造研究 |
| excluded_use | 电镀层、精加工制品、均质贵金属合金、另一种未声明的芯层/包覆层组合，或采用未修改 Ag/Cu 清单表示的包铂路线 |
| required_metadata | 芯层和包覆层身份及牌号；各层分数；尺寸；产品形状；结合和轧制路线；退火气氛和制度；再生料含量；设施地理位置；数据期间；成品率；公用工程组合；清洗路线；废物去向；分配；包装及托盘复用 |
| required_quality_disclosure | 初级数据覆盖率；计量表和秤的校准；金属质量平衡核对；分配份额；供应商数据集替代；未解决 UUID；未解决范围证据；排除的异常运行；不确定性和数据缺口 |
| update_trigger | 芯层或包覆金属、层分数、结合技术、轧制或退火路线、炉窑燃料、保护气氛、表面处理、包装、废料回收、废水处理、供应商组合、设施或生产期间发生对清单有重大影响的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，《Central Product Classification (CPC) Version 3.0 Structure》，2025 年 6 月 30 日，官方 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04；缓存内容 SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 贵金属复合半制成产品的官方类别身份和覆盖边界 |
| `china-mof-research-goods-2026` | official_guidance | 中华人民共和国财政部，《免税科研货物清单》，2026 年，第 15–16 页：https://m.mof.gov.cn/zcfb/202601/P020260114634207037460.pdf（检索于 2026-09-04） | 以贱金属为底的包银材料和以贱金属、银或金为底的包铂材料的专业中文术语，以及加工程度未超过半制成的范围 |
| `ding-et-al-ag-cu-2025` | literature | Ding, Z.-Y. 等，“Microstructural evolution and bonding characteristics of Ag/Cu interface in Ag/Cu bimetallic strips fabricated via diffusion welding,” *Journal of Iron and Steel Research International* 32 (2025) 1468–1476。https://doi.org/10.1007/s42243-024-01383-3 | Ag/Cu 代表性带材身份，以及扩散结合、轧制和退火的路线分解；不据此推断 PCR 定量范围 |
| `eu-jrc-nfm-bref-2017` | official_guidance | 欧盟委员会联合研究中心，《Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries》，2017，JRC107041：https://publications.jrc.ec.europa.eu/repository/handle/JRC107041（检索于 2026-09-04） | 半制成板带工序、轧制能源和油品、退火气氛、酸洗、水洗、废水、废酸、废料回收和出厂包装流覆盖；不据此推断 PCR 定量范围 |
