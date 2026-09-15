---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.ferro-manganese
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 锰铁

## 1. 范围与适用性

本 PCR 适用于锰铁生产企业厂门处固态锰铁合金的前景生产，包括高碳、中碳和低碳牌号。边界从锰质原料及其他外购投入接收开始，涵盖有条件的矿粉造块或烧结、还原熔炼、依牌号实施的精炼、浇铸、凝固、破碎、筛分、内部物料返回及厂内排放控制。产品以净质量计量，可为块状或经分级的粒度产品。

不包括锰硅合金、金属锰、镜铁、作为产品出售的锰矿或锰烧结矿、下游炼钢、客户使用及厂门后的运输。锰硅合金仅可作为已声明硅热精炼路线的投入出现。每个数据集必须声明碳牌号、锰含量、产品粒度、熔炼与精炼路线、炉体封闭形式、煤气和粉尘处理、炉渣去向、地域、技术及报告期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.ferro-manganese |
| classification_refs | CPC 3.0：41112，Ferro-manganese |
| covered_products | 块状或经粒度分级的固态锰铁合金，包括高碳、中碳和低碳牌号 |
| excluded_products | 锰硅合金；金属锰；镜铁；作为产品出售的锰矿或锰烧结矿；下游钢铁产品 |
| representative_product | 锰铁生产企业厂门处的固态块状锰铁 |
| production_route | 高碳锰铁采用锰矿碳热还原；中碳或低碳锰铁有条件采用吹氧脱碳或硅热精炼 |
| market_state | 固态、无运输包装的散装块状或客户规定粒级产品；净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为钢铁生产合金剂和脱氧剂供应的锰铁合金 |
| How much | 锰铁生产企业厂门处 1 kg 可销售锰铁净质量 |
| How well | 满足已声明的碳牌号、锰含量、杂质限值和粒度规格 |
| How long or cycle | 一个生产报告期，终点为合格固态产品具备发运条件 |
| reference_flow_link | 已声明参考产品流恰好 1 kg 表示该功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 锰铁合金，块状 `2f5d9ece-fe82-4e6d-a12d-47366582ec48` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 碳牌号；锰含量；杂质规格；粒度范围；产品状态；熔炼路线；精炼路线或无精炼；炉体封闭形式；生产场址与地域；报告期；炉渣去向；回收煤气去向 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 可销售锰铁 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单量均归一化至 1 kg 合格可销售锰铁净质量；不含运输包装和单独报告的规格外返回物。 |
| `mass_balance_basis` | 物料投入与产出 | 质量 | kg | 相关时记录湿基或收到态质量及组成，并在质量平衡中采用一致报告基准；披露任何干基换算。 |
| `energy_conversion` | 电力与燃料 | 按计量记录采用能量或质量 | kWh、MJ、Nm3 或 kg | 保留实测单位和换算因子；电力与每种燃料分别报告，不得合并能源载体。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生产企业厂门处的外购锰质原料、含铁原料、还原剂、熔剂、电力、水、氧气及路线特定合金投入 |
| starting_condition_role | 由外部数据集提供生产负荷的上游产品投入；厂内原料准备及后续前景作业在本边界内采集 |
| product_classification_scope | 高碳、中碳和低碳牌号固态锰铁；即使作为投入，锰硅合金仍为单独产品类别 |
| recursive_input_rule | 外购锰铁或内部返回合金作为显式产品投入记录；只有在同一报告边界内产生的内部返回物可不重复承担上游负荷，并须披露循环量 |
| upstream_dataset_requirement | 每种外购物料、燃料、电力、水、氧气和处理服务均采用地域与技术具有代表性的上游数据集 |
| disclosure | 声明纳入的原料准备、炉型与封闭形式、碳牌号、精炼路线、治理配置、内部循环、回收煤气利用或火炬燃烧、炉渣利用或处置、截断及排除的厂内作业 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground production | 纳入制得可销售参考产品所需的所有厂内原料准备、熔炼、出炉、依牌号精炼、浇铸、破碎、筛分、煤气处理、粉尘处理和内部返回。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production` |
| `boundary_route_conditions` | conditional operations | 仅当厂内对矿粉造块时纳入烧结；仅当已声明碳牌号需要吹氧脱碳或硅热还原时纳入精炼。 | `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | purchased inputs | 每种外购投入均连接上游数据集并披露供应商特定替代；不得将上游负荷吸收到未说明的汇总投入中。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_preparation` | 原料准备与锰矿烧结 | conditional | 场内对锰矿粉进行造块、球团或烧结时纳入 | 前景调质 | 转入熔炼的锰烧结矿质量 |
| `ferromanganese_smelting` | 锰铁还原熔炼与出炉 | required | 始终纳入已声明的主要熔炼路线 | 前景生产 | 出炉粗合金质量 |
| `ferromanganese_refining` | 碳牌号精炼 | conditional | 中碳或低碳锰铁时纳入，并标明吹氧脱碳或硅热还原 | 前景精炼 | 转入后处理的精炼合金质量 |
| `casting_and_sizing` | 浇铸、凝固、破碎与筛分 | required | 纳入至固态可销售产品验收完成 | 前景后处理 | 1 kg 合格锰铁 |

### 过程：原料准备与锰矿烧结（`raw_material_preparation`）

#### 输入

##### 产品流

###### 冶金用锰矿粉（`prep_ore_fines`）

记录进入厂内造块或烧结的锰质矿粉，并保留水分和锰品位原始记录。

- 选定流：冶金用锰矿粉
- 流属性/单位：质量 / kg
- 数量规则：计量进入原料准备的收到态质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 烧结用焦粉（`prep_coke_breeze`）

仅在焦粉作为烧结燃料消耗时纳入。

- 选定流：焦粉
- 流属性/单位：质量 / kg
- 数量规则：计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 烧结用石灰石（`prep_limestone`）

将原料准备阶段加入的石灰石与熔炼熔剂分开记录。

- 选定流：石灰石
- 流属性/单位：质量 / kg
- 数量规则：计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 烧结点火用气态天然气（`prep_natural_gas`）

仅在厂内烧结点火燃烧器使用天然气时纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3，体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按供应商声明参考条件计量的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 原料准备电力（`prep_electricity`）

记录破碎、筛分、输送、混料和烧结设备计量电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量或按设备电表分配的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入熔炼的锰烧结矿（`prep_sinter`）

将锰烧结矿作为内部中间体计量，不得对内部转移重复计入负荷。

- 选定流：锰烧结矿
- 流属性/单位：质量 / kg
- 数量规则：筛分后计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

###### 原料准备颗粒物排放至空气（`prep_pm_air`）

记录治理后排放的颗粒物，并声明粒径级别和环境介质。

- 选定流：排放至空气的颗粒物
- 流属性/单位：质量 / kg
- 数量规则：烟气测试或经批准的监测排放计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

### 过程：锰铁还原熔炼与出炉（`ferromanganese_smelting`）

#### 输入

##### 产品流

###### 冶金用锰矿（`smelt_manganese_ore`）

记录炉料中的锰质矿石或外购烧结矿，并以限定信息声明状态、水分和锰品位。

- 选定流：冶金用锰矿
- 流属性/单位：质量 / kg
- 数量规则：计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### 铁矿石（`smelt_iron_ore`）

记录加入炉料的含铁矿石。

- 选定流：铁矿石
- 流属性/单位：质量 / kg
- 数量规则：计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 冶金焦还原剂（`smelt_coke`）

记录作为碳质还原剂装入的冶金焦。

- 选定流：冶金焦
- 流属性/单位：质量 / kg
- 数量规则：计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### 低挥发分煤还原剂（`smelt_coal`）

仅在低挥发分煤作为独立还原剂加入时纳入。

- 选定流：低挥发分煤
- 流属性/单位：质量 / kg
- 数量规则：计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### 熔炼用石灰石（`smelt_limestone`）

记录直接加入熔炼炉的石灰石。

- 选定流：石灰石
- 流属性/单位：质量 / kg
- 数量规则：计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### 熔炼用白云石（`smelt_dolomite`）

记录直接加入熔炼炉的白云石。

- 选定流：白云石
- 流属性/单位：质量 / kg
- 数量规则：计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 熔炼电力（`smelt_electricity`）

记录输送至埋弧电炉及其直接辅助设备的电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：炉体及辅助设备电表读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### 自焙电极糊（`smelt_electrode_paste`）

记录自焙炉用电极消耗的碳质电极糊。

- 选定流：自焙电极糊
- 流属性/单位：质量 / kg
- 数量规则：库存平衡计算消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 熔炼冷却水补水（`smelt_makeup_water`）

仅记录加入炉体冷却循环的新水或外购水，不含循环回用水。

- 选定流：冷却水补水
- 流属性/单位：体积 / m3
- 数量规则：计量补水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 粗高碳锰铁（`smelt_crude_femn`）

计量还原炉出炉且尚未进行牌号特定精炼的粗合金。

- 选定流：粗高碳锰铁
- 流属性/单位：质量 / kg
- 数量规则：计量出炉合金质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### 富锰熔炼渣（`smelt_rich_slag`）

记录离开熔炼过程的炉渣，并声明其出售、转入锰硅合金生产、回收或处置去向。

- 选定流：富锰锰铁熔炼渣
- 流属性/单位：质量 / kg
- 数量规则：计量离开过程的炉渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### 回收的一氧化碳富集炉气（`smelt_co_rich_gas`）

只有当净化后的富一氧化碳炉气输出本过程用于能源回收或其他工业用途时，才作为共产品纳入，并披露组成与去向。

- 选定流：一氧化碳富集锰铁炉气
- 流属性/单位：低位热值 / MJ
- 数量规则：计量输出气体体积乘以实测低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### 废物流

###### 捕集的锰铁炉尘（`smelt_captured_dust`）

仅在捕集粉尘离开内部循环时记录；内部返回粉尘保留在质量平衡中，不作为外部废物产出。

- 选定流：捕集的锰铁炉尘
- 流属性/单位：质量 / kg
- 数量规则：计量送往场外回收或处置的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### 基本流

###### 一氧化碳排放至空气（`smelt_co_air`）

记录燃烧、回收或火炬处理后残余排放的一氧化碳，不含作为共产品转出的气体。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg，质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：监测烟气量或由实测气量与浓度进行工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_smelting_emissions`
- 来源：`us-epa-ap42-ferroalloy-production`

###### 熔炼颗粒物排放至空气（`smelt_pm_air`）

在原始记录中分别记录有组织和经量化的无组织颗粒物，只有粒径级别一致时方可汇总。

- 选定流：排放至空气的颗粒物
- 流属性/单位：质量 / kg
- 数量规则：治理后的监测或许可计算颗粒物排放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_smelting_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

### 过程：碳牌号精炼（`ferromanganese_refining`）

#### 输入

##### 产品流

###### 精炼用粗高碳锰铁（`refine_crude_femn`）

记录进入精炼的内部粗合金；仅在已声明产品需要精炼时纳入。

- 选定流：粗高碳锰铁
- 流属性/单位：质量 / kg
- 数量规则：计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 脱碳用工业氧气（`refine_oxygen`）

仅在吹氧脱碳路线中纳入气态工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3，体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按声明参考条件计量的氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 锰硅合金还原剂（`refine_silicomanganese`）

仅在已声明的中碳或低碳硅热精炼路线中纳入锰硅合金。

- 选定流：锰硅合金
- 流属性/单位：质量 / kg
- 数量规则：计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### 精炼电力（`refine_electricity`）

记录精炼炉、转炉辅助设备及其直接烟气捕集设备消耗的电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精炼锰铁合金（`refine_alloy`）

计量转入后处理的中碳或低碳合金，并保留实验室碳含量分析结果。

- 选定流：精炼锰铁合金
- 流属性/单位：质量 / kg
- 数量规则：计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

###### 锰铁精炼渣（`refine_slag`）

记录离开精炼路线的炉渣，并披露回用、出售、回收或处置。

- 选定流：锰铁精炼渣
- 流属性/单位：质量 / kg
- 数量规则：计量离开精炼过程的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 捕集的锰铁精炼粉尘（`refine_captured_dust`）

仅在捕集精炼粉尘离开内部循环、送往场外回收或处置时记录。

- 选定流：捕集的锰铁精炼粉尘
- 流属性/单位：质量 / kg
- 数量规则：计量外送质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 精炼二氧化碳排放至空气（`refine_co2_air`）

记录吹氧脱碳或精炼能源燃烧释放的二氧化碳，并声明碳来源。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg，质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：监测量，或根据采集的投入产出进行碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_refining_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

###### 精炼颗粒物排放至空气（`refine_pm_air`）

记录精炼烟气治理后释放的颗粒物并声明粒径级别。

- 选定流：排放至空气的颗粒物
- 流属性/单位：质量 / kg
- 数量规则：烟气监测量或经批准的计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_refining_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

### 过程：浇铸、凝固、破碎与筛分（`casting_and_sizing`）

#### 输入

##### 产品流

###### 进入后处理的锰铁合金（`finish_alloy_feed`）

将进入浇铸和粒度处理的粗高碳合金或精炼合金作为数据集中一种已声明内部状态记录。

- 选定流：进入后处理的锰铁合金
- 流属性/单位：质量 / kg
- 数量规则：计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### 后处理电力（`finish_electricity`）

记录浇铸机辅助设备、破碎、筛分和产品搬运的计量电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量或按设备电表分配的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售锰铁参考产品（`reference_ferromanganese`）

该流为满足已声明牌号和粒度规格的合格固态产品。

- 选定流：锰铁合金，块状 `2f5d9ece-fe82-4e6d-a12d-47366582ec48`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg，质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：恰好 1 kg 合格产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

###### 内部返回的锰铁筛下料（`finish_undersize_return`）

将返回重熔或再处理的筛下料作为内部循环记录，不计作可销售产出。

- 选定流：锰铁筛下料
- 流属性/单位：质量 / kg
- 数量规则：计量内部返回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### 废物流

###### 捕集的锰铁破碎粉尘（`finish_captured_dust`）

仅在后处理粉尘离开内部循环、送往回收或处置时记录。

- 选定流：捕集的锰铁破碎粉尘
- 流属性/单位：质量 / kg
- 数量规则：计量外送质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### 基本流

###### 后处理颗粒物排放至空气（`finish_pm_air`）

记录浇铸、破碎、筛分和产品搬运经治理后排放的颗粒物，并声明粒径级别。

- 选定流：排放至空气的颗粒物
- 流属性/单位：质量 / kg
- 数量规则：治理后的监测或经批准计算排放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售锰铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi-output foreground operations | 在应用分配前，优先对烧结、熔炼、精炼、煤气处理、炉渣处理和后处理采用独立计量的过程细分。 |  |
| `allocation_internal_returns` | internal sinter, alloy, dust, and undersize returns | 内部返回物不重复承担上游负荷，并披露总量和净量以便审计循环。 |  |
| `allocation_exported_coproducts` | manganese-rich slag and recovered CO-rich gas | 将每种外送共产品记录为独立产出。无法避免分配时，说明并论证所选物理或经济关系，在可行时报告未分配结果并进行敏感性分析。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production` |
| `allocation_waste_treatment` | residues sent to treatment | 按已声明的废物所有权和回收边界一致分配处理负荷与收益；不得将处置与产品销售视为相同去向。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preparation_records` | `raw_material_preparation` | 原料准备投入与烧结矿产出 | 地磅、批次单、燃气表、电表 | 物料标识；收到态质量；水分；锰品位；燃料量；热值；电量；烧结矿产出 | 将批次记录与库存变动及仪表核对 | kg、MJ、kWh | 每批及月度结算 | 与参考产品相同报告期 | 全部厂内原料准备线 | 汇总数量并按合格产品质量归一化 | 经校准秤表；批次核对；化验结果 |
| `cp_preparation_emissions` | `raw_material_preparation` | 原料准备颗粒物排放 | 烟气测试或连续/周期监测 | 气量；浓度；运行时间；粒径级别；治理停运 | 由实测气量和浓度计算污染物质量 | kg | 监测间隔及月度结算 | 报告年内有代表性运行期 | 每个原料准备排放点 | 按粒径级别汇总有组织及经量化无组织排放 | 校准证书；测试报告；运行日志 |
| `cp_smelting_records` | `ferromanganese_smelting` | 炉料、能源、水、合金、渣、煤气和粉尘 | 装料记录、出炉记录、仪表、库存平衡 | 物料标识；质量；品位；电量；水量；气量；热值；出炉合金；渣；粉尘去向 | 核对各炉役投入产出 | kg、kWh、m3、MJ | 每次装料或出炉及月度结算 | 完整报告期 | 生产已声明产品的全部炉体 | 按炉役进行质量和能量平衡汇总 | 经校准仪表；库存核对；化验结果 |
| `cp_smelting_emissions` | `ferromanganese_smelting` | 一氧化碳与颗粒物排放 | 烟囱及无组织监测 | 气量；一氧化碳浓度；颗粒物浓度；粒径级别；运行时间；捕集状态 | 由气量、浓度和时间计算排放 | kg | 监测间隔及月度结算 | 含出炉在内的代表性运行状态 | 全部炉体、出炉和物料搬运排放点 | 仅汇总污染物和介质一致的排放 | 监测 QA 记录；治理设备和火炬日志 |
| `cp_refining_records` | `ferromanganese_refining` | 路线投入、合金、渣和捕集粉尘 | 炉次单、氧气表、电表、称量记录 | 路线；投入合金；氧气；锰硅合金；电量；产出合金；碳分析；渣；粉尘去向 | 核对每个精炼炉次 | kg、Nm3、kWh | 每炉及月度结算 | 报告期内全部精炼炉役 | 已声明产品的全部精炼容器 | 先按精炼路线汇总再按产品加权 | 经校准仪表；炉次单；实验室碳结果 |
| `cp_refining_emissions` | `ferromanganese_refining` | 精炼二氧化碳与颗粒物排放 | 烟气监测与碳平衡 | 气量；浓度；运行时间；合金投入产出含碳量；粒径级别 | 监测排放或有记录的碳平衡计算 | kg | 每炉役或监测间隔 | 有代表性精炼期 | 全部精炼排放点 | 按路线和治理配置汇总 | 烟气测试报告；碳分析；计算审计轨迹 |
| `cp_finishing_records` | `casting_and_sizing` | 后处理投入、产品、返回物、粉尘和电力 | 浇铸记录、磅单、筛分记录、电表 | 合金投入；合格产品；粒度；筛下返回；粉尘去向；电量 | 核对后处理质量平衡 | kg、kWh | 每批及月度结算 | 完整报告期 | 全部浇铸和粒度处理线 | 汇总合格产出并将各行归一化至其净质量 | 经校准秤；筛分或粒度测试；库存核对 |
| `cp_finishing_emissions` | `casting_and_sizing` | 后处理颗粒物排放 | 烟气或岗位抽风监测 | 气量；浓度；运行时间；粒径级别；捕集状态 | 计算治理后排放量 | kg | 监测间隔及月度结算 | 有代表性的浇铸和粒度处理期 | 全部后处理排放点 | 按一致粒径级别与介质汇总 | 监测 QA 记录；治理设备日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every inventory row | 归一化量 = 报告期该行数量 / 报告期合格参考产品质量 | 采集的行数量；合格可销售质量 | 每 1 kg 可销售锰铁的数量 |  |
| `calc_net_internal_returns` | internal sinter, alloy, dust, and undersize loops | 披露总产量与返回量；仅将净边界穿越计为外部投入或产出 | 总转移量；内部返回量；外部转移量 | 净边界穿越量 |  |
| `calc_gas_energy` | recovered CO-rich gas | 外送能量 = 标准状态计量气量 × 实测低位热值 | 气量；压力温度修正；低位热值 | MJ 外送煤气 | `eu-jrc-nfm-bref-2017` |
| `calc_stack_release` | monitored air emissions | 排放质量 = 修正干烟气量 × 污染物浓度 × 运行时间，各参数采用一致参考条件 | 气量；浓度；时间；水分及参考条件 | kg 污染物排放量 |  |
| `calc_mass_balance` | each process and reporting period | 质量平衡差 = 实测质量投入合计 - 实测质量产出与量化排放合计 | 所有实测物料行 | 披露的绝对差和百分比差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 每个汇总产品炉役保留包含碳牌号、锰含量、杂质限值和粒度结果的质量证明。 | 实验室证明与产品规格 |
| `dq_route_separation` | process inventory | 高碳直接产品、吹氧脱碳和硅热精炼炉役在汇总前必须可区分。 | 炉役和炉次标识 |
| `dq_completeness` | foreground boundary | 核对采购、库存、内部返回、产品、渣、粉尘、煤气及报告排放；解释排除或估算行。 | 签署的质量与能量平衡审查 |
| `dq_temporal` | all records | 采用一个一致报告期，并记录停产、异常炉役及治理设备旁路。 | 生产日历和运行日志 |
| `dq_upstream` | purchased inputs | 记录供应商、地域、产品状态、组成或品位及匹配上游数据集版本。 | 采购规格与数据集映射记录 |
| `dq_emissions` | air releases | 标明烟囱或无组织排放、接收介质、颗粒物粒径级别、测量方法及治理配置。 | 监测报告和治理日志 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_amount` | reference flow | 归一化后合格参考产品产出必须恰好为 1 kg，并采用已确认的锰铁流 UUID 和质量支持引用。 |  |
| `validate_identity_qualifiers` | dataset metadata | 必须填写碳牌号、锰含量、产品状态、粒度、熔炼路线、精炼路线、炉体封闭形式、地域、报告期、炉渣去向和回收煤气去向。 | `eu-jrc-nfm-bref-2017`; `gbt-3795-2014` |
| `validate_process_conditions` | process map | 仅在场内原料准备时出现烧结行；仅对已声明精炼路线出现精炼行；必须评估全部 required 熔炼与后处理行。 | `eu-jrc-nfm-bref-2017` |
| `validate_atomic_flows` | inventory | 电力、每种燃料、每种物料、每种残余物、每种共产品和每种基本排放必须保持为独立原子行。 |  |
| `validate_mass_balance` | process and reporting period | 报告每个纳入过程的质量平衡差，并在发布前解释物料差异。 |  |
| `validate_no_unverified_defaults` | UUIDs and ranges | 暂定 UUID 或外部推断范围不得发布，除非已分别核验公共状态身份，或核验两个边界兼容且相互独立的原始来源。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；只有在独立完成方法、身份和数据质量审查后才可作为 `background_dataset` |
| downstream_use | 用于钢铁系统锰铁供应的产品流、过程和生命周期模型构建 |
| allowed_use | 由采集前景数据包代表的已声明工厂、技术、碳牌号、产品状态、地域和报告期 |
| excluded_use | 锰硅合金或金属锰生产；下游炼钢；未经代表性说明的不同碳牌号或精炼路线 |
| required_metadata | PCR id 与版本；产品 UUID；牌号与组成；粒度；场址与地域；报告期；炉型和精炼路线；治理；炉渣和煤气去向；分配；上游数据集版本 |
| required_quality_disclosure | 一手数据比例；仪表与秤覆盖率；质量平衡差；实验室方法；时间覆盖；估算行；治理停运；UUID 与范围证据状态 |
| update_trigger | 矿石配料或品位、碳牌号、炉型或精炼技术、电力结构、还原剂、治理系统、炉渣或煤气去向、分配、产品规格或报告期变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc-3-0-official-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-02） | CPC 41112 官方分类身份 |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Non-Ferrous Metals Industries，2017，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf（检索于 2026-09-02） | 锰铁牌号、原料、原料准备、熔炼、精炼、浇铸、渣、煤气、粉尘和治理过程分解 |
| `us-epa-ap42-ferroalloy-production` | `official_guidance` | 美国环境保护署，AP-42 Section 12.4 Ferroalloy Production，1986-10（1995-01 重排），https://www.epa.gov/sites/production/files/2020-11/documents/c12s04.pdf（检索于 2026-09-02） | 埋弧炉生产、出炉、粒度处理、渣、一氧化碳和颗粒物的独立过程与排放路径证据 |
| `gbt-3795-2014` | `standard` | GB/T 3795-2014《锰铁》/ Ferromanganese，全国标准信息公共服务平台，https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=3A0EAAB85AC5FB0A324B83A300694EEA（检索于 2026-09-02） | 专业中文产品名称及标准产品身份 |
