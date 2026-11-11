---
pcr_id: pcr.constructions-and-construction-services.construction-services.interior-waterborne-wall-painting-services
language: zh-CN
translation_status: aligned
status: candidate
sync_with: pcr.en-US.md
---

# 室内水性墙面涂装服务

## 1. 范围与适用性

本PCR适用于已安装石膏板或抹灰室内墙面在可接受正常轻微准备的交接状态下，以刷涂或滚涂方式施工水性建筑涂料。包括轻微清洁修补、实际使用的指定底漆、全部实际面漆层、干燥、补涂、工具清洗和同一承包商施工批次的验收。不包括基材制造安装、大面积重新抹灰、危险旧涂层清除、室外工程、喷涂、溶剂型工业涂层、防水、道路标线及未来维护重涂。该服务边界为本PCR制定的建模选择；UFGS支持准备与施工的区分，不规定普适层数。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.interior-waterborne-wall-painting-services |
| classification_refs | cpc:3.0:54730 |
| covered_products | 验收合格的室内刷涂或滚涂水性墙面涂装承包服务 |
| excluded_products | 涂料制造；墙体制造安装；第1节排除的路线 |
| representative_product | 1 m2 验收合格的水性涂料石膏板室内墙面涂装服务 |
| production_route | 按施工批次索引的轻微准备，继而刷涂或滚涂、干燥、清理及验收 |
| market_state | 客户验收时的已完成承包服务，声明涂装系统和基材 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象 (`What`) | 已完成的室内水性墙面涂装服务 |
| 数量 (`How much`) | 1 m2 |
| 质量要求 (`How well`) | 按所声明项目涂装规范验收：基材状态、颜色、饰面、遮盖及指定膜厚或涂层要求；缺陷已闭环 |
| 时间或周期 (`How long or cycle`) | 一个施工批次直至规定干燥和客户验收；不假定使用寿命或未来重涂周期 |
| reference_flow_link | `accepted_painting_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格的室内水性墙面涂装服务 |
| 参考流属性 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 国家和场址；施工批次日期；石膏板或抹灰基材及起始状态；面漆和底漆产品身份；实际层数及各层面积；刷涂或滚涂方式；饰面及验收规范；干燥方式；净面积测量及扣除项；清理去向 |

## 4. 计量与单位规则

| rule_id | 适用于 | 必需属性（`required_property`） | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_area` | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 按经核实尺寸或测量结果取得验收净墙面面积；扣除未涂装洞口，洞口侧壁单独记录。各层面积及返工遍数面积不增加验收净面积。 |
| `wet_supply_mass` | refine_waterborne_finish; waterborne_primer; refine_repair_compounds | Mass | kg | 区分湿态供应产品质量、干膜固体质量和VOC质量。体积转质量须采用同配方同温度基准的实测或供应商产品密度。 |
| `emission_identity` | `refine_finish_air_species`要求细化的实际交换; `refine_prepare_air_particles`要求细化的实际交换 | Mass | kg | 每条排放保留物质或粒径身份及接收介质；总VOC含量及捕集粉尘为支持记录，不自动等同基本流排放。 |
| `transport_work` | refine_contractor_transport | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | 采用Units of mass*length `838aaa21-0117-11db-92e3-0800200c9a66`，参考t*km系数1。按可归属吨数及公里数计算；kg*km除以1000转为t*km。保留实际车辆、载荷及路线，避免重复调动。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已安装石膏板或抹灰室内墙面已交接，可进行轻微准备；基材所有权和先前工程在服务清单之外 |
| starting_condition_role | 既有母体表面状态，不是免费墙材投入或产出 |
| product_classification_scope | CPC 54730 Painting services的较窄服务子集 |
| recursive_input_rule | 同类分包涂装须一次性表示为采购的已核实服务或展开的前景作业，二者不得并计；保留分包边界及面积 |
| upstream_dataset_requirement | 面漆、底漆、修补材料、水、电、耗材及运输投入关联相容的上游数据集；缺失关联须明确披露。不把墙体生产引入服务参考流 |
| disclosure | 报告墙面起始状态、排除的先前工程、供应商数据集运输覆盖、共享资产归属、危害及排除的未来维护 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本PCR适用于已安装石膏板或抹灰室内墙面在可接受正常轻微准备的交接状态下，以刷涂或滚涂方式施工水性建筑涂料。包括轻微清洁修补、实际使用的指定底漆、全部实际面漆层、干燥、补涂、工具清洗和同一承包商施工批次的验收。不包括基材制造安装、大面积重新抹灰、危险旧涂层清除、室外工程、喷涂、溶剂型工业涂层、防水、道路标线及未来维护重涂。该服务边界为本PCR制定的建模选择；UFGS支持准备与施工的区分，不规定普适层数。 |  |
| `service_gate` | all processes | 包括施工批次的轻微准备直至涂装验收、清理和缺陷闭环。已安装基材制造安装在边界之外；复用前记录偏离。 | `ufgs-architectural-coatings-2026` |
| `actual_system` | finish | 记录实际底漆决策、层数、涂料身份、干燥及施工条件；不固定假定两层。 | `ufgs-architectural-coatings-2026` |
| `shared_assets` | prepare; finish | 识别共享作业照明、通风、电力供应及可重复工具，列出prepare与finish消费者和施工时段，每次共享事件指定唯一记录责任方。保留可归属运行及更新负担；披露资本设备处理。 |  |
| `waste_gate` | prepare; finish | 分别追踪残余物及清洗废水交接和处理去向，区分直接释放；清洗及剩余涂料储存遵循所声明场址管理计划。 | `ufgs-architectural-coatings-2026` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepare` | 轻微准备及施工批次调动 | required | 每个验收施工批次 | 准备已安装母体表面；保留房间或批次及共享事件编号 | accepted_painting_service |
| `finish` | 刷涂或滚涂、干燥、清理及验收 | required | 每个验收施工批次 | 交付验收服务；保留实际涂层、返工循环及清洗事件关联 | accepted_painting_service |

生产模式为按房间、颜色和涂装系统划分的施工批次，不是连续工厂生产线。各投入、验收面积、废物、排放、清洗及换色均带施工批次及节点编号。不合格涂层保留在finish节点返工循环内直至验收；所有重复准备和重涂负担归属该批次。取消或未验收面积单独报告，不能成为验收服务产出。废弃材料经产生节点的废物卡退出。

### 过程：轻微准备及调动 (`prepare`)

#### 输入

##### 产品流


###### 单独供应的涂装保护片材 (`protection_consumables_protective_sheet`)

仅记录本项独立识别的“单独供应的涂装保护片材”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的涂装保护片材
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的涂装保护片材”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 准备用水 (`prepare_water`)

计量或核对准备工序的供应水；保留供水来源并区分修补产品自带水。

- 选定流：轻微清洁的供应水
- 流属性/单位：Volume / m3
- 数量规则：依据cp_prepare记录按验收净面积计算实际可归属m3；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_prepare`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：0.02
  - 单位：m3
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)

###### 准备工序用电 (`prepare_electricity`)

记录吸尘等准备设备的电表读数或功率及运行时间；明确电压和电网地理范围。

- 选定流：准备设备实际消耗的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：依据cp_prepare记录按验收净面积计算实际可归属kWh；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_prepare`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)


##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 收集的轻微打磨残余废物 (`prepare_residue_sanding_residue`)

仅记录本项独立识别的“收集的轻微打磨残余废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：收集的轻微打磨残余废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“收集的轻微打磨残余废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 收集的轻微修补碎屑废物 (`prepare_residue_repair_debris`)

仅记录本项独立识别的“收集的轻微修补碎屑废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：收集的轻微修补碎屑废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“收集的轻微修补碎屑废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 收集的准备清洗废水 (`prepare_wastewater`)

发生湿清洁时启用：在prepare节点记录收集体积、组成及处理去向；直接释放须另行明确物质及介质。

- 选定流：实际交接处理的轻微清洁废水
- 流属性/单位：Volume / m3
- 数量规则：依据cp_prepare记录按验收净面积计算实际可归属m3；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_prepare`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：0.02
  - 单位：m3
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)

##### 基本流

### 过程：涂装、干燥、清理及验收 (`finish`)

#### 输入

##### 产品流


###### 指定水性底漆 (`waterborne_primer`)

条件性统括卡：单独记录指定底漆及处理面积；未使用须有涂装系统决策记录，不假定一律为零。

- 选定流：规范要求时实际使用的相容水性墙面底漆
- 流属性/单位：Mass / kg
- 数量规则：依据cp_finish记录按验收净面积计算实际可归属kg；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_finish`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)

###### 施工及清洗用水 (`finish_water`)

区分经批准的稀释水及清洗水；计量或核对采购供应，避免重复计入涂料自带水。

- 选定流：经批准稀释及工具清洗的供应水
- 流属性/单位：Volume / m3
- 数量规则：依据cp_finish记录按验收净面积计算实际可归属m3；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_finish`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：0.05
  - 单位：m3
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)

###### 施工干燥及清理用电 (`finish_electricity`)

仅记录实际使用且可归属的搅拌、作业照明、通风或辅助干燥电力；自然干燥不虚构能源交换。

- 选定流：可归属涂装设备实际消耗的电力
- 流属性/单位：Energy / kWh
- 数量规则：依据cp_finish记录按验收净面积计算实际可归属kWh；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_finish`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：10
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的室内水性墙面涂装服务 (`accepted_painting_service`)

在规定干燥、清理及缺陷处理后验收合格的墙面净涂装面积。输出为承包商服务，不是涂料质量或新制造墙体；无论层数或返工次数，每块物理面积只计一次。

- 选定流：验收合格的室内水性墙面涂装服务
- 流属性/单位：Area / m2
- 数量规则：1 m2
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_finish`

- 数量范围：采集面积归一化恒等式
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：1
  - 上限：1
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：由采集数据计算 (`calculated_from_collection`)

##### 废物流

###### 送往处理的不可用湿水性涂料 (`unusable_wet_paint_waste`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。仅记录真实不可用且发运至接收方的湿配方。可用密封涂料的退回或库存留存不属于此废物。

- 选定流：送往处理的不可用湿水性涂料
- 流属性/单位：Mass / kg
- 数量规则：依据cp_finish记录按验收净面积计算实际可归属kg；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_finish`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)

###### 送往处理的干水性涂层残余物 (`dry_coating_residue_waste`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。采用实际发运的干燥/固化残余及危险状态，不将同一组分再计入湿混合物或污染物品。

- 选定流：送往处理的干水性涂层残余物
- 流属性/单位：Mass / kg
- 数量规则：依据cp_finish记录按验收净面积计算实际可归属kg；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_finish`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)

###### 废弃的涂料污染漆刷 (`spent_paintbrush_waste`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。仅在实际废弃漆刷时适用；可重复使用且留存的漆刷仍属于对应资源/库存记录。保留真实载体、所含残余及处理状态。

- 选定流：废弃的涂料污染漆刷
- 流属性/单位：Mass / kg
- 数量规则：依据cp_finish记录按验收净面积计算实际可归属kg；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_finish`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)

###### 废弃的涂料污染滚筒套 (`spent_roller_sleeve_waste`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。仅记录实际废弃筒套，排除留存手柄/支架及已独立发运的残余物。

- 选定流：废弃的涂料污染滚筒套
- 流属性/单位：Mass / kg
- 数量规则：依据cp_finish记录按验收净面积计算实际可归属kg；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_finish`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)


###### 收集的涂装清洗废水 (`finish_wastewater`)

记录处理交接点体积及污染物基准；区分污水处理投入与直接环境排放，不假定可倒入排水管。

- 选定流：实际送处理的含漆清洗废水
- 流属性/单位：Volume / m3
- 数量规则：依据cp_finish记录按验收净面积计算实际可归属m3；保留全部返工消耗。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_finish`

- 数量范围：暂定宽泛筛选估算；以独立审查证据替代
  - 范围角色：质量校验阈值 (`qa_guardrail`)
  - 下限：0
  - 上限：0.05
  - 单位：m3
  - 基准：每参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：有依据的估计 (`reasoned_estimate`)

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `campaign_attribution` | prepare; finish | 优先按施工批次、房间及节点细分。共享电力按电表或记录的功率时间归属；共享运输按实测载荷距离、重复耗材按记录的使用和更新归属。各时段消费者份额与唯一总量核对；仅对有证据论证的同系统均质批次使用面积分配。 |  |
| `rework_retention` | finish | 失败涂层去除、额外涂料、能源及清理保留于产生批次；最终验收面积仅计一次。降级、回收或废弃须有实际去向，不自动赋予替代产品信用。 |  |
| `no_coproduct` | all processes | 本路线只有一个服务产出。可用涂料退回作为库存修正。不允许将剩漆、废物或既有墙体作为联产品分配。若出现真实独立销售联产品，复用前须另行审查方法。 |  |

## 8. 前景数据采集、计算与质量规则


整饰协议保留对所有实际包装、容器、用过工具和清洁物品按材料、污染/危险状态及接收方完整采集的义务，包括条件废物卡未列名但实际存在的物品。数据完成前每种真实不同废物须具有自身具体交换；不推定通用包装/工具身份或强制报废。可用密封涂料和留存工具仍属于退回/库存或资源记录。湿残余、干残余、载体物品和其中涂料按互斥实物发运基准记录，避免组分重复退出。

### 数据采集协议

| protocol_id | process_id | 流角色（`flow_role`） | 记录类型（`record_type`） | 原始字段（`raw_fields`） | 采集方法（`collection_method`） | 单位（`unit`） | 频率（`frequency`） | 时间覆盖（`temporal_coverage`） | 场址范围（`site_scope`） | 汇总规则（`aggregation_rule`） | 质量证据（`quality_evidence`） |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_prepare` | `prepare` | 准备工序各卡；引用finish节点签认验收面积 | 施工批次台账及验收测量 | campaign; room; event; timestamp; preparation product and batch; stock issued returned opening closing; wet mass; water volume; energy meter or power-time; transport load and distance; cp_finish accepted net area survey reference; preparation/rework tasks; waste and wastewater quantity and destination; particle size/composition medium method and uncertainty; shared asset consumer shares; 施工批次；房间；事件；时间；准备产品及批号；领用退回期初期末库存；湿质量；水体积；电表或功率时间；运输载荷距离；cp_finish验收净面积测量引用；准备及返工作业；废物与废水量及去向；颗粒粒径组成、介质、方法及不确定性；共享资产消费者份额; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 将准备材料、运输、电力、清洗水、收集残余物及颗粒记录与票据、库存及仪表核对。引用cp_finish签认验收面积测量作为分母，不在prepare建立验收产出。每次准备或共享事件仅归属一次。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg; m3; kWh; t*km; m2 | 每次领料、涂层、清洗、共享事件及验收 | 完整施工批次，包括返工及最终清理 | 所声明场址及承包商；仅prepare节点 | 每参考流 | 校准；签认面积测量；供应商密度；可追溯库存及废物记录；批准的归属依据；物种证据及不确定性 |
| `cp_finish` | `finish` | 涂装工序各卡及验收服务产出 | 施工批次台账及验收测量 | campaign; room; event; timestamp; coating and primer product/batch; stock issued returned opening closing; wet mass; volume and density; actual coat count and layer areas; thinning and cleanup water; energy meter or power-time; net area and deductions; accepted rejected reworked area; drying regime; acceptance and defect closure; waste quantity and destination; emission species medium composition method and uncertainty; shared asset consumer shares; 施工批次；房间；事件；时间；面漆底漆产品及批号；领用退回期初期末库存；湿质量；体积及密度；实际层数及各层面积；稀释清洗水；电表或功率时间；净面积及扣除；验收拒收返工面积；干燥方式；验收及缺陷闭环；废物量及去向；排放物种、介质、组成、方法及不确定性；共享资产消费者份额; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 将每次底漆或面漆领用及退库与湿质量或可追溯密度、各层面积、稀释、清理、电力和物种证据核对。干燥及缺陷闭环后测量验收净面积并签认。每次finish或共享事件仅归属一次。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg; m3; kWh; t*km; m2 | 每次领料、涂层、清洗、共享事件及验收 | 完整施工批次，包括返工及最终清理 | 所声明场址及承包商；仅finish节点 | 每参考流 | 校准；签认面积测量；供应商密度；可追溯库存及废物记录；批准的归属依据；物种证据及不确定性 |

逐批应用下列area_normalization及stock_reconciliation规则，保留原始数量、单位及已签署的验收面积记录。

### 计算规则

| rule_id | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | source_ids |
| --- | --- | --- | --- | --- | --- |
| `area_normalization` | 所有清单行 | 验收净面积A_accepted > 0时，对实际节点归属批总量逐项计算Q_i = Q_lot_i / A_accepted × 1 m2，保留原分子单位、原总量及节点归属。验收面积为零时不能形成验收服务数据集。参考输出采用自身cp_finish验收面积记录，归一化为1 m2。 | cp_prepare; cp_finish; 实际节点批总量; 验收净面积 | 每参考流数量 |  |
| `stock_reconciliation` | refine_waterborne_finish; waterborne_primer; refine_repair_compounds; `protection_consumables_protective_sheet` | 核算用量=期初库存+接收量-期末库存-转出本批次账务边界且未计入期末库存的可用退料。可用退料若已计入期末库存，不得再次扣减。将核算用量与单独追踪的实际施涂/消耗材料、废物及其他有记录去向平衡；不得仅凭采购票据确定施涂量。在area_normalization前保留账务边界、原单位及退料归属。 | cp_prepare; cp_finish; 期初库存; 接收量; 期末库存; 互斥可用退料; 施涂/消耗和废物记录 | 归一化前平衡的实际批用量 |  |
| `wet_mass_conversion` | refine_waterborne_finish; waterborne_primer; refine_repair_compounds | 记录的供应体积乘以相容基准的产品特定密度；同时保留原体积及转换湿质量。不允许通用涂料密度。 | supplier density; recorded volume | 湿态产品kg |  |
| `species_emissions` | `refine_finish_air_species`要求细化的实际交换 | 采用实测物种释放量，或以实际施涂产品、涂层保留量、捕集废物及释放比例建立有记录的物种特定物料平衡。一致记录室内释放及室外转移，避免重复释放。EPA描述基于活动及含量的估算，但不为本PCR提供普适物种分配。 | cp_finish; product composition; release evidence | 排向所声明空气介质的物种kg | `epa-eiip-architectural-coating-1995` |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| `quality_actual_material_exits` | finish | 整饰协议保留对所有实际包装、容器、用过工具和清洁物品按材料、污染/危险状态及接收方完整采集的义务，包括条件废物卡未列名但实际存在的物品。数据完成前每种真实不同废物须具有自身具体交换；不推定通用包装/工具身份或强制报废。可用密封涂料和留存工具仍属于退回/库存或资源记录。湿残余、干残余、载体物品和其中涂料按互斥实物发运基准记录，避免组分重复退出。 | cp_finish |
| `coverage` | all processes | 覆盖批次全部投入、库存修正、返工、废物、共享负担及面积；披露缺失记录与截断，不默认为零。 | 已核对节点台账及验收记录 |
| `representativeness` | all inventory rows | 报告场址、国家、日期、涂料配方、墙面起始状态及施工干燥技术；电力地理范围和运输选择须匹配实际供应。 | 项目及供应商记录 |
| `identity_resolution` | all inventory rows | TIDAS交换发布前，统括卡的每条实际交换须解析为已核实具体UUID、属性及单位；保留缺口，不选择方便的宽泛匹配。 | 独立身份核实及支持行 |
| `range_evidence` | all ranges | 暂定估算仅用于筛选，包括条件性未发生时的零值，不替代实测总量。依据独立证据调查异常；不得用待验证批次自身生成校验范围。 | 独立审查比较及不确定性披露 |
| `refine_protection_consumables` | `protection_consumables_protective_sheet` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件性统括卡：逐项建立实际材料交换；可重复使用物品按可归属的实际更新消耗记录，不把每批全部购入量计入。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_prepare`; 实际独立记录及身份／单位证据 |
| `refine_prepare_residue` | `prepare_residue_sanding_residue`; `prepare_residue_repair_debris` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：按组成和去向拆分收集残余物；区分干态固废、空气排放与废水。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_prepare`; 实际独立记录及身份／单位证据 |
| `refine_prepare_air_particles` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件性统括卡：依测量或经论证释放模型确定粒径、组成和室内或室外空气去向，再选择具体基本流；收集粉尘不属于空气排放。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_prepare`; 实际独立记录及身份／单位证据 |
| `refine_finish_air_species` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件性统括卡：须明确物质或物种、施工状态含量基准、释放比例及接收空气区室。法规总VOC含量不代表单一物种流或自动全释放因子；数据集中须明确保留未分物种缺口。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_finish`; 实际独立记录及身份／单位证据 |
| `atomic_exchange_identity_unit` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 任何合并分母均须保留原验收配置分层、状态交付点及因果归属；不得把不等价线路、路线、产品或工单按等价数量盲目相除。 | 实际身份、单位、保管及独立数量证据 |
| `asset_final_normalization_once` | all inventory rows | 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 | 实际身份、单位、保管及独立数量证据 |
| refine_waterborne_finish | finish | 独立确定实际刷涂/滚涂的每项室内建筑墙面水性面漆配方/SKU、供应湿态及提供者交付点。产品或颜色配方实际属于不同流身份时须独立记录，不合为一个涂料身份。逐身份采集湿质量、期初期末完好库存、收货、实际可用退回、溢洒、全部涂层、换料及返工；升转kg时保留实际状态密度。各实际涂料子流使用Mass/kg、原stock_reconciliation及wet_mass_conversion方法，并按原唯一验收净面积只归一化一次。保留来源特定组分和释放去向证据、残余/废物保管及真实干燥验收，不设默认涂层次数、排放份额或面漆配方。 这是强制采集/细化要求，不是带数量的交换。数据集完成前，每项实际独立身份/状态/交付点须有独立卡片、数量、唯一属性/单位及可核验身份依据。发生未知不得记零。不得将原集合总量或Range复制或分摊为子流数量/范围；子流筛选范围须有独立适用证据。缺真实身份、数量、方法或换算即阻断完成；有证据的未发生单独记录。 | cp_finish; 独立身份、库存/活动、保管及换算证据 |
| refine_contractor_transport | prepare | 按运输方式、车辆/载荷范围、提供者、路线和交付点明确每项真实材料或设备货运服务。由实测payload_t乘真实载货distance_km及有证据的本批因果份额，或等价且已核验的承运活动记录，独立确定相容t*km并核对全部消费者。每项实际服务单列为Goods transport (mass*distance)/t*km交换，按验收面积只归一化一次。全批调动及可归属返程由此一次承担，不虚构空驶载荷。真实原生参考不同时须另建匹配属性/单位的交换并提供相容计算依据，不将数值直接改标为t*km。排除采购数据集已含上游供应商运输，核对提供者服务及直接车辆覆盖。 这是强制采集/细化要求，不是带数量的交换。数据集完成前，每项实际独立身份/状态/交付点须有独立卡片、数量、唯一属性/单位及可核验身份依据。发生未知不得记零。不得将原集合总量或Range复制或分摊为子流数量/范围；子流筛选范围须有独立适用证据。缺真实身份、数量、方法或换算即阻断完成；有证据的未发生单独记录。 | cp_prepare; 独立身份、库存/活动、保管及换算证据 |
| refine_repair_compounds | prepare | 对每项实际使用的石膏基或其他相容轻微修补配方，独立明确准确供应身份/SKU、湿态及供应方交付点。替代配方不是同一条流。按配方采集期初库存、净收货、完好期末、真实可用退回、实际安装使用、全部返工及未退回废物/损失。各实际子流固定Mass/kg；按stock_reconciliation归属本批的实际湿供应质量，仅一次除以cp_finish签认验收净面积。仍排除石膏板制造和大面积抹灰。其他实际配方即使未列示例也必须记录，不虚构默认配方或重复采购内含成分。 这是强制采集/细化要求，不是带数量的交换。数据集完成前，每项实际独立身份/状态/交付点须有独立卡片、数量、唯一属性/单位及可核验身份依据。发生未知不得记零。不得将原集合总量或Range复制或分摊为子流数量/范围；子流筛选范围须有独立适用证据。缺真实身份、数量、方法或换算即阻断完成；有证据的未发生单独记录。 | cp_prepare; 独立身份、库存/活动、保管及换算证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_conformance` | accepted_painting_service | 要求实测净面积为正、服务产出属性单位匹配并有签认验收记录；不得计入未解决拒收面积或重复层面积。 |  |
| `campaign_completeness` | prepare; finish | 每次材料、清洗、换色、返工、残余物及排放事件关联唯一施工批次及产生节点。核实共享资产消费者及时段份额之和等于唯一责任事件总量。 |  |
| `coating_quality` | finish | 依据验收证据核实声明的项目要求、实际层数、干燥及缺陷闭环；不得替换为通用规定层数。 | `ufgs-architectural-coatings-2026` |
| `release_and_waste` | `refine_prepare_air_particles`要求细化的实际交换; `refine_finish_air_species`要求细化的实际交换; finish_wastewater | 要求排放物种或粒径及空气介质，并区分捕集废物和废水去向；缺少物种信息表示证据不完整，不是VOC为零。检查物料与水核对，避免排放和处理重复计量。 | `epa-eiip-architectural-coating-1995` |
| `atomization_protection_consumables_complete` | `protection_consumables_protective_sheet` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_protection_consumables`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_prepare_residue_complete` | `prepare_residue_sanding_residue`; `prepare_residue_repair_debris` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_prepare_residue`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_prepare_air_particles_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_prepare_air_particles`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_finish_air_species_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_finish_air_species`；必要细化尚未解决时阻断数据集。 |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 |  |
| atomization_waterborne_finish_complete | finish | 须以独立实际记录完成refine_waterborne_finish，每项身份/状态/交付点仅对应原子流。不得使用集合卡、复制总量或沿用集合Range；缺必要子流、数量、属性/单位或范围证据即阻断完成。保留原库存、归一化、退回、废物及提供者责任规则。 |  |
| atomization_contractor_transport_complete | prepare | 须以独立实际记录完成refine_contractor_transport，每项身份/状态/交付点仅对应原子流。不得使用集合卡、复制总量或沿用集合Range；缺必要子流、数量、属性/单位或范围证据即阻断完成。保留原库存、归一化、退回、废物及提供者责任规则。 |  |
| atomization_repair_compounds_complete | prepare | 须以独立实际记录完成refine_repair_compounds，每项身份/状态/交付点仅对应原子流。不得使用集合卡、复制总量或沿用集合Range；缺必要子流、数量、属性/单位或范围证据即阻断完成。保留原库存、归一化、退回、废物及提供者责任规则。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景承包商涂装服务数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相容已安装墙面的室内刷涂或滚涂水性涂装，采用声明的服务交接点 |
| excluded_use | 涂料产品kg、墙体生产、整栋建筑生命周期、室外或喷涂或特种路线及未单独建模的未来重涂 |
| required_metadata | 全部参考限定信息；施工批次、节点及事件编号；验收净面积；材料、能源、运输、共享资产及废物边界 |
| required_quality_disclosure | 实测与模型数量；未解析身份或物种；暂定范围；归属；上游缺口；资本设备处理；排除工程及不确定性 |
| update_trigger | 涂料配方、墙面起始状态、规范、施工路线、电网、废物路线或实测清单发生实质变化 |

## 11. 数据源

| 来源（`source_id`） | 类型（`type`） | 参考（`reference`） | 用途（`used_for`） |
| --- | --- | --- | --- |
| `ufgs-architectural-coatings-2026` | official_guidance | USACE/NAVFAC/AFCEC UFGS 09 90 00 Architectural Paints and Coatings, August 2026; sections 3.6.2, 3.8, 3.10 and 3.11. https://www.wbdg.org/FFC/DOD/UFGS/UFGS%2009%2090%2000.pdf | 准备、施工、验收及废物管理证据；不作为消耗数值范围或固定服务归一化依据 |
| `epa-eiip-architectural-coating-1995` | method_factor | US EPA EIIP Volume III Chapter 3, Architectural Surface Coating, 11/08/1995, sections 2 and 4. https://www.epa.gov/sites/default/files/2015-08/documents/archsfc.pdf | 施工干燥释放路径及活动含量估算方法；不提供普适物种比例 |
