---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.microscopes-except-optical-microscopes-and-diffraction-apparatus
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 显微镜（光学显微镜除外）及衍射仪

## 1. 范围与适用性

本 PCR 适用于作为完整功能仪器制造的非光学显微镜及衍射仪，包括透射和扫描电子显微镜，以及实验室 X 射线衍射或散射仪。其适用对象是一个已声明型号和配置的工厂大门前景数据包。

复式光学显微镜、样品制备设备、本产品边界以外的独立分析仪器、单独供应的备件和附件、客户现场安装、分销、使用、维护、翻新及报废处理均不包括在内。研究可增加下游阶段，但必须将其与本摇篮到大门结果分开报告。

电子显微镜与衍射仪的体系结构存在实质差异。因此，路线特定的组件行是有条件适用的，不得将它们组合成假想的平均仪器。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.microscopes-except-optical-microscopes-and-diffraction-apparatus |
| classification_refs | CPC 3.0：48261，精确分类语境 |
| covered_products | 完整非光学显微镜，包括电子显微镜；完整衍射仪，包括实验室 X 射线衍射和散射系统 |
| excluded_products | 复式光学显微镜；单独供应的零件和附件；样品制备设备；CPC 48261 以外的仪器 |
| representative_product | 一台完整配置的电子显微镜，或一台完整配置的实验室 X 射线衍射仪 |
| production_route | 接收外购组件和分总成；路线特定集成；有条件的精密清洗；总装；工厂验收测试和校准；发运包装 |
| market_state | 新制、完整、经工厂测试并在制造场址大门处可供发运的仪器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为指定仪器系列和配置提供所声明的显微成像或衍射测量功能 |
| How much | 一台完整仪器 |
| How well | 满足制造商声明的分辨率、测量范围、探测器配置、安全功能和有文件记录的工厂验收准则 |
| How long or cycle | 工厂大门处的一台新仪器；只有在增加下游阶段时才披露使用寿命和使用阶段占空比 |
| reference_flow_link | 参考数量为一台已声明仪器的实测产品净质量，不包括发运包装和单独供应的备件 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一台完整已声明仪器的实测净质量（kg） |
| 参考产品流 | 显微镜（光学显微镜除外）及衍射仪 `dd0f6b31-a7ef-48f9-b3aa-b4bfe44ec36d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仪器系列；型号和配置；产品净质量；电子源或 X 射线源类型；适用时的加速电压或发生器功率；探测器类型和数量；真空和冷却配置；声明性能和工厂验收准则；制造场址和生产期间；发运包装配置 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | 参考产品和 `reference_product_output` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过称量或经核实的竣工物料清单确定完整验收仪器的净质量；不包括托盘、防护泡沫、运输箱和单独供应的备件。 |
| `mu_component_mass` | 组件、分总成和包装输入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按稳定零件编号和配置记录安装或发运质量；没有质量换算记录时，不得用采购金额或件数代替。 |
| `mu_electricity_energy` | `integration_electricity` 和 `acceptance_test_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留以 kWh 表示的电表读数，并按 1 kWh = 3.6 MJ 换算；识别电表、分配时段和排除的非生产负荷。 |
| `mu_water_mass` | `precision_cleaning_water` 和 `precision_cleaning_wastewater` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量记录；按体积计量时，应记录温度或用于体积转质量的声明密度因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、组件、分总成、包装和设施公用工程进入制造场址，并附有上游数据集 |
| starting_condition_role | 用于仪器集成和工厂放行的摇篮到大门前景起点 |
| product_classification_scope | 仅限完整 CPC 48261 仪器；单独供应的 CPC 零件/附件和光学显微镜不在本 PCR 范围内 |
| recursive_input_rule | 外购的完整 CPC 48261 仪器若并入另一交付配置，仅作为一个上游产品输入记录一次，不再用本 PCR 递归分解 |
| upstream_dataset_requirement | 跨越边界的每个外购组件、分总成、材料、包装和公用工程均须有代表性上游数据集或明确数据缺口 |
| disclosure | 披露仪器系列、配置、自制与外购边界、纳入的工厂操作、分配方法、包装、地理范围、生产期间，以及工厂大门以外增加的任何阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 所有前景数据集 | 纳入接收组件及其上游供应、现场集成、有条件的精密清洗、总装、验收测试/校准和发运包装，直至制造场址大门放行。 | `un-cpc-3-0-structure-2025` |
| `sb_route_configuration` | 路线特定建模 | 对一个已声明的电子显微镜或衍射仪配置进行建模。仅纳入实际安装的源、探测器、真空、冷却和控制组件；不得平均互斥路线。 | `thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family` |
| `sb_downstream_exclusion` | 分销、安装、使用、服务和报废 | 核心结果排除下游阶段。若增加下游阶段，应分开报告，并披露占空比、使用寿命、安装公用工程、维护和报废情景。 | `thermo-fisher-electron-microscope-sustainable-design` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_integration` | 组件和分总成集成 | `required` | 始终纳入；路线特定行仅适用于已声明配置 | 前景生产 | 每台验收仪器 |
| `precision_cleaning` | 最终封闭前的精密清洗 | `conditional` | 零部件或组件在现场清洗且水跨越前景边界时纳入 | 前景调理 | 每台验收仪器 |
| `final_acceptance_packaging` | 总装、验收测试、校准及发运包装 | `required` | 始终纳入；包装行仅在随产品发运时适用 | 前景生产和放行 | 一台验收仪器的净质量（kg） |

### 过程：组件和分总成集成（`component_integration`）

#### 输入

##### 产品流

###### 电子光学镜筒总成（`electron_optical_column`）

仅对电子显微镜配置记录已安装的电子光学镜筒。电子源类型、加速电压范围、透镜配置和安装质量必须可追溯至竣工记录。

- 选定流：电子光学镜筒总成
- 流属性/单位：Mass / kg
- 数量规则：电子显微镜路线适用时的实测安装质量；否则记录不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`thermo-fisher-talos-l120c-g2-2022`

###### X 射线源总成（`xray_source_assembly`）

仅对衍射仪配置记录已安装的 X 射线管和发生器源总成。配置记录应保留靶材、焦点、发生器功率、冷却方式和安装质量。

- 选定流：X 射线衍射源总成
- 流属性/单位：Mass / kg
- 数量规则：衍射仪路线适用时的实测安装质量；否则记录不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`bruker-d8-advance-family`

###### 真空泵（`vacuum_pump`）

已声明配置使用真空泵时记录该组件。应披露泵技术及其是否已包含在另一外购分总成内，以防止重复计算。

- 选定流：真空泵
- 流属性/单位：Mass / kg
- 数量规则：真空泵处于已声明自制与外购边界内时的实测安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`thermo-fisher-talos-l120c-g2-2022`

###### 辐射探测器模块（`detector_module`）

按实际配置记录已安装的探测器模块；只有具有相同 Tiangong 身份的多个模块才能合并。探测器技术和数量仍为必需限定信息。

- 选定流：辐射探测器模块 `57ac0224-60f1-4a27-a61e-96f632f61703`
- 流属性/单位：Mass / kg
- 数量规则：具有此身份的已安装探测器模块实测总质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family`

###### 控制工作站（`control_workstation`）

记录作为仪器组成部分发运的已配置计算机工作站。不包括未随产品供应的通用办公计算机。

- 选定流：仪器控制工作站
- 流属性/单位：Mass / kg
- 数量规则：已配置控制工作站的实测发运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family`

###### 钢制仪器外壳（`steel_enclosure`）

将已安装的安全和稳定外壳作为一个钢制产品输入记录。若其他材料占主导，应添加实际材料特定的外壳交换，不得重命名本行。

- 选定流：钢制仪器外壳
- 流属性/单位：Mass / kg
- 数量规则：钢制仪器外壳的实测安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family`

###### 集成用电力（`integration_electricity`）

记录验收测试前组件集成以及机械和电气总装消耗的电能。排除单独记录的验收测试电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：工单电表读数由 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_factory_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：最终封闭前的精密清洗（`precision_cleaning`）

#### 输入

##### 产品流

###### 精密清洗工艺用水（`precision_cleaning_water`）

现场进行水基精密清洗时，记录供应给该操作的工艺用水。上游供应商用水和客户现场冷却水不属于本行。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供应给范围内精密清洗的实测工艺用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_precision_cleaning`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 精密清洗废水（`precision_cleaning_wastewater`）

记录范围内水基清洗排放的非危险废水。检测表明其为危险废物时，应改用精确分类的废物流。

- 选定流：非危险仪器清洗废水
- 流属性/单位：Mass / kg
- 数量规则：范围内精密清洗操作的实测排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_precision_cleaning`
- 来源：

##### 基本流

### 过程：总装、验收测试、校准及发运包装（`final_acceptance_packaging`）

#### 输入

##### 产品流

###### 验收测试用电力（`acceptance_test_electricity`）

记录仪器抽真空、通电、稳定、校准和工厂验收测试所用电能。排除已分配给集成的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：验收测试电表读数由 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_factory_electricity`
- 来源：`bruker-d8-advance-family`

###### 欧标木托盘（`wooden_pallet`）

仅在欧标木托盘随产品发运时记录。只有受控的可复用托盘周转池才能采用复用次数。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：实测托盘质量除以有文件记录的复用次数；否则采用托盘全质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台发运仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch_packaging`
- 来源：

###### 聚乙烯防护泡沫（`polyethylene_foam`）

将随仪器发运的聚乙烯泡沫记录为一个包装输入。其他防护材料应作为单独的材料特定交换添加。

- 选定流：聚乙烯泡沫防护包装
- 流属性/单位：Mass / kg
- 数量规则：聚乙烯防护泡沫的实测发运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台发运仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收参考仪器（`reference_product_output`）

仅记录通过声明工厂验收测试的仪器。数量为一台完整配置仪器的核实产品净质量。

- 选定流：显微镜（光学显微镜除外）及衍射仪 `dd0f6b31-a7ef-48f9-b3aa-b4bfe44ec36d`
- 流属性/单位：Mass / kg
- 数量规则：一台验收仪器的核实净质量，不包括发运包装和单独供应的备件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台完整验收仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_mass_acceptance`
- 来源：`un-cpc-3-0-structure-2025`; `thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision` | 工单特定的组件、清洗、装配、测试和包装记录 | 优先采用过程细分和工单直接计量。将材料和公用工程分配给实际消耗它们的序列号仪器或同质批次。 |  |
| `alloc_shared_utility` | 共用工厂公用工程和服务 | 无直接计量时，采用设备运行时间、分区计量负荷或过程时间等有文件记录的因果驱动因素。只有真正由空间驱动的负荷才能采用面积。 |  |
| `alloc_rework` | 返工和未通过的验收测试 | 将返工材料、公用工程和处理输出分配给同批次验收仪器；内部不合格品不得产生避免产品抵扣。 |  |
| `alloc_recycling` | 再生材料或可复用包装 | 分开报告再生含量和回收假设。不得扣减未经核实的回收抵扣；可复用包装仅按有文件记录的复用次数分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_integration` | 已安装组件和分总成质量 | 竣工 BOM 和供应商质量记录 | serial/model; configuration; part_number; flow_role; quantity; unit_mass_kg; installed_mass_kg; supplier; upstream_dataset_id | 将已发布竣工 BOM 与供应商规格或核实称量进行核对 | kg | 每台验收仪器或同质配置批次 | 与数据集相同生产期间 | 范围内所有制造场址 | 按 `row_id` 汇总数量 × 核实单位质量；排除已包含于另一外购分总成的零件 | 已发布 BOM 版本、配置记录、供应商规格或校准称量记录、核对签字 |
| `cp_factory_electricity` | `component_integration`; `final_acceptance_packaging` | 集成和验收测试电力 | 分表或工单能源日志 | meter_id; opening_kWh; closing_kWh; timestamps; process_state; apparatus_serial; shared_load_driver; excluded_loads | 读取专用电表，或用因果驱动因素分配经核实的分表总量 | kWh | 每个工单或测试批次 | 年度数据通常采用至少连续 12 个月的代表性期间 | 每个制造场址 | 按过程和验收仪器计算净 kWh 后换算为 MJ；两项电力分开记录 | 电表校准、区间数据、工单时间戳、分配工作表、完整性核对 |
| `cp_precision_cleaning` | `precision_cleaning` | 工艺用水和废水 | 水表、批记录和排放记录 | operation_id; apparatus_serial; water_mass_kg_or_volume; temperature; density_factor; wastewater_mass_kg_or_volume; retained_water_kg; evaporation_kg; waste_classification | 分别计量输入和排放，或记录闭合质量平衡计算 | kg | 每个清洗批次 | 与数据集相同生产期间 | 每个实施水基精密清洗的场址 | 按记录的批次成员分配总量；用有文件记录的密度将体积换算为质量 | 水表校准、批次随行单、排放分类、质量平衡核对 |
| `cp_dispatch_packaging` | `final_acceptance_packaging` | 发运托盘和防护泡沫 | 包装 BOM 和装箱记录 | apparatus_serial; packaging_part_number; material; quantity; unit_mass_kg; dispatched_mass_kg; reuse_count | 称量或采用核实供应商单位质量，并与装箱单核对 | kg | 每个发运配置或同质包装设计 | 数据集期间采用的当前包装设计 | 每个发运场址 | 按材料特定行汇总发运质量；托盘质量仅按有文件记录的复用次数分摊 | 已发布包装图纸/BOM、供应商质量规格、装箱记录、复用周转日志 |
| `cp_product_mass_acceptance` | `final_acceptance_packaging` | 参考产品输出和验收状态 | 最终称量/BOM 记录及工厂验收报告 | apparatus_serial; model; configuration; gross_mass_kg; packaging_mass_kg; spare_mass_kg; net_product_mass_kg; acceptance_test_id; acceptance_result | 核实仪器净质量并关联通过的验收测试记录 | kg | 每台验收仪器或经核实的同质型号配置 | 与数据集相同生产期间 | 每个制造场址 | 净质量 = 毛质量 - 发运包装 - 单独供应备件；仅纳入验收产品 | 校准秤或已核对竣工 BOM、签署验收报告、序列号追溯 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_component_mass` | 组件和分总成行 | installed_mass_kg = quantity × verified unit_mass_kg；仅合并相同流身份并披露嵌套组件 | `cp_component_bom` 记录 | 各 `row_id` 的 kg/验收仪器 |  |
| `calc_electricity_mj` | `integration_electricity`; `acceptance_test_electricity` | electricity_MJ = net_kWh × 3.6 | `cp_factory_electricity` 净 kWh | MJ/验收仪器 |  |
| `calc_cleaning_balance` | `precision_cleaning_water`; `precision_cleaning_wastewater` | water_input_kg = wastewater_output_kg + retained_water_kg + evaporation_kg + measured_other_outputs；调查并披露残差 | `cp_precision_cleaning` 记录 | 核对后的 kg/验收仪器 |  |
| `calc_packaging_mass` | `wooden_pallet`; `polyethylene_foam` | packaging_mass_kg = quantity × unit_mass_kg；可复用托盘质量仅按有文件记录的完成使用次数分摊 | `cp_dispatch_packaging` 记录 | kg/发运仪器 |  |
| `calc_reference_product_mass` | `reference_product_output` | net_product_mass_kg = gross_mass_kg - dispatch_packaging_mass_kg - separately_supplied_spares_mass_kg | `cp_product_mass_acceptance` 记录 | 验收仪器质量（kg） |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和路线特定行 | 产品系列、型号、序列号/配置、源、探测器、真空/冷却配置及验收准则必须明确且相互一致。 | 已发布配置和工厂验收报告 |
| `dq_bom_completeness` | 外购组件和包装 | 将竣工及包装 BOM 与参考产品核对；披露缺少上游数据集的质量，并防止嵌套分总成重复计算。 | BOM 核对和上游数据集交叉表 |
| `dq_metering` | 电力和水 | 采用校准仪表，或记录从校准总量进行的分配；保留原始读数、时间戳和换算因子。 | 校准记录和签署分配工作表 |
| `dq_temporal` | 所有前景记录 | 采用声明期间的记录，并识别使旧记录失去代表性的设计、供应商、过程或包装变化。 | 覆盖表和变更控制日志 |
| `dq_conditional_routes` | 有条件组件、清洗和包装行 | 明确每个有条件行是否适用。只有零数量而无适用性判定视为不完整。 | 配置记录、过程随行单和装箱记录 |
| `dq_source_traceability` | 外部来源使用 | 保留稳定来源 id，并说明每项来源支持的身份、体系结构、边界或质量决定；不得将示例当作范围。 | 来源交叉引用审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 确认 Tiangong 参考产品 UUID、Mass 属性、kg 单位、CPC 48261 身份及恰好一台验收仪器的净质量。 | `un-cpc-3-0-structure-2025` |
| `val_bilingual_qualifiers` | 产品元数据 | 确认全部必需限定信息已填写，并与声明的电子显微镜或衍射仪路线一致。 | `thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family` |
| `val_inventory_atomicity` | 过程清单 | 确认每项交换为一个具体产品流、废物流或能源流；拒绝合并公用工程、组件集合、包装集合和通用废物集合。 |  |
| `val_route_exclusivity` | `electron_optical_column`; `xray_source_assembly` | 不得同时分配互斥路线组件，除非交付仪器确实包含两种功能且产品说明解释该配置。 |  |
| `val_electricity_separation` | 电力行 | 确认采用不重叠计量时段或对同一总量进行可审计拆分，并由 kWh 换算为 MJ。 |  |
| `val_cleaning_balance` | 有条件精密清洗 | 将用水输入与废水、残留水、蒸发和其他实测输出核对；危险废水须使用不同的精确流。 |  |
| `val_mass_and_packaging` | 参考产品和包装 | 确认参考产品质量排除托盘、泡沫和单独供应备件，同时所有发运包装均作为单独原子交换报告。 |  |
| `val_unresolved_uuid` | UUID 为空的行 | 在公开 state-100 候选通过语义、分类、状态、属性和单位审查前，保持 UUID 为空并保留清单未解决记录。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 由核实前景制造记录生成的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 用于已声明非光学显微镜或衍射仪的摇篮到大门建模；需要时连接单独建模的下游阶段 |
| allowed_use | 仪器系列、配置、性能、地理、期间、边界和数据质量相容时的比较及供应链模型 |
| excluded_use | 光学显微镜；单独供应的零件；互斥路线平均；没有下游清单的使用阶段或摇篮到坟墓声明 |
| required_metadata | PCR id/版本；产品 UUID；系列/型号/配置；净质量；源和探测器配置；真空/冷却配置；验收准则；场址；期间；分配；包装；地理；上游数据集版本；数据缺口 |
| required_quality_disclosure | BOM 和包装覆盖率；计量覆盖率；有条件行适用性；分配份额；水平衡；验收测试证据；来源交叉表；未解决 UUID 和范围需求 |
| update_trigger | 产品重新设计；新路线；材料或探测器/源变化；供应商/场址变化；测试周期变化；包装重新设计；能源/水结构变化；UUID/范围证据改善；代表性期限届满 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 48261 身份，以及与光学显微镜和单独分类零附件的区分 |
| `china-mof-2021-tariff-annex` | 官方指南（`official_guidance`） | 国务院关税税则委员会/中华人民共和国财政部，《2021年关税调整方案》附表 1，https://gss.mof.gov.cn/gzdt/zhengcefabu/202012/P020201223606577665704.pdf | 税则号列 90121000/90129000 的专业中文术语及完整产品与零件的区分 |
| `thermo-fisher-talos-l120c-g2-2022` | 手册（`handbook`） | Thermo Fisher Scientific，Talos L120C G2 (S)TEM brochure，BR0157-EN-11-2022，https://documents.thermofisher.com/TFS-Assets/MSD/brochures/talos-120c-g2-stem-br0157.pdf | 电子显微镜体系结构、电子源、加速器、真空泵、探测器、外壳、配置和性能限定信息 |
| `thermo-fisher-electron-microscope-sustainable-design` | 手册（`handbook`） | Thermo Fisher Scientific，Electron Microscopes - Sustainable Design，https://www.thermofisher.com/us/en/home/electron-microscopy/manufacturing-sustainability/product-sustainability.html | 生命周期阶段披露及制造、运输、运行、回收和报废考虑的区分 |
| `bruker-d8-advance-family` | 手册（`handbook`） | Bruker，D8 ADVANCE Family product page，https://www.bruker.com/en/products-and-solutions/diffractometers-and-x-ray-microscopes/x-ray-diffractometers/d8-advance-family.html | 衍射仪体系结构、外壳、X 射线管、光学组件、样品台、探测器、冷却配置及工厂性能验证 |
