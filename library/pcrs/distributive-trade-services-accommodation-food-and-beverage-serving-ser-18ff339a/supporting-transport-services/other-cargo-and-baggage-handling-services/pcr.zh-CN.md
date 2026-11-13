---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-cargo-and-baggage-handling-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 其他货物和行李装卸服务

## 1. 范围与适用性

适用于货运站、港口、机场、公交或铁路客运站内指定的非集装箱货物或旅客行李装卸转移。包括完成该转移所需的装载、卸载及场站内搬运。CPC说明涵盖货运站装卸及行李处理，但不将被处理货物视为生产产出。[来源：`un-cpc3-67190`]

每个数据集仅建模一种明确的货物或行李类别、场站、方向、转移路线及验收终点。散杂货、干散货、液体散货与旅客行李属于不同情景，不允许采用共同平均影响或默认件数转质量系数。行李同时记录验收件数和实际处理净总质量。装卸路线或货物状态变化时另建具有独立记录的情景。

排除集装箱装卸（67110）、独立仓储（672）、场站转移之外的运输、船舶航行及靠泊、单独销售的场站基础设施运营、旅客运输、单独销售的安检及货物制造和使用。完成指定转移必需的临时待运按实际时长纳入；合同仓储另计。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-cargo-and-baggage-handling-services |
| classification_refs | CPC 3.0 67190 |
| covered_products | 非集装箱货物及行李装卸转移，包括场站装卸；各服务情景分开建模 |
| excluded_products | 集装箱装卸；独立仓储；干线货运；货物制造；旅客运输 |
| representative_product | 对实测净质量1,000千克非集装箱货物或行李完成一次场站装卸转移 |
| production_route | 接收及识别→实际装卸及附带待运→完成保管责任交接 |
| market_state | 具有明确货类和已验收交接的合同装卸服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完成一种同质非集装箱货物或行李情景的指定场站转移 |
| How much | 净处理质量1,000千克完成一次指定接收到交接的转移 |
| How well | 实际合同验收、货物完整性及已记录的起终接口；不虚构破损容限 |
| How long or cycle | 一次完整转移，包括可归属排队、怠速和实际待运时间 |
| reference_flow_link | `handled_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 非集装箱终端装卸转移服务 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场站及期间；货物或行李类别；包装状态及净质量定义；起终接口；装卸方向；转移路线及距离；设备；温控；实际待运时长；毛重及皮重称量或可追溯行李质量记录；合同验收；破损及拒收处理；分包边界；电力地区及电压 |

千克表示服务活动处理的净质量，不是货物材料产出、所有权转移、吨公里、仓储质量时间或行李件数。1,000千克参考量仅按单位定义等于一吨。没有实际称重证据不得把行李件数或吊装次数换算为质量；接收和交付不能各计一次产出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `handling_mass` | 参考产品 | 质量 | kg | 通过cp_activity对完成边界转移的验收净质量计量一次。扣除皮重并避免重复搬运重计；失败作业的可归属投入仍纳入。 |
| `service_separation` | 参考产品 | 质量 | kg | 行李、散杂货及散货情景分开。相同千克不意味着功能或影响相同；保留装卸路线及设备限定信息。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别货物或行李在指定场站接口被接收；既有运输及货物生产保留为上游背景 |
| starting_condition_role | foreground_start |
| product_classification_scope | 仅非集装箱装卸服务，不是货物质量生产 |
| recursive_input_rule | 分包装卸作为具有独立可证边界的上游服务，不再在本地重计其燃料、电力及资产 |
| upstream_dataset_requirement | 为公用工程、耗材、设备制造、基础设施及废物处理提供上游数据集；直接排放只计一次 |
| disclosure | 货物或行李情景、保管责任接口、待运时长、分包划分、资产寿命及活动分母、上游缺项 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_transfer` | 纳入可归属验收转移的实际接收核验、场站装卸、必要待运、重试、怠速能耗、清洗及维护；排除独立合同运输和仓储。 | un-cpc3-67190 |
| `boundary_assets` | 纳入实际使用设备及设施具有依据的生产与报废份额。缺少寿命记录时须披露并做敏感性分析，不得默认为零负担。 |  |
| `boundary_extra` | 筛查并将实际每种燃料、制冷剂、化学品、货物特定扬尘物种、维护零件及废物流各列为独立原子交换；路线条件不能豁免相关交换缺项。不得将货物内含负担重新赋为服务产出。 |  |

## 6. 过程清单结构

按实际路线选择：散杂货起重机或叉车装卸、散货专用转移设备，或行李输送带及人工装载。实际类型不同则添加具体设备行。人工路线可能无燃料，但仍需筛查支持作业及资产。温控装卸需分别列实际冷却电力及每种泄漏制冷剂；购入冷却不得与现场制冷重复。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| handling | 接收、装卸并交接非集装箱货物或行李 | required | 实际情景及各行适用条件 | foreground_production | 每参考流 |

### 过程：接收、装卸及交接 (`handling`)

#### 输入

##### 产品流

###### 低压交流电 (`electricity`)

用于电驱动、输送带、照明及可归属控制设备；记录供电地区、电压和供应商。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 柴油 (`diesel`)

仅在实际使用柴油装卸设备或应急发电时适用；称量燃料或结合实测体积与同期密度，不套用通用密度。

- 选定流：柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 液化石油气 (`lpg`)

仅适用于液化石油气叉车；称量气瓶使用前后质量并排除无关任务。

- 选定流：液化石油气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 液压润滑油 (`hydraulic_oil`)

记录指定装卸设备实际补充及更换的油量；区分补充、库存、废油及损失。

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

###### 自来水 (`water`)

适用于可归属清洗或抑尘；采集计量水量并区分雨水及无关生活用水。

- 选定流：自来水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 聚酯吊装带 (`sling`)

仅适用于实际使用此种吊装耗材；记录组成、领用及退回质量和有凭据的重复使用分配。

- 选定流：聚酯吊装带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 平衡重式叉车 (`forklift`)

仅适用于实际使用叉车；记录生产负担份额，明确动力型式、型号及全寿命利用率分母。

- 选定流：平衡重式叉车
- 流属性/单位：件数 / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 移动式货物起重机 (`crane`)

仅适用于非集装箱货物实际使用移动起重机；固定起重机应在数据集中采用另一独立身份。

- 选定流：移动式货物起重机
- 流属性/单位：件数 / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 行李带式输送机 (`conveyor`)

仅适用于实际采用输送机处理行李；根据有凭据的使用寿命分配制造负担，不假定带长或功率。

- 选定流：行李带式输送机
- 流属性/单位：件数 / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 预拌混凝土 (`concrete`)

适用于可归属场坪或建筑资产；明确等级及实际施工数量，并按有依据的服务寿命活动量分配。

- 选定流：预拌混凝土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

#### 输出

##### 产品流

###### 非集装箱终端装卸转移服务 (`handled_output`)

指定净处理质量的已验收完成转移；失败作业及内部重复搬运不增加产出。

- 选定流：非集装箱终端装卸转移服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1000 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_activity`
- 来源：`un-cpc3-67190`

##### 废物流

###### 废液压油 (`waste_oil`)

适用于分类收集的排出油；明确污染状况及实际合规处理路线，不自动给出回收抵扣。

- 选定流：废液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：

###### 废弃聚酯吊装带 (`waste_sling`)

适用于实际废弃吊装带；此固体流应与废油及客户受损货物分开。

- 选定流：废弃聚酯吊装带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：

###### 设备清洗废水 (`wastewater`)

适用于收集后送往处理的废水；记录数量、污染物及去向，蒸发水不作为废水。

- 选定流：设备清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`fossil_co2`)

适用于现场化石燃料燃烧；采用实测排放或有组成及氧化证据且注明来源的碳平衡；排除燃料供应中已计入的上游燃烧。

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

适用于实测或专门建模的二氧化氮；没有受支持的物种分配方法，不得将氮氧化物总量改称此物种。

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

###### 粒径小于2.5微米的颗粒物，排入空气 (`pm25`)

适用于设备或货物扬尘的实测或有依据的PM2.5；明确来源并避免与更宽粒径总量重叠。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_meter` | 优先采用任务分表及作业记录。确有共用设备时采用任务实测电力或燃料；采用运行时间与负荷代理时须有校准及不确定性。仅存在因果关联时，支持照明按有证据的占用面积时间分配。 |  |
| `allocation_mass` | 仅在相同货类及路线内允许有依据的处理质量分配。保留装卸次数、怠速、失败及拒收记录；不得将行李与散货平均，也不得由费用推算质量。 |  |
| `allocation_assets` | 每项资产制造及报废负担按记录的服务利用量除以有依据的全寿命利用量分母分配。记录期间份额并确保累计归属不超过一个资产寿命；不得每参考转移消耗整台起重机。避免重复计入供应商已含资产负担。 |  |
| `allocation_custody` | 货物仍为客户货物，不是共产品。记录破损、泄漏及可归属处理，不将全部处理货物的制造重新计入服务参考。任何增量替换情景须另行声明，不采用默认替代或回收抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_activity | handling | handled_output | weighing_record | 任务编号；货类；毛重；皮重；验收净质量；起点；终点；行李件数；拒收；重复搬运 | 采用校准秤及交接票据；行李保留实际批次质量及件数，核对接收和交接编号。 | kg | 每次转移 | 同一声明观测期间 | 指定场站路线及货类情景 | 每参考流 | 校准；票据；质量核对 |
| cp_utilities | handling | electricity; diesel; lpg; water | meter_record | 行编号；表计起值；表计终值；任务；时间；单位；负荷；库存变动 | 任务计量、燃料领退称量并核对库存；分开各公用工程及怠速。 | 各行单位 | 每任务及核对期间 | 与cp_activity同期间 | 自有装卸设备及支持作业 | 每参考流 | 仪表校准；账单；库存平衡 |
| cp_materials | handling | hydraulic_oil; sling | issue_return_record | 具体材料；组成；领用；退回；库存；重复使用次数；任务 | 称量具体领用及退回材料，记录重复使用归属和维护作业。 | kg | 每次维护或任务 | 与cp_activity同期间 | 仅指定设备 | 每参考流 | 领用票据；维护记录 |
| cp_assets | handling | forklift; crane; conveyor; concrete | asset_record | 资产编号；配置；制造数量；寿命利用量；实际利用量；已分配份额；报废 | 资产台账、施工清单及小时计；核实寿命分母及供应商负担边界。 | 各行单位 | 资产更新及报告期间 | 寿命及同期间任务利用量 | 实际使用设施及设备 | 每参考流 | 资产台账；利用量台账；分母证据 |
| cp_wastes | handling | waste_oil; waste_sling; wastewater | waste_transfer_record | 行编号；质量；组成；污染状况；处理；去向；日期；任务份额 | 分类称量并核对转移联单及实际处理；拒收或受损货物流单独保留。 | kg | 每次转移及期间 | 与cp_activity同期间 | 可归属装卸废物 | 每参考流 | 称重票据；处理联单 |
| cp_emissions | handling | fossil_co2; nitrogen_dioxide; pm25 | emission_record | 物种；来源；环境介质；发动机编号；燃料；运行小时；测试；方法；因子来源；捕集 | 实测排放或采用明确引用来源且设备特定的模型及实测活动；记录实际小时及负荷，本规则不采用默认因子。 | kg | 测试及匹配活动期间 | 与cp_activity同期间 | 仅现场源 | 每参考流 | 测试报告；模型版本；活动记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_activity` | handled_output | 验收净质量为毛重减有证据的皮重，每次完成转移计量一次。期间可归属交换量除以按1,000千克验收质量计的参考流数量；所有卡片采用相同参考。 | cp_activity；任务记录 | 每参考流 |  |
| `calc_assets` | forklift; crane; conveyor; concrete | 按allocation_assets将有凭据的制造数量乘以实际利用量与寿命利用量份额，再按相同参考基准分摊期间份额。寿命或利用量无依据时保留为需审查的不确定性。 | cp_assets; cp_activity | 每参考流资产份额 |  |
| `calc_emissions` | fossil_co2; nitrogen_dioxide; pm25 | 采用实测物种质量或有可追溯来源、匹配活动量及控制效率的模型；保留各物种和介质。须记录因子选择、单位及换算，不得直接将氮氧化物变为二氧化氮或质量变为影响值。 | cp_emissions; cp_activity | 每参考流物种质量 | epa-che |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_mass | handled_output | 核对净质量、验收任务及重复搬运；不采用默认行李质量。仅服务名称或价格不足。 | cp_activity |
| dq_routes | 所有清单行 | 各仪表、任务、废物及排放数据采用相同场站、期间及情景基准，纳入可归属怠速及失败作业。 | cp_activity; cp_utilities |
| dq_assets | forklift; crane; conveyor; concrete | 记录寿命分母、期间边界、已分配份额及敏感性；不虚构寿命、设备质量或自动零值。 | cp_assets |
| dq_identity | 所有清单行 | 使用前对照天工直读核实精确流、属性、单位及语言；身份未解决不能成为合并交换或宣称完整验证的理由。 | 直读记录及缺口披露 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_reference` | 要求1000千克验收净装卸活动及唯一handled_output产品行。拒绝以集装箱货运、吨公里、通用服务次数或仓储质量时间代替。 | un-cpc3-67190 |
| `validate_separation` | 不得将旅客行李、散货及散杂货混为一个平均值。核实路线限定信息、实测行李质量、起终接口及交接一次计量核对。 |  |
| `validate_completeness` | 逐项检查实际公用工程、材料、设备、维护项目、排放物种和废物；核实上游及分包边界并避免重复。披露全部缺失UUID、因子及资产分母；不得仅凭检查宣称完整生命周期或方法批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | handling_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为具有匹配路线及质量基准的明确货运或行李链的非集装箱装卸投入 |
| excluded_use | 通用货物行李平均；完整货运或货物足迹；碳中和或分类批准 |
| required_metadata | 全部参考限定信息；实际期间；情景；保管接口；上游数据集；分配；分包边界 |
| required_quality_disclosure | 身份缺口；活动不确定性；发动机方法及因子；资产分母；缺失上游负担；拒收破损货物及情景限制 |
| update_trigger | 货类情景、场站路线、设备、能源供应、合同交接、排放方法或有依据资产寿命改变 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-67190 | official_guidance | UNSD, Explanatory Notes of the Central Product Classification, Version 3, 10 February 2025, subclass 67190. https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | 非集装箱货物及旅客行李分类范围；不提供清单因子或功能等价关系 |
| epa-che | official_guidance | US EPA, Cargo Handling Equipment (CHE) Best Practices to Improve Air Quality, CHE at Ports; Tips on Performance Targets and Data Collection. https://www.epa.gov/ports-initiative/cargo-handling-equipment-che-best-practices-improve-air-quality | 设备多样性及实际设备运行小时记录；美国港口背景，不作为数值默认值或全球完整LCA标准 |
