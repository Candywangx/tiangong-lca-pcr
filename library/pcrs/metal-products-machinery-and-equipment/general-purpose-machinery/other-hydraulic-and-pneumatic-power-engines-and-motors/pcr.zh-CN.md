---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.other-hydraulic-and-pneumatic-power-engines-and-motors
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他液压和气动动力机械及马达

## 1. 范围与适用性

本 PCR 适用于完整的非线性动作液压或气动动力机械及马达的装配和出厂验收试验前景数据包，包括连续旋转马达和有限转角执行器。报告组织应声明工作介质、工作原理、额定性能、寿命基准、物料清单和试验路线。前景边界从经检验的产品专用零部件或分总成进入装配场址开始，至一台通过验收、可销售且未包装的马达离开工厂大门为止。外购零部件和能源载体应连接独立的上游数据集。

本类别不包括 CPC 43211 直线动作缸、液压涡轮机和水轮、泵、压缩机、阀、电动机、内燃机、不完整零件、分销、使用、维护和报废。CPC 来源确定残余分类边界；制造商技术资料支持代表性液压和气动功能及零部件结构。[来源：`un-cpc-3-0-structure-2025`、`danfoss-orbital-motors-2021`、`festo-drrd-1395606-2026`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.general-purpose-machinery.other-hydraulic-and-pneumatic-power-engines-and-motors` |
| classification_refs | CPC 3.0：43219，精确分类语境 |
| covered_products | 完整的非线性动作液压和气动动力机械及马达，包括连续旋转马达和有限转角流体动力执行器 |
| excluded_products | 直线动作液压或气动缸；液压涡轮机和水轮；泵、压缩机、阀、电动机、内燃机；不完整零件；单独销售的制造服务 |
| representative_product | 一台已声明配置、通过验收的非线性旋转液压或气动马达或执行器 |
| production_route | 从经检验的产品专用零部件进行装配和出厂验收试验；液压油和压缩空气试验流卡仅适用于相应路线 |
| market_state | 工厂大门处完整、通过验收、可销售且未包装的马达 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整的非线性动作马达或执行器将加压液体或压缩气体转换为受控旋转机械输出 |
| How much | 一台达到声明额定扭矩、转速和功率的合格产品；有限转角执行器则达到声明转角和扭矩 |
| How well | 符合声明的压力、排量或转角、扭矩、转速、功率、效率或泄漏、清洁度和验收准则 |
| How long or cycle | 在声明工作制和维护假设下，以运行小时或循环次数表示的设计寿命 |
| reference_flow_link | `motor_assembly_and_test` 输出的一台通过验收、可销售的马达 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 Item(s) |
| 参考产品流 | 其他非线性动作液压或气动动力马达 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 工作介质；马达或执行器原理；定排量或变量；额定压力或压差；排量或转角；额定扭矩；额定转速；额定机械输出；效率和泄漏基准；工作制；设计寿命或额定循环；成品质量和材料；表面处理；包含的制动器、传感器或阀功能；试验程序；地理；技术；未包装工厂大门状态 |

成品参考产品 UUID 尚未解决。应保留准确产品说明和限定信息，不得以轴、转子、风力涡轮机部件、气体、传感器或通用零件候选项替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `accepted_unit_count` | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计入通过最终验收的完整产品；全部交换归一化至一台合格产品，并披露不合格和返工产品。 |
| `component_mass` | 壳体、轴、转子、密封件、轴承 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用扣除退回未用件后的领用或 BOM 质量，并保持不同零部件独立。 |
| `electricity_energy` | 装配和试验用电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 使用分配后的场址计量电力；以 kWh 记录时严格按 3.6 MJ/kWh 换算。 |
| `hydraulic_fluid_mass` | 液压试验油和废油 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按牌号计量领用、退回、滞留、泄漏和外运质量；体积换算使用相应温度下密度。 |
| `compressed_air_volume` | 气动试验空气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明压力、温度、湿度或基准状态，并一致采用同一参考状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经检验的产品专用壳体、轴、转子、密封件、轴承和其他分总成到达装配场址 |
| starting_condition_role | 前景从门到门起始状态；外购零部件生产仍需上游数据集 |
| product_classification_scope | 已声明配置的完整 CPC 43219 非线性动作液压和气动动力机械及马达 |
| recursive_input_rule | 将同类别外购分总成记录为独立产品投入并连接其上游数据集；不得将其吸收进参考产品或在同一过程中递归套用本 PCR。 |
| upstream_dataset_requirement | 为外购零部件、电力、液压油和压缩空气连接生产数据集，并保留地理、技术、状态和交付限定信息。 |
| disclosure | 声明内部工序、产品路线、计量覆盖、不合格和返工产品、成品滞留油、循环使用、包装排除和截断项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有数据集 | 纳入直接控制的装配、精整或调整、泄漏和功能试验、归属返工及截至未包装产品出厂的最终验收。 | `eu-pef-2021-2279` |
| `boundary_upstream_links` | 外购投入 | 将每个外购零部件、电力、液压油和压缩空气保留为可见原子投入并连接相容上游数据集。 | `eu-pef-2021-2279` |
| `boundary_route_test` | 试验介质 | 液压油仅用于液压产品，压缩空气仅用于气动产品；声明不适用路线且不得合并两种流。 | `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026` |
| `boundary_exclusions` | 下游阶段 | 默认排除包装、分销、安装、使用、维护、更换和报废；研究扩展边界时应明确披露。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `motor_assembly_and_test` | 马达装配和出厂验收试验 | `required` | 适用于每台覆盖的成品马达；按液压或气动配置启用相应试验介质流卡。 | 前景生产 | 1 台合格未包装马达 |

### 过程：马达装配和出厂验收试验（`motor_assembly_and_test`）

#### 输入

##### 产品流

###### 机加工钢制马达壳体（`steel_motor_housing`）

当 BOM 采用钢制壳体时记录该壳体。

- 选定流：机加工钢制流体动力马达壳体
- 流属性/单位：Mass / kg
- 数量规则：归属于合格产品的领用或 BOM 质量，扣除退回未用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台合格马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`danfoss-orbital-motors-2021`

###### 机加工铝合金马达壳体（`aluminium_motor_housing`）

仅当 BOM 采用铝制壳体时记录该壳体。

- 选定流：机加工铝合金流体动力马达壳体
- 流属性/单位：Mass / kg
- 数量规则：归属于合格产品的领用或 BOM 质量，扣除退回未用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台合格马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`festo-drrd-1395606-2026`

###### 淬硬钢制马达传动轴（`motor_drive_shaft`）

记录领入装配的成品传动轴质量。

- 选定流：淬硬钢制流体动力马达传动轴
- 流属性/单位：Mass / kg
- 数量规则：归属于合格产品的领用或 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台合格马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026`

###### 流体动力马达转子（`motor_rotor`）

记录配置特定转子或旋转齿轮组，并声明材料和原理。

- 选定流：流体动力马达转子
- 流属性/单位：Mass / kg
- 数量规则：归属于合格产品的领用或 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台合格马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`danfoss-orbital-motors-2021`

###### 弹性体密封件组（`elastomer_seal_set`）

记录安装的密封件组质量，并声明弹性体类别。

- 选定流：流体动力马达用弹性体密封件组
- 流属性/单位：Mass / kg
- 数量规则：归属于合格产品的领用或 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台合格马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`festo-drrd-1395606-2026`

###### 滚动轴承组（`rolling_bearing_set`）

记录声明配置安装的轴承组质量。

- 选定流：流体动力马达用滚动轴承组
- 流属性/单位：Mass / kg
- 数量规则：归属于合格产品的领用或 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台合格马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`danfoss-orbital-motors-2021`

###### 装配和试验用电（`electricity`）

记录装配设备、试验台和可归属辅助设备的外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配场址计量电力并按 `calc_normalize_per_accepted_unit` 归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 台合格马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_meter`
- 来源：`eu-pef-2021-2279`

###### 液压试验油（`hydraulic_test_fluid`）

对液压产品记录扣除退回和循环油后的净试验油，并声明牌号和成品滞留量。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：领用质量减去退回可复用质量，按合格液压马达归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 台合格液压马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hydraulic_test_fluid`
- 来源：`danfoss-orbital-motors-2021`

###### 气动试验用压缩空气（`compressed_test_air`）

对气动产品记录声明参考状态下的泄漏和功能试验用气。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：试验台计量体积按声明状态归一化至合格气动马达
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 台合格气动马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_compressed_air_meter`
- 来源：`festo-drrd-1395606-2026`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的非线性动作液压或气动马达（`reference_product`）

记录恰好一台完整、通过验收、可销售且未包装的马达。

- 选定流：其他非线性动作液压或气动动力马达
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 台合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：一台合格马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_accepted_units`
- 来源：`un-cpc-3-0-structure-2025`, `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026`

##### 废物流

###### 废液压马达试验油（`spent_hydraulic_test_fluid`）

对液压产品记录送往处理的试验油，并与可复用油和成品滞留油区分。

- 选定流：废液压马达试验油
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量，或按每台合格液压马达核算领用—退回—滞留平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 台合格液压马达
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_spent_hydraulic_fluid`
- 来源：`danfoss-orbital-motors-2021`

##### 基本流

本 PCR 不预设直接基本流。场址实测的泄漏、排放或其他交换应按具体物质和环境区室分别建行；不得将上游发电排放归入本过程。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 可分离产品、产线和试验路线 | 在记录允许时，通过细分路线、产品系列、批次、仪表和试验台避免分配。 | `eu-pef-2021-2279` |
| `allocation_shared_energy` | 共享装配和试验用电 | 无法细分或直接计量时，采用机器能耗、试验台时间或合格产量等有记录的物理驱动因素并说明理由。 | `eu-pef-2021-2279` |
| `allocation_rework` | 不合格和返工产品 | 可追溯返工归属相应配置；共享返工采用原工序的物理驱动因素并披露不合格率。 | `eu-pef-2021-2279` |
| `allocation_waste_credit` | 废油和零部件废料 | 本工厂大门数据包仅记录废物和处理连接，不计避免生产信用；替代或系统扩展仅用于明确扩展研究。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `motor_assembly_and_test` | 壳体、轴、转子、密封和轴承投入 | BOM 和领退料记录 | 配置；零件；材料；领用数；单位质量；退回数；合格数 | 核对 BOM、领料和退料并验证单位质量 | kg | 每配置和批次 | 生产代表期 | 装配场址 | 按原子行汇总净质量并除以合格数 | BOM；台账；称量或供应商记录 |
| `cp_energy_meter` | `motor_assembly_and_test` | 电力 | 校准仪表记录 | 表号；起止数；倍率；覆盖；分配因素；合格数 | 计算用量、排除未覆盖负荷并记录分配 | kWh 或 MJ | 连续或活动期 | 代表年或披露的较短期间 | 装配和试验场址 | 换算 MJ 后按合格数归一化 | 校准；仪表导出；计划；工作表 |
| `cp_hydraulic_test_fluid` | `motor_assembly_and_test` | 液压试验油 | 领用、退回和滞留记录 | 牌号；领用；退回；滞留；温度；密度 | 核算净跨界液压油 | kg | 液压活动期 | 液压生产代表期 | 试验台和仓库 | 净领用除以合格液压马达 | 台账；称量；密度证书；试验记录 |
| `cp_compressed_air_meter` | `motor_assembly_and_test` | 压缩试验空气 | 试验台流量记录 | 体积；压力；温度；湿度或基准状态；合格数 | 积分体积并归一化至统一状态 | m3 | 气动活动期 | 气动生产代表期 | 气动试验台 | 归一化体积除以合格气动马达 | 校准；试验记录；计算 |
| `cp_accepted_units` | `motor_assembly_and_test` | 参考产品 | 验收记录 | 序列或批次；配置；结果；返工；时间 | 仅计完整合格产品 | Item(s) | 每台或每批 | 与投入相同期间 | 装配场址 | 合格数作为分母 | 验收和返工记录 |
| `cp_spent_hydraulic_fluid` | `motor_assembly_and_test` | 废液压油 | 废物联单和质量平衡 | 废物；牌号；领用；退回；滞留；泄漏；联单 | 称量外运或核算平衡并调查损失 | kg | 外运和活动期 | 液压生产代表期 | 试验台和废物库 | 废油除以合格液压马达 | 联单；称量；签署平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_per_accepted_unit` | 每个清单行 | 归一化量 = 可归属前景量 / 合格马达数 | 可归属量；合格数 | 每台合格马达的量 | `eu-pef-2021-2279` |
| `calc_electricity_conversion` | 电力 | 电力 MJ = 电表 kWh × 3.6 MJ/kWh | kWh | 电力 MJ |  |
| `calc_component_net_issue` | 零部件投入 | 质量 = 领用数 × 单位质量 − 退回数 × 单位质量 | 数量；单位质量 | 净零部件 kg |  |
| `calc_hydraulic_fluid_balance` | 液压油投入和废物 | 净油 = 领用 − 可复用退回；与滞留、废物、泄漏和库存变化核对 | 领用；退回；滞留；废物；泄漏；库存 | 每台产品的投入和废物 kg |  |
| `calc_compressed_air_reference` | 压缩空气 | 将实测体积换算至统一压力、温度和湿度基准，不混用不相容状态 | 体积；压力；温度；湿度 | 每台产品在参考状态下的 m3 | `festo-drrd-1395606-2026` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_completeness` | 全部前景行 | 核对完整期间及不合格和返工产品，并解释每项省略。 | 期间核对和截断清单 |
| `dq_technology` | 产品和路线 | 匹配原理、介质、压力、排量或转角、扭矩、转速、工作制和试验技术。 | 产品规格和试验计划 |
| `dq_geography` | 场址和上游连接 | 声明场址，尽可能匹配供应商地理并记录代理。 | 场址、供应商记录和选择日志 |
| `dq_time` | 全部活动数据 | 使用共同代表期并披露异常运行和产品组合变化。 | 仪表、生产台账和代表性声明 |
| `dq_precision` | 仪表和质量记录 | 保留校准、分辨率、换算和数据限制。 | 证书、原始导出和工作簿 |
| `dq_consistency` | 归一化和分配 | 一致使用合格产品分母、空气参考状态和分配方法。 | 计算审计和复核 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别 | 产品应为完整的 CPC 43219 非线性动作液压或气动马达或执行器，不得为 CPC 43211 直线动作缸或排除产品。 | `un-cpc-3-0-structure-2025` |
| `validate_reference` | 参考流 | 输出应恰好为 1 个合格 Item(s)，并完整填写产品、性能、寿命、地理、技术和状态限定信息。 | `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026` |
| `validate_atomic_inventory` | 清单 | 每个交换应为原子流；液压油和压缩空气保持独立，UUID 空行明确标记未解决。 |  |
| `validate_route` | 试验介质 | 液压数据集纳入或说明零液压油并标记压缩空气不适用；气动数据集反向处理，除非两种介质分别计量。 | `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026` |
| `validate_balance` | 产品、零部件和油 | 核对合格数、零部件净领用和液压油领用—退回—滞留—废物平衡，或记录已调查残差。 |  |
| `validate_energy` | 电力 | 仪表覆盖、换算、分配和合格产品归一化应可复现。 |  |
| `validate_boundary_allocation` | 边界和分配 | 一致披露起始状态、上游连接、排除项、分配层级和系统扩展。 | `eu-pef-2021-2279` |
| `validate_bilingual_alignment` | 双语使用 | 英中过程 id、行 id、UUID、有序规则 id、功能单位、清单行和来源 id 应一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一台完整 CPC 43219 马达装配和出厂验收的配置特定前景数据集 |
| downstream_use | 产品足迹或 LCA 的 TianGong flow、process、lifecyclemodel 和前景数据包投影 |
| allowed_use | 仅在功能、性能、寿命、边界、路线、地理、技术和分配相容时用于工厂大门比较 |
| excluded_use | 不直接比较直线缸、涡轮、泵、压缩机、阀、电动机、不完整零件或边界不相容数据集 |
| required_metadata | PCR id；CPC；制造商和型号；介质；原理；压力；排量或转角；扭矩；转速；功率；效率或泄漏；工作制和寿命；质量和材料；表面处理；包含功能；场址；期间；试验路线；仪表覆盖；分配；截断；状态 |
| required_quality_disclosure | 完整性；不合格和返工；BOM 核对；校准和覆盖；空气状态；油循环和滞留；分配因素；上游代理；未解决 UUID；缺少外部范围 |
| update_trigger | 原理、材料、性能等级、试验路线、场址、供应商地理、仪表边界、分配、验收准则或期间变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，*CPC 第 3.0 版结构*，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 子类 43219 身份及与直线动作子类 43211 的区分 |
| `danfoss-orbital-motors-2021` | 手册（`handbook`） | Danfoss，*Technical Information: General, Orbital Motors*，BC152886483554en-000401，2021，https://assets.danfoss.com/documents/latest/195953/BC152886483554en-000401.pdf | 液压能转换、摆线马达结构、零部件和性能限定信息 |
| `festo-drrd-1395606-2026` | 手册（`handbook`） | Festo，*Rotary actuator DRRD-20-180-FH-PA data sheet*，零件号 1395606，2026 年 9 月 4 日生成，https://ftp.festo.com/public/PNEUMATIC/SOFTWARE_SERVICE/DataSheet/EN_US/1395606.pdf | 气动旋转执行器、压缩空气介质、齿条齿轮原理、字段和材料 |
| `eu-pef-2021-2279` | 正式指南（`official_guidance`） | 欧盟委员会，*Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method*，2021 年 12 月 30 日合并文本，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | 功能单位、参考流、边界、分配层级和数据质量维度 |
