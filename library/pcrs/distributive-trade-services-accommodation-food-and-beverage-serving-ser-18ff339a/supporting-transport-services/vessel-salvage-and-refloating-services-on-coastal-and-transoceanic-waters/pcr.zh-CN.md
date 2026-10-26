---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.vessel-salvage-and-refloating-services-on-coastal-and-transoceanic-waters
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 沿海及远洋船舶打捞与起浮

## 1. 范围与适用性

适用于沿海远洋水域实际明确的船舶货物打捞或起浮任务：回收遇险沉没船舶货物、起吊沉船、扶正倾覆船舶或搁浅复浮。任务必须具有指定物理目标及验收完成接口，不是通用运输或拖带事件。[来源：`un-cpc3-67531`]

排除独立拖带、常规运输、内河打捞（67532）、普通拆船报废、独立合同维修仓储，以及公共救生艇海上搜救消防警务服务。指定打捞任务内必需移位或拖轮支持作为实际支持过程投入只计一次，不使独立拖带成为本PCR参考服务。

根据有记录任务选择实际勘察动员、泵送排水、起吊浮力支持、潜水切割、稳定及交接作业，不假定任何一种必需。本PCR规定清单核算，不是打捞操作程序或起吊潜水设计。客户回收船货不是新制造产出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.vessel-salvage-and-refloating-services-on-coastal-and-transoceanic-waters |
| classification_refs | CPC 3.0 67531; narrower |
| covered_products | 具有验收物理结果的实际海上船货打捞沉船起吊扶正及复浮 |
| excluded_products | 独立拖带；内河打捞；常规运输；公共搜救消防警务；普通报废及后续维修仓储 |
| representative_product | 一个实现明确船货回收或复浮目标的验收任务 |
| production_route | 记录事故基线目标→实际动员救助→核实物理完成及保管交接；保留可归属撤场 |
| market_state | 面向明确船货及事故状态的验收专业海上救助服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实现指定物理海上打捞复浮目标 |
| How much | 一个针对明确船货规模及既定初末物理状态的验收任务 |
| How well | 实际约定回收稳定保管及污染控制验收标准，具有独立证据；付款本身不是完成 |
| How long or cycle | 从指定动员至验收回收交接的完整实际任务，含天气等待失败尝试及可归属撤场 |
| reference_flow_link | `salvage_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 海上船舶打捞任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 事故任务编号；船货规模组成；受损沉没倾覆搁浅状态；精确沿海远洋地点及水深；海床天气潮汐水流；目标验收标准；实际泵吊浮力潜水切割配置；团队运行等待期间；动员/撤场路线；失败尝试；物理完成保管接口；初始污染存量及增量释放；回收财产废物去向；承包边界；资产利用量及电源 |

item是已核实Item(s)的单数别名，计量一个完成的明确打捞任务，不是新生产船舶、吨钢、费用、拖轮小时拖带距离或避免泄漏。不同事故目标船货规模及工况分别建模，不设默认换算或平均打捞因子。失败任务不得标成成功以创造分母。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `accepted_salvage_task` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 按固定目标规模计一个cp_task验收物理回收复浮结果。泵吊潜水及支持移位为阶段，不是独立完整打捞产出。 |
| `pollution_baseline` | benzene; oily_water; spent_sorbent | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分开事故初始污染存量回收处理材料及救助增量释放。泵送回收质量不自动成为新增排放或避免影响。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 任务开始时明确事故船货及有记录初始地点状态污染存量 |
| starting_condition_role | foreground_start |
| product_classification_scope | 沿海远洋物理打捞复浮子集，排除独立拖带 |
| recursive_input_rule | 分包救助潜水拖轮支持按供应商范围实际活动进入；不本地重复其燃料气体人员资产 |
| upstream_dataset_requirement | 实际能源气体材料供应、打捞装备船艇制造报废、供应支持及污染废物处理 |
| disclosure | 目标状态完成；实际救助路线；天气等待失败规模；基线及增量污染；保管废物；资产支持服务边界 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_recovery` | 纳入截至验收交接实际必需动员勘察救助支持移位控污及可归属撤场；分开独立拖带公共救援及后续维修报废。 | un-cpc3-67531 |
| `boundary_environment` | 记录实际控污措施及监测环境状况。对环保的认可或报酬不是避免影响数值系数；反事实效益主张需独立有证据情景。 | imo-salvage-environment |
| `boundary_energy` | 跟踪各实际工作支持发动机燃料及运行待机阶段；岸电另有供应边界。不将岸电视为零生命周期负担，也不重计发电与燃料。 | epa-harbor-craft |
| `boundary_atomic` | 纳入实际装备制造报废份额，分别筛查各具体气体燃料呼吸混合物维修材料沉积物货物废物流释放物质及生境扰动。不强加标准打捞技术体积资产质量寿命。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| salvage | 动员实际打捞及交接验收任务 | required | 实际事故目标配置及条件行 | foreground_production | 每参考流 |

### 过程：动员实际打捞及交接验收任务 (`salvage`)

#### 输入

##### 产品流

###### 船用轻柴油 (`marine_gasoil`)

打捞工作船浮吊水泵发动机实际消耗船用轻柴油；记录各发动机阶段及燃料规格。不得重复采购支持船服务已含燃料。

- 选定流：船用轻柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 柴油 (`diesel`)

适用于实际单独供油岸上移动发电或设备；区分燃料批次及船用轻柴油核算。

- 选定流：柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 低压交流电 (`electricity`)

实际向集结及作业准备场地、水泵或工具供应该电压的电网电力时适用；记录地区和电压。船上发电为内部电，不得重复其燃料排放及供应。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 压缩氧气 (`oxygen`)

适用于实际采用此具体气体的切割潜水支持；分开记录气瓶领退及角色，不规定操作或配气方案。

- 选定流：压缩氧气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 乙炔 (`acetylene`)

适用于实际乙炔切割；与氧气及其他切割耗材分开列行计量。

- 选定流：乙炔
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 压缩呼吸空气 (`breathing_air`)

适用于实际采用此气体的潜水支持；保留认证组成及实际领退。其他呼吸混合物各需精确身份，不自动等同空气。

- 选定流：压缩呼吸空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 钢制起吊索具 (`steel_sling`)

指定索具实际制造更换份额，明确配置及有凭据重用寿命使用量；不设每任务新索具或默认起吊能力。

- 选定流：钢制起吊索具
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 液压润滑油 (`hydraulic_oil`)

打捞设备实际液压补充更换；区分补充回收排出及泄漏油。

- 选定流：液压润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 聚丙烯吸油垫 (`sorbent`)

适用于实际控油垫使用；分开记录干垫质量、吸附物及去向。不由购买吸油垫推断避免污染。

- 选定流：聚丙烯吸油垫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 海上打捞工作船 (`workboat`)

实际工作船制造报废份额，按有依据利用量并明确配置组件范围；不是客户遇险船。

- 选定流：海上打捞工作船
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 浮式打捞起重机 (`floating_crane`)

适用于实际浮吊；记录装备及有依据寿命利用量，不虚构起吊质量或标准任务需求。

- 选定流：浮式打捞起重机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 打捞排水泵 (`pump`)

适用于实际泵送；制造报废与记录燃料电力及实测流体处理量分开。

- 选定流：打捞排水泵
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 充气打捞起浮袋 (`lifting_bag`)

适用于实际起浮袋；声明类型使用及制造份额。所需气体另行计量，不默认袋容积或浮力计算。

- 选定流：充气打捞起浮袋
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 商业打捞潜水支持服务 (`diving_service`)

适用于采购专业潜水；记录团队配置、实际服务小时及供应商装备能源边界。不重计供应商已含气体资产。

- 选定流：商业打捞潜水支持服务
- 流属性/单位：时间 / h
- 数量规则：每参考流的可归属实测交换量；cp_services。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：

###### 打捞支持拖轮协助服务 (`tug_support`)

适用于采购的指定打捞任务必需拖轮支持；实际范围小时只计一次。此投入不确立独立拖带服务的分类或方法。

- 选定流：打捞支持拖轮协助服务
- 流属性/单位：时间 / h
- 数量规则：每参考流的可归属实测交换量；cp_services。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：

#### 输出

##### 产品流

###### 海上船舶打捞任务 (`salvage_output`)

一个具有验收物理打捞目标及保管接口的任务。回收客户船体货物披露规模去向，不自动计新产品或废料抵扣。

- 选定流：海上船舶打捞任务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_task`
- 来源：

##### 废物流

###### 含油打捞排水废水 (`oily_water`)

实际收集送往处理的污染流体；记录水油组成、事故初始存量、救助增量释放及去向。泵送体积本身不是环境排放。

- 选定流：含油打捞排水废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 含油聚丙烯吸油垫 (`spent_sorbent`)

实际废弃垫及所含污染物，记录组成处理；区分垫干质量与回收油以核对平衡。

- 选定流：含油聚丙烯吸油垫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 非合金钢切割废料 (`steel_scrap`)

适用于打捞实际废弃非合金钢切割废料；其他合金货物流各需单行。客户回收船体货物仍是财产转移，不自动成为回收产出或负负担。

- 选定流：非合金钢切割废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废液压油 (`waste_oil`)

实际分类收集排出维护油；区分事故燃油设备泄漏及供应商已含处置。

- 选定流：废液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`fossil_co2`)

实际救助运营方燃料燃烧，采用实测碳平衡或有来源适用发动机燃料因子；不将既有事故排放赋给本行。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 二氧化氮，排入空气 (`nitrogen_dioxide`)

适用于实际打捞发动机实测建模二氧化氮；总氮氧化物须有物种分配证据后方可采用此身份。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 苯，排入海水 (`benzene`)

适用于实测救助增量导致的苯释放，记录因果归属时间及海洋介质。事故初始泄漏另记，不成为默认救助新增排放或避免排放抵扣。

- 选定流：苯，排入海水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_pollution。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pollution`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_tasks` | 优先直接计量实际任务发动机工具气体领用及服务。共用车船动员待机须有实际任务时间负荷路线归属，保留天气等待失败尝试及必要支持。 |  |
| `allocation_assets` | 实际船浮吊泵袋索具制造报废按有凭据利用量除以有依据寿命使用量分配，累计不超过一个寿命。核对供应商已含及完整资产组件负担。 |  |
| `allocation_casualty` | 分开原事故损害既有污染清单与新增救助活动释放。实际可归属回收污染流体处理只计一次，不把全部收集污染改称新增释放。 |  |
| `allocation_property` | 客户回收船货不自动是服务生产共产品。记录所有权转移回收质量废物身份及实际下游路线；不默认废钢回收避免替换或避免泄漏抵扣。 |  |
| `allocation_completion` | 将不成功作业保留于指定验收任务。完全失败作业没有验收成功分母，须另报实际活动结果，不能虚构完成回收或删除负担。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | salvage | salvage_output | casualty_task_record | 事故任务；船货；初始状态地点污染；水深；天气潮汐水流；目标；路线；团队；活动等待重试；完成交接 | 按目标完成证据核对任务计划实际班次装备保管记录；记录成功部分回收失败，不由费用推断。 | item | 每任务班次及验收 | 完整动员至交接撤场范围 | 仅明确海上事故 | 每参考流 | 实际日志；测量；验收保管 |
| cp_energy | salvage | marine_gasoil; diesel; electricity | energy_record | 燃料仪表；发动机工具；批次规格；库存；阶段小时负荷；路线；电力地区电压；供应商已含范围 | 计量实际任务燃料电网供电并核对库存，区分内部发电。纳入待机重试及实际撤场。 | 各行单位 | 每班次任务及供应期间 | 与任务同范围 | 实际运营方能源 | 每参考流 | 仪表；燃料台账；发动机日志 |
| cp_materials | salvage | oxygen; acetylene; breathing_air; steel_sling; hydraulic_oil; sorbent | material_record | 具体气体材料；组成认证；气瓶库存领退；质量；重用；任务角色；供应商边界 | 称量实际领退并保留供应商组成。区分纯气体具体混合物及配方产品，记录重用分配。 | kg | 每领用班次 | 同任务期间 | 实际救助路线 | 每参考流 | 气瓶库存记录；证书；重用 |
| cp_assets | salvage | workboat; floating_crane; pump; lifting_bag | asset_record | 资产型号；配置；制造范围；实际使用；有依据寿命使用量；既往份额；更换报废；分包重叠 | 采用实际资产利用量台账及有证据寿命分母；核对整船装备清单及单列零件。 | item | 资产事件任务期间 | 资产寿命及任务使用 | 打捞装备而非客户财产 | 每参考流 | 台账；寿命证据；使用记录 |
| cp_services | salvage | diving_service; tug_support | supplier_service_record | 供应方；角色；团队船配置；实际小时；作业范围；能源气体资产废物所含；任务接口 | 将实际承包活动与供应商原始清单匹配；小时本身不是排放因子。移除供应商范围内重复自有车船行。 | h | 每合同班次任务 | 同任务期间 | 打捞内必需支持 | 每参考流 | 工单；供应商清单边界 |
| cp_waste | salvage | oily_water; spent_sorbent; steel_scrap; waste_oil | waste_record | 具体流；湿干质量；水油材料组成；事故或运营来源；处理；去向；保管 | 计量分类回收清理维护流并核对转移联单组成；不假定回收财产是废物或抵扣。 | kg | 每收集转移 | 同任务期间 | 可归属任务管理 | 每参考流 | 称量；实验库存；联单 |
| cp_emissions | salvage | fossil_co2; nitrogen_dioxide | emission_record | 物种；发动机燃料；技术；阶段活动；测试模型；因子来源；控制；介质 | 采用救助源实测物种或有来源适用发动机燃料方法及实际活动；氮氧化物不自动成为二氧化氮。上游供应分开。 | kg | 测试及班次任务活动 | 同任务期间 | 实际打捞源 | 每参考流 | 测试方法；燃料活动记录 |
| cp_pollution | salvage | benzene | pollution_baseline_record | 物质；初始存量浓度；监测时间位置；回收处理量；增量释放；因果证据；介质 | 对照有记录事故基线实测物质特定存量转移释放。保留归属不确定性；不由采购处理能力推断释放或避免释放。 | kg | 基线任务监测及交接 | 任务前基线及实际任务 | 明确事故海洋介质 | 每参考流 | 基线测量；实验数据；转移平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_task_inventory` | 所有清单行 | 按有记录供应共用任务分配，汇总验收指定任务的实际可归属动员运行等待重试废物管理撤场交换。不除以回收废料质量或金钱报酬。 | cp_task; 实际任务采集协议 | 每参考流 |  |
| `calc_asset_share` | workboat; floating_crane; pump; lifting_bag; steel_sling | 将有依据实际利用与寿命利用份额用于制造报废清单，核对累计份额及供应重叠，再归属cp_task。寿命不确定性须保持明确，不得用默认质量或默认寿命代替。 | cp_assets; cp_materials; cp_task | 每参考流资产份额 |  |
| `calc_pollution_transfer` | benzene; oily_water; spent_sorbent | 核对初始污染存量及实际任务新增与回收处理转移剩余存量和实测增量释放。分开水垫及物质质量；不明差额是不确定性，不是自动避免污染。 | cp_pollution; cp_waste; cp_task | 每参考流物质或管理流质量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_objective | salvage_output | 要求初始事故状态及验收物理目标明确船货规模实际完成。报酬或支持拖轮小时不能确立打捞成功。 | cp_task |
| dq_route | 所有清单行 | 匹配实际海况水深团队配置阶段记录；不采用典型打捞强度或虚构装备质量。 | cp_task; cp_assets |
| dq_pollution | benzene; oily_water; spent_sorbent | 按实验因果证据分开既有事故存量任务管理转移及增量释放。不确定性保留披露，不默认零值或抵扣。 | cp_pollution; cp_waste |
| dq_identity | 所有清单行 | 采用前核实精确原子流属性单位及正式中文名；未解决UUID逐项保留，不成为合并集合或宣称可发布的理由。 | 直读支持及未解决登记 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_salvage` | 要求唯一salvage_output为1item，关联实际验收船货回收起吊扶正复浮目标。拒绝独立拖带内河任务及公共搜救消防警务作为此参考。 | un-cpc3-67531 |
| `validate_boundary` | 核对失败尝试待机支持服务及供应已含负担；客户原财产不是新制造产出。分开后续维修仓储报废。 |  |
| `validate_emissions` | 审查各排放物及污染管理流基线归属实际处理资产寿命份额。收集油不得同时计新增泄漏及避免泄漏；披露全部身份上游归属缺口。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | marine_salvage_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明事故管理情景中明确实际物理海上打捞复浮任务 |
| excluded_use | 独立拖带因子；内河打捞；公共救援；客户整船制造；自动避免污染或回收废钢抵扣 |
| required_metadata | 全部参考限定；实际任务阶段结果；保管财产废物去向；污染基线；承包资产范围；上游身份 |
| required_quality_disclosure | 事故目标特定性；部分失败规模；水污染归属；支持重叠；资产寿命分母；缺失UUID上游生境证据 |
| update_trigger | 事故状态救助目标规模海况实际技术支持配置污染基线承包范围或寿命证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-67531 | official_guidance | UNSD CPC Version3.0 subclass67531 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67531 | 物理船货打捞起吊扶正复浮及公共服务排除；本PCR仅适用所声明物理救助子集 |
| imo-salvage-environment | official_guidance | IMO, International Convention on Salvage overview, environmental-damage and compensation context. https://www.imo.org/en/about/conventions/pages/international-convention-on-salvage.aspx | 海洋环保背景；不作为避免排放数值因子报酬公式或完整LCA方法 |
| epa-harbor-craft | official_guidance | US EPA, Harbor Craft Best Practices to Improve Air Quality, Use Shore Power and operational context. https://www.epa.gov/ports-initiative/harbor-craft-hc-best-practices-improve-air-quality | 实际作业船能源及独立地区岸电供应；美国港口背景，不采用远洋排放因子或默认节约 |
