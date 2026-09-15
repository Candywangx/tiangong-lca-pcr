---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.reaction-engines-other-than-turbo-jets
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 反作用式发动机，涡轮喷气发动机除外

## 1. 范围与适用性

本 PCR 适用于 CPC 43133 所列、以成品发动机或动力装置交付的完整非涡轮喷气式推力装置的工厂大门
生产。前景边界始于材料和外购零部件进厂，涵盖制造、连接、精密清洗、装配、验收试验以及制造场址
施加的运输包装。

涡轮喷气发动机、涡轮螺旋桨发动机、航空活塞发动机、其他燃气轮机、单独销售的发动机零件、航空器或
航天器集成、运行时携带的推进剂、在役维护、使用阶段运行、发射或飞行以及寿命终止均不在本 PCR 范围
内。数据集必须声明反作用式发动机技术以及推进剂或工作流体系统；该声明只控制条件性交换和试验的
适用性，不改变规范产品类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.reaction-engines-other-than-turbo-jets |
| classification_refs | CPC 3.0：43133，反作用式发动机，涡轮喷气发动机除外（exact） |
| covered_products | CPC 43133 范围内作为完整推力装置供应的非涡轮喷气式反作用式发动机或动力装置 |
| excluded_products | 涡轮喷气发动机；涡轮螺旋桨发动机；航空活塞发动机；固定式燃气轮机；单独供应的零件；完整航空器、航天器、导弹或运载火箭 |
| representative_product | 在制造工厂大门交付、已通过验收试验的干态非涡轮喷气式反作用式发动机 |
| production_route | 进厂材料和零部件控制；机加工、成形或连接；精密清洗；装配；路线特定的验收试验；运输防护包装 |
| market_state | 干态成品发动机；除非推进剂是不可分离的销售组成部分，否则不含运行推进剂；在工厂大门处已作运输防护 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可实现所声明推力功能的非涡轮喷气式反作用式发动机成品 |
| How much | 制造工厂大门处 1 kg 验收合格发动机干质量 |
| How well | 符合所声明的发动机配置、材料与洁净度规范以及验收准则 |
| How long or cycle | 一次工厂大门交付；应披露设计寿命、工作循环、启动次数或总冲量能力，但使用阶段不计入本生产清单 |
| reference_flow_link | 将验收合格的干态产品输出归一化至下述参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 反作用式发动机，涡轮喷气发动机除外 `f425fe92-1cdd-45c2-9695-3486a06fbf2c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 发动机技术；型号和配置；干质量定义；推进剂包含状态；额定推力或冲量基准；验收试验状态；洁净度等级；生产场址和地理；报告期；运输包装包含状态 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明
或等效数据包字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品和质量归一化清单 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 临时试验流体排空后且外部运输包装施加前称量验收合格发动机；披露干质量中包含的任何不可分离销售推进剂、点火器、执行器、控制器或绝热材料。 |
| `material_mass` | 材料、清洗化学品、包装、废金属及含水废物行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用跨越前景边界的净质量；不得以采购金额、名义坯料尺寸或含容器毛质量代替。 |
| `utility_energy` | 电力行 | 低位发热量 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 以 MJ 记录交付电能；电表以 kWh 报告时，将实测 kWh 乘以 3.6，并保留原始表读数。 |
| `test_gas_volume` | 气态天然气和工业氧气试验行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按所声明温度和绝对压力报告计量气体体积；不得合并不同气体，也不得在无书面换算时混用标准体积和实际体积。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址验收的外购材料和零部件，并声明供应商身份、供应状态、质量及上游数据集 |
| starting_condition_role | 反作用式发动机制造前景的从摇篮到工厂大门起始清单 |
| product_classification_scope | 完整 CPC 43133 非涡轮喷气式反作用式发动机；单独供应的零件和被排除的发动机类别不在范围内 |
| recursive_input_rule | 前景中使用的外购完整 CPC 43133 发动机只作为同类产品输入记录一次并链接其上游数据集；除非生产者掌握不重叠的一手记录，否则不得递归分解 |
| upstream_dataset_requirement | 每项外购材料、零部件、公用工程、气体、化学品和包装均须链接与地理、技术和供应状态匹配的上游数据集 |
| disclosure | 声明发动机技术、材料和零部件供应状态、场址地理、试验顺序和介质、直接试验排放、干质量约定、包装、截断及排除项 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 制造前景 | 从进厂材料控制开始，纳入制造、连接、精密清洗、装配、验收试验和工厂施加的运输防护，直至验收合格干态发动机在工厂大门放行。 | `nasa-jsc-manufacturing-assembly-integration`; `nasa-wstf-development-qualification-acceptance` |
| `boundary_test_media` | 验收试验 | 每项实际推进剂、氧化剂、增压气、吹扫气、清洗液和直接尾气物种跨越前景边界时均作为独立原子交换添加；所列天然气和氧气行仅适用于所声明路线。 | `ecss-e-st-35-10c-2009` |
| `boundary_cleanliness` | 精密清洗 | 纳入制造场址发生的清洗介质、废弃槽液、漂洗、干燥能耗和洁净度验证，并保留产品特定洁净度准则。 | `ecss-e-st-35-06c-rev2-2020`; `nasa-jsc-manufacturing-assembly-integration` |
| `boundary_exclusions` | 下游阶段 | 除非研究明确扩展边界并单独报告，否则排除装入载具、工厂大门后的分销、制造边界外装填的运行推进剂、发射或飞行、维护及寿命终止。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `engine_manufacture` | 零部件制造、清洗、装配和包装 | required | 成品工厂大门发动机始终纳入；各材料和清洗行仅在实际使用时适用 | 前景生产 | 1 kg 验收合格反作用式发动机干态输出 |
| `acceptance_testing` | 发动机验收和鉴定试验 | required | 纳入实际放行试验顺序；只有在报告场址执行相应路线时，热试车介质和排放才适用 | 前景质量保证 | 可归属于 1 kg 验收合格反作用式发动机干态输出的试验活动 |

### 过程：零部件制造、清洗、装配和包装（`engine_manufacture`）

#### 输入

##### 产品流

###### 不锈钢坯料（`stainless_steel_input`）

当所声明物料清单含不锈钢时，记录发动机零件消耗以及可归属于合格产品的工装损耗。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：已验收发料质量减去有凭证的退库质量所得不锈钢净投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_inputs`
- 来源：

###### 铝镁合金坯料（`aluminium_magnesium_alloy_input`）

仅当物料清单明确列出铝镁合金棒材、杆材或型材时记录本行。

- 选定流：铝镁合金 `ab57ae32-8ffe-47fe-9550-53381391a038`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：已验收发料质量减去有凭证的退库质量所得铝镁合金净投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_inputs`
- 来源：

###### 钛板坯料（`titanium_plate_input`）

仅当钛板发放给所声明发动机配置时记录本行。

- 选定流：钛板 `f32fc628-252f-40fe-8f8d-fd0efb955e92`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：已验收发料质量减去有凭证的退库质量所得钛板净投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_inputs`
- 来源：

###### 制造电力（`manufacturing_electricity`）

记录机加工、连接、清洗、干燥、装配、环境控制和本过程可归属的工厂辅助用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：低位发热量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ / 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：报告期制造输出对应的计量或分摊交付电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_electricity`
- 来源：

###### 精密清洗工艺用水（`process_water_input`）

记录进入精密清洗或漂洗的工艺用水；不得将本行用于不同的循环冷却水流。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测清洗和漂洗水质量，或按有记录的密度与温度将实测体积换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_inputs`
- 来源：

###### 氢氧化钠清洗化学品（`sodium_hydroxide_input`）

仅在氢氧化钠进入碱性清洗槽时记录；声明供应状态和浓度，并将纯品当量质量与载体水分开报告。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产中使用的氢氧化钠采购产品质量乘以所声明质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_inputs`
- 来源：

###### 木质运输箱（`wooden_shipping_crate`）

记录随发动机新供应的木质运输箱质量；可重复使用运输箱按有记录的使用次数摊销。尚未确认精确的
TianGong 流 UUID。

- 选定流：木质运输箱
- 流属性/单位：质量 / kg
- 数量规则：分配给已发运合格发动机的运输箱净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_crate`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格反作用式发动机（`reference_product`）

验收合格干态发动机是在所声明制造与验收试验顺序完成后的参考产品。

- 选定流：反作用式发动机，涡轮喷气发动机除外 `f425fe92-1cdd-45c2-9695-3486a06fbf2c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测验收合格发动机干质量归一化至 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：

##### 废物流

###### 机加工金属废料（`machining_metal_scrap`）

将离开机加工过程的金属切屑和边角料作为一项实测废物流记录；披露合金分选、污染和去向。

- 选定流：机加工金属废料 `616bb9e9-a954-475e-b1b8-a73f659ff694`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：移出前景过程的实测机加工废料净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_machining_scrap`
- 来源：

###### 废氢氧化钠清洗液（`spent_sodium_hydroxide_cleaning_solution`）

将含氢氧化钠和去除污物的排放槽液作为独立废物记录，不得与其他废水合并。尚未确认精确的 TianGong
流 UUID。

- 选定流：废氢氧化钠清洗液
- 流属性/单位：质量 / kg
- 数量规则：可归属于发动机生产的实测排放溶液质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_spent_cleaning_solution`
- 来源：

##### 基本流

### 过程：发动机验收和鉴定试验（`acceptance_testing`）

#### 输入

##### 产品流

###### 验收试验电力（`test_electricity`）

记录可归属于合格产品的仪器、泵、控制、通风及试验台运行交付电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：低位发热量 `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ / 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：试验批次中分配给验收合格发动机的试验台计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_electricity`
- 来源：

###### 气态天然气试验燃料（`test_natural_gas`）

仅对计量该燃料的声明验收试验路线记录气态天然气；不得用其代理甲烷、氢、煤油或其他试验燃料。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：修正至所声明参考温度和绝对压力的天然气计量体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_fluids`
- 来源：

###### 工业氧气试验氧化剂（`test_industrial_oxygen`）

仅在气态氧气跨越验收试验边界时记录工业氧气；披露纯度、压力、参考条件以及外购或现场制备状态。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：修正至所声明参考温度和绝对压力的气态氧气计量体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_fluids`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 天然气试验直接排放的化石源二氧化碳（`test_fossil_carbon_dioxide`）

只记录天然气试验路线直接计量并排放的化石源二氧化碳；不得在此重复电力、天然气或氧气上游数据集
中已包含的排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于天然气验收试验的实测直接化石源二氧化碳排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格反作用式发动机干态输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_fossil_co2`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用制造和试验活动 | 分配前优先按发动机型号、工单、机时、试车或验收合格干质量直接计量或细分。 |  |
| `allocation_shared_facility` | 剩余共用公用工程和辅助活动 | 仅使用有记录的因果驱动因素分配剩余未计量部分；当该部分对结果有实质影响时，披露驱动因素并测试敏感性。 |  |
| `allocation_scrap` | 机加工金属废料 | 将投入材料负荷保留给发动机产品并按实测工厂大门废物量报告废料；除非适用 LCA 研究方法要求，否则不得主张避免负荷抵扣，且任何抵扣均须单独报告。 |  |
| `allocation_rework` | 不合格或返工产品 | 将返工、复试和报废产品负荷归属于同一报告期的合格输出；不得从生产得率中遗漏失败试验。 | `nasa-wstf-development-qualification-acceptance` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `engine_manufacture` | 不锈钢、铝镁合金和钛板投入 | 收货与领料记录 | 流 UUID；材料牌号；等级；坯料形态；批次；领用质量；退库质量；供应商；上游数据集 | 核对验收收货、工单领料和退库 | kg | 每批次和工单 | 完整报告期 | 服务所声明发动机的所有生产区 | 按原子材料汇总净领用质量并除以合格干态输出质量 | 采购记录；材料证书；校准秤记录；工单追溯 |
| `cp_manufacturing_electricity` | `engine_manufacture` | 制造电力 | 电表与分配记录 | 电表编号；起止读数；kWh；机器或区域；分配驱动因素；停机时间；合格输出质量 | 优先使用分表；以有记录的因果驱动因素分配剩余设施用电 | kWh 和 MJ | 连续计量，按月汇总 | 完整报告期 | 制造、清洗、装配和可归属辅助区域 | 将 kWh 换算为 MJ，扣除排除负荷，再除以合格干态输出质量 | 电表校准；公用事业账单；负荷图；分配工作表 |
| `cp_cleaning_inputs` | `engine_manufacture` | 工艺用水和氢氧化钠 | 槽液配制、漂洗表计和化学品领用记录 | 水质量或体积；温度；密度；氢氧化钠产品质量；浓度；槽号；发动机工单 | 计量水并称量化学品添加量；将批次关联至清洗的发动机硬件 | kg 和 m3 | 每次配槽、添加和排放 | 完整报告期 | 所有范围内精密清洗线 | 计算水质量和纯品当量氢氧化钠；将可归属总量除以合格干态输出质量 | 校准表计或秤；化学品证书；槽液日志；工单追溯 |
| `cp_packaging_crate` | `engine_manufacture` | 木质运输箱 | 包装清单和重复使用日志 | 箱体编号；皮重；发动机编号；新箱或重复使用状态；既往和预期使用次数 | 称量运输箱并记录每次使用 | kg | 每次发运 | 完整报告期 | 工厂大门包装 | 新箱质量一次计入，或按有记录的使用次数摊销重复使用箱；再除以发运合格干质量 | 秤校准；装箱单；重复使用日志 |
| `cp_machining_scrap` | `engine_manufacture` | 机加工金属废料 | 废料容器和外运记录 | 容器编号；皮重和毛重；合金分选；污染；工单；去向 | 称量每个外运废料容器并关联生产工单 | kg | 每次外运 | 完整报告期 | 所有范围内机加工区 | 扣除皮重，汇总可归属净废料，并除以合格干态输出质量 | 校准秤；外运单；分选日志 |
| `cp_spent_cleaning_solution` | `engine_manufacture` | 废氢氧化钠清洗液 | 槽液排放记录 | 槽号；溶液质量或体积；密度；氢氧化钠浓度；污染物；去向；工单 | 称量排放液，或以有记录的密度换算实测体积 | kg | 每次排放 | 完整报告期 | 范围内碱性清洗线 | 计算可归属排放质量并除以合格干态输出质量 | 排放日志；表计或秤校准；废物转移记录；槽液分析 |
| `cp_product_output` | `engine_manufacture` | 验收合格干态反作用式发动机 | 最终检验和称量记录 | 发动机编号；型号；配置；干质量包含项；毛质量；可排临时试验流体；包装皮重；验收状态 | 排液后、外部运输包装前使用校准秤最终称量 | kg | 每台合格发动机 | 完整报告期 | 所有所声明生产场址 | 汇总合格干质量；不合格产品不计入输出但其负荷须保留 | 校准秤记录；配置基线；验收放行 |
| `cp_test_electricity` | `acceptance_testing` | 验收试验电力 | 试验台电表记录 | 试验编号；发动机编号；表读数；kWh；辅助负荷；合格或失败结果 | 对试验台及其可归属辅助设备分表计量 | kWh 和 MJ | 每次试验 | 完整报告期 | 所有范围内试验台 | 汇总含失败和复试在内的全部可归属试验；换算为 MJ 后除以合格干态输出质量 | 电表校准；试验日志；发动机序号追溯 |
| `cp_test_fluids` | `acceptance_testing` | 气态天然气和工业氧气 | 校准流量计与供应记录 | 气体身份；纯度或组成；流量计编号；实测体积；温度；绝对压力；试验编号；发动机编号 | 分别计量每种气体并修正至所声明参考条件 | m3 | 每次试验 | 完整报告期 | 所有范围内试验台 | 按原子气体汇总包含失败试验在内的修正体积，再除以合格干态输出质量 | 流量计校准；气体证书；试验日志；压力和温度记录 |
| `cp_test_fossil_co2` | `acceptance_testing` | 直接化石源二氧化碳 | 尾气测量记录 | 试验编号；发动机编号；CO2 浓度；尾气流量；温度；压力；持续时间；校准气体 | 在每次试验期间积分校准浓度和尾气流量测量 | kg | 每次天然气试验 | 完整报告期 | 天然气试验尾气边界 | 汇总包含失败试验在内的实测直接化石源 CO2，并除以合格干态输出质量 | 分析仪和流量校准；原始时间序列；试验日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_by_dry_mass` | 所有制造和试验交换 | 归一化数量 = 报告期交换数量 / 报告期验收合格反作用式发动机干质量 | 原子交换总量；合格干态输出质量 | 每 1 kg 参考产品的交换数量 |  |
| `convert_electricity` | 电表记录 | 交付电能 MJ = 实测 kWh × 3.6 | 实测 kWh | MJ 电力 |  |
| `convert_water_mass` | 工艺用水记录 | 水质量 = 实测水体积 × 实测温度下有记录的密度；有直接称量时优先使用称量质量 | 水体积或称量质量；密度；温度 | kg 工艺用水 |  |
| `net_material_issue` | 材料投入 | 净材料投入 = 已验收领用质量 − 有凭证的退库质量；废料保持为单独输出 | 领用质量；退库质量 | kg 原子材料投入 |  |
| `correct_test_gas_volume` | 天然气和工业氧气 | 将每种实测气体体积分别修正至数据集声明的参考温度和绝对压力，不得合并气体身份 | 实测体积；温度；绝对压力；必要时的压缩因子方法 | 声明条件下每种气体的 m3 | `ecss-e-st-35-10c-2009` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和全部清单行 | 保留所选 TianGong UUID 和精确流身份；未解决的运输箱与废清洗液行必须保持显式，不得以通用包装或废水替代。 | 已完成的 UUID 检索回执；物料清单；废物说明 |
| `dq_completeness` | 前景清单 | 将每项物料清单条目、公用工程表计、清洗批次、试验活动、不合格产品、包装、废物转移和直接试验排放与报告期核对；遗漏交换应新增为原子行。 | 数据负责人签署的完整性核对 |
| `dq_temporal` | 报告期 | 使用涵盖全部合格产品、失败、返工和试验的一个代表性生产期；披露小批量或活动式生产影响。 | 生产、试验、表计和发运日期覆盖 |
| `dq_cleanliness` | 清洗和装配 | 保留适用洁净度规范、清洗批次记录、验证结果及试验后重新清洗记录。 | 由 `ecss-e-st-35-06c-rev2-2020` 支持的洁净度证书和检验记录 |
| `dq_test_traceability` | 验收试验 | 将每项流体、能源、试验结果、复试和直接计量排放关联到发动机序号及所声明验收顺序。 | 由 `nasa-wstf-development-qualification-acceptance` 支持的试验程序、原始日志、校准记录和放行决定 |
| `dq_upstream` | 外购投入 | 选择与材料等级或产品状态、供应商地理、生产技术、气体参考条件和电网匹配的上游数据集，并披露代理。 | 供应商证书和有记录的上游数据集选择 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 数据集放行前确认产品流 UUID、CPC 43133 身份、合格干质量测量和全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_atomic_inventory` | 全部清单行 | 拒绝集合标签或组合流；所报告的每种材料、公用工程、清洗化学品、试验流体、包装、废物和基本流必须是一个原子交换。 |  |
| `validate_mass_reconciliation` | 制造过程 | 核对材料领用、退库、合格干态产品、机加工废料、清洗废物、不合格硬件和库存变化；解释任何实质性残差。 |  |
| `validate_test_route` | 验收试验 | 天然气、工业氧气和化石源二氧化碳行仅可在有记录的相容试验路线中为非零；其他每项试验介质或直接排放须以独立身份流新增。 | `ecss-e-st-35-10c-2009`; `nasa-wstf-development-qualification-acceptance` |
| `validate_direct_emissions` | 试验尾气 | 确认直接化石源二氧化碳在前景尾气边界计量，且不重复外购投入数据集中的上游排放。 |  |
| `validate_cleanliness_records` | 清洗和装配 | 确认所声明发动机配置具有清洗要求、验证结果及任何试验后重新清洗记录。 | `ecss-e-st-35-06c-rev2-2020` |
| `validate_unresolved` | 未解决流身份和范围 | 在精确身份或独立相容证据通过审查前，保持木质运输箱和废清洗液 UUID 缺口以及全部范围证据需求为开放状态；不得虚构代理或数值范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 secondary_dataset 或 background_dataset 发布的前景生产数据集 |
| downstream_use | 非涡轮喷气式反作用式发动机从摇篮到工厂大门产品足迹模型，以及单独披露的航空器或航天器系统模型 |
| allowed_use | 仅在发动机技术、干质量约定、配置、验收试验边界、地理和数据质量相容时比较或汇总 |
| excluded_use | 不得直接替代涡轮喷气发动机、涡轮螺旋桨发动机、活塞发动机、单独零件、完整载具、运行推进剂供应、使用阶段推力或冲量、维护或寿命终止 |
| required_metadata | 规范 PCR id；发动机技术和型号；配置；CPC 身份；干质量包含项；额定推力或冲量基准；生产场址和时期；试验顺序和介质；洁净度等级；包装状态；分配；截断；未解决身份；数据质量评级 |
| required_quality_disclosure | 一手记录占比；表计和秤覆盖；物料清单完整性；上游数据集代表性；失败和返工；试验追溯；直接排放测量；未解决 UUID 和范围证据需求 |
| update_trigger | 发动机技术、配置、物料清单、制造场址、清洗路线、验收试验顺序或介质、干质量定义、分配方法、上游数据集发生实质变化，或开放身份或范围证据需求得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | CPC 43133 身份、层级及与相邻发动机子类的区分 |
| `prc-customs-rcep-origin-rules-2022` | 官方指南（`official_guidance`） | 中华人民共和国海关总署 2022 年第 129 号公告，《区域全面经济伙伴关系协定》产品特定原产地规则，附件 1，HS 8412.10，官方副本：https://www.tid.gov.hk/en/tradecircular/files/2022/ci2022998a.pdf（检索日期：2026-09-05） | 非涡轮喷气式反作用式发动机专业中文术语核对 |
| `nasa-jsc-manufacturing-assembly-integration` | 官方指南（`official_guidance`） | NASA 约翰逊航天中心，Manufacturing, Assembly & Integration，https://www.nasa.gov/reference/jsc-manufacturing-assembly-integration/（检索日期：2026-09-05） | 制造、材料、精密清洗、装配、包装防护、验收试验和质量记录过程分解 |
| `nasa-wstf-development-qualification-acceptance` | 官方指南（`official_guidance`） | NASA 白沙试验设施，Development, Qualification, and Acceptance，2023 年 10 月 15 日更新，https://www.nasa.gov/centers-and-facilities/white-sands/development-qualification-and-acceptance/（检索日期：2026-09-05） | 发动机硬件制造、系统装配、鉴定、验收试验和追溯要求 |
| `ecss-e-st-35-06c-rev2-2020` | 标准（`standard`） | 欧洲空间标准化合作组织，ECSS-E-ST-35-06C Rev.2，《航天器推进硬件洁净度要求》，2020 年 4 月 7 日，https://ecss.nl/standard/ecss-e-st-35-06c-rev-2-cleanliness-requirements-for-spacecraft-propulsion-hardware-7-april-2020/（检索日期：2026-09-05） | 清洗、洁净度验证、污染控制边界和证据要求 |
| `ecss-e-st-35-10c-2009` | 标准（`standard`） | 欧洲空间标准化合作组织，ECSS-E-ST-35-10C，《液体推进系统相容性试验》，2009 年 3 月 6 日，https://ecss.nl/standard/ecss-e-st-35-10c-compatibility-testing-for-liquid-propulsion-systems/（检索日期：2026-09-05） | 原子化试验介质边界、参考条件披露和相容性试验追溯 |
