---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.reservoirs-tanks-vats-and-similar-containers-other-than-for-compressed-or-liquefied-gas-8adef04a
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁、钢或铝制容积超过300升且未装有机械或热力设备的储罐、槽罐、大桶及类似容器（压缩气体或液化气体容器除外）

## 1. 范围与适用性

本 PCR 适用于铁、钢或铝制成、容积超过 300 升、不用于压缩气体或液化气体且未装有机械或热力设备的成品无源储罐、槽罐、大桶及类似容器的工厂大门生产。范围涵盖从外购金属材料到切割、成形、连接、条件性表面处理、检验以及准予发运的车间制造过程。

本 PCR 不包括容积不超过 300 升的容器；压缩气体或液化气体钢瓶及其他容器；锅炉、换热器、带搅拌装置或其他机械设备的容器；泵、阀门、外部管道、基础、现场组装、安装、使用、维护和寿命终止阶段。作为产品组成部分交付的无源接管、人孔、加强件、支座和工厂涂覆防护层属于范围内。应声明产品设计、材料牌号、标称容积、压力设计依据、表面状态和出厂试验状态。CPC 正式来源界定了产品类别，但不提供清单数量（`un-cpc-3-0-structure-2025`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.reservoirs-tanks-vats-and-similar-containers-other-than-for-compressed-or-liquefied-gas-8adef04a |
| classification_refs | CPC 3.0：42210（精确分类语境；映射接受仍由单独的仓库决策确定） |
| covered_products | 铁、钢或铝制容积超过 300 L 的成品无源储罐、槽罐、大桶及类似容器，包括随产品交付的无源整体附件和防护表面层 |
| excluded_products | 容积 ≤300 L 的容器；压缩气体或液化气体容器；带机械或热力设备的容器；锅炉；换热器；独立泵、阀门、管道、基础及现场安装 |
| representative_product | 一台完成制造和检验、在工厂大门交付、容积超过 300 L 且未装有机械或热力设备的钢制或铝制储存/工艺罐 |
| production_route | 外购板材收货；切割与成形；焊接/连接；按路线采用的表面预处理与涂装；检验与出厂放行 |
| market_state | 制造厂大门处的干燥成品容器；声明材料牌号/合金、标称容积、壁厚、涂层/衬里状态、整体附件、试验状态、地域和生产年份 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一台可离开制造厂大门的成品无源大型金属储罐、槽罐、大桶或类似容器 |
| How much | 1 kg 合格成品净质量，不含临时运输工装和试验用水 |
| How well | 容积超过 300 L；铁、钢或铝制；不用于压缩气体或液化气体；未装有机械或热力设备；已声明牌号、容积、表面状态、附件和检验状态 |
| How long or cycle | 一次工厂大门产品交付；不表示使用寿命，下游使用阶段时长须另行建模 |
| reference_flow_link | `inspection_dispatch` 放行的合格 `finished_tank_output` 质量，并归一化至 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 成品大型金属储罐、槽罐、大桶或类似容器 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 基体金属和牌号；已知时声明初级/次级材料路线；标称容积（>300 L）；壁厚和产品质量；预期盛装介质；确认不包括压缩/液化气体用途；确认未装有机械/热力设备；涂层或衬里体系及固化状态；整体附件；出厂试验方法与结果；制造地域；生产期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。参考产品 UUID 仍未解决，不得用未涂装的中间容器箱体 UUID 替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | `finished_tank_output` 及所有归一化清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 排尽试验水并排除临时运输工装后，确定一台合格成品的净质量；所有清单行归一化至该质量的 1 kg。 |
| `electricity_energy` | `forming_electricity`、`joining_electricity`、`finishing_electricity`、`inspection_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表记录的电能，并按 3.6 MJ/kWh 将 kWh 换算为 MJ；披露电压等级、电网/现场供电拆分以及共用电表的分配。 |
| `gas_reference_conditions` | `welding_argon` | Volume | m3 | 按供应商或仪表规定的参考温度和压力记录氩气；不得把氩气与二氧化碳或其他保护气合并，并披露从气瓶质量进行的任何换算。 |
| `water_mass_basis` | `surface_treatment_water`、`hydrotest_water` 及相关废水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越前景边界的补充水；若按体积计量，应采用有文件依据的密度和参考条件，并区分内部回用水与新增投入水。 |
| `coating_as_supplied_mass` | `epoxy_coating` | Mass | kg | 记录按供货状态计量的配方涂料质量，并分别披露固体分、混合组分、溶剂/水含量和留在产品上的固化涂层；不得仅以干膜质量代表外购涂料。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购钢板或铝板以及其他外购消耗品在制造厂大门收货，并记录供应商身份、牌号、质量和交付状态 |
| starting_condition_role | 制造阶段门到门前景起点；外购材料和能源的上游生产由所链接的上游数据集表示，不在前景过程中重复构建 |
| product_classification_scope | 铁、钢或铝制容积超过 300 L 的无源容器，不包括压缩/液化气体用途和装有机械或热力设备的容器 |
| recursive_input_rule | 若外购同类容器被组装进另一交付容器，则将其作为产品投入仅记录一次，并链接其自身上游数据集和声明产品状态；不得在本前景数据包中递归展开其制造过程 |
| upstream_dataset_requirement | 为金属板材、电力、工艺用水、氢氧化钠、焊接消耗品、保护气、涂料以及实际使用的其他外购投入链接具有供应商和路线代表性的数据集；披露地域、技术、再生料含量和时间代表性 |
| disclosure | 声明纳入的车间工序、外包工序、共用公用工程分配、废料去向、表面处理路线、涂层体系、试验水回用、排放控制、排除的资本货物，以及纳入范围的任何运输或安装活动 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入外购投入收货、切割/成形、焊接/连接、按路线采用的表面处理、检验、现场废物或排放控制，以及成品通过制造厂大门的放行。 | `un-cpc-3-0-structure-2025`; `us-ecfr-40-cfr-63-subpart-xxxxxx` |
| `boundary_conditional_finishing` | 表面处理与涂装 | 仅当针对所声明产品实施时，纳入水性处理、清洗、涂料施工、固化和设备清洗；将每种化学品、涂料、废物和排放物质分别记录为独立交换。 | `eu-jrc-stm-bref-2006`; `us-ecfr-40-cfr-63-subpart-xxxxxx` |
| `boundary_outsourced_operations` | 外包制造 | 通过供应商过程数据集以及跨越报告边界的产品或服务纳入外包工序；不得在报告工厂重复计算其直接能源、化学品、废物或排放。 | `eu-commission-recommendation-2021-2279` |
| `boundary_exclusions` | 下游和非产品活动 | 本工厂大门画像排除安装、基础、外部管道、使用、维护、退役和寿命终止；若研究明确扩展边界，应将这些阶段另行报告。 | `un-cpc-3-0-structure-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_forming` | 材料准备、切割与成形 | `required` | 始终纳入；仅纳入所声明的钢和/或铝材料行 | 前景制造 | 每 kg 合格成品 |
| `joining_assembly` | 焊接、连接与组装 | `required` | 始终纳入；仅针对有文件记录的连接路线启用相应消耗品和保护气行 | 前景组装 | 每 kg 合格成品 |
| `surface_finishing` | 表面预处理与防护性精整 | `conditional` | 实施化学清洗、水性处理或工厂涂覆涂层/衬里时纳入 | 前景精整 | 每 kg 合格成品及所声明处理面积 |
| `inspection_dispatch` | 检验、试验、排水与出厂放行 | `required` | 始终纳入；仅在实施水压试验时启用水压试验用水行 | 前景质量放行 | 1 kg 合格成品净质量 |

### 过程：材料准备、切割与成形（`material_preparation_forming`）

#### 输入

##### 产品流

###### 钢板投入（`steel_plate_input`）

所声明产品含铁或钢时，记录跨越工厂边界的外购钢板。对于全铝制产品，本行不适用；合金、牌号、厚度、表面状态、供应商和再生料含量仍为产品特定限定信息。

- 选定流：钢板
- 流属性/单位：Mass / kg
- 数量规则：为产品订单领用的合格板材实测质量，扣除退回的未使用库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_scrap`
- 来源：

###### 铝板投入（`aluminium_plate_input`）

所声明产品含铝时，记录跨越工厂边界的外购铝板。对于全铁/钢制产品，本行不适用；合金、状态、厚度、供应商、再生料含量和表面状态仍为产品特定限定信息。

- 选定流：铝板
- 流属性/单位：Mass / kg
- 数量规则：为产品订单领用的合格铝板实测质量，扣除退回的未使用库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_scrap`
- 来源：

###### 成形用电（`forming_electricity`）

记录本过程中切割、卷制、弯曲、冲压、机加工、打磨及其局部抽风所用电能。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：过程电表实测电量，或采用有文件依据的方法从共用电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`us-ecfr-40-cfr-63-subpart-xxxxxx`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分流收集的钢制制造废料（`steel_fabrication_scrap`）

将离开过程的钢制边角料、切屑和不合格钢件作为一项分流废物流记录。铝废料保留在单独行中；退回内部库存的材料须披露，但不得计为废物。

- 选定流：钢制制造废料
- 流属性/单位：Mass / kg
- 数量规则：从产品订单转移至内部回收存放区或外部废物接收方的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_scrap`
- 来源：

###### 分流收集的铝制制造废料（`aluminium_fabrication_scrap`）

将离开过程的铝制边角料、切屑和不合格铝件作为一项分流废物流记录。钢废料保留在单独行中；退回内部库存的材料须披露，但不得计为废物。

- 选定流：铝制制造废料
- 流属性/单位：Mass / kg
- 数量规则：从产品订单转移至内部回收存放区或外部废物接收方的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_scrap`
- 来源：

##### 基本流

### 过程：焊接、连接与组装（`joining_assembly`）

#### 输入

##### 产品流

###### 药芯焊丝（`flux_cored_wire`）

仅在采用药芯焊丝电弧焊路线时记录药芯焊丝。焊丝牌号及其与基体金属的相容性应符合已记录的焊接工艺。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：领用质量减去未开封退料，并以采购记录或焊接车间库存记录支持
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_inputs`
- 来源：`us-epa-ap42-12-19-welding-1995`

###### 药皮焊条（`covered_welding_electrode`）

仅在采用焊条电弧焊时记录药皮焊条。不得将本交换与焊丝、焊剂或其他电极类别合并。

- 选定流：药皮焊条
- 流属性/单位：Mass / kg
- 数量规则：产品订单的焊条领用质量减去未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_inputs`
- 来源：`us-epa-ap42-12-19-welding-1995`

###### 氩气保护气（`welding_argon`）

仅当气态氩气作为单独供应的保护气跨越边界时记录。若使用二氧化碳或其他气体，应在完整数据包中作为独立原子交换增列，不得与本行合并。

- 选定流：气态氩气
- 流属性/单位：Volume / m3
- 数量规则：在有文件记录的参考条件下，根据仪表或气瓶库存核算氩气消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_inputs`
- 来源：`us-epa-ap42-12-19-welding-1995`

###### 连接用电（`joining_electricity`）

记录焊接电源、定位、局部抽风和连接相关设备用电。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：连接工位实测电量，或采用有文件依据的方法从共用电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`us-epa-ap42-12-19-welding-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 焊接 PM10 排入空气（`welding_pm10`）

记录经过所声明捕集与控制系统后的 PM10 总排放量。仅在声明排放是近地排放还是经烟囱排放、场址属于城市还是非城市之后，方可选择基本流 UUID。

- 选定流：排入空气的焊接颗粒物（PM10）
- 流属性/单位：Mass / kg
- 数量规则：实测受控排放量，或根据焊条/焊丝消耗、焊接工艺、电极类型、基体金属、运行条件、捕集效率和控制效率进行有文件依据的设施计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_welding_emissions`
- 来源：`us-epa-ap42-12-19-welding-1995`

### 过程：表面预处理与防护性精整（`surface_finishing`）

#### 输入

##### 产品流

###### 精整用电（`finishing_electricity`）

纳入本过程时，记录表面预处理、槽液循环、通风、涂料施工和固化设备用电。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：精整生产线实测电量，或采用有文件依据的方法从共用电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-stm-bref-2006`; `us-ecfr-40-cfr-63-subpart-xxxxxx`

###### 表面处理工艺用水（`surface_treatment_water`）

记录进入清洗、漂洗或水性化学处理的新增水或外购工艺水。应披露内部循环，但不得将循环水反复计为外部投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入纳入范围表面处理工序的补充水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`eu-jrc-stm-bref-2006`

###### 碱洗用氢氧化钠（`sodium_hydroxide`）

仅当氢氧化钠在所声明碱洗或处理槽中作为外购物料消耗时记录。报告活性氢氧化钠质量，并披露溶液浓度和槽液补加依据。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据实测溶液补加量和有文件记录的浓度计算活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_finishing`
- 来源：`eu-jrc-stm-bref-2006`

###### 环氧涂料（`epoxy_coating`）

工厂采用环氧体系时，记录一种配方环氧涂料产品。若底漆、面漆、稀释剂或固化剂分别跨越边界，应在完整数据包中将其分别表示为原子交换。

- 选定流：配方环氧涂料
- 流属性/单位：Mass / kg
- 数量规则：为产品订单领用的按供货状态涂料实测质量，扣除有记录的可回收退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`us-ecfr-40-cfr-63-subpart-xxxxxx`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 金属表面处理废水（`surface_treatment_wastewater`）

将离开表面清洗、漂洗或水性处理工序的废水作为内部回用及任何现场处理之后的特征化废物流记录。不得与生活污水或水压试验排水合并。

- 选定流：金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：排放或转移的废水实测质量，并声明处理状态和接收边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`eu-jrc-stm-bref-2006`

##### 基本流

### 过程：检验、试验、排水与出厂放行（`inspection_dispatch`）

#### 输入

##### 产品流

###### 水压试验用水（`hydrotest_water`）

仅在实施水压泄漏或完整性试验时，记录新投入的工艺水。试验记录中应追踪回用水；内部回用水仅在首次跨越前景边界时计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：充入试验的补充水实测质量，不含此前已计入的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_release`
- 来源：

###### 检验用电（`inspection_electricity`）

记录检验、无损检测、试验泵、排水和产品放行设备所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：检验区域实测电量，或采用有文件依据的方法从共用电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品大型金属储罐、槽罐、大桶或类似容器（`finished_tank_output`）

仅记录质量控制准予放行的合格成品。产品须为干燥状态，容积超过 300 L，不用于压缩气体或液化气体，且未装有机械或热力设备。

- 选定流：成品大型金属储罐、槽罐、大桶或类似容器
- 流属性/单位：Mass / kg
- 数量规则：质量控制准予放行的合格成品净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_release`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 排出的水压试验废水（`hydrotest_wastewater`）

记录使用后离开前景系统且未在内部回用的试验水。声明水质、任何添加剂、处理状态以及排放或转移方式。

- 选定流：排出的水压试验废水
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录的回用量和产品残留水量后，离开前景边界的排水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_release`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用制造和公用工程系统 | 技术上可行时，应通过分别计量或其他方式细分产品订单、生产线和公用工程系统，以避免分配。 | `eu-commission-recommendation-2021-2279` |
| `allocation_shared_records` | 无法避免的共用能源、水和消耗品 | 无法细分时，采用有文件依据的因果驱动量，例如机器工时、焊缝长度、处理面积、槽负荷或产品实测质量；未证明不存在物理驱动量时，不得默认采用收入分配。 | `eu-commission-recommendation-2021-2279` |
| `allocation_scrap` | 钢废料和铝废料 | 在废料离开前景过程处，将其实测量报告为废物输出。不得从前景清单中扣除替代初级材料的信用；在下游系统中一致地模拟回收或处理，并披露所选约定。 | `eu-commission-recommendation-2021-2279` |
| `allocation_nonconforming_products` | 返工与不合格品 | 可追溯时，将返工投入和未回收不合格品负荷归属于产生该负荷的生产订单；否则采用与共用过程相同且有文件依据的因果分配驱动量。 | `eu-commission-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_scrap` | `material_preparation_forming` | 金属投入与分流废料输出 | 收货、领料、退料、地磅和废物转移记录 | order_id; material; grade/alloy; supplier; batch; gross_mass; returned_mass; scrap_mass; destination | 经校准秤具、库存台账和订单核对 | kg | 每次收货、领料、退料和转移 | 至少覆盖一个有代表性的生产年度；若仅覆盖较短生产活动，应声明 | 纳入范围内的全部生产线，并声明外包成形 | 按金属种类汇总扣除退料后的合格领用质量和分流废料；除以合格产出质量 | 校准记录、采购文件、材质证明、库存核对和废物转移单 |
| `cp_process_energy` | 所有过程 | 过程用电 | 公用工程电表与生产日志 | meter_id; start_reading; end_reading; unit; process_id; order_id; operating_time; allocation_driver; voltage; grid_or_onsite | 优先采用专用电表；否则采用经核对的分表或共用电表分配 | kWh 和 MJ | 每批/每订单，或按月并与产量核对 | 与产出相同的代表性期间 | 纳入场址的全部作业；外包能源不计入场址总量 | 将 kWh 换算为 MJ，按实测因果驱动量分配，再除以合格产出质量 | 电表校准、账单、间隔数据和分配工作表 |
| `cp_welding_inputs` | `joining_assembly` | 焊丝、药皮焊条和氩气 | 库房领退料、气瓶及焊接工艺记录 | order_id; process_type; consumable_grade; issued_mass; returned_mass; gas_id; gas_volume_or_mass; reference_conditions; weld_length | 领退料称量以及气体仪表或气瓶库存核对 | kg 和 m3 | 每订单或每班次 | 与产出相同的代表性期间 | 纳入范围内的全部焊接单元和所声明外包连接 | 分别核算每项原子消耗品净量；气体仅按有文件依据的参考条件换算；除以合格产出质量 | 采购记录、焊接工艺、材质证明、秤具/仪表校准和气瓶核对 |
| `cp_welding_emissions` | `joining_assembly` | 受控 PM10 排放 | 监测或工程计算记录 | process_type; electrode_type; base_metal; current; voltage; electrode_consumed; capture_efficiency; control_efficiency; measured_PM10; release_compartment | 优先采用直接监测；否则采用与实际工艺和控制相匹配且经批准的计算 | kg | 每次监测活动或计算期间 | 报告年度内具有代表性的运行模式 | 纳入范围内的每个焊接排放点 | 确定控制后的 PM10 并除以合格产出质量；不得默认指定排放区室 | 监测报告、方法检出限、设备设定、控制设施检查、计算来源及不确定性 |
| `cp_surface_finishing` | `surface_finishing` | 水、氢氧化钠、涂料和废水 | 仪表、槽液补加、涂料领退料、浓度和排放记录 | order_id; route; treated_area; water_in; water_reused; solution_added; NaOH_concentration; coating_issued; coating_returned; solids_fraction; wastewater_out; treatment_state | 经校准仪表/秤具、槽液日志、供应商配方资料和排放/转移计量 | kg 和 m2 | 每批/每订单，并覆盖槽液补加和排放事件 | 与成品产出相同的代表性期间 | 纳入范围内的全部预处理、槽处理、涂装、固化和现场处理操作 | 保持各化学品/涂料原子化；计算活性 NaOH；仅扣除有记录的内部回用/退料；除以产出质量 | 仪表/秤具校准、批次记录、安全/技术数据表、槽液分析和废水记录 |
| `cp_inspection_release` | `inspection_dispatch` | 试验用水、试验排水、检验用电和成品 | 试验单、用水仪表、电力记录和放行证明 | order_id; nominal_capacity; test_method; water_charged; water_reused; water_drained; additives; inspection_energy; dry_product_mass; pass_fail; release_date | 经校准仪表/秤具和签署的质量放行记录 | kg、kWh 和 MJ | 每台成品或每生产批 | 完整报告期 | 数据集所代表的全部产品 | 仅计入新增水投入和离开边界的水；所有合格记录按放行干燥产品质量归一化 | 试验规程、仪表/秤具校准、检验结果、不符合项日志和放行证明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 期间或订单数量 / 合格干燥成品质量 | 原子流数量；`dry_product_mass` | 每 1 kg `finished_tank_output` 的数量 | `eu-commission-recommendation-2021-2279` |
| `calc_electricity_conversion` | 电力行 | electricity_MJ = electricity_kWh × 3.6 | metered electricity_kWh | MJ 电力 |  |
| `calc_active_sodium_hydroxide` | `sodium_hydroxide` | active_NaOH_mass = solution_mass × measured mass fraction of NaOH | solution_mass; NaOH_concentration | kg 活性氢氧化钠 | `eu-jrc-stm-bref-2006` |
| `calc_welding_pm10` | `welding_pm10` | 使用实测控制后 PM10；无实测值时，采用对实际工艺/电极/基体金属/运行条件有效且有文件依据的因子，再乘以电极消耗量和 (1 − 捕集效率 × 控制效率) | measured_PM10 or factor; electrode_consumed; process settings; capture_efficiency; control_efficiency | 排入所声明空气区室的 kg PM10 | `us-epa-ap42-12-19-welding-1995` |
| `calc_water_reconciliation` | 表面处理和水压试验用水 | 外排废水须与新增用水、产品残留水、蒸发、对外转移和有记录的内部回用相核对，且不得重复计算循环水 | water_in; water_reused; water_retained; water_evaporated; water_transferred; wastewater_out | 经核对的 kg 水投入和废水输出 | `eu-jrc-stm-bref-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 对每个代表性产品族核验容积 >300 L、金属种类/牌号、排除气体压力用途、未装有机械/热力设备、干燥产品质量、表面状态、整体附件和放行状态。 | 图纸、物料清单、材质证明、检验与放行记录；`un-cpc-3-0-structure-2025` |
| `dq_temporal_geographic` | 所有前景和上游数据 | 前景记录应覆盖有代表性的生产期间并明确场址和地域；上游数据集应披露时间、地域和技术代表性。 | 记录期间核对和上游数据集元数据；`eu-commission-recommendation-2021-2279` |
| `dq_completeness` | 所有纳入过程 | 核对采购/领退料、公用工程、废料、废水、排放控制、试验、不合格品及成品产出记录；解释排除项和缺失期间。 | 质量/能量核对、仪表覆盖率、废物联单、监测报告和不符合项记录 |
| `dq_route_specificity` | 焊接与精整 | 保留实际焊接工艺/电极/气体、基体金属、处理面积、化学品浓度、涂料配方、用水回用和控制技术；未记录匹配依据和不确定性时，不得采用通用因子。 | 焊接工艺、供应商资料、槽液日志、涂料技术资料和控制记录；`us-epa-ap42-12-19-welding-1995`; `eu-jrc-stm-bref-2006` |
| `dq_instrument_quality` | 前景实测数据 | 保存仪器身份、校准状态、读数分辨率、单位、缺失数据处理和负责复核人员信息，覆盖仪表、秤具和排放测量。 | 校准证书、原始读数、QA 签核和纠正措施记录；`us-ecfr-40-cfr-63-subpart-xxxxxx` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 若容积不大于 300 L、纳入压缩/液化气体用途、装有机械/热力设备、未声明金属结构，或输出为未完工容器箱体，则校验失败。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_mass` | 参考流 | 归一化须严格采用 1 kg 合格、干燥成品净质量；参考质量不得包括试验水、临时工装、不合格品和现场安装物项。 |  |
| `validate_atomic_inventory` | 过程清单 | 要求每项实际材料、电力、水、气体、涂层组分、废物流和基本流排放均表示为原子交换；标记合并公用工程、合并化学品、合并废物或合并排放。 | `eu-commission-recommendation-2021-2279` |
| `validate_mass_water_records` | 金属和水量平衡 | 要求将钢/铝投入与成品、分流废料、不合格品和库存退料相核对，并将新增用水与回用、产品残留、损失、转移和废水相核对。应调查不明差异，不得无依据强制配平。 | `eu-jrc-stm-bref-2006` |
| `validate_welding_emissions` | `welding_pm10` | 要求提供实际焊接工艺、电极、基体金属、运行条件、捕集/控制、计算或监测方法和排放区室；所选基本流区室与声明排放不符时，UUID 完整性校验失败。 | `us-epa-ap42-12-19-welding-1995`; `us-ecfr-40-cfr-63-subpart-xxxxxx` |
| `validate_allocation` | 共用过程与废料 | 要求细分或采用有文件依据的因果分配驱动量、一致的废料回收约定，并在分配对结果有实质影响时披露敏感性。 | `eu-commission-recommendation-2021-2279` |
| `validate_unresolved_identity` | UUID 为空的行 | 将 manifest 审查元数据列出的每个 UUID 为空的行视为未解决；不得采用通用、代理、属性错误、区室错误或产品状态错误的候选项。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 面向一项已声明大型无源金属容器产品或有文件定义的代表性产品族的前景产品制造数据集 |
| downstream_use | `secondary_dataset`；完成方法审查、UUID 闭环、上游链接审查以及适合预期数据库的外部范围证据审查后可作为 `background_dataset` |
| allowed_use | 当产品身份、材料路线、容积、精整路线、地域、生产期间、分配和所链接上游数据集相容时，用于工厂大门产品比较和生命周期模型 |
| excluded_use | 压缩气体容器；容积 ≤300 L 的容器；带设备罐体；使用阶段储存服务；安装；寿命终止；忽略容积、材料牌号、表面状态、使用条件或未解决 UUID 的比较 |
| required_metadata | 发布后的 PCR id 和版本；产品图纸/物料清单身份；金属/合金及再生料含量；容积；干燥质量；壁厚；涂层/衬里；整体附件；试验方法；过程路线；场址/地域；报告期间；上游数据集；分配；截断；数据所有者；审查状态 |
| required_quality_disclosure | 仪表和秤具覆盖率；代表性；共用仪表分配；供应商数据缺口；质量/水量核对；焊接排放方法与区室；表面处理路线；废水状态；废料处理约定；不确定性；未解决的 UUID 和范围证据需求 |
| update_trigger | 材料/合金或容积产品族变化；新的成形/连接/精整技术；涂层/衬里变化；主要供应商或电力结构变化；试验水回用或排放控制变化；场址/地域变化；分配变化；实质性清单修订；UUID 解决；或获得新的双来源相容范围证据 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，*CPC Ver. 3.0 Structure*，2025-06-30，第 42210 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05；保留字节经 SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` 校验） | 正式产品身份、材料范围、>300 L 阈值及排除项 |
| `us-ecfr-40-cfr-63-subpart-xxxxxx` | `standard` | 美国环境保护署，40 CFR Part 63, Subpart XXXXXX，*National Emission Standards for Hazardous Air Pollutants Area Source Standards for Nine Metal Fabrication and Finishing Source Categories*。https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-63/subpart-XXXXXX（检索日期：2026-09-05） | 板金制造、机加工、打磨/抛光、焊接、喷涂准备/施工/固化/清洗、颗粒物控制及记录 |
| `us-epa-ap42-12-19-welding-1995` | `method_factor` | 美国环境保护署，*AP-42 Section 12.19 Electric Arc Welding*，1995 年 1 月。https://www.epa.gov/sites/default/files/2020-11/documents/c12s19.pdf（检索日期：2026-09-05） | 焊接过程分解、电极与保护气依赖、PM10 身份、计算投入、控制和不确定性披露；未采用默认因子或范围 |
| `eu-jrc-stm-bref-2006` | `official_guidance` | 欧盟委员会联合研究中心，*Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*，2006 年 8 月。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索日期：2026-09-05） | 条件性水性化学/电解表面处理过程分解、水基处理、防腐目的、相关活动及环境记录；未采用外部范围 |
| `eu-commission-recommendation-2021-2279` | `official_guidance` | 欧盟委员会，2021 年 12 月 15 日关于使用环境足迹方法的建议 (EU) 2021/2279，2022 年 5 月 23 日勘误。https://eur-lex.europa.eu/eli/reco/2021/2279/corrigendum/2022-05-23/oj/eng（检索日期：2026-09-05） | 细分/分配层级、清单归一化、数据质量、一致性、完整性、代表性和模型披露 |
