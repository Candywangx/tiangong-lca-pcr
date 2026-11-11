---
pcr_id: pcr.constructions-and-construction-services.construction-services.cast-in-place-building-concrete-placement-services
language: zh-CN
translation_status: aligned
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 现浇建筑混凝土浇筑、表面修整与养护服务

## 1. 范围与适用性

本PCR覆盖从准备工作面接收新拌混凝土到就位工程验收的窄建筑混凝土浇筑工程包，包括实际浇筑、振实、普通表面修整、养护、检验、正常返工及场内清理。模板钢筋为单独母工程包负责的已检起始条件，其负荷须保留于整项目模型。本PCR不指定混凝土配方、强度、养护时间、损失率或建筑寿命，实际合同与验收规范确定这些限定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.cast-in-place-building-concrete-placement-services |
| classification_refs | CPC 3.0 54540；仅覆盖较窄浇筑工程包，不覆盖整个混凝土服务叶节点。 |
| covered_products | 现浇建筑构件承包浇筑、振实、普通表面表面修整、养护与验收服务。 |
| excluded_products | 预拌混凝土制造；预制件制造及安装；模板制作安装及钢筋工程；基础工程；道路、桥梁、海工混凝土；专用涂装；整栋建筑。 |
| representative_product | 一个声明的建筑楼板或墙体浇筑批次，附指定混合料、几何、表面修整和验收条件。 |
| production_route | 接收新拌混凝土→浇筑振实→表面修整→保护养护→检查验收。 |
| market_state | 承包交接时已验收的安装施工服务，不假定寿命期服务等价。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象 (`What`) | 已验收现浇建筑混凝土浇筑服务 |
| 数量 (`How much`) | 1 m3验收净就位体积 |
| 质量要求 (`How well`) | 声明构件、混合料/强度/暴露规范、几何、表面修整、养护和验收证据。 |
| 持续时间或周期 (`How long or cycle`) | 一个标识浇筑批次及其实际养护验收期间，不含未来维修周期。 |
| reference_flow_link | `accepted_concrete_placement_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收现浇建筑混凝土浇筑服务 |
| 参考流属性 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 建筑构件；场址/日期；混合料及指定龄期强度；暴露等级；验收净几何；表面修整规范；泵送方式；养护方式及时间；验收边界；模板钢筋责任；供应方和交货边界；退料废物去向；共享资产和研究资本政策。 |

每项必需限定均须在数据包声明；服务验收体积不代表新拌投入或内部转移等于一立方米。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| accepted_volume | 参考产品 | Volume | m3 | 采用验收净几何体积，排除空洞和未验收/拒收工程；验收记录关联cp_curing，不得替换成交付新拌体积。 |
| fresh_density | fresh_concrete; returned_fresh_concrete | Volume | m3 | 仅有质量时以同批新拌混凝土实测密度相除，保留采样和含水/含气状态，不设通用密度。 |
| wet_waste | placement_wash_slurry; placement_concrete_waste; `finishing_residues_captured_sanding`; `finishing_residues_rejected_mortar`; `finishing_residues_spent_abrasive`; rejected_hardened_concrete_waste | Mass | kg | 保留干湿基准及换算密度或固含量，湿浆和其分离固体不得重叠。 |
| fuel_mass | placement_diesel | Mass | kg | 保留柴油实测质量，体积换算须有声明温度下供应商密度，能量换算须有低位热值记录。 |
| energy_units | placement_electricity; finishing_electricity; curing_electricity | Energy | kWh | 燃料质量和电量分开保留；需要时按3.6将kWh换算MJ，燃料质量换能量须有低位热值记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可达建筑工作面；测定几何及已由负责上游工程包验收的模板、钢筋、预埋件；新拌混凝土在场址接收。 |
| starting_condition_role | 声明供应状态，不代表生产无负荷；本PCR仅负责浇筑、表面修整与养护。 |
| product_classification_scope | 窄于CPC 3.0 54540，属于施工服务而非混凝土产品或建筑资产。 |
| recursive_input_rule | 分包提供同类服务时选其上游服务数据集或拆分活动一次，不无限递归、不两者重复计。 |
| upstream_dataset_requirement | 关联新拌混凝土生产及交付数据集和负责模板钢筋的母工程包；按匹配交接门关联实际燃料、电、水、材料、设备和下游废物服务。 |
| disclosure | 披露截断任务、交货/洗浆责任、排除模板钢筋及资本政策；整项目模型须在其他包纳入这些任务，本服务不是整栋建筑结果。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本PCR覆盖从准备工作面接收新拌混凝土到就位工程验收的窄建筑混凝土浇筑工程包，包括实际浇筑、振实、普通表面修整、养护、检验、正常返工及场内清理。模板钢筋为单独母工程包负责的已检起始条件，其负荷须保留于整项目模型。本PCR不指定混凝土配方、强度、养护时间、损失率或建筑寿命，实际合同与验收规范确定这些限定。 |  |
| service_gate | 所有过程 | 纳入指定验收前实际浇筑、振实、表面修整、养护保护、检查、正常修整与清理；后续结构修复需另定范围。 | ufgs-cast-in-place-2019 |
| reaction_boundary | curing | 水化改变完成表面修整后的混凝土中的胶凝材料/水组成；区分留存硬化材料、未反应组分、蒸发、移除试件及拒收物，不假定化学路径、反应产率或碳化抵扣。 | epa-concrete-washout-2012 |
| washout_gate | placement | 合同归属时纳入场内溜槽/泵/工具清洗，区分供应商场外洗罐；收集洗水，标识实际回收/处理交接及核实直接释放。 | epa-concrete-washout-2012 |
| shared_assets | 所有过程 | 列举每台泵、发电机、电表、养护设施和洗浆容器、全部使用节点/批次及服务日期；设备资本和进退场政策与运行能源分开记录。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| placement | 新拌混凝土浇筑振实 | required | 正常路线 | 新拌可流动混合料转为振实设计几何，交表面修整，负责泵清理和浇筑拒收物。 | 每参考流 |
| finishing | 成型混凝土表面表面修整 | required | 正常路线 | 振实母体转为指定表面，交养护，关联表面修整修整及残渣。 | 每参考流 |
| curing | 水化养护检验验收 | required | 正常路线 | 表面修整投入中的胶凝材料与水水化到硬化验收状态，保留留存/未反应组分及损失出口。 | 每参考流 |

生产模式为标识现场浇筑批次及关联表面修整/养护期间，记录pour_id、delivery_id、event_id、transfer_id和asset_id。启动、泵送、振捣、表面作业、养护保护、检验及清理使用同一批次台账。就位材料交接是状态账而非独立交易产品，最终输出为验收服务。未验收或被替换几何不得作为验收输出。

### 过程：新拌混凝土浇筑振实 （`placement`）

#### 输入

##### 产品流

###### 用于浇筑的交付新拌混凝土 （`fresh_concrete`）

新拌混合料是外购上游产品，已包含胶凝材料与拌合水。其数量不得固定为每参考服务1 m3。

- 选定流: 用于浇筑的交付新拌混凝土
- 流属性/单位: Volume / m3
- 数量规则: 按交货单及密度支持的出料体积计量接收的新拌混凝土；退料和损失分别保留。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 浇筑设备柴油 （`placement_diesel`）

记录placement责任范围内实际归属柴油供给，包含未退回的未用废物/损失。按placement_fuel_balance区分供给与实际燃烧活动；外购泵送或其他提供者已含的燃料及燃烧负担不重复记录，保留实际范围划分证据。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 绑定模式: `fixed`
- 流属性/单位: Mass / kg
- 数量规则: 采用归属fuel_supply_kg = fuel_opening_kg + fuel_external_receipts_net_kg - fuel_closing_intact_carried_kg，在实际正记可用退回/转移之前计量，包含非退回废损。最终数量为fuel_supply_kg / V，V为cp_curing按原方法确定的正验收净就位体积；最终仅归一一次。原始总量保持kg，保留对应来源批次上游责任而不再次调整库存；燃烧因子的已燃活动另行确定，供应kg不是已燃kg。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集计算（`calculated_from_collection`）
- 采集协议: `cp_placement`

数量范围证据需求：按同一责任人、事件及验收体积基准独立记录归属库存已调供给、已燃活动、实际未用去向及换算/计量不确定性。供应量没有已建立的类别通用数值区间；后续筛选区间须有独立可比供应观测，不能代用已燃燃料消耗区间。

###### 浇筑设备供电 （`placement_electricity`）

电量与燃料关联到设备及浇筑批次。

- 选定流: 浇筑设备供电
- 流属性/单位: Energy / kWh
- 数量规则: 计量泵及振捣器用电网电量；自发电内部记录，不再重复采购上游电力。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 浇筑设备清洗供水 （`placement_wash_water`）

技术系统供水不同于直接从环境取水。

- 选定流: 浇筑设备清洗供水
- 流属性/单位: Volume / m3
- 数量规则: 计量设备及溜槽清洗新增供水，区分循环洗水和降雨。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 完整不含另记运行投入的浇筑泵设备服务 (`placement_plant_service_pump`)

仅记录本项独立识别的“完整不含另记运行投入的浇筑泵设备服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整不含另记运行投入的浇筑泵设备服务
- 流属性/单位：Duration / h
- 数量规则：最终每参考流服务h = 本项准确泵、振捣或洗浆设施职能独立实测可归属服务小时 / 实际验收净就位混凝土体积m3。供应或自有兼容h参考生命周期边界排除另记运行能源；资本每h负担须以全部使用者有证据完整寿命活动推导一次。不把设备时间当运输或Count，不以验收安装次数为分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_placement`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整不含另记运行投入的混凝土振捣设备服务 (`placement_plant_service_vibrator`)

仅记录本项独立识别的“完整不含另记运行投入的混凝土振捣设备服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整不含另记运行投入的混凝土振捣设备服务
- 流属性/单位：Duration / h
- 数量规则：最终每参考流服务h = 本项准确泵、振捣或洗浆设施职能独立实测可归属服务小时 / 实际验收净就位混凝土体积m3。供应或自有兼容h参考生命周期边界排除另记运行能源；资本每h负担须以全部使用者有证据完整寿命活动推导一次。不把设备时间当运输或Count，不以验收安装次数为分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_placement`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整洗浆设施提供服务 (`placement_plant_service_washout_facility`)

仅记录本项独立识别的“完整洗浆设施提供服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整洗浆设施提供服务
- 流属性/单位：Duration / h
- 数量规则：最终每参考流服务h = 本项准确泵、振捣或洗浆设施职能独立实测可归属服务小时 / 实际验收净就位混凝土体积m3。供应或自有兼容h参考生命周期边界排除另记运行能源；资本每h负担须以全部使用者有证据完整寿命活动推导一次。不把设备时间当运输或Count，不以验收安装次数为分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_placement`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 归属设备进退场货运服务 （`placement_mobilization_transport`）

本工程包负责实际场外泵具、工具及养护设备进退场时的条件货运交换，设备小时不是吨公里。

- 选定流: 归属设备进退场货运服务
- 流属性/单位：质量*距离 / t*km
- 数量规则: 按每次运输实际载荷吨数乘路线公里计算，依承运证据归属空返及合载运输，或采用有完整记录车辆服务模型；不得重复直接燃料或已含运输租赁。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: t*km
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 表面修整前已振实就位混凝土 （`placed_concrete_transfer`）

这是内部材料状态交接，不是参考服务，也不是另一项外购产品。

- 选定流: 表面修整前已振实就位混凝土
- 流属性/单位: Volume / m3
- 数量规则: 计量交给表面修整的实体就位体积，以transfer_id配对表面修整投入并保留尚未验收体积。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 退回供应商的未用新拌混凝土 （`returned_fresh_concrete`）

同一退料不得再作为废混凝土；记录采购结算但不虚构避免生产抵扣。

- 选定流: 退回供应商的未用新拌混凝土
- 流属性/单位: Volume / m3
- 数量规则: 记录实际退料体积及供应商接收或废物认定；仅在仍可用且接收方接受时按产品退料。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 浇筑废弃混凝土 （`placement_concrete_waste`）

废物路线始于交给声明废物接收方；运输及处理负荷需关联下游数据集。

- 选定流: 浇筑废弃混凝土
- 流属性/单位: Mass / kg
- 数量规则: 按实际湿态或硬化状态及去向称量溢洒、泵内残留和拒收料。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 收集的混凝土清洗废水与浆液 （`placement_wash_slurry`）

洗浆物默认按废物转移；只有核实直接排放时才按环境排放处理，包含收集且不得默认废水是基本流。

- 选定流: 收集的混凝土清洗废水与浆液
- 流属性/单位: Mass / kg
- 数量规则: 称量外运浆液或测量体积及实测密度；标识液固分离并排除已单称固体。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1500
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 浇筑燃烧向空气排放的化石二氧化碳 （`placement_fossil_co2`）

直接燃烧空气排放区别于上游燃料生产排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式: `fixed`
- 流属性/单位: Mass / kg
- 数量规则: 由归属燃料碳记录或经审查指定燃烧因子确定化石CO2；不得脱离所选方法假定完全氧化。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际浇筑燃烧向空气排放的一氧化碳 (`placement_other_air_emissions_carbon_monoxide`)

仅记录本项独立识别的“实际浇筑燃烧向空气排放的一氧化碳”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际浇筑燃烧向空气排放的一氧化碳
- 流属性/单位：Mass / kg
- 数量规则：仅实际识别一氧化碳物种及接收空气子介质时启用；独立采用CO物种监测kg，或实际匹配燃料、发动机工况和控制措施的CO物种因子及实测活动量，保留方法来源、因子单位、活动单位和不确定性。不得分摊污染物总量，按实际验收净就位混凝土体积m3仅归一化一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_placement`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

### 过程：成型混凝土表面表面修整 （`finishing`）

#### 输入

##### 产品流

###### 表面修整前已振实就位混凝土 （`finishing_concrete_feed`）

母体材料已具规定形状，表面修整改变表面状态。

- 选定流: 表面修整前已振实就位混凝土
- 流属性/单位: Volume / m3
- 数量规则: 接收placed_concrete_transfer实测体积，transfer_id、状态与体积一致，不另加上游负荷。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 表面修整设备供电 （`finishing_electricity`）

手工表面修整可实测无设备电耗，缺记录不能证明为零。

- 选定流: 表面修整设备供电
- 流属性/单位: Energy / kWh
- 数量规则: 计量抹光与表面修整工具归属电量；共享发电机燃料仅在负责节点计入。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 30
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际供应的表面修整磨料产品 (`finishing_consumables_abrasive`)

仅记录本项独立识别的“实际供应的表面修整磨料产品”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际供应的表面修整磨料产品
- 流属性/单位：Mass / kg
- 数量规则：按本项“实际供应的表面修整磨料产品”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 实际供应的表面修整或修整砂浆配方产品 (`finishing_consumables_mortar`)

仅记录本项独立识别的“实际供应的表面修整或修整砂浆配方产品”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际供应的表面修整或修整砂浆配方产品
- 流属性/单位：Mass / kg
- 数量规则：按本项“实际供应的表面修整或修整砂浆配方产品”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 实际供应的表面修整硬化剂配方产品 (`finishing_consumables_hardener`)

仅记录本项独立识别的“实际供应的表面修整硬化剂配方产品”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际供应的表面修整硬化剂配方产品
- 流属性/单位：Mass / kg
- 数量规则：按本项“实际供应的表面修整硬化剂配方产品”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 养护验收前已完成表面修整就位混凝土 （`finished_concrete_transfer`）

表面修整状态是中间状态，服务须养护和检查后才确认验收。

- 选定流: 养护验收前已完成表面修整就位混凝土
- 流属性/单位: Volume / m3
- 数量规则: 计量交给养护的表面修整体积并附transfer_id，最终验收前保留返工与拆除材料记录。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 单独收集的表面修整打磨残余废物 (`finishing_residues_captured_sanding`)

仅记录本项独立识别的“单独收集的表面修整打磨残余废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独收集的表面修整打磨残余废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独收集的表面修整打磨残余废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独收集的拒收表面修整砂浆废物 (`finishing_residues_rejected_mortar`)

仅记录本项独立识别的“单独收集的拒收表面修整砂浆废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独收集的拒收表面修整砂浆废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独收集的拒收表面修整砂浆废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独交付的废表面修整磨料产品 (`finishing_residues_spent_abrasive`)

仅记录本项独立识别的“单独交付的废表面修整磨料产品”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独交付的废表面修整磨料产品
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独交付的废表面修整磨料产品”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

##### 基本流

### 过程：水化养护检验验收 （`curing`）

#### 输入

##### 产品流

###### 养护验收前已完成表面修整就位混凝土 （`curing_concrete_feed`）

投入中的胶凝材料与拌合水继续水化；骨料是物理组成，不虚构其为反应物。

- 选定流: 养护验收前已完成表面修整就位混凝土
- 流属性/单位: Volume / m3
- 数量规则: 按相同transfer_id及实测体积接收finished_concrete_transfer。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 混凝土养护供水 （`curing_water`）

记录实际湿养护方式和持续时间；水提供湿度条件并可参与持续水化，不设假定产率。

- 选定流: 混凝土养护供水
- 流属性/单位: Volume / m3
- 数量规则: 计量额外外供养护水，区分已内含拌合水、回流水和收集雨水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 养护及验收供电 （`curing_electricity`）

共享场址供电按分表计量或有功率及利用率证据的设备时间归属。

- 选定流: 养护及验收供电
- 流属性/单位: Energy / kWh
- 数量规则: 在声明养护期内计量加热、冷却和检验归属电量，其他实际燃料另列具体交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收现浇建筑混凝土浇筑服务 （`accepted_concrete_placement_service`）

服务包括声明构件的浇筑、振实、表面修整、养护和验收；分母是验收净就位几何体积，不是混凝土制造或建筑资产产品。

- 选定流: 已验收现浇建筑混凝土浇筑服务
- 流属性/单位: Volume / m3
- 数量规则: 1 m3
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集计算 (`calculated_from_collection`)
- 采集协议: `cp_curing`

- 数量范围: 验收体积除以同一验收体积的参考归一化恒等关系，不是产率因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 采集计算 (`calculated_from_collection`)

##### 废物流

###### 送往处理的报废硬化混凝土 (`rejected_hardened_concrete_waste`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。包括按真实养护状态及接收方记录的报废硬化混凝土和废弃混凝土试件。保留失败检验及补做负荷，试件与不合格作业均不得进入验收服务体积。

- 选定流: 送往处理的报废硬化混凝土
- 流属性/单位: Mass / kg
- 数量规则: 按材料及去向分别计量移除覆盖物、试件与拒收混凝土；保留返工归属，不将拒收体积算作验收服务。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)


##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| retain_rework | 所有过程 | 失败检验、拒收浇筑及正常返工负荷保留于原始验收服务批次；以事件id追踪浇筑→表面修整、表面修整→养护返工及回浇筑替换；最终验收几何仅计一次。 |  |
| run_attribution | 所有过程 | 以标识浇筑批次及养护期为生产批次；按事件关联实测活动归属开机、换批和清理；共享事件仅一负责人且全部使用者份额之和为一。 |  |
| shared_energy | 所有过程 | 优先分表；缺分表时按记录运行时间、额定/实测功率和利用率估计节点份额并披露不确定性，同次发电不得电网电和发电燃料重复计。 |  |
| no_automatic_credit | returned_fresh_concrete; waste outputs | 按接收方接收及法律状态记录产品退料或废物出境；不自动抵扣混凝土生产或回收，后果抵扣须另有声明研究方法。 |  |

## 8. 前景数据采集、计算与质量规则


养护采集协议必须按真实材料、重复使用状态和去向，分别识别并称量实际移出的养护薄片、湿覆盖物、养护剂残余和包装，同时采集废弃混凝土/试件。可重复使用且仍留存的覆盖物属于库存或资产服务记录；真实向外退回与废物外运分开。仅用水或留模养护不推定存在覆盖物或养护剂。此完整采集义务不是一条选定废物流；实际不同材料须有不同具体交换，不自动取得回收信用。

### 数据采集协议

| protocol_id | process_id | 流角色（`flow_role`） | 记录类型（`record_type`） | 原始字段（`raw_fields`） | 采集方法（`collection_method`） | 单位（`unit`） | 频率（`frequency`） | 时间覆盖（`temporal_coverage`） | 场址范围（`site_scope`） | 汇总规则（`aggregation_rule`） | 质量证据（`quality_evidence`） |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_placement | placement | 该节点全部清单行 | 事件台账、计量及验收 | pour_id; delivery_id; event_id; transfer_id; asset_id; operating time; metered or rated power; utilization; consumer share; fuel carbon fraction/method; fossil carbon mass fraction and denominator; carbon oxidized-to-CO2 fraction; chosen combustion factor value/unit/source and applicability; factor uncertainty; fuel density/temperature/lower heating value; received fresh volume; measured density; diesel; electricity; water; equipment hours; dispatch_id; carrier; payload tonnes; route kilometres; empty-return activity; mobilization ownership/share; return volume; waste/slurry mass; emissions species and medium; direct washout release event and destination compartment; released liquid volume or mass; measured substance concentration, sampling time and unit; containment/treatment split; inventory changes; pour_id；delivery_id；event_id；transfer_id；asset_id；运行时间；实测或额定功率；利用率；使用者份额；燃料碳含量/方法；化石碳质量分数及分母；碳氧化为CO2的比例；所选燃烧因子值/单位/来源及适用性；因子不确定性；燃料密度/温度/低位热值；接收新拌体积；实测密度；柴油；电量；水；设备小时；dispatch_id；承运方；载荷吨数；路线公里；空返活动；进退场责任/份额；退料体积；废物/浆液质量；排放物种及介质；洗浆直接释放事件及接收子介质；释放液体体积或质量；实测物质浓度、采样时间及单位；收集/处理分流；存量变化; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty; fuel_grade_id; fuel_cohort_id; fuel_asset_id; fuel_period_id; fuel_scope_owner; fuel_provider_inclusion_evidence; fuel_opening_kg; fuel_external_receipts_net_kg; fuel_closing_intact_carried_kg; fuel_usable_return_kg; fuel_usable_transfer_kg; fuel_waste_constituent_kg; fuel_uncontained_constituent_kg; fuel_burned_metered_kg; fuel_burn_method; fuel_fate_roster_complete_evidence; fuel_uncertainty_kg; fuel_raw_event_ids; fuel_stock_cohort_upstream_refs; fuel_carrier_row_event_crosswalk; fuel_sampling_or_factor_basis; fuel_stock_adjustment_applied; fuel_volume_native; fuel_volume_unit; fuel_density_value; fuel_density_unit; fuel_density_temperature_state; fuel_mass_conversion_evidence; fuel_lower_heating_value_value_unit_source | 核对签署事件记录、校准仪表、供应商单据、实测几何/密度、检验及接收单，区分实测、估算及不存在证据。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 placement负责的柴油执行placement_fuel_balance：分别计量库存已调供给、燃烧活动、实际正记可用退出及互斥真实未燃去向，保留牌号/设备/来源批次/期间责任、校准记录与提供者覆盖。废物载体与燃料组分分别实测但不相加，实际释放关联准确物质/介质。未发生需证据，未知不是零或燃烧。燃烧使用fuel_burned_kg及因子实际相容质量/能量基准，上游柴油供给使用fuel_supply_kg；不重复库存或参考归一。 液体体积转燃料质量仅使用同来源批次在记录温度/状态下的实测或有据密度及明确相容单位；fuel_mass_kg = measured_volume_m3 * density_kg_per_m3。原生体积为L时，measured_volume_m3 = measured_volume_L / 1000。不默认密度、热值或无依据燃料状态转换。 | m3; kg; kWh; h; t; km; t*km | 每事件/班次；养护连续记录 | 完整浇筑至养护验收期 | 声明单一场址及节点 | 每参考流 | 签单、校准、几何与检验及质量平衡证据 |
| cp_finishing | finishing | 该节点全部清单行 | 事件台账、计量及验收 | pour_id; event_id; transfer_id; asset_id; operating time; metered or rated power; utilization; consumer share; feed and finished volumes; surface specification; electricity; consumables; residues; actual emission substance/air compartment/particle size; rework events; pour_id；event_id；transfer_id；asset_id；运行时间；实测或额定功率；利用率；使用者份额；投入及表面修整体积；表面规范；电量；耗材；残渣；实际排放物质/空气子介质/粒径；返工事件; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 核对签署事件记录、校准仪表、供应商单据、实测几何/密度、检验及接收单，区分实测、估算及不存在证据。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | m3; kg; kWh; h; t; km; t*km | 每事件/班次；养护连续记录 | 完整浇筑至养护验收期 | 声明单一场址及节点 | 每参考流 | 签单、校准、几何与检验及质量平衡证据 |
| cp_curing | curing | 该节点全部清单行 | 事件台账、计量及验收 | pour_id; event_id; transfer_id; asset_id; operating time; metered or rated power; utilization; consumer share; feed volume; accepted net volume; dimensions; voids; cure start/end; water; materials; electricity; tests; acceptance; rejects; actual substance/medium releases; pour_id；event_id；transfer_id；asset_id；运行时间；实测或额定功率；利用率；使用者份额；投入体积；验收净体积；尺寸；空洞；养护始末；水；材料；电量；检验；验收；拒收物；实际物质/介质释放; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 核对签署事件记录、校准仪表、供应商单据、实测几何/密度、检验及接收单，区分实测、估算及不存在证据。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | m3; kg; kWh; h; t; km; t*km | 每事件/班次；养护连续记录 | 完整浇筑至养护验收期 | 声明单一场址及节点 | 每参考流 | 签单、校准、几何与检验及质量平衡证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | 所有清单行 | 将归属事件数量除以同组浇筑批次验收净就位体积，按每参考流报告；归一化前保留内部实体转移。 | 归属事件数量; 验收净体积; cp_placement; cp_finishing; cp_curing | 每参考流数量 |  |
| receipt_reconcile | fresh_concrete; returned_fresh_concrete; placement_concrete_waste | 在一致新拌状态基准上平衡接收新拌体积、就位体积、供应商退料、取样、溢洒/泵残留及存量变化；无证据不得新拌体积等同硬化体积。 | 交货单; 实测密度; 转移台账; 退料/废物接收单; cp_placement | 平衡及残差解释 |  |
| placement_fuel_balance | placement_diesel; placement_fossil_co2; placement实际负责的燃料去向 | 逐实际同牌号/来源批次、设备、事件/期间及归属责任范围计算fuel_supply_kg = fuel_opening_kg + fuel_external_receipts_net_kg - fuel_closing_intact_carried_kg。期初期末以同一基准覆盖实际全部保管地点，接收量扣皮。此为实际正记可用退回U及转移X之前的供给，不是已燃烧量。保留来源批次数量及上游引用，固定fuel_stock_adjustment_applied = true；库存负担桥仅对账同一归属，不再次计期初或扣期末。fuel_burned_kg采用经校准的燃烧燃料记录；或仅在操作证据及有证据的完整互斥去向名册支持平衡法时，按fuel_burned_kg = fuel_supply_kg - fuel_usable_return_kg - fuel_usable_transfer_kg - fuel_waste_constituent_kg - fuel_uncontained_constituent_kg确定。若已独立计量燃烧量，则将同一平衡余差与实际登记计量不确定性比较，不将燃烧量静默改写为余差。U/X为具名保管方实际接收的未变质可用退出，不是期末库存。未退回而进入真实废物或未受控退出的燃料仍承担供给负担，并保留自身处理或物质/介质义务。废物燃料kg仅为实际废物载体内实测燃料份额，不超过载体质量；载体交换量对其真实其他组分只计一次。已回收泄漏燃料归废物，仅剩余实际未受控部分归释放；初始泄漏总量仅作非加性事件诊断，不得将废物载体、其中燃料及初始泄漏总量分别当作可加出口。真实正记U/X只携匹配的原燃料上游负担一次，浇筑、清理及返工仍归同组浇筑。提供者已含供给/燃烧及每个共享设备/事件只有一个登记责任人，按原完整消费者方法归属一次。去向或上游覆盖未知、平衡为负或差异未解释均阻断完成，不当作燃烧或零。输出保留原始kg，各交换最后仅按原V归一一次。 已独立计量燃烧量时，定义fuel_fate_residual_kg = fuel_supply_kg - fuel_usable_return_kg - fuel_usable_transfer_kg - fuel_waste_constituent_kg - fuel_uncontained_constituent_kg - fuel_burned_kg。若把燃烧定义为平衡剩余，所得零余差仅是代数恒等式，不是独立燃烧实测或验证；该分支仍须有完整有据的未燃去向及操作覆盖。 | cp_placement; fuel_grade_id; fuel_cohort_id; fuel_asset_id; fuel_period_id; fuel_scope_owner; fuel_provider_inclusion_evidence; fuel_opening_kg; fuel_external_receipts_net_kg; fuel_closing_intact_carried_kg; fuel_usable_return_kg; fuel_usable_transfer_kg; fuel_waste_constituent_kg; fuel_uncontained_constituent_kg; fuel_burned_metered_kg; fuel_burn_method; fuel_fate_roster_complete_evidence; fuel_uncertainty_kg; fuel_raw_event_ids; fuel_stock_cohort_upstream_refs; fuel_carrier_row_event_crosswalk; fuel_sampling_or_factor_basis; fuel_stock_adjustment_applied | 归一化前fuel_supply_kg、fuel_burned_kg和fuel_fate_residual_kg |  |
| mobilization_activity | placement_mobilization_transport | 逐载货路段计算载荷吨数×实际公里，乘记录的使用者份额并加总，再按normalize_service归一化。保留承运方空返覆盖证据，不得以空载质量为零抹去空返负荷。使用车辆服务模型时，记录相容的t*km换算及参数；承运或租赁数据集已含返程/燃料不得重复加入。 | cp_placement; dispatch_id; 载荷吨数; 路线公里; 使用者份额; 承运空返覆盖; 模型及单位换算证据 | 归一化前同组浇筑的归属运输t*km |  |
| fossil_carbon_emission | placement_fossil_co2 | 选择一种有记录的燃烧方法，使用placement_fuel_balance的fuel_burned_kg，不用供应量或库存领用量：m_CO2 = fuel_burned_kg × w_fossil_C × f_oxidized_to_CO2 × 44/12。w_fossil_C为每kg实际已燃燃料中的化石碳kg，f为这些已燃化石碳以CO2排出的比例，两者均不得默认1。或将同一实际已燃质量，或用相符实际燃料低位热值换算的能量，乘以经审查的相容燃烧CO2因子。保留混合组成、因子单位/来源、燃烧范围、适用性及不确定性；方法不相加，完整因子不再乘碳含量/氧化比例。退回、废弃或未受控退出的未燃燃料不作为燃烧CO2，其他真实物质/去向仍为独立义务。先计算同组浇筑原始CO2 kg，再执行normalize_service一次。 | cp_placement; placement_fuel_balance; fuel_burned_kg; 实际已燃燃料化石碳分数及基准; 氧化为CO2比例; 相容燃烧因子值/单位/来源; 使用能量换算时的实际低位热值; 不确定性 | 归一化前同组浇筑的化石CO2 kg |  |
| washout_release_mass | `refine_placement_washout_releases`要求细化的实际交换 | 逐项核实直接释放事件及物质，将单位换算相容后计算释放体积×浓度（例如m3×kg/m3），或液体释放质量×实测kg物质/kg液体分数。保留实际接收子介质、采样及溶解态/总量基准；仅有pH不能确定物质质量。收集/处理/直接释放各部分只平衡一次，再按normalize_service归一化；组成缺失是明确缺口，不是零。 | cp_placement; 释放事件; 体积或液体质量; 浓度及单位; 物质及接收子介质; 采样证据; 收集/处理分流 | 归一化前同组浇筑向实际水或土壤子介质释放的逐物质kg |  |
| shared_share | 所有清单行 | 按记录使用者份额分配共享实测事件数量，全部使用者份额之和为1且事件责任唯一。 | event_id; asset_id; 使用节点/批次; 实测活动; cp_placement; cp_finishing; cp_curing | 归属事件数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| `quality_actual_material_exits` | curing | 养护采集协议必须按真实材料、重复使用状态和去向，分别识别并称量实际移出的养护薄片、湿覆盖物、养护剂残余和包装，同时采集废弃混凝土/试件。可重复使用且仍留存的覆盖物属于库存或资产服务记录；真实向外退回与废物外运分开。仅用水或留模养护不推定存在覆盖物或养护剂。此完整采集义务不是一条选定废物流；实际不同材料须有不同具体交换，不自动取得回收信用。 | cp_curing |
| gate_traceability | 参考产品 | 验收证据须匹配构件、浇筑、规范、养护方式及净体积；未验收数量排除在分母外。 | 签署验收；实测尺寸；检验记录 |
| inventory_completeness | 所有清单行 | 条件存在、不存在证据与缺失标志分开记录；发布数据集前将伞形卡展开为具体交换及物种。 | 采购记录；设备日志；SDS；废物记录 |
| quality_fuel_supply_and_fates | placement; cp_placement; placement_diesel; placement_fossil_co2 | 按placement_fuel_balance记录实际柴油供给及去向。每个真实正记可用退回/转移均需自身同态产品交换；每个真实废物载体均需自身废物交换、接收人和处理责任；实际未受控燃料需独立识别的物质/介质交换。这些是placement责任范围内的条件细化义务，不是假定名册、合并流、将柴油产品UUID当基本流或默认零。各真实交换仅一种原生属性单位，数量独立有据；混合载体中的燃料kg只是非加性组分诊断，不是载体总量。真实身份、数量、覆盖或必需具体卡缺失时阻断前景完成；燃料即使未燃，其上游供应及真实废物处理仍保留。 供应量筛选没有已建立的类别通用数值区间。按同一责任/事件/验收体积基准独立采集可比库存已调供给、已燃活动、实际未用去向及换算/计量不确定性。后续供应区间须依据这些独立可比观测，不能用已燃燃料区间或本批最大值验证供应。 | 牌号/来源批次库存及燃烧记录；真实保管/去向单据；原生身份及载体/组分交叉表；提供者覆盖 |
| time_coverage | 所有过程 | 覆盖完整浇筑及关联养护、检验、清理和返工，包括停机及天气保护负荷；记录排除项及计量校准。 | 批次台账；养护日记；校准证书 |
| provisional_ranges | 所有清单行 | 暂定推理估算范围只是宽泛审查提示，不是默认值或合规限值；用独立审查证据替换，不以同批最大值自证。 | 独立参考数据；不确定性披露 |
| `refine_placement_plant_service` | `placement_plant_service_pump`; `placement_plant_service_vibrator`; `placement_plant_service_washout_facility` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：按声明研究政策纳入泵、振捣与洗浆设施资本或外购服务的条件伞形卡，排除已单记的运行能源。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_placement`; 实际独立记录及身份／单位证据 |
| `refine_placement_other_air_emissions` | `placement_other_air_emissions_carbon_monoxide` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件伞形卡仅纳入有证据的CO、氮氧化物物种、硫物种或颗粒物，不得以通用污染物UUID代表全部物种。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际氮氧化物的化学物种及报告基准、硫物种、互不重叠的颗粒物分组，以及其他实际污染物及接收介质，均须有独立、准确的身份、方法和数量证据；不得猜测 NO／NO2／SO2 名册，也不得把当量报告当作实际化学物种。实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_placement`; 实际独立记录及身份／单位证据 |
| `refine_placement_washout_releases` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件性总括卡，仅用于经核实的浇筑责任范围内溜槽、泵或工具洗浆直接释放。选择具体基本流前，依据事件证据确定每种实际物质、溶解态/颗粒态报告基准及接收水体或土壤子介质。交给责任方处理的收集浆液仍归placement_wash_slurry；浆液总量、pH及处理交接量均不等于污染物质量。不假定普遍排放或普遍不存在。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_placement`; 实际独立记录及身份／单位证据 |
| `refine_finishing_consumables` | `finishing_consumables_abrasive`; `finishing_consumables_mortar`; `finishing_consumables_hardener` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件伞形卡按声明工程包纳入实际磨料、砂浆及硬化剂，不假定配方或强制使用化学硬化剂。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_finishing`; 实际独立记录及身份／单位证据 |
| `refine_finishing_residues` | `finishing_residues_captured_sanding`; `finishing_residues_rejected_mortar`; `finishing_residues_spent_abrasive` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：未收集打磨粉尘须按物质及粒径记录基本空气排放，不能藏入废物质量。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_finishing`; 实际独立记录及身份／单位证据 |
| `refine_finishing_actual_air_releases` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件伞形卡按实际表面修整用品组分及操作展开物种；打磨须记录粉尘物质及粒径，挥发须有实际用品化学信息，不能以通用VOC代替。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_finishing`; 实际独立记录及身份／单位证据 |
| `refine_curing_materials` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件伞形卡不是固定材料，纯水或带模养护不得虚配养护剂。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_curing`; 实际独立记录及身份／单位证据 |
| `refine_curing_actual_releases` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件伞形卡须按物质及空气、水、土壤介质展开；送处理的洗浆水仍是废物，不自动作为直接排放。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_curing`; 实际独立记录及身份／单位证据 |
| `atomic_exchange_identity_unit` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 任何合并分母保留原配置分层、验收状态交付门及实际因果归属，不把不同工单、支管或路线盲目当作等价。 | 实际身份、单位、保管及独立数量证据 |
| `asset_final_normalization_once` | all inventory rows | 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 | 实际身份、单位、保管及独立数量证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| final_acceptance | accepted_concrete_placement_service | 要求1 m3参考定义、准确参考行链接、实际验收几何和指定验收证据，输出保持服务。 |  |
| transfer_pair | placed_concrete_transfer; finishing_concrete_feed; finished_concrete_transfer; curing_concrete_feed | 以transfer_id、状态和实测量配对内部交接，禁止重复上游产品及固定1 m3内部投料。 |  |
| loss_and_waste | 所有过程 | 解释交付与就位差异、保留水及存量变化；各退料、残渣、浆液和拒收物按接收方/状态及返工路径仅平衡一次。 | epa-concrete-washout-2012 |
| validate_placement_fuel_basis | placement责任范围的供给、燃烧及真实未燃退出 | 按placement_fuel_balance核对原始供给、燃烧、库存及全部有证据去向。确认上游投入使用fuel_supply_kg，燃烧方法使用fuel_burned_kg，库存调整及V归一各一次。正记可用退出、废物/处理及真实物质/介质释放均须独立表示并关联真实载体；禁止未知当燃烧、缺去向填零或载体/组分重复。提供者已含负担保持互斥。 |  |
| shared_and_runs | 所有过程 | 检查浇筑/批次/事件id、换批责任、全部共享资产使用者和份额；总量不得重复能源、资本、进退场与清理。 |  |
| washout_release_route | `refine_placement_washout_releases`要求细化的实际交换; placement_wash_slurry | 每项已核实直接释放须有事件物质、接收水/土壤子介质及浓度/数量证据；归属placement及cp_placement，与交给责任方的浆液和养护释放区分。平衡各去向且不重复；组成或发生情况未明确时保留覆盖不完整，不填零。 | epa-concrete-washout-2012 |
| actual_identity | 所有清单行 | 最终数据集交换须有已核实具体流/属性/单位身份，未解析语义卡及通用物种不是可发布交换。 |  |
| `atomization_placement_plant_service_complete` | `placement_plant_service_pump`; `placement_plant_service_vibrator`; `placement_plant_service_washout_facility` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_placement_plant_service`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_placement_other_air_emissions_complete` | `placement_other_air_emissions_carbon_monoxide` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_placement_other_air_emissions`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_placement_washout_releases_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_placement_washout_releases`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_finishing_consumables_complete` | `finishing_consumables_abrasive`; `finishing_consumables_mortar`; `finishing_consumables_hardener` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_finishing_consumables`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_finishing_residues_complete` | `finishing_residues_captured_sanding`; `finishing_residues_rejected_mortar`; `finishing_residues_spent_abrasive` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_finishing_residues`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_finishing_actual_air_releases_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_finishing_actual_air_releases`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_curing_materials_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_curing_materials`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_curing_actual_releases_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_curing_actual_releases`；必要细化尚未解决时阻断数据集。 |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景施工服务数据包及flow/process/lifecyclemodel投影。 |
| downstream_use | 声明建筑工程包模型的secondary_dataset；background_dataset。 |
| allowed_use | 匹配构件、规范、浇筑路线和验收边界并关联上下游工程包。 |
| excluded_use | 未经审查不得用于预拌制造、整栋建筑足迹、寿命功能比较、道路/桥梁/海工混凝土或更广混凝土服务覆盖。 |
| required_metadata | 场址/地域；日期及批次；验收构件几何；混合料/强度/龄期/暴露；表面修整；养护期；设备；供应门；排除责任；资本/运输/废物政策。 |
| required_quality_disclosure | 计量覆盖、缺失事件、估算份额、范围来源、身份缺口、干湿换算及平衡残差。 |
| update_trigger | 混合料、设备、养护/表面修整规范、验收条件、供应边界、计量证据或身份核实实质变化。 |

## 11. 数据源

| 来源（`source_id`） | 类型（`type`） | 参考（`reference`） | 用途（`used_for`） |
| --- | --- | --- | --- |
| ufgs-cast-in-place-2019 | standard | USACE/NAVFAC/AFCEC UFGS 03 30 00, February 2019, Change 10 August 2025; https://www.wbdg.org/FFC/DOD/UFGS/UFGS%2003%2030%2000.pdf | 浇筑、表面修整、养护及现场验收职责；实际项目规范控制，不作为通用消耗因子。 |
| epa-concrete-washout-2012 | official_guidance | US EPA, EPA 833-F-11-006, February 2012; https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 水化说明及洗浆分离、收集与去向责任，不假设回收率。 |
| unsd-cpc21-concrete-services | official_guidance | UNSD CPC 2.1 54540 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/54540 | 仅辅助分类解释，不声称是CPC 3.0解释或定量来源。 |
