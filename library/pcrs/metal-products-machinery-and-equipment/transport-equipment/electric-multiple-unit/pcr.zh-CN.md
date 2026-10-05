---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.electric-multiple-unit
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置架空交流电力动车组制造

## 1. 范围与适用性

本制造前景针对一种配置新架空25kV交流客运电力动车组：铝双层中空挤压车体、受控结构搅拌摩擦焊接头、分布式交流牵引、动拖转向架及完整永久客室制动控制装配。历史日立Class385及A-Train原件建立示例结构，不提供通用配方当前实际型号质量工厂清单。声明实际编组车辆顺序；来源三车四车变体为独立配置。现有铝半成品电机轨道材料PCR关注上游坯料组件基础设施，不覆盖完整编组制造集成净验收质量。本工作树manifest扫描未发现现有实质完整动车组记录。柴油双模式蓄电池燃料电池推进钢车体路线有轨电车机车独立无动力客车货运维修车不完整车修理翻新独立供货部件不属本选定方法。排除旅客运输旅客公里运行牵引轨道供电基础设施寿命维护报废。候选自撰方法等待独立科学审查。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.electric-multiple-unit |
| classification_refs | CPC 3.0 49520; 较窄语义候选；无已接受映射 |
| covered_products | 完整配置架空25kV交流铝客运动车组列车组 |
| excluded_products | 机车其他推进车体路线有轨电车货运服务维修车散装无动力车使用修理 |
| representative_product | Class385历史交流双层示例；四车2M2T或独立声明三车变体；以实际验收配置为准 |
| production_route | 坯料加工搅拌摩擦焊；可选精整；走行电气内装集成；编组试验验收 |
| market_state | 声明制造边界新完整验收配置列车组 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整声明客运动车组列车组制造 |
| How much | 1 kg验收净完整设备；一组验收列车具有实际核验M kg |
| How well | 满足实际受控结构接头尺寸制动电气车门控制编组验收计划。保留实际准则检验无损检查试验结果，不设虚构公差法定认证 |
| How long or cycle | 一次制造交付；无航次旅客公里寿命单位 |
| reference_flow_link | `finished_trainset` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铁路或有轨电车用自动客车、行李车和搬运车（维修和服务车辆除外） `139733ac-97af-4ac2-a637-14daa557b398` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 列车组车号有序编组；实际动拖及供货已含范围；轨距交流电压牵引结构；车体合金状态截面批准接头路线；清单图样修订；永久内装制动空调控制配置；实际预充余留液；工厂场址期间试验计划；当前静态轮轴称重方法校准原始读数编组修正；签认正值净M kg；排除人员货物运行水压载包装；上游运输废物链接 |

在数据集元数据或等效注释声明全部限定。公开轨道车辆产品身份比本方法宽，不提供车辆数工程性能。kg制造参考不意味着等旅客运输功能。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electric_energy` | electricity rows | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 在各独立供电接口测量实际能量。1kWh=3.6MJ；按M归一每组MJ。低压厂电及25kV牵引试验分开。 |

## 5. 系统边界

本前景始于证实未连接铝坯料供货成品组件收货，终于完整配置制造验收。包括实际本地切割加工夹具受控搅拌摩擦焊批准其他连接检验可选精整转向架电机电气内装装配返工编组实际工厂试验。本地熔焊若使用须另列实际合金焊材保护气卡；搅拌摩擦焊不普遍消耗二者。批准连接工具台账确定消耗。采购转向架电机变流器车门空调按实际供货边界计量，内部件预充仅一次。采购成品车体改变本地制造路线，须另声明自制外购模型，不能同时计成品车体坯料。实际额外制动管蓄电池地板绝缘粘接安全电子冷却制冷润滑压缩空气加热包装运输须各展开为一项具体交换后方可声明前景完整。上游开采组件制造入厂运输接收废物处理仅由相符独立链接数据集覆盖；无此链接不声明完整摇篮到工厂门。客户运行基础设施维护报废在外。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在厂实际未连接型材板材及独立限定采购部件 |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | 配置完整架空交流铝客运列车组；较窄CPC49520 |
| recursive_input_rule | 实际供货总成仅链接一次；匹配已含范围，不递归重复内部坯料组件 |
| upstream_dataset_requirement | 匹配合金形态状态组件设计属性充注电压供货地区期间接收路线 |
| disclosure | 仅制造前景；披露实际自制外购缺少清单质量交换上游链接 |
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_supply` | purchased assemblies | 记录各收货边界余留充注；从本地前景移除已含组分收货供货工序。实际本地制造分总成展开自身原子坯料工序。 |  |
| `boundary_tests` | acceptance | 纳入实际工厂静态功能及执行通电厂区试验的实测输入回送消耗废物。回送电力为独立实测交换，实际额外接口须具体卡。无运行寿命代理自动再生抵扣。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `body` | 铝车体加工连接 | required | 批准型材切割加工夹具受控搅拌摩擦焊实际附加接头检验 | foreground | same accepted trainset; q_item / M |
| `finish` | 可选本地涂装精整 | conditional | 仅实际文件化本地精整；允许未涂车体 | foreground | same accepted trainset; q_item / M |
| `running` | 转向架牵引电机安装 | required | 安装声明动拖走行部并核对已含电机 | foreground | same accepted trainset; q_item / M |
| `electrical` | 高压牵引低压控制集成 | required | 实际受电弓变压器变流线束驾驶系统电气检查 | foreground | same accepted trainset; q_item / M |
| `outfit` | 制动客室辅助系统装配 | required | 实际完整制动车门窗座椅空调车钩内装配置 | foreground | same accepted trainset; q_item / M |
| `acceptance` | 编组工厂试验净质量验收 | required | 标识每车完整集成实际静态功能及可选通电厂区试验物理净M记录 | final_product | finished_trainset; 1 kg |

### 过程：铝车体加工连接 (`body`)

#### 输入

##### 产品流

###### 铝合金双层中空挤压型材 (`hollow_profile`)

一种实际证实用于双层车体的铝合金中空挤压型材，在厂交付未连接。声明合金状态截面表面供货及实测收货退回边角料；公开一般结构型材身份不提供合金再生比例质量因子。不同坯料等级设计须另列。

- 选定流： 铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 厚度超过0.2毫米铝合金板材 (`aluminium_sheet`)

仅纳入批准车体清单实际本地板制件，证实合金状态厚度超过0.2毫米。称量净领用退回实际余留，不假定板含量。采购成品驾驶室结构替代已含板及供货加工。

- 选定流： 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 成品工具钢搅拌摩擦焊针轴肩工具 (`fsw_tool`)

仅当实际批准焊接工具为本单一工具钢针轴肩设计时采用。按实际焊缝长度工具使用更换回收记录归属实测消耗工具质量或采购工具服务。不虚构寿命钢等级每列一工具。其他工装须独立卡。搅拌摩擦焊不意味着保护气焊丝。

- 选定流： 成品工具钢搅拌摩擦焊针轴肩工具
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力 (`electricity_body`)

用户边界低于1kV实际归属阶段电网电力；采用身份要求相符中国电网平均供电，其他供电地区电压须独立核验流，包括本阶段实际工具驱动待机返工。计量kWh换算MJ，仅凭证实因果记录分配。该低压身份不是列车25kV牵引供电，不代表设备额定值。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 分类洁净铝合金制造边角料 (`aluminium_offcut`)

实际离厂至具名接收方的一种声明合金流分类未涂干燥型材板边角料；称量净外运核对坯料余留内部再用。公开说明包括新制造废料，但同义词也提铸铝污染废料：匹配实际洁净新废料及接收方，不假设再生率。分开湿屑切削液。不扣避免原生金属信用。

- 选定流： 铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 即时空气未分粒级颗粒物 (`body_air_dust`)

仅实际切割加工接头准备在已装抽排控制后观察并定量的剩余大气释放。采用实际运行时间内采样流量浓度及不确定性；滤器内捕集为废物，不是大气释放。选定基本身份要求空气未特指子介质未特指粒级；实测PM2.5或PM10须具体流。不声称搅拌摩擦焊普遍排放。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

### 过程：可选本地涂装精整 (`finish`)

#### 输入

##### 产品流

###### 未固化双组分环氧底漆配方 (`epoxy_primer`)

仅当前批准精整计划实际要求本单一混合环氧底漆配方时采用。称量供货组分领用退回混合量，保留实际树脂固化剂溶剂已含及固化余留。不从A-Train推定整车体必须油漆；历史来源明确描述车体不需油漆。其他精整须独立卡。

- 选定流： 未固化双组分环氧底漆配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 未固化双组分聚氨酯面漆配方 (`polyurethane_topcoat`)

仅实际精整计划采用本一种供货证实混合聚氨酯配方时纳入。记录组分混合质量固体挥发组分施工回收残留，不重复已含溶剂。不能从列车外观照片推定油漆化学用量大气排放。

- 选定流： 未固化双组分聚氨酯面漆配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力 (`electricity_finish`)

用户边界低于1kV实际归属阶段电网电力；采用身份要求相符中国电网平均供电，其他供电地区电压须独立核验流，包括本阶段实际工具驱动待机返工。计量kWh换算MJ，仅凭证实因果记录分配。该低压身份不是列车25kV牵引供电，不代表设备额定值。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 容器收集未固化混合环氧底漆残留 (`epoxy_residue`)

仅可选精整工序实际外运未使用混合环氧底漆残留。称量排除容器的湿残留，保留配方溶剂状态接收方。不是VOC排放聚氨酯残留固化打磨粉尘清洗废水；实际出现另列卡。

- 选定流： 废油漆 `584e3dfa-7bc4-47a1-b77e-d68094d1cc7c`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

### 过程：转向架牵引电机安装 (`running`)

#### 输入

##### 产品流

###### 供货不含牵引电机的动力机械转向架总成 (`powered_bogie`)

一种实际在厂交付轨道转向架设计，记录供货已含轮对悬挂齿轮制动润滑范围。动力卡排除另行收货牵引电机，拖车卡无推进电机。测量每供货净kg及安装件数序号。动力架若带已装电机到货，以完整供货总成替代拆分收货，移除重复电机齿轮制动液。不采用额定转向架kg或动拖质量比。

- 选定流： 转向架总成 `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 供货完整拖车转向架总成 (`trailer_bogie`)

一种实际在厂交付轨道转向架设计，记录供货已含轮对悬挂齿轮制动润滑范围。动力卡排除另行收货牵引电机，拖车卡无推进电机。测量每供货净kg及安装件数序号。动力架若带已装电机到货，以完整供货总成替代拆分收货，移除重复电机齿轮制动液。不采用额定转向架kg或动拖质量比。

- 选定流： 转向架总成 `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 成品铁路交流牵引电机 (`traction_motor`)

实际供货与选定列车驱动设计相符铁路交流牵引电机，称量已装供货净电机质量。件数序号用于追溯。供货内部件仅一次，排除转向架收货已含电机。拒用公开说明专家估计质量份额作为数量来源；采用实际电机kg，不用M百分比。

- 选定流： 牵引电机 `c1704402-e49d-43aa-baef-c84209588243`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 用户端低压交流工厂电力 (`electricity_running`)

用户边界低于1kV实际归属阶段电网电力；采用身份要求相符中国电网平均供电，其他供电地区电压须独立核验流，包括本阶段实际工具驱动待机返工。计量kWh换算MJ，仅凭证实因果记录分配。该低压身份不是列车25kV牵引供电，不代表设备额定值。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

### 过程：高压牵引低压控制集成 (`electrical`)

#### 输入

##### 产品流

###### 完整25 kV交流铁路牵引变压器 (`traction_transformer`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整25 kV交流铁路牵引变压器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整铁路IGBT牵引变流逆变柜 (`traction_converter`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整铁路IGBT牵引变流逆变柜
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整铁路辅助电源变流器 (`auxiliary_converter`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整铁路辅助电源变流器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整铁路架空接触受电弓 (`pantograph`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整铁路架空接触受电弓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 绝缘铜25 kV铁路牵引电缆 (`traction_cable`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 绝缘铜25 kV铁路牵引电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整低压绝缘铜列车控制线束 (`control_harness`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整低压绝缘铜列车控制线束
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 用户端低压交流工厂电力 (`electricity_electrical`)

用户边界低于1kV实际归属阶段电网电力；采用身份要求相符中国电网平均供电，其他供电地区电压须独立核验流，包括本阶段实际工具驱动待机返工。计量kWh换算MJ，仅凭证实因果记录分配。该低压身份不是列车25kV牵引供电，不代表设备额定值。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

### 过程：制动客室辅助系统装配 (`outfit`)

#### 输入

##### 产品流

###### 完整铁路气压制动空气压缩机模块 (`brake_compressor`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整铁路气压制动空气压缩机模块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整电气操纵铁路气压制动控制器 (`brake_controller`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整电气操纵铁路气压制动控制器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整带风挡接口铁路端部自动车钩 (`coupler`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整带风挡接口铁路端部自动车钩
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整外滑旅客车门模块 (`passenger_door`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整外滑旅客车门模块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整固定铁路旅客座椅总成 (`seat`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整固定铁路旅客座椅总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整铁路加热制冷空调模块 (`hvac`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整铁路加热制冷空调模块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整列车驾驶室操纵台 (`cab_control`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 完整列车驾驶室操纵台
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 成品铝制客室内衬板 (`interior_panel`)

一种实际批准供货组件设计完整性，收货安装测量净值。保留供货清单已含硬件电子精整余留工作液充注；件数序号车辆位置用于追溯。采用实际列车自制外购图样验收准则。采购完整模块替代已含组分，本地制造展开具体坯料工序。内衬卡仅实际证实铝板适用，其他材料设计独立卡。不暗示通用铁路认证目录质量。

- 选定流： 成品铝制客室内衬板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整粘接夹层玻璃铁路车窗单元 (`window`)

一种实际供货含框密封的完整车窗单元，实测净kg及独立图样尺寸。公开78005a08为参考属性面积的夹层玻璃板，不是完整带框铁路车窗。不将公开面积改质量或假设kg/m2。若独立建模仅供货玻璃，保留实测m2及独立供货kg配置核对，明确厚度夹层连接卡。

- 选定流： 完整粘接夹层玻璃铁路车窗单元
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 用户端低压交流工厂电力 (`electricity_outfit`)

用户边界低于1kV实际归属阶段电网电力；采用身份要求相符中国电网平均供电，其他供电地区电压须独立核验流，包括本阶段实际工具驱动待机返工。计量kWh换算MJ，仅凭证实因果记录分配。该低压身份不是列车25kV牵引供电，不代表设备额定值。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

### 过程：编组工厂试验净质量验收 (`acceptance`)

#### 输入

##### 产品流

###### 用户端低压交流工厂电力 (`electricity_acceptance`)

用户边界低于1kV实际归属阶段电网电力；采用身份要求相符中国电网平均供电，其他供电地区电压须独立核验流，包括本阶段实际工具驱动待机返工。计量kWh换算MJ，仅凭证实因果记录分配。该低压身份不是列车25kV牵引供电，不代表设备额定值。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

###### 单相25 kV交流铁路牵引试验电力 (`traction_test_energy`)

仅本列车实际通电牵引功能或厂区运行验收试验纳入。在实际25kV边界计量总输入及独立实测回送电力，含表计间实际损耗，独立披露供电转换。采用公开1–35kV能量身份容纳25kV，但要求实际相符中国电网平均用户供电及核验单相牵引接口。转换设备供电链接须匹配实际相及损耗，英国其他地区供电不能默换中国。不扣理论再生比例客户运行。试验采用其他供电接口时以实际接口及相符上游链接替代本具体卡。

- 选定流： 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

###### 实际工厂漏水试验饮用级市政供水 (`test_water`)

以实际采用市政饮用级供水进行喷水漏水试验为条件。分别测量净供水回收kg；体积测量须实际支持密度温度，不用默认值。运行期厕所柜注水不纳入净M。资源取水污染排水为独立交换。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_water`
- 来源：

#### 输出

##### 产品流

###### 验收完整配置架空交流电力动车组 (`finished_trainset`)

一种验收完整配置列车组，包括全部标识动车拖车永久已装走行牵引制动控制客室设备余留工作液仅一次，排除旅客货物运行水试验压载包装。其制造按净M归一1kg。公开宽泛轨道车辆产品身份由明确交流客运列车组配置缩小；排除维修车独立无动力客车机车牵引。

- 选定流： 铁路或有轨电车用自动客车、行李车和搬运车（维修和服务车辆除外） `139733ac-97af-4ac2-a637-14daa557b398`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`
- 来源：

##### 废物流

###### 收集已用喷水漏水试验水 (`test_wastewater`)

仅实际独立收集送往明确技术圈排水处理接收方试验水；保留实际污染物分析温度质量。不分类为自来水地下取水基本淡水排放。实际向自然介质释放须另列物质介质明确卡。

- 选定流： 收集已用喷水漏水试验水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared manufacturing | 分配前按工单设计车辆位置分开并计量各阶段。仅因果关系得到证实时采用实际焊机占用记录加工能量时间涂装间占用实际试验时间。期间平衡保留待机返工拒收。动拖车不同，车辆数kg均非通用驱动。报告总量验收分母分配敏感性，不规定份额。 |  |
| `allocation_recovery` | single waste streams | 独立记录内部坯料再用回收及实测接收方外运，维持一套平衡。实际有价共产品先采用细分因果关系；不可得时披露明确替代分配敏感性。不默用市价分配避免原生铝回收漆理论再生电力信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | finished_trainset | 受控验收质量 | 配置；验收净质量 M；列车组车号顺序；原始静态轮轴载荷；校准；实际状态实测修正；签认M kg；验收数量 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 每组验收列车配置 | 相同实际声明制造报告期间；包括拒收返工 | 声明制造场址标识列车组工单 | 每台验收净质量 | 当前校准物理记录及survey_provenance、net_configuration |
| `cp_stock` | body; finish | specific stocks/chemicals/tools | 净材料领用记录 | 批次配方合金状态；净收货领用退回kg；库存变动；余留边角料；工具使用；验收同配置数量 | 按一种具体坯料化学品工单称量净收货领用退回。独立记录混合组分回收材料；核对实际消耗验收数。按实际使用追踪应归属工具，不用额定寿命。 | kg | 每批工单阶段 | 相同实际声明制造报告期间；包括拒收返工 | 声明制造场址标识列车组工单 | 应归属净材料kg / 同一配置的验收设备数 | 校准秤批安全数据表焊涂计划；库存回收平衡 |
| `cp_parts` | running; electrical; outfit | single supplied component | 已装供货质量记录 | 部件车号序号件数；供货已含；实测供货净kg；余留充注；退回；验收列车组 | 分别独立于整组M测量每供货已装组件净kg。保留供货清单件数序号；扣包装退回，供货工作液仅一次。总成收货替代已含组分。 | kg | 每收货安装配置 | 相同实际声明制造报告期间；包括拒收返工 | 声明制造场址标识列车组工单 | 净已装供货kg / 同一配置的验收设备数 | 原始收货重量皮重清单充注证书车辆位置核对 |
| `cp_energy` | all processes | specific voltage-interface electricity | 表计能量记录 | 接口电压供电；表计读数kWh；总输入回送；时间待机返工；因果分配；验收数 | 读取实际阶段表计试验边界输入回送表。按1kWh=3.6MJ换算实测kWh，接口分开；记录共享驱动总量表计损耗。不由安装额定值再生理论推定用量。 | MJ | 每阶段实际试验 | 相同实际声明制造报告期间；包括拒收返工 | 声明制造场址标识列车组工单 | 应归属实测MJ / 同一配置的验收设备数 | 表校准原始台账电压拓扑分配台账 |
| `cp_water` | acceptance | municipal test water | 试验水记录 | 供水品质；供回kg；若测体积则实际密度温度；试验时间；验收数 | 测量实际试验供水及独立再用排放；仅凭记录条件实际支持密度换算体积质量。 | kg | 每次实际用水试验 | 相同实际声明制造报告期间；包括拒收返工 | 声明制造场址标识列车组工单 | 净供水kg / 同一配置的验收设备数 | 表秤校准供水质量水平衡 |
| `cp_waste` | body; finish; acceptance | single receiver-bound waste | 称量接收外运 | 单一废物组成状态；毛皮净kg；内部再用；接收路线；库存变动；验收数 | 分别称量分类实际废物外运并排除容器；保留状态分析接收记录，核对源过程库存再用。捕集尘漆残留收集试验水区别排放。 | kg | 每外运报告期间 | 相同实际声明制造报告期间；包括拒收返工 | 声明制造场址标识列车组工单 | 净外运废物kg / 同一配置的验收设备数 | 秤皮重接收票据物质平衡 |
| `cp_emission` | body | single residual air release | 采样大气释放 | 物质粒级介质；采样浓度流量时间；控制；检出限；不确定性；验收数 | 按匹配采样实际运行时间定量控制后大气残余；核对收集设备并拒绝默认排放因子。不存在未测低于检出为独立记录状态，不自动零。 | kg | 每源控制路线改变代表期间 | 相同实际声明制造报告期间；包括拒收返工 | 声明制造场址标识列车组工单 | 实际释放kg / 同一配置的验收设备数 | 采样校准实验室报告控制不确定性记录 |
| `cp_configuration` | all processes | complete trainset scope | 竣工验收记录 | 有序编组车号；完整清单；合金接头精整路线；供货已含部件充注；实际试验；交付排除 | 按车辆有序列车组追溯实际受控竣工清单阶段程序偏差试验结果。记录供货自制外购已含及全部质量状态修正。历史规格不替代当前验收记录。 | kg | 每配置验收列车组 | 相同实际声明制造报告期间；包括拒收返工 | 声明制造场址标识列车组工单 | 限定伴随每同配置验收设备 | 签认图样清单路线试验偏差物理状态依据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | order records | 对一种相同配置，按文件化因果记录归属实际期间交换总量至验收成品列车组。由归属交换/验收组数计算q_item，保留返工拒收负担全部中间量。未经文件化加权配置模型不能混合三四車动拖变体。 | cp_stock; cp_parts; cp_energy; cp_mass | q_item |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `survey_provenance` | cp_mass | 受控验收M须源于完整同配置列车组每辆标识车辆当前实际校准静态轨道轮轴称重检验，含原始读数日期零点皮重校准轨道及连接支撑条件不确定性。独立核验轮轴质量读数只求和一次；传感器若报N力，保留实际计量力质量换算及本地校准基准，不假定通用重力值。连续测量须控制载荷再分配配置改变；以完整车辆编组重量及独立供货组件余留平衡证明闭合。动态轴荷限值目录重量无原件皮重标签载重能力任意四轮总数不能替代。2012年Schenck文描述静态轮轮对测量设备，不提供当前记录通用整组协议法律要求。无法建立实际测量平衡时保留科学计量缺口，不声明实测物理完整数据集。 | schenck-weight-2012; cp_mass; cp_parts; cp_configuration |
| `net_configuration` | accepted trainset | M包括每辆验收声明车辆永久安装机械电气内装设备受电弓车钩余留工作润滑冷却制冷充注仅一次。记录实际原始称重状态及同列车组独立实测签认加减修正。排除旅客乘务货物运行水污水临时试验压载临时供电线吊支撑包装。分开供货总成质量已含预充本地补充液，不重复收货质量。独立实测组件质量须核对整组M；车辆数乘目录重无效。 | cp_mass; cp_parts; cp_configuration |
| `quality_coverage` | all exchanges | 当前完整竣工清单合金接头精整程序供货已含确定实际交换。物理完整声明前展开全部额外具体坯料熔焊消耗地板绝缘粘接蓄电池控制安全工作液包装回送试验电运输接收交换。核验材料能量水及排放废物平衡检出限不确定性代表场址期间，保留实际试验返工负担。不设通用产率油漆必需工具寿命电机质量份额液充寿命值。 | cp_configuration; cp_stock; cp_parts; cp_energy; cp_waste; cp_emission |
| `quality_evidence_limits` | external sources | Hitachi2017年Class385第104–106页支持历史交流编组牵引控制内装结构；2020年文章第53页（页眉764–765）支持一般A-Train双层型材搅拌摩擦焊，不要求油漆。这些不是当前生产记录通用精确配方实际质量法规符合。Schenck2012年9月仅历史称重方法依据，不采用其标准声明作为现行要求。缺少当前工厂称重供货记录保留明确科学审查需求。 | hitachi-class385-2017; hitachi-atrain-2020; schenck-weight-2012 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 核验完整有序编组正值物理M kg当前原始cp_mass依据及独立survey_provenance/net_configuration。保留公开参考属性单位供货范围；参考产品等于finished_trainset选定流。不混配置额定重重复预充。 |  |
| `validation_route` | all processes | 核验证实坯料批准夹具接头搅拌摩擦焊记录实际替代连接本地精整条件供货动拖架电机已含高压供电完整编组内装实际试验。核对每阶段收货余留返工外运及试验输入回送；缺少交换链接阻止完整边界声明。 |  |
| `validation_identity` | all flow rows | 核验产品物质类型实际referenceToReferenceFlowProperty属性单位组电压路线浓度状态介质官方双语名实际供货边界。工业机器人驱动10/0.4kV变压器不是铁路牵引模块；35–330kV不是25kV。玻璃面积电缆长度不能改质量；合法实测换算要求实际物理记录。捕集尘废水不是基本空气水资源。未解决身份按准确row_id登记。 |  |
| `validation_claims` | dataset claims | PCR机械通过不是科学批准实测工厂完整铁路法律型式批准旅客容量等同性寿命验证。更广数据集声明前要求实际配置清单原始重量供货试验相符链接并披露全部余缺口。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置铝架空交流客运动车组制造前景；标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实际净M放大相同完整配置编组制造，披露独立相符上游供货运输接收链接 |
| excluded_use | 旅客公里运行牵引基础设施其他推进车体路线部件修理维护寿命报废方法学批准 |
| required_metadata | 完整有序编组车号清单接头搅拌摩擦焊精整路线牵引电压供货边界实际交付组件充注场址期间试验计划原始校准静态轮轴重量实测状态修正验收正值M独立组件平衡分配相符链接 |
| required_quality_disclosure | 身份配置清单测量链接缺口；来源年代适用性；返工拒收内部回收外运；不确定性检出限分配敏感性 |
| update_trigger | 编组车体材料接头精整电机转向架牵引内装供货已含静态称重交付状态制造场址期间实际试验能量接口改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| hitachi-class385-2017 | handbook | Hitachi, Development of Class385 Semi-customised/Standard Commuter Rolling Stock for Global Markets, Hitachi Review Vol66 No2(2017), printed pp.104–106, physical PDFpp.3–5. https://www.hitachi.com/content/dam/hitachi/global/en/insights/media/hitachihyoron/2017/r2017_02/18-24_R1-02.pdf | 历史25kV交流三四车铝双层结构动拖牵引气压制动线束客室装配。不采用目录重电机比例运行因子当前服务声明。 |
| hitachi-atrain-2020 | handbook | Hitachi, Hitachi’s Globe-spanning Railway Business and its Development Strategy, Hitachi Review Vol69 No6(2020), printed header764–765/article p.53, physical PDFp.3, section3.1. https://www.hitachi.com/content/dam/hitachi/global/en/insights/media/hitachihyoron/2020/r2020_06/06a01.pdf | 历史一般A-Train双层中空铝型材搅拌摩擦焊制造路线；车体油漆非普遍必要。不提供通用当前工厂清单生命周期减排因子。 |
| schenck-weight-2012 | handbook | Schenck Process, MULTIRAIL WheelLoad: Measure wheel contact forces safely, Darmstadt September10 2012, retained Qlar publisher article, static/dynamic measurement paragraphs. https://www.qlar.com/press-and-media/press-releases/multirail-wheelload-measure-wheel-contact-forces-safely | 历史铁路制造静态轮轮对接触力测量设备示例。不是实际列车组M通用整组协议现行标准强制校准值法律符合。 |
