---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.other-lifting-handling-loading-or-unloading-machinery
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他起重、装卸、装载或卸载机械

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 43562 所涵盖的完整非机器人起重、装卸、装载或卸载机械的工厂门前景数据包。CPC 官方解释性说明将该子类关联至 HS 2022 品目或子目 8428.10、.20、.31、.32、.33、.39、.40、.60 和 .90。数据集所有者必须应用官方分类规则，并说明所申报产品为何属于这一剩余子类。

本 PCR 涵盖产品特定的物料清单归属、厂内材料准备与制造、表面处理、总装与试验、包装以及工厂门放行。采购的材料、部件、燃料、电力和水作为产品流进入，并关联与其交付边界相符的供应商数据集。产品离开工厂后的配送、安装、运行、维护、更换、退役和寿命终止不属于本前景制造数据包，必须在下游情景中另行明确建模。

当官方分类将产品归入其他子类时，工业机器人、复式滑车和提升机、卷扬机、绞盘、千斤顶、转臂起重机、起重机、装有起重机的车辆、叉车和其他工程车辆、升降机、箕斗提升机、自动扶梯、自动人行道、连续式升降机和输送机、单独供应的零件，以及单独供应的斗、铲、抓具或夹具均不在本 PCR 范围内。本 PCR 不构成产品安全或法规符合性证明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.other-lifting-handling-loading-or-unloading-machinery |
| classification_refs | CPC:3.0:43562 — 其他起重、装卸、装载或卸载机械；官方解释性说明所列 HS 范围为 8428.10、.20、.31、.32、.33、.39、.40、.60 和 .90 |
| covered_products | 按官方剩余类别规则归入 CPC 43562 的完整起重、装卸、装载或卸载机械 |
| excluded_products | 工业机器人；归入 CPC 43510、43520、43530、43540 或 43550 的机械；CPC 43570 的单独供应零件；CPC 43580 的单独供应斗、铲、抓具和夹具；安装、维修和装卸服务 |
| representative_product | 处于工厂门放行配置并完成出厂试验的完整机械，按 1,000 kg 成品机械净质量归一化 |
| production_route | 产品特定采购物料清单；有条件纳入的厂内切割、成形、焊接与机加工；有条件纳入的湿式或粉末涂装；必须纳入的总装与功能试验；包装和工厂门放行 |
| market_state | 制造商工厂门处新的、完整且完成出厂试验的机械；明确包装状态和随附附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供具有所申报起重、装卸、装载或卸载功能的完整 CPC 43562 机械 |
| How much | 1,000 kg 成品机械净质量 |
| How well | 符合所申报型号规格、额定载荷或吞吐量、提升或行程参数、工作级别、驱动与控制架构、试验验收准则和随附附件要求 |
| How long or cycle | 一批经验收的工厂门生产输出；本数据不表示使用阶段寿命和运行循环，下游使用情景必须另行声明 |
| reference_flow_link | `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 其他起重、装卸、装载或卸载机械 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品名称和型号；有记录的 CPC 43562 分类依据；成品机械净质量；额定载荷或吞吐量；适用的提升高度、行程或装卸包络；工作级别或声明运行循环；驱动类型和能源载体；控制架构；主要承载材料牌号；出厂配置；随附附件；包装状态；制造地域和基准期；采购输入交付边界；分配方法；排除的下游阶段 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和按质量归一化的清单 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤、扣除单独申报包装后的可靠发运记录，或经核对的产品特定物料清单确定成品机械净质量。所有归属量必须归一化至恰好 1,000 kg 成品机械净质量。 |
| `electricity_energy` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按过程保留电力计量记录。记录单位为 kWh 时，采用精确恒等式 1 kWh = 3.6 MJ 转换，并保留原始读数与换算。 |
| `gas_volume` | 气态天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 在声明的基准温度与压力下报告气体体积。进行能量或排放计算时，保留计量体积、基准条件、净热值、碳因子、化石碳比例和氧化因子。 |
| `water_mass` | 工艺用水和废水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测质量，或按有记录的密度和基准条件将计量体积换算为质量；在未计入产品含水、蒸发和其他去向前，不得将用水量直接等同于废水量。 |
| `packaging_mass` | 欧标木托盘和瓦楞纸板 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅记录随参考产品离开工厂的包装。说明托盘为新托盘、重复使用、退回或排除；无记录的使用次数不得用于分摊重复使用包装。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购材料、部件、燃料、电力和水已到达各供应商数据集所声明的边界，可供制造商接收并用于生产 |
| starting_condition_role | 将上游供应系统与制造商前景作业分开的明确边界锚点 |
| product_classification_scope | 归入 CPC 3.0 子类 43562 的完整机械；不包括工业机器人，也不包括归入更具体类别的产品、零件或服务 |
| recursive_input_rule | 采购并装入另一台机械的完整 CPC 43562 机械仍作为具有独立上游数据集的输入；不得将其并入参考输出，也不得把本前景清单递归应用于其自身 |
| upstream_dataset_requirement | 每一种采购的原子材料、部件、能源载体、水和包装制品均须关联地域、技术和时间代表性适当且声明交付边界的上游数据集 |
| disclosure | 声明工厂场址、基准期、产品型号或产品族构成、BOM 覆盖率、自制与外购边界、纳入的生产路线、包装状态、分配、数据缺口、代理数据及所有排除的下游阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_product_specific` | 物料清单与制造活动 | 使用产品特定物料清单和可归属于产品的企业记录。将声明前景边界内所有已知材料和能源输入、废物及直接排放分别记录为原子交换。 | `eu-pef-method-2021` |
| `boundary_factory_gate` | 前景过程覆盖 | 纳入接收与归属、适用的厂内制造与表面处理、总装与试验、包装以及制造商工厂门放行。 | `eu-pef-method-2021` |
| `boundary_supplier_link` | 采购输入 | 每项采购输入均关联至其声明交付边界处的上游数据集，避免重复计算供应商数据集中已含的生产或运输。 | `eu-pef-method-2021` |
| `boundary_downstream_exclusion` | 工厂门后的阶段 | 本前景数据包排除放行后的配送、安装、运行、维护、更换、退役和寿命终止；仅在明确界定范围的下游生命周期模型中加入。 |  |
| `boundary_no_cutoff_by_list` | 清单完整性 | 本模式清单仅为最低要求。实例化数据集时，必须为其他产品特定 BOM 项、工艺耗材、废物和直接基本流排放逐项添加原子行；不得把本通用清单中未列出视为可截断依据。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | 材料接收与准备 | `required` | 始终纳入产品特定 BOM 的接收、检验和归属；仅在厂内实施时纳入具体准备作业 | 前景 BOM 控制与材料准备 | 每 1,000 kg 经验收成品机械净质量的可归属采购输入 |
| `fabrication` | 结构制造与机加工 | `conditional` | 报告组织在边界内实施切割、成形、焊接、机加工或水基制造辅助时纳入 | 承载材料的前景转化 | 每 1,000 kg 经验收成品机械净质量的可归属过程活动 |
| `surface_finishing` | 表面准备与涂装 | `conditional` | 纳入厂内实际实施的每一种湿式涂装或粉末涂装路线；仅在有记录的外购已处理件或不涂装配置下方可省略 | 前景防腐与表面处理 | 每 1,000 kg 经验收成品机械净质量的可归属过程活动 |
| `assembly_testing` | 总装与功能试验 | `required` | 始终纳入装配与验收试验；柴油试验仅适用于柴油驱动或使用柴油试验的配置 | 前景装配与验收 | 每 1,000 kg 经验收成品机械净质量的可归属过程活动 |
| `release_dispatch` | 包装、放行与发运门 | `required` | 始终纳入产品放行；仅在包装制品随产品离厂时纳入该制品 | 前景包装与参考产品放行 | 1,000 kg 经验收成品机械净质量 |

### 过程：材料接收与准备（`material_preparation`）

#### 输入

##### 产品流

###### 承载结构制造用碳钢板（`carbon_steel_plate`）

仅当交付的碳钢板是跨越前景边界的实际产品特定 BOM 行时记录。材料牌号、厚度、表面状态、再生含量声明和供应商交付边界均为必需限定信息。

- 选定流：碳钢板
- 流属性/单位：Mass / kg
- 数量规则：依据采购、接收和库存变动记录确定归属于参考产品的净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receipts`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

### 过程：结构制造与机加工（`fabrication`）

#### 输入

##### 产品流

###### 制造用外购电力（`fabrication_electricity`）

在切割、成形、焊接、机加工和局部抽排属于边界时，记录可归属于这些作业的计量电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量用电，或按有记录的分配方法将设施用电归属于制造订单
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：`eu-pef-method-2021`

###### 热切割用工业氧气（`cutting_oxygen`）

仅在耗用氧气辅助热切割或其他有记录的制造作业中记录工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在声明基准条件下，按供应商计量或气瓶平衡确定归属于边界内生产订单的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：`eu-pef-method-2021`

###### 制造用工艺用水（`fabrication_process_water`）

仅在机加工、清洗或其他制造作业中，工艺用水跨越过程边界时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或罐体平衡得到的、可归属于边界内制造订单的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 制造产生的工业后钢废料（`post_industrial_steel_scrap`）

记录以工业后废物形式离开制造过程的分类收集铁质边角料、切屑和报废钢材。处理路线及其是否作为二次材料出售应与流身份分开披露。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：称重外运废钢加经核实的库存变动，并归属于边界内生产订单
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：`eu-pef-method-2021`

##### 基本流

### 过程：表面预处理与涂装（`surface_finishing`）

#### 输入

##### 产品流

###### 湿式涂装路线用工业维护涂料（`industrial_maintenance_coating`）

仅在采用湿式工业维护涂层时记录该原子涂料流。配方、固体分、混合损耗、供应商和施工方法作为前景限定条件保留。

- 选定流：工业维护涂料 `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- 流属性/单位：Mass / kg
- 数量规则：发料涂料质量减去密封退料和可归属于参考产品的经核实库存变动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-pef-method-2021`

###### 粉末涂装路线用粉末涂层（`powder_coating`）

仅在产品采用粉末涂装路线时记录。粉末回收和再循环留在过程内，只有净新增粉末输入跨越边界。

- 选定流：粉末涂层 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位：Mass / kg
- 数量规则：新增粉末发料量减去密封退料和可归属于参考产品的经核实库存变动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-pef-method-2021`

###### 表面处理用外购电力（`coating_electricity`）

记录可归属于边界内涂装路线的预处理、通风、泵送、施工、固化和污染控制计量电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表用电，或按有记录的方法分配至表面处理订单的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-pef-method-2021`

###### 涂装炉用气态天然气（`coating_natural_gas`）

仅在干燥、固化或热表面处理设备直接消耗天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在声明的基准条件下，计量可归属于表面处理的气体体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-pef-method-2021`

###### 表面预处理用工艺用水（`coating_process_water`）

在存在清洗、漂洗或水基表面预处理路线时，记录所用工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或罐体平衡得到的、可归属于表面预处理的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 表面预处理废水（`coating_wastewater`）

将离开水基预处理或涂装辅助环节的废水作为单一废物流记录，并声明成分、场内预处理、接收系统和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或以有记录的密度将计量体积换算为可归属于表面处理的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-pef-method-2021`

##### 基本流

###### 排入空气的非甲烷挥发性有机化合物（`coating_nmvoc`）

记录湿式涂装路线经捕集和处理后直接排放的非甲烷挥发性有机化合物。本行不得用于甲烷、留在产品内的溶剂或作为废物转移的溶剂。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：可归属于湿式涂装路线的实测排放质量，并保留监测基础和处理设施运行状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-pef-method-2021`

###### 涂装供热产生的化石源二氧化碳（`coating_fossil_co2`）

仅记录涂装路线场内燃烧天然气直接产生的化石源二氧化碳。上游燃料供应排放留在天然气供应商数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接实测排放，或利用采集的燃料量和场址因子记录按 `calc_direct_fossil_co2` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_records`
- 来源：`eu-pef-method-2021`

### 过程：总装与功能测试（`assembly_testing`）

#### 输入

##### 产品流

###### 装配与测试用外购电力（`assembly_electricity`）

记录机械、电气和液压装配、控制配置、功能测试及验收检查所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量用电，或按有记录的方法分配至装配和验收测试订单的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_test_records`
- 来源：`eu-pef-method-2021`

###### 功能测试消耗的柴油（`test_diesel`）

仅在机械或试验台架于边界内验收测试期间燃烧柴油时记录。柴油牌号和生物源比例作为前景限定条件保留。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：罐体、领退料或校准试验台架的燃料平衡中，可归属于验收产品测试的柴油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_test_records`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 柴油测试产生的化石源二氧化碳（`test_fossil_co2`）

仅记录边界内燃烧柴油直接产生的化石源二氧化碳。上游柴油供应排放留在柴油供应商数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接实测排放，或利用采集的柴油量和场址因子记录按 `calc_direct_fossil_co2` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_test_records`
- 来源：`eu-pef-method-2021`

### 过程：包装、放行与出厂交付点（`release_dispatch`）

#### 输入

##### 产品流

###### 随机械出厂的欧标木托盘（`euro_wooden_pallet`）

仅在欧标木托盘随参考产品离厂时记录。其他托盘设计需要单独的原子流行。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：随经验收参考产品出厂的托盘净质量，仅按有记录的重复使用或返还规则调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`
- 来源：`eu-pef-method-2021`

###### 随机械出厂的瓦楞纸板（`corrugated_cardboard`）

仅在用于护角、纸箱或隔板的瓦楞纸板随参考产品离厂时记录。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：瓦楞纸板发料质量减去未使用退料和可归属于放行产品的库存变动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经验收的工厂大门交付机械（`reference_product_output`）

记录在工厂大门放行的完整且经验收 CPC 43562 机械净质量。包装质量不计入机械净质量；包装随产品出厂时在各自输入行中记录。

- 选定流：其他起重、装卸、装载或卸载机械
- 流属性/单位：Mass / kg
- 数量规则：作为归一化分母的经验收成品机械净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1,000 kg 经验收成品机械净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`
- 来源：`un-cpc-3-0-structure-2025`；`un-cpc-3-0-explanatory-notes-2025`；`eu-pef-method-2021`

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多产品设施和共享过程 | 首先通过产品特定 BOM、生产订单、分表计量、废物分别称量或单元过程细分避免分配。 | `eu-pef-method-2021` |
| `allocation_physical` | 无法细分的共享负荷 | 采用有记录的因果物理驱动因素分配，例如实测机器工时、过程时间、加工质量或计量能源，并说明其代表共享输入或排放的理由。 | `eu-pef-method-2021` |
| `allocation_other_relationship` | 剩余多功能负荷 | 只有在说明细分、系统扩展和相关物理关系均不可行后，方可采用包括经济价值在内的其他关系；记录价格、基准期、计算和敏感性。 | `eu-pef-method-2021` |
| `allocation_scrap` | 钢废料及其他可回收输出 | 报告废物流总量和处理去向；不得在前景过程中扣除所避免的初生生产。任何回收信用或替代效应须属于明确声明的下游建模约定。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_receipts` | `material_preparation` | 产品特定材料和部件输入 | 采购订单、BOM、收货与库存记录 | item_id; material_or_component_name; grade_or_specification; supplier; delivery_boundary; received_mass_kg; rejected_mass_kg; opening_stock_kg; closing_stock_kg; production_order | 将工程 BOM 与采购、收货和库存记录核对；记录未提供核实质量时称量材料 | kg | 每次收货和每个生产订单 | 有代表性的连续 12 个月或完整声明批次 | 对声明产品有贡献的每个工厂 | 按原子流汇总经验收的可归属输入和库存变动；用 `calc_reference_normalization` 归一化 | 批准的 BOM 版本；供应商文件；校准秤记录；库存核对；异常日志 |
| `cp_fabrication_records` | `fabrication` | 制造电力、氧气、工艺用水与钢废料 | 分表、气瓶或散装气记录、水表、生产订单和废钢票据 | order_id; operation; electricity_kWh; oxygen_m3; oxygen_reference_conditions; water_kg_or_m3; water_density; scrap_kg; meter_period; allocation_driver | 优先读取分表；否则核对设施总表并采用有记录的物理分配驱动因素；称量外运废钢 | MJ; m3; kg | 每个生产订单，且至少每月核对仪表 | 与产品输出相同的基准期 | 每个边界内制造场址及其负荷未含于供应商数据集的外协作业 | 按订单或批准的分配驱动因素归属；按第 4 节换算电力和水；用 `calc_reference_normalization` 归一化 | 校准记录；账单；仪表日志；废钢称重票；订单工艺路线；分配工作表 |
| `cp_coating_records` | `surface_finishing` | 涂料、能源、水、废水与直接空气排放 | 批次领料、仪表、废水和排放监测记录 | order_id; coating_route; wet_coating_kg; powder_coating_kg; returned_material_kg; electricity_kWh; natural_gas_m3; gas_reference_conditions; water_kg_or_m3; wastewater_kg_or_m3; nmvoc_kg; fossil_co2_kg; emission_method; treatment_state | 核对批次领退料；读取过程仪表；计量废水；采用直接排放监测或有记录的场址计算输入 | kg; MJ; m3 | 每个涂装批次，且至少每月核对仪表和排放 | 与产品输出相同且代表处理设施运行的基准期 | 每条边界内预处理、涂装、固化和污染控制线 | 湿式和粉末路线分开；按订单、面积或有记录的过程驱动因素归属；用 `calc_reference_normalization` 归一化 | 批次表；安全或配方记录；仪表校准；排放记录；监测报告；处理设施运行日志 |
| `cp_assembly_test_records` | `assembly_testing` | 装配电力、测试柴油与直接化石源二氧化碳 | 生产订单、分表、燃料领料和测试记录 | order_id; model; accepted_status; electricity_kWh; diesel_kg; diesel_fossil_fraction; test_hours; measured_co2_kg; emission_factor; factor_unit; oxidation_factor | 读取试验台架和区域仪表；核对燃料领退；保留直接监测或场址特定因子证据 | kg; MJ | 每个装配与验收测试订单 | 与产品输出相同的基准期 | 每个边界内装配和测试场址 | 计入可归属于放行产品的验收和未验收测试活动；用 `calc_reference_normalization` 归一化 | 验收测试证书；仪表校准；燃料日志；因子来源；不合格与返工记录 |
| `cp_release_records` | `release_dispatch` | 放行包装与参考产品净输出 | 装箱单、称重记录和放行记录 | order_id; product_model; cpc_rationale; accepted_units; net_machine_mass_kg; pallet_type; pallet_mass_kg; pallet_reuse_status; corrugated_cardboard_kg; packaging_status; release_date | 称量或核对经核实的发运和 BOM 质量；区分机械净质量、包装及可重复使用运输工装 | kg | 每个放行订单 | 与制造记录相同的基准期 | 声明数据集中的每个出厂交付点 | 按原子流汇总经验收机械净质量和可归属包装；用 `calc_reference_normalization` 归一化 | 校准秤证书；装箱单；验收放行单；产品规格；分类复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个可归属清单行 | 归一化量 = 可归属量 × 1,000 / 经验收成品机械净质量；各质量统一使用 kg，且分子与分母采用同一产品总体。 | 可归属行数量；以 kg 计的经验收成品机械净质量 | 每 1,000 kg 参考产品的行数量 | `eu-pef-method-2021` |
| `calc_electricity_conversion` | 以 kWh 记录的电力 | electricity_MJ = electricity_kWh × 3.6；保留原始仪表单位和值。 | electricity_kWh | electricity_MJ |  |
| `calc_direct_fossil_co2` | 直接燃烧天然气或柴油 | 有条件时使用直接实测化石源二氧化碳；否则以采集燃料量乘以有记录的场址因子、化石比例和氧化因子，并进行单位一致的换算。直接排放行不计入上游燃料供应排放。 | 燃料量；基准条件或密度；排放因子及单位；化石比例；氧化因子 | kg 化石源二氧化碳 | `eu-pef-method-2021` |
| `calc_mass_reconciliation` | 每个产品总体 | 将采购和期初库存质量与期末库存、经验收产品、废物、实测排放及有记录的库存变动核对；调查并披露无法解释的不平衡，不得强行归入总括流。 | 原子输入质量；库存变动；产品质量；原子废物和排放质量 | 质量平衡检查和差异披露 | `eu-pef-method-2021` |
| `calc_shared_process_allocation` | 共享制造记录 | 采用第 7 节有序分配规则，保留未分配总量、驱动因素、分母、分配结果和理由。 | 共享总量；产品可归属驱动量；总驱动量；所选层级步骤 | 分配至产品的数量 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品和每个清单行 | 确认产品分类、型号、状态，以及各流的类型、属性和单位。将每个产品特定 BOM 或废物项目展开为单一原子流；UUID 未解决时保持空值，不得采用代理。 | 分类复核；批准的 BOM；UUID 直接读取审计；未解决流登记表 |
| `dq_technology` | 制造路线 | 记录须代表所声明的切割、连接、涂装、装配和测试技术；湿式、粉末和其他有实质差异的路线须分开。 | 工艺路线、批次和设备记录；技术覆盖说明 |
| `dq_geography` | 场址与供应商链接 | 识别每个工厂，并披露材料、能源、水和废物处理数据集的地域及交付边界。 | 场址清单；供应商数据集元数据；发运与废物转移记录 |
| `dq_time` | 前景基准期 | 采用有代表性的连续 12 个月或完整声明批次；分子和产品输出分母时间对齐，并说明停机、爬坡、异常返工或缺失期间。 | 带日期的仪表、订单、发票、库存记录和覆盖率计算 |
| `dq_precision` | 实测和计算数量 | 对重要行保留校准、仪表分辨率、换算因子、分配驱动因素，以及不确定性或数据缺口说明。 | 校准证书；计算工作簿；因子来源；不确定性说明 |
| `dq_completeness` | 过程与交换覆盖 | 核对 BOM、能源、水、废物和直接排放记录；报告覆盖情况和未解决项目，不得以本通用模式清单为由省略产品特定交换。 | 完整性矩阵；质量和能源核对；异常登记表 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 参考产品 | 确认产品是完整 CPC 43562 机械，且不是工业机器人、归入其他具体起重设备子类的产品、单独供应的零部件或服务。 | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_qualifiers` | 参考流 | 若数据包缺少型号、CPC 分类理由、净质量、额定功能、运行或工况限定、驱动方式、主要材料、工厂配置、包装状态、地域、期间、边界或分配披露，则予以拒绝。 | `un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_mass` | 归一化 | 确认经验收成品机械净质量等于参考分母且不含单独报告的包装；所有归一化行采用同一经验收产品总体。 | `eu-pef-method-2021` |
| `validate_atomic_inventory` | 所有交换 | 拒绝复数集合、合并能源载体、未展开 BOM 类别、合并废物流，或一个行中包含多个物理、化学、废物或基本流交换。 | `eu-pef-method-2021` |
| `validate_route_conditions` | 条件过程与行 | 每条纳入路线须有证据；对省略的制造、湿式涂装、粉末涂装、天然气固化、水基预处理、柴油测试及包装行须记录不适用判定。 | `eu-pef-method-2021` |
| `validate_combustion_consistency` | 场内燃料使用 | 边界内燃烧天然气或柴油时，须有相应的直接化石源二氧化碳记录或有理由的实测零排放结果；直接排放行不得包含上游供应排放。 | `eu-pef-method-2021` |
| `validate_allocation` | 共享及多功能过程 | 确认第 7 节层级、驱动因素、分母和敏感性均有记录，且可回收废料按总量报告，不含未声明的避免负荷信用。 | `eu-pef-method-2021` |
| `validate_data_quality` | 数据集就绪性 | 确认技术、地域和时间代表性、精度、完整性、来源元数据、校准证据、数据缺口和代理均已披露。 | `eu-pef-method-2021` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整 CPC 43562 机械的产品特定工厂大门制造前景数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 作为制造阶段数据集链接至有记录的生命周期模型，且产品身份、参考质量、地域、技术、期间和边界须与限定条件一致 |
| excluded_use | 不同机械功能或工况等级之间无条件比较；产品安全或合格声明；使用阶段性能声明；没有单独情景的安装、维护或寿命终止结果 |
| required_metadata | 规范 PCR id；产品型号；CPC 和 HS 分类理由；参考质量；额定载荷或吞吐量；升降、行走或搬运范围；工况等级或周期；驱动和控制；主要材料牌号；所含附件；包装状态；工厂场址；基准期；供应商边界；分配；路线纳入情况；数据缺口和代理 |
| required_quality_disclosure | BOM 与过程覆盖；验收与未验收生产总体；仪表和校准覆盖；技术、地域和时间代表性；精度；质量核对；分配敏感性；未解决 UUID 和范围证据需求 |
| update_trigger | 产品设计、BOM、供应商交付边界、工厂或路线、涂装体系、能源组合、燃料、测试程序、包装、分配方法、基准期、分类范围发生实质变化，或有新确认的天工 UUID |

## 11. 数据来源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 43562 官方身份及其位于 CPC 43561 工业机器人之后的剩余类别位置 |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版解释性说明》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 43562 官方名称及 HS 2022 品目或子目 8428.10、.20、.31、.32、.33、.39、.40、.60 和 .90 |
| `un-cpc-1-1-chinese-2002` | `official_guidance` | 联合国，《产品总分类 1.1 版》中文版，M 系列第 77 号/1.1 版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | “其他起重、装卸、装载、或卸载机械”的既有中文术语；仅按现代标点调整，含义不变 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会 2021 年 12 月 15 日第 2021/2279 号建议附件一《产品环境足迹方法》英文合并文本，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | 产品特定 BOM 和企业特定制造数据；清单完整性；前景记录来源；分配层级；技术、地域和时间代表性及精度 |
