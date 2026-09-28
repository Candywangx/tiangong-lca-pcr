---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.straw-or-fodder-balers-including-pickup-balers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 秸秆或饲草打捆机（含捡拾打捆机）

## 1. 范围与适用性

本规则适用于工厂门口已验收的完整秸秆或饲草打捆机的制造，包括装有捡拾装置的打捆机。涵盖将收获后的秸秆或饲草压成草捆的圆捆和方捆设备。必须记录实际型号和配置。拖拉机、独立销售的割草机及其他干草作业机械、散装秸秆或饲草、草捆、田间使用、维护及寿命终结不在范围内。购入材料和部件作为上游产品投入；前景过程包括厂内实际发生的切割、成形、焊接及表面处理，以及装配和验收。各工序仅在申报配置的生产中实际发生时纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.straw-or-fodder-balers-including-pickup-balers |
| classification_refs | CPC 3.0 44125（`un-cpc-3-2025`） |
| covered_products | 完整的秸秆或饲草圆捆和方捆打捆机，包括捡拾打捆机 |
| excluded_products | 其他干草作业机械；拖拉机；单独销售的打捆机部件；打捆后的秸秆或饲草 |
| representative_product | 一台已验收、型号与配置已声明的完整打捆机 |
| production_route | 钢材加工、焊接、适用时的表面处理、装配和验收；购入部件单列为投入 |
| market_state | 工厂门口已完成测试的整机，不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 使用已验收的完整打捆机，将收获后的秸秆或饲草压成草捆。 |
| How much | 一台已验收且配置已声明的完整打捆机。 |
| How well | 符合该配置的制造商验收记录；声明捡拾装置和草捆形式。 |
| How long or cycle | 工厂门口的一台制造完成设备；使用寿命及田间作业周期不属于本生产数据集。 |
| reference_flow_link | `finished_baler` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 秸秆或饲料打包机，包括拾取式打包机 `696c0149-7a29-424b-8aa3-bd8e3f015901` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；序列号或批次；圆捆或方捆形式；捡拾装置配置；驱动及包裹配置；已验收整机净质量 M；工厂门口及报告期 |

M 应针对数据包对应的已验收整机进行测量，不得用样本目录质量或运输毛质量代替。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整打捆机的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_energy` | electricity | Net calorific value | MJ | 以 MJ 记录购入电力的计量能量；按 1 kWh = 3.6 MJ 换算，并在原始记录中保留电表单位。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入的钢材、涂料、部件及电力进入一体化工厂边界；披露投入时的状态和供应商交货门口。 |
| starting_condition_role | 已验收完整打捆机制造数据集的上游投入。 |
| product_classification_scope | CPC 3.0 44125 完整打捆机，不包括作物材料或单独销售的机械部件。 |
| recursive_input_rule | 若投入本身是一台完整打捆机，应作为单独购入产品记录并关联上游数据集；不得在此前景过程递归展开。 |
| upstream_dataset_requirement | 每项购入投入应使用与材料状态、电力供应地区及供应商交货门口相符的上游数据集。 |
| disclosure | 披露型号、配置、场址、期间、纳入阶段、购入部件内容及排除项。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | factory_gate | 纳入购入投入及厂内加工、表面处理、装配和验收，止于已验收整机的工厂门口；排除田间使用与处置。 | |
| `boundary_identity` | product_category | 将完整打捆机与邻近的干草作业机械及单独销售的部件区分。 | `un-cpc-3-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `baler_manufacture` | 打捆机一体化加工与装配 | required | 每台已验收打捆机 | 前景制造与验收；包含全部纳入阶段的场址电力 | 每台验收成品打捆机 |
| `powder_finishing` | 粉末涂料施涂 | conditional | 仅当声明的整机采用粉末涂装时纳入；其他涂装路线不适用本过程，并披露替代路线 | 前景表面处理材料投入；电力已计入 `baler_manufacture` | 每台验收成品打捆机 |

### 过程：打捆机一体化加工与装配（`baler_manufacture`）

#### 输入

##### 产品流

###### 热轧非合金钢板投入（`steel_sheet`）

记录交付给该配置打捆机、切割前的一种具体热轧非合金钢板材或薄板质量，并记录钢号与厚度，不得以合金或镀锌产品代替。

- 选定流：热轧非合金钢板
- 流属性/单位：Mass / kg
- 数量规则：实际计量的已验收打捆机生产领用板材量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 实心钢电弧焊丝投入（`welding_wire`）

仅当本机采用实心焊丝电弧焊时纳入。记录具体牌号焊丝的领用量扣除退回量；其他焊接路线应另设已核实的交换。

- 选定流：实心钢电弧焊丝
- 流属性/单位：Mass / kg
- 数量规则：已验收打捆机生产消耗的实心焊丝计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 制造购入电力（`electricity`）

记录可归属于板材加工、表面处理、装配及验收的场址电表购入电力；上游电力数据集应匹配场址和报告期。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于已验收打捆机的购入电表电量，换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

###### 购入打捆机齿轮箱（`gearbox`）

若该配置装有单独购入的农用打捆机齿轮箱，应记录已收货并安装的数量，并使用供应商数据集，不得用风力发电机齿轮箱代替。

- 选定流：农用打捆机齿轮箱
- 流属性/单位：Number of items / item
- 数量规则：安装在该配置已验收打捆机上的齿轮箱数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_parts`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收完整打捆机（`finished_baler`）

整机验收后、加装运输包装前测量净质量；机器配置和验收记录须与功能单位一致。

- 选定流：秸秆或饲料打包机，包括拾取式打包机 `696c0149-7a29-424b-8aa3-bd8e3f015901`
- 流属性/单位：Mass / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`

##### 废物流

###### 工业后钢加工废料（`steel_scrap`）

记录作为废物流离开工厂的分拣钢板边角料。内部再利用的废钢留在前景物料平衡内，不计入本外运废物流量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：在工厂废物交付门口称量的钢废料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

##### 基本流

### 过程：粉末涂料施涂（`powder_finishing`）

#### 输入

##### 产品流

###### 粉末涂料投入（`powder_coating`）

仅适用于粉末涂装路线。记录一种配方的粉末涂料领用量扣除回收粉末，并披露配方与涂装技术。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass / kg
- 数量规则：为已验收打捆机配置消耗的粉末涂料计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared_factory_inputs | 优先把独立计量或记录的材料、电力及废物直接归属于声明的打捆机型号与报告期。 | |
| `allocation_shared` | unavoidable_shared_inputs | 无法直接归属的共享实测量应按能反映共享过程使用情况且有记录的物理驱动量分配，并披露驱动量、分母及敏感性。 | |
| `scrap_no_credit` | steel_scrap | 在交付门口将外运钢废料报告为废物流；前景清单不计入未经核实的替代生产收益。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `baler_manufacture` | 已验收完整打捆机 | 称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整打捆机，排除运输包装；核对同一配置和验收记录。 | kg | 每台已验收设备 | 报告期 | 制造场址 | 每台验收净质量 | 校准证书；验收记录 |
| `cp_material` | `baler_manufacture` | 钢板与实心焊丝分别记录 | 领用及退库台账 | 型号；配置；材料规格；领用质量；退库质量；已验收设备数 | 按每种原子产品核对材料领用和退库与整机验收记录。 | kg | 每生产批次 | 报告期 | 制造场址 | 每台验收成品打捆机 | 领用称重记录；物料清单；退库台账 |
| `cp_energy` | `baler_manufacture` | 购入电力 | 电表与分配记录 | 电表编号；kWh；期间；生产线；已验收设备数；分配驱动量 | 读取经校准的电表总量，并把可归属电量分配给已验收设备。 | MJ | 每月 | 报告期 | 制造场址 | 每台验收成品打捆机 | 电表读数；电费发票；分配工作表 |
| `cp_parts` | `baler_manufacture` | 农用打捆机齿轮箱 | 收货与安装台账 | 部件规格；收货数量；安装数量；型号；序列号 | 将供应商收货与每个已验收配置的安装齿轮箱数量核对。 | item | 每台已验收设备 | 报告期 | 制造场址 | 每台验收成品打捆机 | 供应商发票；物料清单；验收记录 |
| `cp_waste` | `baler_manufacture` | 外运钢废料 | 废物交付称重记录 | 废钢牌号；质量；交付日期；接收方；已验收设备数 | 在废物交付门口称量分拣边角料并扣除内部回用量。 | kg | 每次交付 | 报告期 | 制造场址 | 每台验收成品打捆机 | 地磅单；转移单 |
| `cp_coating` | `powder_finishing` | 粉末涂料 | 涂料台账 | 配方；领用质量；回收质量；涂装型号；已验收设备数 | 核对声明涂装路线的粉末领用量及回收量。 | kg | 每涂装批次 | 报告期 | 制造场址 | 每台验收成品打捆机 | 领用台账；回收记录；涂装规格 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_convert` | `electricity` | 电力 MJ 量等于电表 kWh 量乘以 3.6。 | 电表 kWh | 每台已验收打捆机的 MJ | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品与部件 | 核实型号、配置、草捆形式、捡拾装置与安装齿轮箱规格。 | 物料清单及验收记录 |
| `dq_balance` | steel_sheet and steel_scrap | 对板材领用、退库、机器中钢材和外运废钢进行平衡，不将内部回用计为废物。 | 材料及废物台账 |
| `dq_time` | 所有前景交换 | 与已验收整机产出采用同一报告期与场址范围。 | 注明日期的电表、领料、转移和验收记录 |
| `dq_route` | powder_finishing | 披露实际涂装路线与产品配方；若无粉末涂装，则此过程不适用。 | 涂装规格与批次记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_mass` | finished_baler | 核查 M 来自同一配置的 `cp_mass` 验收净质量记录，整机产出量为 M kg。 | |
| `validate_basis` | all_inventory_rows | 核查每项投入和废物流量均以每台验收成品打捆机为基准，并关联采集记录。 | |
| `validate_identity` | unresolved_flow_uuids | 不得为热轧钢板、实心焊丝或打捆机齿轮箱替用不精确的天工 UUID。 | |
| `validate_route` | powder_finishing | 纳入 `powder_coating` 前须声明粉末涂装路线。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种型号与配置的打捆机前景生产数据集。 |
| downstream_use | 后续机械系统的 secondary_dataset；background_dataset |
| allowed_use | 为已声明配置的打捆机建立从上游投入至工厂门口的制造模型。 |
| excluded_use | 缺乏补充数据时，不用于田间打捆服务、寿命期影响、拖拉机运行或寿命终结结论。 |
| required_metadata | 型号、配置、草捆形式、捡拾装置、齿轮箱、涂装路线、场址、期间、M 与门口定义 |
| required_quality_disclosure | 计量证据、分配份额、未解决的流 UUID、缺失的外部范围及排除阶段 |
| update_trigger | 整机配置、材料规格、涂装路线、供应商组合或制造场址发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，CPC 3.0 结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 44125 产品识别及相邻类别区分 |
