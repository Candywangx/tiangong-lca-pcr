---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stranded-wire-ropes-cables-plaited-bands-slings-and-the-like-of-iron-or-steel-not-elect-daef3066
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非电绝缘的铁或钢制的绞股线、绳索、缆、编带、吊索及类似品

## 1. 范围与适用性

本 PCR 适用于金属丝为铁或钢的非电绝缘绞股线、钢丝绳、缆、编带、吊索以及承担类似承载或传递拉力功能的制品，用于生产具有已声明结构和市场状态的工厂门前景数据包。产品适用的安全或合格评定标准仍然有效，本 PCR 不取代这些标准。

前景边界始于接收钢丝以及已声明的绳芯、润滑剂、端部附件和包装组件，包括捻股、合绳或编结、过程内润滑、切割、适用时的吊索端部制作、生产检验、标记和包装。炼钢、盘条生产、拉丝、热处理、酸洗和金属镀层位于本边界上游，除非将其单独声明并作为前景或上游数据集链接。排除电绝缘导体、铜或铝制绞股制品、带刺铁丝或围栏丝、链、弹簧和金属丝网。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stranded-wire-ropes-cables-plaited-bands-slings-and-the-like-of-iron-or-steel-not-elect-daef3066 |
| classification_refs | CPC 3.0：42941（精确分类语境；映射仍由独立治理流程管理） |
| covered_products | 非电绝缘的铁或钢制绞股线、绳、缆、编带、吊索及类似品；当明确声明镀层状态时，包括光面、镀锌或镀锌铝合金钢丝结构 |
| excluded_products | 电绝缘导体；铜或铝制绞股制品；带刺铁丝或围栏丝；链；弹簧；金属丝布、格栅、网或围栏；不符合所声明产品规范的起重制品 |
| representative_product | 工厂门交付的钢丝绳或吊索，声明结构、钢丝表面状态、绳芯、名义直径、长度、质量、强度级别、端部、润滑状态和包装状态 |
| production_route | 接收钢丝和组件；捻股及合绳或编结；条件适用时润滑和制作吊索端部；生产检验、标记和包装 |
| market_state | 工厂门交付的非电绝缘成品；按声明以散装长度、盘卷或卷筒形式交付，或作为已制成的吊索组件交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合要求的非电绝缘铁或钢制绞股线制品，用于传递拉力或提供声明的绳、缆、编带或吊索功能 |
| How much | 1 kg 产品净质量，不包括单独报告的运输包装 |
| How well | 声明的结构、名义直径和长度、钢丝表面状态、绳芯类型、绳或钢丝级别、适用时的最小破断力或工作载荷规范、端部、润滑状态和生产检验状态 |
| How long or cycle | 声明成品的一次工厂门交付；使用寿命和使用循环不在本从摇篮到工厂门参考流内 |
| reference_flow_link | `integrated_fabrication` 的参考产品输出行 `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | 非电绝缘的铁或钢制的绞股线、绳索、缆、编带、吊索及类似品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形式；钢或铁牌号；钢丝表面状态或镀层；结构和捻向；绳芯类型；名义直径；交付长度；产品净质量；绳或钢丝级别；声明的力学规范；适用时的吊索配置和端部；润滑状态；生产检验状态；包装状态；生产场址和地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。不适用项必须明确标记，不得省略。参考产品 UUID 尚未解决，不得以仅有相似分类的流替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或计算成品净质量，排除单独报告的卷筒、线盘、托盘、打包带和其他运输包装。记录称量基准和去皮方法。 |
| `component_mass_consistency` | 钢丝、绳芯、端部附件、润滑剂和包装投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测批次质量或有文件依据的供应商质量，将组件收货、领料、退料和按件计数记录换算为 kg，并保留换算记录。 |
| `electricity_energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量的 kWh，并按 1 kWh = 3.6 MJ 换算为 MJ；披露电表边界及任何共用负荷分配。 |
| `length_mass_reconciliation` | 同时按长度销售的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以实测净质量作为参考数量，并保留交付长度以及实测或声明的单位长度质量作为产品限定信息，用于核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 前景场址接收的钢丝以及单独接收的绳芯、润滑剂、端部附件和包装组件 |
| starting_condition_role | 绞股制品的门到门加工起点；上游材料生产由链接的供应商或背景数据集表示 |
| product_classification_scope | 语义边界所述且以 CPC 3.0 代码 42941 为分类参照的非电绝缘铁或钢制绞股制品 |
| recursive_input_rule | 已购入且本身属于同一绞股制品类别的投入，作为一个产品投入并链接其供应商数据集，不在本 PCR 内递归拆解；披露其质量和加工状态 |
| upstream_dataset_requirement | 为接收的钢丝、绳芯材料、润滑剂、端部组件、包装组件和交付电力链接代表相应地理、技术、牌号和镀层的数据集 |
| disclosure | 声明拉丝、热处理、酸洗、镀层、绳芯制造、润滑剂制造、端部附件制造和包装制造是在上游发生还是纳入另一个链接的前景数据集；识别排除项和共用电表分配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景加工 | 从接收组件的工厂门到成品工厂门，纳入捻股、合绳或编结、过程内润滑、切割、适用的吊索端部制作、生产检验、标记和包装。 | `iso-2408-2017`; `iso-7531-1987` |
| `boundary_upstream_wire_processing` | 接收的钢丝 | 炼钢、盘条生产、拉丝、热处理、酸洗和金属镀层作为上游过程，除非有意将其单独计量的过程纳入研究边界；披露并链接适用数据集。 | `eu-ferrous-metals-processing-bat-2022` |
| `boundary_no_electrical_insulation` | 产品识别 | 排除电绝缘导体，并防止因分类相似而扩大材料或绝缘状态边界。 | `un-cpc-3-0-structure-2025` |
| `boundary_direct_exchanges` | 场址作业 | 报告实际跨越所声明前景边界的全部产品流、废物流和基本流；不得将电力上游排放作为场址直接排放加入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_fabrication` | 一体化捻股、合绳或编结、精整、检验和包装 | required | 生产成品参考产品时始终纳入；各流适用条件区分纤维芯、润滑、吊索端部、卷筒包装和打包带包装变体 | 前景加工和工厂门交付准备 | 1 kg 成品参考产品净质量 |

### 过程：一体化捻股、合绳或编结、精整、检验和包装（`integrated_fabrication`）

#### 输入

##### 产品流

###### 钢丝原料（`steel_wire_input`）

接收的钢丝是组装为股和成品的金属原料。只记录跨越场址边界的钢丝，并保留牌号、镀层、直径、抗拉强度和供应商数据集限定信息。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass / kg
- 数量规则：计量投入合格生产的钢丝净质量，并与退料、在制品、产品和单独收集的废物核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：`iso-2408-2017`

###### 外购电力（`electricity`）

电力驱动所声明电表边界内的加工、检验、通风和包装设备。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量归属于报告期生产的电力，从 kWh 换算并按合格产品净质量归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_meter_records`
- 来源：

###### 钢丝绳润滑剂（`rope_lubricant`）

只有声明产品或过程使用时，才记录在捻股、合绳、精整或防护过程中施加的润滑剂。

- 选定流：钢丝绳润滑剂
- 流属性/单位：Mass / kg
- 数量规则：生产批次实测领用量减去实测可回用退料量；只有具备无润滑结构证明时才可为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：`iso-2408-2017`

###### 纤维绳芯（`fibre_core`）

对于纤维芯结构，记录为钢丝绳供应的具体纤维绳芯。本行不适用于钢丝股芯、独立钢丝绳芯或无芯产品。

- 选定流：钢丝绳用纤维绳芯
- 流属性/单位：Mass / kg
- 数量规则：纳入合格产品的纤维绳芯实测收货或领用质量，扣除退回边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：`iso-2408-2017`

###### 铝制端部套管（`aluminium_ferrule`）

只有在前景边界内制作套管固定式吊索绳眼时才记录铝制套管。其他端部材料需以各自具体行记录。

- 选定流：钢丝绳眼端部用铝套管
- 流属性/单位：Mass / kg
- 数量规则：套管件数乘以每件实测质量或供应商声明质量，并与不合格件核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_component_records`
- 来源：`iso-8793-1986`

###### 钢丝绳套环（`steel_rope_thimble`）

只有在前景边界内将钢制套环安装到吊索绳眼时才记录，并保留与声明绳径的兼容性。

- 选定流：钢丝绳套环
- 流属性/单位：Mass / kg
- 数量规则：套环件数乘以每件实测质量或供应商声明质量，并与不合格件核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_component_records`
- 来源：`iso-2262-1984`

###### 木制电缆卷筒或线盘（`wooden_cable_drum`）

只有木制卷筒或线盘随产品跨越工厂门时才记录，并声明一次性、可回收或共用状态。

- 选定流：木质包装箱、盒子、板条箱、圆桶和类似包装，木制电缆卷筒 `39feb4f9-43da-4106-aa3c-f52afb654078`
- 流属性/单位：Mass / kg
- 数量规则：随报告期产品交付的卷筒或线盘实测分配质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing_records`
- 来源：`iso-2408-2017`

###### 钢制打包带（`steel_baling_band`）

只有钢制打包带用于固定所交付的盘卷、卷筒或包装并随产品交付时才记录。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass / kg
- 数量规则：用于已发运产品的钢带实测领用质量，扣除未使用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：`iso-2408-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品参考产品（`reference_product`）

本输出为工厂门交付的合格成品净质量。包装质量单独报告，不计入 1 kg 参考数量。

- 选定流：非电绝缘的铁或钢制的绞股线、绳索、缆、编带、吊索及类似品
- 流属性/单位：Mass / kg
- 数量规则：归一化后按定义恰为 1 kg 成品参考产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`un-cpc-3-0-structure-2025`; `iso-2408-2017`; `iso-7531-1987`

##### 废物流

###### 单独收集的废钢丝（`waste_steel_wire`）

记录作为单独废物流离开前景过程的钢丝切头、不合格钢丝和不可回用边角料，不得并入受污染复合废物。

- 选定流：单独收集的废钢丝
- 流属性/单位：Mass / kg
- 数量规则：按声明回收或处置路线计量离开过程的单独废钢丝质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_wire_records`
- 来源：

##### 基本流

本干式组装边界不规定基本流行。如果燃料燃烧、镀层、酸洗、热处理或其他直接排放作业被纳入前景边界，则必须把相应具体燃料、化学品、废物和基本交换作为独立原子行加入，并由适用链接方法支持。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用生产线和计量表 | 在记录允许时，先按产品批次、机器或计量表细分，再应用分配。 |  |
| `allocation_shared_energy` | 共用电力和服务 | 对剩余共用消耗，采用有记录的机器运行时间乘以额定或实测负荷分配；若不可得，则采用有文件说明的质量吞吐量基准并披露敏感性。 |  |
| `allocation_no_avoided_scrap_credit` | 废钢丝 | 在前景边界报告废物，不计入替代原生钢的避免负荷抵扣。任何回收替代属于下游系统模型，不得内置于前景数量。 |  |
| `allocation_reusable_packing` | 可回收或共用卷筒和线盘 | 按有记录的预期使用次数分配包装生产负荷，在适用系统模型中纳入返程物流，并披露损失和分配分母；不得在没有记录时假设重复使用。 |  |
| `allocation_no_co_product_default` | 正常加工输出 | 将声明绞股制品作为参考产品，将不合格品作为废物。若有意生产另一可销售共产品，则单独报告，并记录所选物理或经济分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `integrated_fabrication` | 钢丝、润滑剂、纤维绳芯、套管和套环投入 | 采购收货单、库房领退料、批次流转卡、组件计数、供应商规范 | 材料身份；批次；领用量；退料量；单位；件数；单件质量；产品结构；供应商；镀层或材料牌号 | 将收货、库房和批次记录与合格产量核对；供应商质量不可得时称量代表性计数组件 | kg 和件 | 每批；按月汇总 | 完整报告期，通常至少连续 12 个月或完整生产活动期 | 生产所声明产品的全部前景生产线 | 按具体材料汇总净领用量并按合格产品净质量归一化；每种材料保持独立交换 | 校准秤记录；采购文件；批次流转卡；供应商证书；核对日志 |
| `cp_electricity_meter_records` | `integrated_fabrication` | 外购电力 | 结算电表、分表、机器日志、生产日志 | 电表起值；电表止值；kWh；电表边界；停机时间；机器小时；产品质量；分配键 | 优先使用专用分表；否则将场址电表与纳入设备核对并分配有文件记录的共用负荷 | kWh，换算为 MJ | 连续或每班；按月汇总 | 与产品输出相同的报告期 | 纳入的加工、检验、通风和包装设备 | 净 kWh 乘以 3.6 后除以合格产品净质量 kg | 电表校准或电费单；读表日志；分配工作表 |
| `cp_packing_records` | `integrated_fabrication` | 随产品交付的木制卷筒和钢带 | 包装用料单、库房领退料、发运记录、皮重测量、重复使用登记 | 包装身份；领用质量；退料质量；皮重；发运；产品质量；所有权；预期使用次数；实际返还；损失 | 称量或使用核实的供应商质量；将每个包装件链接到发运批次和重复使用状态 | kg 和件 | 每次发运；按月汇总 | 与产品输出相同的报告期 | 数据包纳入的全部工厂门包装 | 汇总一次性包装；可重复使用包装应用有记录的使用次数分母，并按产品净质量归一化 | 秤记录；包装用料单；发运记录；重复使用台账 |
| `cp_output_batch_records` | `integrated_fabrication` | 合格成品输出和限定信息 | 生产指令、称重单、检验证书、放行记录、装箱单 | 产品身份；结构；镀层；绳芯；直径；长度；净质量；强度级别；端部；润滑；检验状态；不合格品；包装状态 | 将放行输出与称重、生产和检验记录核对；扣除包装皮重 | kg 和 m | 每批和每次发运 | 完整报告期 | 所有纳入生产线 | 汇总放行产品净质量，作为归一化清单分母 | 校准秤；检验证书；放行批准；可追溯批次标识 |
| `cp_waste_wire_records` | `integrated_fabrication` | 单独收集的废钢丝 | 废物容器称重、转移联单、回收收据、批次废料日志 | 毛重；皮重；净重；钢丝身份；污染；来源批次；目的地；处理路线 | 称量单独收集容器，并将内部废料日志与外运记录核对 | kg | 每次容器转移；按月汇总 | 与产品输出相同的报告期 | 所有纳入生产线及切割和端部工位 | 按路线汇总外运废钢丝净质量并按产品净质量归一化 | 秤记录；转移联单；回收收据；质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 每个非参考清单行 | 归一化数量 = 报告期交换数量 / 报告期合格成品净质量 | 交换质量或能量；合格产品净质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_electricity_mj` | 电力 | 电力（MJ）= 计量电力（kWh）× 3.6；归一化电力 = 电力（MJ）/ 合格产品净质量（kg） | 计量 kWh；合格产品净质量 | MJ/kg 参考产品 |  |
| `calc_count_to_mass` | 套管、套环、卷筒或其他按件记录组件 | 组件质量 = 合格件数 × 实测或经核实的供应商单件质量；不合格件和退料另行核对 | 合格件数；单件质量；不合格件数；退料件数 | 每种具体组件的 kg |  |
| `calc_wire_mass_balance` | 含钢材料 | 钢丝投入 = 合格产品中的钢净质量 + 单独废钢丝 + 合绳在制品变化 + 有记录的钢损失或其他单列钢输出 | 钢丝领退料；产品组成；废物质量；在制品 | 质量平衡残差和完整性发现 |  |
| `calc_reusable_packing` | 可回收木制卷筒或线盘 | 每次发运分配包装质量 = 实测卷筒质量 / 有记录的预期使用次数；按采用系统模型要求根据记录损失调整 | 卷筒质量；预期使用次数；返还和损失记录；发运产品质量 | 每 kg 参考产品分配的包装 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品和材料行 | 保持声明产品结构与每项钢丝、绳芯、润滑剂、端部附件和包装投入之间的批次级关联；不得以更宽泛 UUID 替代未解决精确流。 | 批次流转卡、供应商证书、库房记录、UUID 审核状态 |
| `dq_mass_completeness` | 参考产品和含钢流 | 核对含钢投入、产品、废物和在制品；调查并披露残差及排除的含钢交换。 | 签署的质量平衡工作表和清单核对 |
| `dq_meter_coverage` | 电力 | 对与产品输出相同的时间和场址边界，覆盖全部纳入的运行、检验、通风和包装负荷；披露共用负荷分配和未计量设备。 | 电表图、电费单或读数、机器日志、分配工作表 |
| `dq_temporal_representativeness` | 所有前景行 | 使用同一代表性报告期，通常至少连续 12 个月；活动期生产使用完整活动期并披露代表性理由。 | 报告期说明和生产计划 |
| `dq_conditional_rows` | 绳芯、润滑剂、端部附件和包装 | 每个条件原子行按声明产品标记为实测、计算或有证据的不适用；没有产品规范时不得省略。 | 产品规范、物料清单、包装指令、端部图纸 |
| `dq_test_and_release` | 参考产品 | 保留声明产品规范适用的生产检验、验收、标记和放行证据。 | 检验证书、检查记录、放行批准、标记记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_amount` | 参考流 | 确认参考输出恰为 1 kg 成品净质量，并确认单独报告包装不计入产品净质量。 |  |
| `validate_required_qualifiers` | 产品识别 | 产品形式、材料牌号、钢丝表面状态、结构、绳芯、尺寸、交付长度、力学规范、适用时的端部、润滑状态、检验状态、包装状态、场址、地理范围或报告期缺失且未明确不适用时，判定完整性失败。 | `iso-2408-2017`; `iso-7531-1987` |
| `validate_atomic_inventory` | 过程清单 | 确认每行都是一个具体产品流、废物流或基本流交换，并确认条件结构变体未形成伞式行或笛卡尔积行。 |  |
| `validate_uuid_semantics` | Tiangong 引用 | 对每个 UUID 确认公开 state_code 100、基本名称、流类型、分类、属性、单位组和产品状态；身份未解决时留空，不得选择代理流。 |  |
| `validate_mass_balance` | 含钢流 | 重新计算钢丝质量平衡，并标记无法解释残差或缺少含钢废物/输出披露。 |  |
| `validate_electricity_conversion` | 电力 | 核实 kWh 电表记录、电表边界、共用负荷分配、按 3.6 MJ/kWh 换算和归一化分母。 |  |
| `validate_boundary_disclosure` | 上游加工 | 确认拉丝、热处理、酸洗、镀层、组件制造和包装制造是在上游还是单独纳入；核实未将电力上游排放作为场址直接排放。 | `eu-ferrous-metals-processing-bat-2022` |
| `validate_sling_components` | 吊索产品 | 对制成吊索，核实声明吊索类型、工作载荷或破断力基准、端部类型、套管或套环适用性和生产检验证据。 | `iso-7531-1987`; `iso-8793-1986`; `iso-2262-1984` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明的非电绝缘铁或钢制绞股线制品的工厂门前景生产数据集 |
| downstream_use | `secondary_dataset`；在审查代表性和未解决身份后可作为 `background_dataset` |
| allowed_use | 产品结构、地理、技术、边界和报告期与声明数据集兼容的产品足迹、过程和生命周期模型研究 |
| excluded_use | 电绝缘导体；铜或铝制绞股制品；使用阶段安全或寿命声明；未调整即替代实质不同的绳、缆、编带或吊索；隐含纳入上游钢丝加工的数据集 |
| required_metadata | 规范 PCR id；产品形式；钢牌号；钢丝表面状态；结构和捻向；绳芯；直径；长度；净质量；强度或载荷规范；端部；润滑；检验和放行状态；包装；场址；地理；技术；报告期；边界；上游数据集；分配；未解决 UUID |
| required_quality_disclosure | 材料和能量记录覆盖；质量平衡残差；电表覆盖和共用负荷分配；件数转质量系数；包装重复使用分母；废物路线；数据缺口；精确 UUID 状态；来源和采集协议版本 |
| update_trigger | 产品结构、材料或镀层、绳芯、端部、润滑、生产路线、设备、能源供应、包装或重复使用系统、分配方法、场址边界、报告期、适用产品标准变化，或此前未解决的精确流身份得到解决 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，代码 42941，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | 英文分类身份以及铁或钢制、非电绝缘产品边界 |
| `un-cpc-1-1-chinese-2002` | official_guidance | 联合国统计司，《产品总分类版本 1.1》中文版，代码 42941，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索于 2026-09-05） | 对未变化分类身份采用经核验的专业中文产品名称 |
| `iso-2408-2017` | standard | ISO 2408:2017《Steel wire ropes — Requirements》，https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/06/66/66635.html（检索于 2026-09-05） | 钢丝绳范围，光面/镀锌/镀锌铝状态，制造、检验、包装、标记、限定信息、绳芯和润滑剂语境 |
| `iso-7531-1987` | standard | ISO 7531:1987《Wire rope slings for general purposes — Characteristics and specifications》，https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/01/43/14308.html（检索于 2026-09-05） | 吊索及吊索组件范围、类型、工作载荷语境和制造 |
| `iso-8793-1986` | standard | ISO 8793:1986《Steel wire ropes — Ferrule-secured eye terminations》，https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/01/62/16220.html（检索于 2026-09-05） | 条件适用的铝套管、绳眼端部过程语境和质量控制 |
| `iso-2262-1984` | standard | ISO 2262:1984《General purpose thimbles for use with steel wire ropes — Specification》，https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/00/70/7079.html（检索于 2026-09-05） | 条件适用的钢制套环身份和兼容性限定信息 |
| `eu-ferrous-metals-processing-bat-2022` | official_guidance | 欧盟委员会执行决定 (EU) 2022/2110，2022 年 10 月 11 日，规定黑色金属加工行业 BAT 结论，https://eur-lex.europa.eu/eli/dec_impl/2022/2110/oj/eng（检索于 2026-09-05） | 上游拉丝、润滑剂处理、拉丝粉尘、热处理残余物和钢丝热浸镀层的过程语境，用于边界分离和披露 |
