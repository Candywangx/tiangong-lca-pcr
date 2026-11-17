---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-steam-hot-water-and-air-conditioning-supply-through-mains-on-own-account
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 自营闭式区域热水供热分配服务

## 1. 范围与适用性

本方法仅核算声明的自营纯水供热管网前景交换。一条流为一个明确计量对象及一种主属性单位；交付完整泵、明确保温管或已表征废物载体可各为一流。原产品、服务交界及已验收1 MJ参考不变。清单包含实际管网运行、供应管网资产及实际现场安装维护交换；供应方制造交付链及场外接收处理内部属于背景。历史UUID证据仅用于精确交流电使用点角色，未绑定身份仍为完成条件。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-steam-hot-water-and-air-conditioning-supply-through-mains-on-own-account |
| classification_refs | CPC 3.0 69220；候选方法；更窄语义分类关系另行审查 |
| covered_products | 自营闭式液态水供热分配，采用未投药外购除盐补水，保留明确交付管网资产及实际现场作业投入 |
| excluded_products | 蒸汽；冷冻水；冷空气；乙二醇或化学投药；热生产；售水；收费或合同分配 |
| representative_product | 已识别用户供回水交界处的 1 MJ 已验收热水供热分配服务 |
| production_route | 热源交界换热、保温闭式供回水干管、循环泵送、用户交界换热及验收 |
| market_state | 按合同声明交付温压及回水条件的能量周转服务；不是热量商品供应 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 自营热水供热分配服务 |
| How much | 用户交界处 1 MJ 已验收有效供热能量 |
| How well | 合同特定的成对供回水温度、压力、水质、仪表有效性及验收；全部声明，不设默认值 |
| How long or cycle | 一个声明的完整报告批次，涵盖供热、待机及已对账期初期末热量与水库存 |
| reference_flow_link | heat_distribution_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明用户交界处已验收热水供热能量的自营分配服务 |
| 参考流属性 | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` |
| 参考单位组 | 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` |
| 参考单位 | MJ |
| 必需限定信息 | 运营方与区段; 热源和用户交界及表号; 未投药水介质路线; 热源商品边界; 供回水实测状态及验收条件; 报告批次与库存; 辅助负荷划分; 前景资产及现场作业边界; 拒收和损失及物理接收去向; 不确定性与未解决身份状态 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_energy | 参考产品 | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 1 MJ 基准为已验收用户有效热量周转量，不是水质量、燃料热值或热源热投入。依据 heat_meter 测得 Q；全部交换采用每参考流，采集总量仅除以 Q 一次。 |
| mass_energy_separation | 所有清单行 | 能量与质量 | MJ; kg | 载体水 kg 与热量 MJ 是不同数量。采用成对交界质量与焓记录得到热量，采用状态匹配密度将体积换为质量，按 asset_service 对指定交付资产归属，并采用 3.6 MJ/kWh 换算电力。无量纲计数不得代替时间或物理活动。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 热生产后在热源至管网成对供回水热表处供热，识别热源技术、状态及上游热数据集 |
| starting_condition_role | 热量上游商品边界；消费者依据热源贡献台账另加有效热源商品，本服务计入已核实热源损失及拒收份额 |
| product_classification_scope | CPC 69220 中更窄的水介质路线，不构成已接受的整个叶节点 mapping |
| recursive_input_rule | 不得递归采购本管网服务；抵销内部转移并要求上游热数据集止于声明管网之前 |
| upstream_dataset_requirement | 声明热源交界的增量热商品；使用点电力；交付除盐水；具明确验收规格和交界的交付设备材料背景；废物背景仅从实际交接处另行连接且不得与现场交换重叠 |
| disclosure | 运行及资产材料验收交界、现场作业、所有权、期间、供应涵盖范围、单一主属性单位、库存和热来源结转、拒收损失、实际废物交接及首环境界面、证据缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | 所有清单行 | 仅适用于通过声明的闭式供回水干管网络自营分配未投药液态水供热、且保留指定交付管网资产投入的情形。排除蒸汽、冷冻水、冷空气、投药或乙二醇管网、热生产及 CPC 86340 收费或合同分配；这些路线不得按每 MJ 视为等价。 | `un-cpc-69220` |
| `boundary_gates` | distribution_network | 起点为热生产之后热源至管网交界处成对供回水热表，终点为运营方与用户交界处成对供回水换热热表及合同验收交界处。纳入运营方管道、泵、控制、换热站、损失、补水及排水；排除该交界之后的用户内部采暖。采集前记录所有者、地域、站点、表位、配置和期间。 |  |
| `commodity_complement` | replacement_heat; heat_distribution_service | 本分配专用服务的消费模型必须另加 Q_source_accepted / Q MJ 有效热源商品，且按区间及原始库存来源使用相应上游数据集；它不必等于 1 MJ，因为已核算电热也可贡献有效交付。本服务仅纳入 Q_source_extra / Q 的额外热源商品及全部辅助电力。不得与已包含同一管网或损失补偿的到户供热数据集叠加。合并时抵销内部区段转移，不得递归采购本服务。 | |
| `foreground_scope` | 所有清单行 | 前景始于供应资产材料验收及热源至管网成对热表交界，包含自有水回路运行及实际现场安装维护，止于用户验收、实际环境释放或签署废物退回交接。供应方制造、采矿、上游交付运输、支持车辆道路工具资本及场外接收处理属于背景；本清单不含成对接收入口或假定交接后释放。存在实际现场处理时，完整数据前须明确过程及实际交换，不得从场外接收方推断。 |  |
| `contract_overlap` | 所有清单行 | 在验收交界保留少量具体交付管道设备及独立供应现场材料。记录一种主数量单位、精确规格、所含安装驱动传感器初装流体及验收数量。供应已含部件、电力、水、交付或维护时不得再次采购该交换；超出供应交界且独立计量现场作业只纳入一次。不采用通用生命周期服务，不将完整采购对象拆成组分或供应过程。此处明确干式设备及单独供应初装水；实际湿式交付偏离须在使用前对账所含水量。 |  |
| `waste_fate` | drained_water; site_work; water_to_soil; water_to_freshwater | 废物载体清单止于实际记录的现场交接，数量仅限归属原责任批次的实际交接量；已产生未交接质量仅保留实测现场库存核查，不作交接交换；场外处理试剂能耗排放不是前景。完整载体仅记一次，组成及残余热量为元数据，不在交接处再释放其所含组分或热。直接释放按实际首次运营方至环境界面分物质介质，逐份额土壤淡水去向互斥。后续环境迁移或接收方排放不是另一管网释放。交接身份或实际路线未知阻止完整前景证据，不得因此虚构接收过程。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| distribution_network | 闭式区域热水管网运行 | required | 声明的未投药纯水运行及验收交界 | 分配专用服务 | heat_distribution_service |
| site_work | 前景交付资产及现场安装维护 | required | 保留实际交付资产；各现场任务以发生或经检查缺席为条件 | 交付投入、现场资源及实际废物交接和释放 | heat_distribution_service |

### 过程：闭式区域热水管网运行 (`distribution_network`)

#### 输入

##### 产品流

###### 增量热量商品 (`replacement_heat`)

本服务负荷边界仅纳入不可逆拒收交付和管网损失所需的额外热量商品。验收有效热量是另行采购的商品，不是本服务交换。

- 选定流: 在声明的热源至管网交界处供应的拒收交付和管网损失补偿热量
- 流属性/单位: 能量 / MJ
- 数量规则: Q_source_extra / Q MJ；归属于不可逆拒收交付及损失的热源热量份额，包含结转热源负荷；排除已验收有效热源热量及期末库存。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_heat`
- 来源: `oiml-heat-meters-2002`

###### 泵送与控制用电 (`aux_electricity`)

在声明管网内，循环泵、控制、计量及运营方换热站使用点的电力。另行记录供电组合与电压。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值, 低位热值 / kWh
- 数量规则: E_attributed / Q kWh；因果归属及排除供应交界或阶段重复后的实测泵送与控制电力。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_energy`
- 来源:

###### 补充水 (`makeup_water`)

依据声明批次台账从运行补充库存中消耗的未投药外购除盐水供应。实际交接、工作介质初始充水及剩余库存分别计量；初始充水供应纳入资产提供。它是产品输入，不是直接环境取水。

- 选定流: 用于闭式管网补水的外购除盐水
- 流属性/单位: 质量 / kg
- 数量规则: m_makeup_attributed / Q kg；按已声明批次先进先出核算，本期实际退出运行库存的补充水，采用原供应方负荷；初始充水和未退出库存不得重复计入。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_water`
- 来源:

#### 输出

##### 产品流

###### 参考分配服务 (`heat_distribution_service`)

以跨越声明用户侧供回水换热计量对、已验收交付的有效热量计量的服务。循环水仍是载热介质；本服务既不是热生产，也不是售水。

- 选定流: 声明用户交界处已验收热水供热能量的自营分配服务
- 流属性/单位: 净热值, 低位热值 / MJ
- 数量规则: 1 MJ
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_heat`
- 来源: `oiml-heat-meters-2002`

##### 废物流

###### 送处理排水 (`drained_water`)

在管网排水至声明处理接收方的交界处称量或计量的一股液体废物。记录全部载体质量和化学组成；前景止于已记录废物交接，不纳入接收处理内部。

- 选定流: 送交有资质废水处理的热水管网排水
- 流属性/单位: 质量 / kg
- 数量规则: m_drain_handover_attributed / Q kg; 仅原责任批次的实际签署交接量，未交接库存和原始产生量另作核查。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_water`
- 来源:

##### 基本流

###### 泄漏至土壤的水 (`water_to_soil`)

实际泄漏至土壤的水组分；它不是环境资源输入，也不是送处理废水。存在溶解物质时必须另设对应基本流卡。

- 选定流: 管网释放至土壤的液态水
- 流属性/单位: 质量 / kg
- 数量规则: m_water_soil / Q kg；到达土壤的水组分；按组成及去向对泄漏溶液总量分割一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_water`
- 来源:

###### 泄漏至淡水的水 (`water_to_freshwater`)

实际进入明确淡水接收水体的水组分，与下水道排水及土壤泄漏分别记录。仅在调查证据支持时认定某去向未发生。

- 选定流: 管网释放至淡水的液态水
- 流属性/单位: 质量 / kg
- 数量规则: m_water_freshwater / Q kg；到达已识别淡水水体的水组分，与送处理排水分开。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_water`
- 来源:

###### 排向空气的废热 (`heat_to_air`)

裸露设备或拒收用户能量向空气传递的不可逆热量；识别物理接收介质及来源事件。本热传递不隐含燃烧排放。归一化前对互斥事件台账执行 heat_fates。

- 选定流: 热水管网排放至空气的废热
- 流属性/单位: 能量 / MJ
- 数量规则: Q_air / Q MJ；实测向空气的非载体传热，包含一次归属的水外电耗散，不列规范基准下的载体焓输出。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_heat`
- 来源:

###### 排向土壤的废热 (`heat_to_soil`)

埋地管道表面传热，加上按 carrier_release_heat 相对于未受扰动接收土壤温度计算的直接泄漏液态水超额热负荷。每个事件仅记录一次，并与水质量及 heat_balance 使用的载体焓分开。

- 选定流: 热水管网排放至土壤的废热
- 流属性/单位: 能量 / MJ
- 数量规则: Q_soil / Q MJ；实测非载体传热加上相对于接收环境的超额热负荷，不得使用载体总焓。管道传热与泄漏水事件不得重叠。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_heat`
- 来源:

###### 排向淡水的废热 (`heat_to_freshwater`)

按 carrier_release_heat，相对于实测未受扰动接收水体状态计算随泄漏液态水直接进入指定淡水水体的超额热负荷。该负荷不是水的规范基准总焓，也不预测瞬时混合温度。废物携带能量仍作为交接元数据，不列直接管网释放。

- 选定流: 热水管网排放至淡水的废热
- 流属性/单位: 能量 / MJ
- 数量规则: Q_freshwater / Q MJ；采用相对于实测接收环境的超额热负荷，不得使用规范基准下的载体总焓。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_heat`
- 来源:

### 过程：前景交付资产及现场安装维护 (`site_work`)

#### 输入

##### 产品流

###### 指定规格预保温区域热水管段 (`asset_insulated_pipe`)

实际交付管段包含载水管、工厂保温、护套及已声明报警线；记录内径壁厚、保温护套规格和交付验收。优选交换数量仅为已验收轴向长度，不是组分质量之和，也不重复计安装沟槽长度。供应方制造及至声明现场交界的交付属于背景。

- 选定流: 指定规格预保温区域热水管段
- 流属性/单位: 长度 / m
- 数量规则: asset_insulated_pipe_attributed / Q m; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_assets`
- 来源:

###### 指定型号完整电动循环泵单元 (`asset_circulation_pump`)

按签署现场验收计一台干式交付泵，含已识别电机及声明底座或驱动配置。记录型号、水力工况、电机额定值、所含驱动和序列号；排除另行采购控制单元及初装水。不得把电机钢铜或供应方工厂资源再次列为前景投入。

- 选定流: 指定型号完整电动循环泵单元
- 流属性/单位: 计数 / item
- 数量规则: asset_circulation_pump_attributed / Q item; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_assets`
- 来源:

###### 指定型号完整热水换热器单元 (`asset_heat_exchanger`)

一台干式交付换热器，明确板式或管式配置、负荷、压力及验收；不含工作水。已含支承不得又计混凝土或钢材卡；独立采购基础另记。

- 选定流: 指定型号完整热水换热器单元
- 流属性/单位: 计数 / item
- 数量规则: asset_heat_exchanger_attributed / Q item; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_assets`
- 来源:

###### 指定型号完整区域供热隔离阀单元 (`asset_isolation_valve`)

按现场交接记录一台型号、口径、压力及执行器涵盖范围明确的阀；不是未定义管件集合，不重复采购已含于供应泵或换热器的阀。

- 选定流: 指定型号完整区域供热隔离阀单元
- 流属性/单位: 计数 / item
- 数量规则: asset_isolation_valve_attributed / Q item; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_assets`
- 来源:

###### 指定型号管网泵控制柜 (`asset_control_unit`)

一台按型号、电气结构及序列身份验收的完整柜；仅计独立采购控制柜，不得重复计另一单元已含驱动或控制。

- 选定流: 指定型号管网泵控制柜
- 流属性/单位: 计数 / item
- 数量规则: asset_control_unit_attributed / Q item; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_assets`
- 来源:

###### 指定规格配对供回水热计量仪表对 (`asset_heat_meter_pair`)

按一套校准及验收规格验收的一对匹配计量对象，含已识别流量传感器、配对温度传感器及计算器；按仪表对计数，不再逐传感器重复计数。记录量程、配对、软件或物性方法及校准有效期。

- 选定流: 指定规格配对供回水热计量仪表对
- 流属性/单位: 计数 / item
- 数量规则: asset_heat_meter_pair_attributed / Q item; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_assets`
- 来源:

###### 指定规格干式管网膨胀罐单元 (`asset_expansion_vessel`)

一台按压力、容积、内衬及验收定义的干式交付罐，不含初始工作水供应。实际独立压力气体充填跨前景交界时须有精确独立交换。

- 选定流: 指定规格干式管网膨胀罐单元
- 流属性/单位: 计数 / item
- 数量规则: asset_expansion_vessel_attributed / Q item; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_assets`
- 来源:

###### 投运初始充水用外购除盐水 (`initial_fill_water`)

实测供应投运水因所有保留设备均按干式交付而构成独立实物投入。实际初装水量仅按原管网资产份额及 asset_service 最终原服务群更正归属一次；保持批次身份、实际注水状态及与运行补水的先进先出区分。实际设备合同已含水时，须依交接证据从本独立采购中扣除已含质量，不得假定。

- 选定流: 投运初始充水用外购除盐水
- 流属性/单位: 质量 / kg
- 数量规则: initial_fill_water_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_assets`
- 来源:

###### 指定等级基础预拌混凝土 (`site_concrete`)

实际现场交付的独立采购混凝土，不含钢筋；配方及供应方生产属于背景，不重复设备已含底座。

- 选定流: 指定等级基础预拌混凝土
- 流属性/单位: 质量 / kg
- 数量规则: site_concrete_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_work`
- 来源:

###### 指定规格钢筋产品 (`site_rebar`)

实际现场交界独立采购钢筋；不含交付设备或钢筋预制品内部已有钢。

- 选定流: 指定规格钢筋产品
- 流属性/单位: 质量 / kg
- 数量规则: site_rebar_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_work`
- 来源:

###### 指定规格碎石沟槽垫层 (`site_bedding`)

实际独立交付施工现场的垫层；不含道路供应方资本或采购混凝土沥青内的碎石。

- 选定流: 指定规格碎石沟槽垫层
- 流属性/单位: 质量 / kg
- 数量规则: site_bedding_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_work`
- 来源:

###### 指定配合比沥青恢复混合料 (`site_asphalt`)

实际现场交界单独供应的道路恢复混合料；按一种已指定完整混合料质量计量，不拆配料。

- 选定流: 指定配合比沥青恢复混合料
- 流属性/单位: 质量 / kg
- 数量规则: site_asphalt_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_work`
- 来源:

###### 交流电 (`site_electricity`)

仅设备交付交界后实际现场安装、隔离清洗和修理作业独立分表的外部电网电力。排除 aux_electricity 已计运行泵控制电力及供应方已含安装用电。现场自发自用电力为内部备查：抵销该电力，实际现场燃料和排放保留一次，不得用无关外送抵扣电网输入。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值, 低位热值 / kWh
- 数量规则: site_electricity_attributed / Q kWh; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_work`
- 来源:

###### 指定规格现场施工修理机械柴油 (`site_diesel`)

以日志证明实际现场机械或发电机使用为条件：称量燃料领用并修正油箱库存和退回，记录组成、生物来源比例，体积读数换算时采用状态匹配密度。这是现场任务燃料，不是管网热源交界热生产或供应方交付及长途运输。按任务机械日志确认发生或缺席。

- 选定流: 指定规格现场施工修理机械柴油
- 流属性/单位: 质量 / kg
- 数量规则: site_diesel_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_work`
- 来源:

###### 隔离设备清洗及水压测试供应水 (`site_cleaning_water`)

以实际发生为条件，计量重新接入前隔离作业的完整供应水质量，与 initial_fill_water 及 makeup_water 分开。记录活动、水质、库存及后续废水交接。清洗化学品不得进入未投药运行回路；实际独立采购化学品须在完整前另设精确卡。

- 选定流: 隔离设备清洗及水压测试供应水
- 流属性/单位: 质量 / kg
- 数量规则: site_cleaning_water_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_work`
- 来源:

###### 指定牌号矿物润滑油 (`site_lubricating_oil`)

按库存及退回修正的实际独立领用现场泵轴承或齿轮油，按已定义完整产品质量计量。设备验收时已含工厂充油不得再采购。本油不进入运行载热水。

- 选定流: 指定牌号矿物润滑油
- 流属性/单位: 质量 / kg
- 数量规则: site_lubricating_oil_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_work`
- 来源:

###### 指定配方润滑脂 (`site_grease`)

实际独立采购现场维护润滑脂按一种配方质量计量，不进入载热水。不得又采购油或增稠剂组分，也不得重复供应方已含润滑。

- 选定流: 指定配方润滑脂
- 流属性/单位: 质量 / kg
- 数量规则: site_grease_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_work`
- 来源:

#### 输出

##### 废物流

###### 组成已记录的拆除保温管段 (`site_removed_pipe`)

在签署现场至接收方交接处实测的一种废物载体；管、泡沫及护套组分为组成元数据，未实际分离时不得另计废物质量。供应方及接收方加工不在前景内。

- 选定流: 组成已记录的拆除保温管段
- 流属性/单位: 质量 / kg
- 数量规则: site_removed_pipe_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_waste`
- 来源:

###### 已排空拆除循环泵单元 (`site_removed_pump`)

称量完整拆除泵，排出流体交接另记；金属绝缘组合可作为一种已指定废物载体。验收可再用泵属于退回产品，不自动作为废物；独立保留交接状态，不得两者并计。

- 选定流: 已排空拆除循环泵单元
- 流属性/单位: 质量 / kg
- 数量规则: site_removed_pump_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_waste`
- 来源:

###### 残余内容已记录的拆除管网控制柜 (`site_removed_control`)

一种现场交接称量控制柜废物，记录型号、残余电池流体及接收方。不得假设铅、酸、铜分离物流或接收方排放；实际独立拆出的内容须另设具体卡。

- 选定流: 残余内容已记录的拆除管网控制柜
- 流属性/单位: 质量 / kg
- 数量规则: site_removed_control_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_waste`
- 来源:

###### 现场废矿物润滑油 (`site_spent_oil`)

实际在明确交界移交的完整废油载体；测量组成、库存和接收方。交接前不得又将其所含物质作为直接排放。

- 选定流: 现场废矿物润滑油
- 流属性/单位: 质量 / kg
- 数量规则: site_spent_oil_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_waste`
- 来源:

###### 组成已记录的隔离设备清洗废水 (`site_washwater`)

清洗或水压测试产生、在废物交接处的实际完整液体载体；按事件与运行管网 drained_water 分开。以相同基准将残余显热保留为元数据，不假设场外环境热释放。

- 选定流: 组成已记录的隔离设备清洗废水
- 流属性/单位: 质量 / kg
- 数量规则: site_washwater_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_waste`
- 来源:

###### 残余钢已测的混凝土拆除碎料 (`site_demolition_rubble`)

实际现场交接的一种已表征碎料载体；仅实际分离钢可独立列流，不得再次计本载体内部残余钢。

- 选定流: 残余钢已测的混凝土拆除碎料
- 流属性/单位: 质量 / kg
- 数量规则: site_demolition_rubble_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_waste`
- 来源:

###### 水分及污染已记录的开挖土壤 (`site_excavated_soil`)

扣除实测现场再用后实际跨现场交接的废物。内部回填作为备查抵销，不得同时计移出废物和新采购垫层。

- 选定流: 水分及污染已记录的开挖土壤
- 流属性/单位: 质量 / kg
- 数量规则: site_excavated_soil_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_waste`
- 来源:

##### 基本流

###### 现场任务化石二氧化碳排向空气 (`site_air_co2_fossil`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场任务化石二氧化碳排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_co2_fossil_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

###### 现场任务生物来源二氧化碳排向空气 (`site_air_co2_biogenic`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场任务生物来源二氧化碳排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_co2_biogenic_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

###### 现场任务一氧化碳排向空气 (`site_air_co`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场任务一氧化碳排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_co_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

###### 现场任务甲烷排向空气 (`site_air_ch4`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场任务甲烷排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_ch4_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

###### 现场任务氧化亚氮排向空气 (`site_air_n2o`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场任务氧化亚氮排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_n2o_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

###### 现场任务一氧化氮排向空气 (`site_air_no`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场任务一氧化氮排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_no_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

###### 现场任务二氧化氮排向空气 (`site_air_no2`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场任务二氧化氮排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_no2_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

###### 现场任务二氧化硫排向空气 (`site_air_so2`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场任务二氧化硫排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_so2_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

###### 现场空气动力学粒径不大于2.5微米颗粒物排向空气 (`site_air_pm25`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场空气动力学粒径不大于2.5微米颗粒物排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_pm25_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

###### 现场空气动力学粒径大于2.5且不大于10微米颗粒物排向空气 (`site_air_pmcoarse`)

未知因子为缺口，不得视零。 按第8节 `inv_site_emissions` 执行。

- 选定流: 现场空气动力学粒径大于2.5且不大于10微米颗粒物排向空气
- 流属性/单位: 质量 / kg
- 数量规则: site_air_pmcoarse_attributed / Q kg; 以本卡主单位计的实测归属总量，仅除以同批次已验收Q一次。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_site_emissions`
- 来源:

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 所有清单行 | 首先依据独立分表及资产权属记录拆分无关供热分区、冷热服务与热生产。专用投入直接归属。仅服务已验收热水供热的不可分管网负荷，按该管网同期总量除以已验收 Q；拒收交付和技术损失仍由已验收服务承担，不获得参考产出或抵扣。 |  |
| `shared_assets` | 所有清单行 | 优先实际细分任务及直接子表或领料记录。共享现场电网用电缺少适用任务子表时，固定采用经核实设备各运行待机状态功率乘实际小时：W_b = sum_device,state(P_verified_kW * h_actual_b)，s_b = W_b / sum_all_beneficiaries(W_b)；仅按s_b一次分配实测总表kWh，并以完整设备状态负荷计划与总表对账，包含待机及全部受益方。采用实测或已验证实际状态功率，不用未经核实名牌假设。共享经常物料和现场作业固定按同一来源工单本服务归属实际人员小时除以该工单全部受益方实际人员小时，记录角色任务及完整分母。共享经常现场释放严格继承其已计量来源材料燃料任务的分配；来源无法直接细分时采用同一工单人员小时比例，不再追加排放份额。运行泵优先实际支路电力子表；仅缺子表时按同一已对账区间实测各支路水力能除以全部支路水力能总量分配。cp_pump独立量热保持不变，完整报告区间包含启停待机；所需分母为零或未知，或共用待机负荷不能由该正值实测区间基准归属时，暂不完成。不得后续自行选择驱动。一次性现场资本事件仅采用原asset_service的alpha一次；已按alpha或直接任务细分归属的数量不再乘人员小时、电力或受益方比例。 | |
| `stock_cohort` | 所有清单行 | 测量期初与期末热库存和水库存。以明确结转台账将储存热量和水的负荷归入后续消耗或释放它们的批次，分别携带热源与电热比例及其原始上游负荷；不得将库存增加计入本期已验收服务，也不得不结转相应上游负荷就因期初库存而抵扣。内部返工或再循环热量不产生第二次参考服务；在最终验收交界或最终拒收去向只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_heat | distribution_network | 热量、验收与物理热去向 | 仪表与验收记录 | 区间时间戳；热源和用户表号；质量或体积；成对供回水温度及压力；水组成；焓与物性方法版本；验收或拒收标记及原因；Q_in；Q；Q_reject；delta_U；热去向记录；实际水中电耗散 W_to_fluid 及水外电耗散；带符号 G_ambient；载体携热损失 Q_carrier_loss；期初电热及热源来源台账；U_open、U_close 及 U_open_source；能量池热参考基准；区间热源、电热及载体热来源份额与不确定性；固定 h0 及参考状态；实测补水和初始充水温压组成；载体显热 H_carrier_in；内能 U 的物性方法及原始质量状态；交界动势能与储存证明; IAPWS-95 三相点参考身份；物性实现及版本；原始 h 和 u；C_j；规范 h_c 和 u_c；参考换算及组成适用证据；按时间重建来源记录；旧基准与版本化原批次更正；非零偏移不变性检验及数值容差 逐次直接液体释放采集：份额 ID 与质量；首次交界介质；同步出口及未受扰动接收环境温度；交界压力；组成及液相证据；两种状态下水的原始与规范焓；H_out；H_receiver_base；E_excess；不确定性及事件对账；直接传热计量或模型及去重台账。 | 在两个交界处按同步区间读取校准的成对热表；保留原始读数、已验证计算器方法、签署验收单及旁路和拒收日志。通过仪表与模型对账推导接收介质特定热传递，声明土壤、空气或水接收介质及热参考状态；调查残差。 汇总前执行 thermal_reference 和 thermal_reference_history；保留原始及转换物性、h/u 共同偏移和重建的历史来源。执行 validate_thermal_reference 的非零偏移检验并保留计算记录。 在运营方与环境首次交界测出口温度，并在同深度、同步的上游或热羽流外测淡水背景温度；土壤使用同深度、含水与热状态有代表性的相邻未受影响对照点。释放全程连续记录，或采用有记录的代表性事件采样方案并传播不确定性；状态变化须先分段再汇总。使用校准温压及质量或流量仪器、实际水物性计算、明确的运营方采集责任及原始日志。接收环境测量缺失或不具代表性时保留释放结果未完成。执行 carrier_release_heat 和 validate_heat_release；不得采用默认环境温度或比热。 | MJ; kg; m3; degC; Pa; kJ/kg | 每个仪表区间及每次拒收事件 | 一个声明的完整报告期间，涵盖供热、待机及匹配期初期末库存 | 热源和用户交界处及全部自有管网区段 | 每参考流 | 校准证书；时间同步；焓方法验证；验收签字；不确定性及平衡对账; validate_thermal_reference |
| cp_energy | distribution_network | 辅助用电 | 仪表记录 | 表号；期初期末 kWh；期间；泵与控制归属；共用功能负荷；供应交界及阶段登记；进入水的 W_to_fluid；本期电热期末结转；历史库存电热消耗及其原批次电力负荷 ；支路电力子表覆盖; 同区间各支路及全部支路实测水力能; 启停待机区间覆盖; 分母及适用性缺口| 读取校准电力分表并与账单对账；仅扣除有证据的非管网功能或供应交界或阶段重复涵盖项，不得凭猜测扣除热生产。  支路分配固定先实际电力子表，仅缺时按同区间实测水力能份额；分母零未知时不擅自换驱动。| kWh | 每个用电区间；每月对账 | 与 cp_heat 同期 | 全部管网泵、控制、仪表及自有换热站 | 每参考流 | 仪表校准；账单复核；因果份额表；无重复 |
| cp_water | distribution_network | 补水、排水、泄漏水与组分 | 质量计量、储罐库存及事件记录 | 供应方及实际废物交接接收方；除盐且未投药状态；批次质量；体积换算密度及条件；期初期末管网和废物库存；排水产生量及转运量；泄漏位置、持续时间与速率；接收介质；水比例及溶解物质；交接单 ；逐批次原始交接时间及不可变 ID；初始充水、运行补充水及可退供应方库存分类；各批次 S_open_b、I_b、R_supplier_b、D_b、L_b、S_close_b；原供应方负荷及冻结分配；实际退役FIFO退出或退供应方及最后正Q批次修订；供应交界与实际热回路注水交界的独立质量、温压、时间及中间调温筛查；不可变事件 ID、释放份额及首次运营方至环境界面、对应土壤或淡水接收证据，后续迁移单独标为环境归趋；初装来源或运行来源退役载体；各来源既往供水/废物记账及原 Q_k；资本初装水最终 w 及更正链接；; custody_lot_id; custody_pool_id; O; G; T_in; C; H; T_out; L; epsilon; movement_endpoints; loss_event_ID; loss_time_location; loss_evidence_method; first_medium; release_row_id; propagated_uncertainty | 采用校准补水与排水仪表或称重储罐及泄漏调查日志；以代表性取样及已记录方法测组成；即使后续转运，仍须将产生排水批次跟踪至签署前景交接。依据巡检、工单及仪表对账确认事件为零，不得依据空单元格。按 makeup_allocation 的明确先进先出约定计算各批次退出及未分配供应负荷，初始充水核对 initial_fill_water 实物清单。将实物 FIFO 质量 QA 与供水/废物归属分开。初装水及初装来源资本交接按 asset_service 最终份额和各来源原服务群更正；运行水保留原 FIFO 责任，不另乘资本份额。 依 custody_mass_balance 和 custody_loss_link 保留校准事件/库存测量、匹配组成/密度及原批次；在实际位置调查每笔损失或残差，关联排放行及配对移动，每月及期末对账。仅凭有日期的检查/测量覆盖记录未发生；未知不等于零。 | kg; m3; kg/m3; 质量分数 | 每次补水、排水与泄漏事件；每月库存对账; 每次损失事件及库存移动 | 与已验收Q相同的产生批次及已记录后续废物交接 | 整个闭式回路、排水点、储罐及观察到的接收介质 | 每参考流 | 校准；分析证书；库存平衡；接收方及交接回执；未知去向登记 |
| cp_pump | distribution_network | 泵输入到流体能量的独立计量 | 同步泵控制体、轴功率及外部量热记录 | 模块与表号；校准状态；每区间时间；进出口质量流量、温度、压力、焓、管径、速度及高程；电机和驱动供电；扭矩与转速；壳体、电机及驱动外散热热流；实际负载转速温度损耗图；流体与干模块期初期末质量、热状态、储能；测量不确定性；其他能源及外部机械功筛查 ；量热积分表面积 m2 与持续秒数；状态匹配实测或可追溽物性密度 kg/m3；原始转速单位及一次换算记录| 每泵设置独立校准质量流量、成对温压、供电和热流仪表；以已验证水物性计算入口出口焓流及动势能修正，独立进行供电减水外损耗及储能的对账；按实际工况验证损耗图，覆盖启动停止待机，不用整网残差或铭牌效率代替 | kg/s; degC; Pa; kJ/kg; kg/m3; m/s; m; m2; s; kWh; MJ; N*m; rad/s; W/m2 | 每同步泵运行区间及启动停止事件；每月独立能量对账；聚合至实测可比干模块边界热状态 | 与 cp_heat 同期，包括期初期末模块状态 | 全部声明管网电泵及驱动模块，边界内无换热器和其他能源 | 每参考流 | 流量温压供电与热流校准；完整原始记录；量热或损耗图验证；轴及水力核对；0 <= W_to_fluid <= E_pump_MJ 及合成不确定性对账 |
| cp_assets | site_work | 指定交付资产及初装水 | 现场计量交接及任务记录 | 原资产配置键; 供应方及现场交接交界; 型号序号; 管段轴向长度; 计数对象定义; 验收件数; 交付涵盖及干湿状态; 初装水批次kg; 投运日期; 额定容量与实测受益负荷; 实际可用小时; 全部受益方全寿命容量小时及工程证据; 历史冻结数量比例; 剩余数量; 修订退役结算; Q；修订日期/版本；原受益方期间服务群 ID 及正 Q_k；F_prev_all；u_current；U_remaining_all；全部受益方实际全寿命 u_actual_k；来源数量 ID/q_a,s；各来源 F_booked_a,s,k；w_a,k；带符号 delta_a,s,k；原记录及更正链接；；cp_capital_amendment逐来源B/版本及原N字段 | 在现场交付投运交界，将签署交接和实际规格与实测长度、核实计数及初装水称量对账；每行一个主属性单位，已含部件/水不得重复。每次寿命或利用修订保留既往记账，并按 asset_service 核实全部剩余容量小时驱动。最终退役时，采集全部原受益方期间实际容量小时记录和原 Q_k；对资产、初装水、已观察资本事件及实际交接载体计算最终 w、各来源已记份额和带符号更正。新观察来源数量在未记账处使用零既往份额。存档受治理原服务群修订，不改原始实测量，也不将全额归最后服务群。分母缺失/非正或既往记录无依据时阻止单位参考结果；不得假定寿命、容量或替用当期 Q。不采集供应方 BOM 或嵌套资本。 终态和来源/分母修订须完成cp_capital_amendment对账。 | m; item; kg; capacity*h; h | 每交接/任务；每次寿命或利用修订；每月对账；年度复核；最终退役及实际交接 | 声明服务报告批次及有证据原资产使用历史；实际后续废物交接保留原责任批次及其分配 | 声明管网现场、设备交付验收及实际废物交接位置 | 每参考流 | 校准、签署交接工单、规格和涵盖核对、库存与因果份额台账、缺口和不确定性证据 |
| cp_capital_amendment | site_work | 原资产来源及其一次性资本事件分量；不含例行运行分量 | versioned_original_source_and_cohort_ledger | asset_ID；source_ID及原卡row_ID/原单位；原始验收/事件gate；来源实测总量和新旧版本；计量/校准/状态依据；各原受益期间/驱动单位/u_actual；期间b（适用时）；全部历史及未来受益者；F_prev_all和remaining_driver；已接受g/F_booked；原始已记归属量B；旧归一结果/原N及更正N；背景模型版本及范围；实际最终退役证据；A_new、delta_A、替换及去重链接 | 在原资产/供应方验收gate、实际现场事件及接收方交接gate采集相应原记录；按cp_assets既定称量、配置计数/长度、驱动计量和校准方式核验完整来源量。每次来源、寿命、模型或分母修订及最终退役，逐原队列比较新旧记录，执行capital_source_amendment；全受益份额/逐来源总量/每条更正链接对账，由服务数据责任人复核签认。未发生条件用完整事件清册/零活动证据证明，不将缺失记为零；保留未知身份、计量不确定性及未完成原因。 | 来源原单位；固定驱动单位；原参考分母单位 | 每次验收/事件/修订/最终退役；年度对账 | 原资产全历史及各原服务队列；有证剩余寿命 | 仅既有前景gate和资本来源责任 | 按原参考流一次归一 | 原始计量/校准；签认验收/事件/接收；来源及模型版本；全受益者及修订对账账本 |
| cp_site_work | site_work | 实际现场投入及作业任务 | 现场计量交接及任务记录 | 现场及任务ID; 日期和安装修理隔离调温目的; 设备验收涵盖矩阵; 原管网资产批次; 主单位交接领用; 现场期初期末库存; 退供应方; 验收拒收退回状态; 电表期初期末kWh; 发电内部备查; 燃料kg及密度状态组成; 供应水kg及注入状态; 油脂配方; 校准; 因果负荷份额; 关联废物事件; Q ；直接任务子表或领料; 经核实设备运行待机功率kW及验证方法; 各状态各受益方实际h; 同期实测总表kWh及完整负荷对账; 来源工单ID; 本服务实际人员h; 全部受益方实际人员h分母及角色; 来源释放继承份额; 原资产alpha; 已归属标记；来源数量 ID 及各来源已记份额；原服务群 Q_k；最终实际资产 w 及带符号更正链接； | 逐实际任务读取校准分表称量及现场工单，每月与账单库存对账，然后按site_activity和asset_service仅归属一次。专用经常任务直接归属，共用任务因果分配，一次性现场安装投运退役资源释放及对应交接用原资产份额。仅凭已审机械日志工单及巡检确认条件缺席；未知数量或实际未列身份阻止完整。仅记录供应交界之后前景内作业，不含场外交付工厂接收方内部。  共享对象严格按shared_assets固定顺序和驱动处理，收集全部受益方分母，核对已归属量不再追加比例。 资本事件保留各来源既往记账，按 asset_service 最终 w/更正归原 Q_k；不得对已归属数量再加权，也不得将余额压入发生年结果。 | kg; kWh; MJ; h | 每交接批次或实际任务事件；每月对账；资产范围变动及年度复核 | 声明服务报告批次及有证据原资产使用历史；实际后续废物交接保留原责任批次及其分配 | 声明管网现场、设备交付验收及实际废物交接位置 | 每参考流 | 校准、签署交接工单、规格和涵盖核对、库存与因果份额台账、缺口和不确定性证据 |
| cp_site_waste | site_work | 实际现场废物产生及交接 | 现场计量交接及任务记录 | 产生事件日期; 来源资产任务及原批次; 载体身份及实测总质量; 组成水分残余流体; 期初期末废物库存; 交接质量日期; 实际接收方及签署验收交界; 现场再用内部转移; 产品退回验收与废物拒收区分; 残余载体热及固定基准; Q; custody_lot_id; custody_pool_id; O; G; T_in; C; H; T_out; L; epsilon; movement_endpoints; loss_event_ID; loss_time_location; loss_evidence_method; first_medium; release_row_id; propagated_uncertainty | 在产生、暂存及现场至接收方交界称量实际完整载体，或用校准体积及匹配密度。本期产生待后续交接数量仅作库存核查，不作交接交换；对账产生库存交接，避免已分离部件或流体双计。仅保留至实际交接的接收方路线证明，不假设接收过程、未来试剂能耗或交接后排放。实际直接现场释放与移交废物分开；交接未知保持缺口。 依 custody_mass_balance 和 custody_loss_link 保留校准事件/库存测量、匹配组成/密度及原批次；在实际位置调查每笔损失或残差，关联排放行及配对移动，每月及期末对账。仅凭有日期的检查/测量覆盖记录未发生；未知不等于零。 | kg; MJ | 每交接批次或实际任务事件；每月对账；资产范围变动及年度复核; 每次损失事件及库存移动 | 声明服务报告批次及有证据原资产使用历史；实际后续废物交接保留原责任批次及其分配 | 声明管网现场、设备交付验收及实际废物交接位置 | 每参考流 | 校准、签署交接工单、规格和涵盖核对、库存与因果份额台账、缺口和不确定性证据 |
| cp_site_emissions | site_work | 实际现场空气物质 | 现场计量交接及任务记录 | 现场任务机械发动机ID; 期间及工况; 燃料领用及修正kg; 化石生物组成; 物质身份及首次接收空气界面; 直接测量单位方法校准; 原基准来源因子及适用性; 因子已含氧化控制组成; 颗粒区间定义; 因果任务份额或资本安装alpha; 不确定性; 发生缺席巡检; Q ；关联原燃料材料工单; 已细分来源量或原工单人员小时份额; 全受益方分母; 一次性资本事件原alpha; 无二次份额核查| 逐事件采集实际现场发动机任务数据，采用代表测量或发动机燃料特定因子证据；保留因子原基准且仅一次换算。每月对账物质燃料碳及不重叠颗粒，不虚构残差排放。采用与其燃料相同现场任务分配并仅归一化一次；无燃料任务须证明缺席，不是假定因子为零。供应方接收方排放不属于本协议。 | kg; 因子原单位 | 每交接批次或实际任务事件；每月对账；资产范围变动及年度复核 | 声明服务报告批次及有证据原资产使用历史；实际后续废物交接保留原责任批次及其分配 | 声明管网现场、设备交付验收及实际废物交接位置 | 每参考流 | 校准、签署交接工单、规格和涵盖核对、库存与因果份额台账、缺口和不确定性证据 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| thermal_reference | 全部热载体、库存及来源计算 | 必须采用唯一的普通水能量约定：IAPWS-95 中 273.16 K 三相点饱和液态水的比内能为零。这固定的是核算参考，不是运行温度、水质假设或经 IAPWS 批准的 LCA 分配方法。对物性实现 j，以 kJ/kg 计算同一参考状态的 C_j = u_raw,j；全部水物性按 h_c = h_raw,j - C_j 和 u_c = u_raw,j - C_j 转换。保留的 token h0 表示 C_j，不是可自行选择的入口、环境或用户回水焓。h 与 u 必须使用同一偏移；当 p 用 Pa、rho 用 kg/m3 时，保持 h_c - u_c = p/rho/1000。不得单独将焓置零、以 h 替代库存 u，或将另一物理参考状态作为主结果的敏感性选项。使用实测水状态及组成和适用的已验证物性方法；必要的组成修正须采用同一约定并记录依据，不得引入不兼容的能量零点。换算依据或物性适用性不足时不得完成。本比例来源方法仍是 PCR 的候选核算选择，不是唯一可观测的热量追踪。 | property_method; raw_h; raw_u; reference_state; C_j; cp_heat | 规范 h_c、u_c 及实现偏移 h0 | iapws-water-energy-reference-2018 |
| thermal_reference_history | heat_balance; electrical_burden_carry; carrier_thermal_inflow | 执行 heat_balance 或 electrical_burden_carry 前，须依 thermal_reference 建立全部进出载体能量及期初期末水内能。由有证据的初始充水及后续全部供能、做功、提取、损失与转移事件，按时间顺序在此约定下重建热源、电热及载体热来源账，保留原供应方和电力 kWh 负荷。三项期初分量须合计为 U_open，三项期末分量须合计为 U_close。其他基准下既有汇总库存或份额不可直接替用：不得只平移 U_open/U_close 而保留旧来源份额，也不得将未解释差值划归载体来源。历史原始状态、质量或来源事件无法恢复时，须明确保留未完成结果。基准换算更正须使用各原批次正值 Q，以版本化方式替换全部受影响原批次的热源量、电力结转及归一结果；保留旧结果和原始观测，不得虚构采购、释放或抵扣。 | cp_heat; cp_water; cp_energy; original_origin_history; original_Q | 规范历史来源及负荷账 | |
| `heat_meter` | heat_distribution_service; replacement_heat | 质量单位为 kg、焓单位为 kJ/kg 时，Q_j = sum[m_j_interval * (h_supply - h_return)] / 1000；仅对合同验收的有效交付区间求和得到 Q。采用已验证成对交界热表，或在实测温压下可追溯的水物性计算；体积须配套密度或已验证热系数。不规定恒定密度、热容、温度或压力。  Q_reject 只计本运营方控制的拒收或测试回路中最终不可逆消耗、未得到验收且无其他有效商品接收方的热量；内部旁路或返流仍在同一回路时不计第二次输出。区间按验收、拒收与普通载体或环境损失互斥标记，G_ambient 与 Q_carrier_loss 不得再次包含已归为 Q_reject 的同一事件。有效的外部商品转移不得冒充拒收；本路线排除此转移，须审查扩展。| m_j_interval; h_supply; h_return; acceptance; cp_heat | Q; Q_in; Q_reject | `oiml-heat-meters-2002` |
| `heat_balance` | replacement_heat; heat_distribution_service; heat_to_air; heat_to_soil; heat_to_freshwater | 首先对全部载体、库存项及承接来源执行 thermal_reference 和 thermal_reference_history，不允许独立选取基准。对每个同步区段及区间，以固定基准下实测载体焓流对账 Q_in + W_to_fluid + H_carrier_in + G_ambient + U_open = Q + Q_reject + Q_carrier_loss + U_close + residual。G_ambient 为实测带符号换热，向内为正；负环境传热不得又计入 Q_carrier_loss。Q_carrier_loss 为排水与泄漏载体携离的未回收热量。残差保持须调查的不确定性，不得强行计为损失。内部回收返入同一池，不另增投入。外部有效热量输出或正环境得热不在本路线内，须先扩展。首先拆分独立计量区段及时间。对不可分能量池，P = Q_in + W_to_fluid + H_carrier_in + U_open；share_source = (Q_in + U_open_source) / P；share_electric = (W_to_fluid + U_open_electric) / P；share_carrier = (H_carrier_in + U_open_carrier) / P。三项份额之和须为一。Q_source_extra = share_source * (Q_reject + Q_carrier_loss - G_ambient)；Q_source_accepted = share_source * Q；U_close_source = share_source * U_close，并相应结转电热与载体热来源。携带原供应方与原期间热源和电力负荷；载体水负荷遵循 makeup_allocation 及初始充水实物资产台账。本约定是明确声明的能量比例核算方法，仅适用于实测状态与期间匹配、能量平衡闭合、期初来源历史完整的可合并池；记录混合假设及不确定性，不声称唯一可观测物理追踪。P 非正、物理池数量为负、缺少载体状态或权属、期初历史不完整或机械修正未解决均阻止完成。 Q_carrier_loss 在本守恒及来源台账中保留实际液体出流在热边界处的完整规范基准对流焓。它不是基本流热排放：须另执行 carrier_release_heat，不得从本平衡或热源及电热分配池中扣除接收环境基准能量。 | Q_in; W_to_fluid; H_carrier_in; G_ambient; Q_carrier_loss; U_open; U_open_source; U_open_electric; U_open_carrier; U_close; Q; Q_reject; cp_heat; cp_water; cp_pump | Q_source_extra; Q_source_accepted; 完整热量批次来源记录 |  |
| `normalize_exchange` | 所有清单行 | x_ref = x_attributed / Q；x_attributed 是库存修正及扣除供应交界或阶段重复后，以卡片单位归属同一已验收服务群的原始数量。仅归一化一次并保留原始总量。asset_service 下原服务群资产/资本事件更正使用其原正 Q_k，不得采用当期或处置期间 Q。失败或零产出的个别任务保留实测消耗并归属有证据的原父服务群，不增加 Q。若该责任服务群无正 Q，则保留原总量及未解决缺口，不输出单位参考结果，也不得转给无关成功服务群。参考产出为 Q / Q = 1 MJ；无 Q 的纯待机期间不能构成单位服务数据集。 | x_attributed; Q; cp_heat; cp_energy; cp_water; cp_assets | x_ref |  |
| `energy_units` | aux_electricity | E_MJ = 3.6 * E_kWh；仪表能量只换算一次。已核实的净热值属性及能量单位组用作电力和服务周转量的数据库能量数量约定；名称不意味着服务或热水发生燃烧。热量采用焓计量，不采用燃料热值。 | E_kWh; cp_energy | E_MJ |  |
| `water_balance` | makeup_water; initial_fill_water; drained_water; water_to_soil; water_to_freshwater | 活动回路热边界内期初水质量 + 实际注入初装水 + 实际注入运行补水 = 同一活动回路边界内期末水质量 + 实际排水产生 + 实际泄漏，并按实测供应方退回及其他有权属转移对账；原供应交接未注入的冷水库存单独保留，不冒充注入。普通内部循环不是新投入产出。按状态匹配密度把体积换质量，保留原读数；初装及运行供水分配按makeup_allocation，不把物理注入量等同单位水采购负荷。外部非同回路返流不在本路线内，须先审查扩展。 | opening_water; initial_fill_injected; operational_makeup_injected; closing_water; drainage; leakage; supplier_returns; external_transfer; cp_water | 已对账载体质量及初装补水区分 | |
| `constituent_identity` | water_to_soil; water_to_freshwater | m_species_medium = 释放溶液总质量 * 实测物种质量分数 * 实测去向比例；采用实测去向质量或比例之一，不得两者叠加。水比例与溶解物种共同分割总溶液；对每种实际非水物质及接收介质另增卡。以 kg 送处理的废物载体保留组成，但不得在处理前另排放其组分。  逐事件以释放物首次跨越运营方至环境的交界确定接收介质；同一释放份额的土壤与淡水去向互斥。随后土壤至地下水或地表水的迁移属于环境归趋，不得成为第二次运营方物质或载体热排放。保留事件 ID、份额及首次界面证据。| total_released_solution_mass; measured_species_mass_fraction; measured_destination_fraction; cp_water | m_species_medium |  |
| carrier_release_heat | heat_to_soil; heat_to_freshwater; drained_water | 对首次运营方与环境交界的每个直接液态水份额 p，以实测 kg 和 kJ/kg 保留 H_out_p = m_p * h_out_c / 1000 MJ。使用已验证的水物性方法及 thermal_reference，对相同水组成、实测未受扰动接收介质温度和同一交界压力计算 h_receiver_c。H_receiver_base_p = m_p * h_receiver_c / 1000；E_excess_p = H_out_p - H_receiver_base_p。接收状态是实测物理比较状态，不是新的可选热力学零点。只有 E_excess_p 作为相对于接收环境的热负荷进入对应热流卡；H_receiver_base_p 是随质量携带、仅作对账元数据的基准能量，既非废热、新增环境输入，也非抵扣。对土壤，比较状态是处于当地土壤温度的水，不得使用土壤比焓。两种水状态均须为组成兼容的液态；未获支持的相变、机械能修正或混合反应须先审查方法扩展才能完成。从管网热边界至首次环境交界的运营方内部变化，须以实测能量和储存单独对账，不得遗漏或重复。匹配状态相同时超额热为零，但水质量和 H_out 仍须记录。负 E_excess 表示有证据的冷却相互作用，须审查扩展至这些正向废热卡以外的方法；保留原始带符号值，不得截零、与排热相抵或生成抵扣。接收状态未知、不确定性使符号无法确定或物性换算缺乏支持时，不得完成热排放结果。废物交接仅保留完整载体能量元数据，该交接不列直接环境热排放；接收方处理在本前景之外。本热负荷约定不预测向有限接收介质的瞬时传热或最终温度；这些需要独立接收介质模型，不产生另一笔排放。绑定尚未绑定的热 UUID 时，除介质、属性和单位外，还须核实此数量含义。 | cp_heat; cp_water; m_p; h_out_c; h_receiver_c; first_interface; thermal_reference | H_out_p; H_receiver_base_p; E_excess_p; 按接收介质记录的热负荷台账 | epa-nccw-thermal-load; iapws-water-energy-reference-2018 |
| heat_fates | heat_to_air; heat_to_soil; heat_to_freshwater | 按事件及首次物理接收介质归属实测非载体 Q_reject 和负 G_ambient，不得对已经测得的热差再扣一次环境基准。直接液体载体释放采用 carrier_release_heat 的 E_excess_p，不得把 Q_carrier_loss 或 H_out_p 当成基本流热排放。逐介质 j 计算 Q_j = Q_noncarrier_j + sum(E_excess_p assigned to j) + E_outside_j，各事件组成必须互斥；本路线空气介质没有液体载体分支。E_outside_j 是未进入水回路的实测电耗散，仅归属一次至实际空气或土壤接收介质。W_to_fluid 已在管网热平衡中，不得再次加入。在相同边界按直接载体 H_out 与废物携带能量对账完整 Q_carrier_loss，并计入有记录的运营方内部传热或储存修正；各直接释放另按 H_out = E_excess + H_receiver_base 对账。不得强令环境热排放总量等于载体总焓，也不得虚构残差排放。废物交接不列直接热排放。各 Q_j 仅除以原合格 Q 一次；后续数量更正使用原分母替换受影响原批次结果。同一份额的土壤与淡水去向互斥；随后环境迁移、冷却或混合不形成第二次运营方释放。保留事件 ID、份额、首次界面证据及不确定性；不得重复乘去向份额。 | Q_reject; Q_carrier_loss; G_ambient; E_excess_p; H_receiver_base_p; E_outside_j; receiver_records; cp_heat; cp_water | Q_air; Q_soil; Q_freshwater; 独立载体能量对账 | epa-nccw-thermal-load |
| `waste_cohort` | drained_water; site_work | 依 custody_mass_balance 和 custody_loss_link 核对原批次未分配产生量、库存、交接、其他移动、已证损失及未解释残差；产生及待交接库存仍仅作核查。交换数量仅为逐签署交接事件实际移交、按原责任批次归属的质量 m_handover_attributed，不包括仍在现场库存。每次交接须保留来源事件、原资产或原服务批次、产生时间和实际交接时间。资本关联交接仅用asset_service原份额一次，经常运行交接用原服务因果份额；历史库存外发须归原批次或其受治理修订，不得全压本期Q。接收方交接之后不产生本前景入口或处理排放。 实际最终资本退役时，采用 asset_service 最终 w 及各实际载体来源已记份额更正原服务群/Q_k，包含初装来源水。新观察载体既往记账为零；运行水 FIFO 责任分开。带符号分配更正不改变原始交接载体质量，也不形成第二份废物输出。 | m_generated; m_handed_over; m_closing_waste_stock; m_opening_waste_stock; original_cohort; original_asset_fraction; Q; cp_water; cp_site_waste | m_handover_attributed及独立产生库存核查 | |
| custody_mass_balance | 原批次废物保管及实际损失 | O + G + T_in = C + H + T_out + L + epsilon，按同一原始产生批次、明确保管池和一致期间的未分配完整载体 kg 核算。O/C 为期初/期末实物库存；G 为首次进入保管的产生量，仅计一次；H 为依现有 gate 实际接受的外部交接毛量；T_in/T_out 为其他有证据的实物移动（包括退回或重分类），必须有起止位置及配对台账，不得同时计入 H 或新的 G。汇总保管池时内部移动抵消。实物退回保留原批次，记入 T_in 并与原始交接毛量 H 配对；此实物台账保留历史 H。后续验收/归属更正另账记录，不得在本式同时冲减 H。对实际未发生的错误交接直接更正，不得虚构退回。没有实际跨保管池移动的重分类仅改变状态标签，不得记为 T_in/T_out。L 为进入该保管池后有证据的实物损失，不得作为配平项；epsilon 为带符号的未解释计量残差。计算 epsilon = O + G + T_in - C - H - T_out - L，按传播后的计量不确定性调查，保留证据及未解决余差。未知量不得补零或转为 L。每次事件及盘点称量实际完整载体，或采用校准体积乘以状态/温度/组成匹配的密度；区分完整载体、干物质和所含物种质量。水分损失属于需证明的实物移动，不得以无依据的基准换算替代。只有具备检查/测量覆盖及不确定性证据时，才能记录零损失。此实物核查式不得分配或归一化。 保留每张清单行声明的属性/单位：体积型交接行使用实际交接体积；以匹配密度换算的 kg 仅用于此实物核查，不得另造一笔输出。例：期初/期末/其他移动均为零且无未解释残差时，G=10 kg、H=9 kg、L=1 kg；输出 H 仍为 9 kg。示例值不是默认值。 | O; G; T_in; C; H; T_out; L; epsilon; cp_water; cp_site_waste | 原始完整载体 kg 闭合；交接仅用实际 H |  |
| custody_loss_link | 原批次废物保管及实际损失 | 将运行回路 water_balance 与排水后的保管分开。回路排水事件与保管入库仅匹配一次：排水 10 kg 后保管损失 1 kg、实际交接 9 kg，回路排水仍为 10 kg，不得写成 11 kg 或另一笔回路泄漏。依 waste_fate 将实际保管排放关联至实测组成/状态、首次接收介质及精确匹配的已有行；完整载体 L 不自动等于物种排放。依 waste_cohort 保留 cp_water FIFO 来源、原始资产/服务归属及原始 Q 或 Q_k；每个适用份额和分母仅应用一次。实物损失不是带符号的资本分配修正。缺少物种/介质行或损失身份未明时，完成前必须明确匹配流卡并审查身份；不得虚构 UUID、假定场外排放或把残差作为排放。 | custody_mass_balance; cp_water; cp_site_waste | 实际排放事件按原归属及分母仅计一次 |  |
| `electrical_burden_carry` | aux_electricity | 采用 thermal_reference 规范后的 P、U_close 及 thermal_reference_history 重建的期初负荷。本路线仅允许聚合到可比电机、驱动及壳体热状态的泵区间，须以实测证明干模块净储能变化在有依据的合成不确定性内可忽略；包含全部启动、停止及待机，不得删除瞬态以制造零变化。保留实测 delta_E_dry_module 及其检查，不视为未经测量的零；显著干储能变化须先审查扩展，不得用模糊结转完成。对符合条件的区间，E_fluid_current = W_to_fluid / 3.6 kWh；E_outside_current = 本期归属实测用电 - E_fluid_current。P 为 heat_balance 中含实测载体显热的完整能量池，B_open_electric 为水中期初电热储存所携原供应方 kWh 负荷。E_attributed = E_outside_current + (E_fluid_current + B_open_electric) * (P - U_close) / P；B_close_electric = (E_fluid_current + B_open_electric) * U_close / P。按区间及原供应方计算并结转 B_close_electric，不重复原购电；期初电热负荷历史缺失即阻止完成。水外电耗散归入实际接收介质，水中水力能的后续耗散已经包含在 W_to_fluid 及热平衡中，不得另加第二次泵热或购电。 | W_to_fluid; P; U_close; B_open_electric; comparable_module_states; measured_dry_storage_change; cp_pump; cp_heat; cp_energy | E_attributed; B_close_electric; 经实测确认干模块净储能变化可忽略的适用性证明 |  |
| `carrier_thermal_inflow` | makeup_water; heat_distribution_service; replacement_heat; drained_water | 计算任何载体或库存量前，须执行 thermal_reference；h0 是固定 IAPWS-95 内能参考下该实现的 C_j，绝非可自行选择的物理参考状态。须证明 heat_balance 所需规范基准能量池数量非负。对每个外购补水或初始充水批次 b，在 kg 和 kJ/kg 单位下 H_carrier_b = m_b * (h_b - h0) / 1000 MJ，采用供应方至管网交界的实测温度、压力及组成。此处 h_b 是未转换的 h_raw,j；若已转换为 h_c，则用 H_carrier_b = m_b * h_c / 1000，不得再次减去 h0。记录批次来源、交接、原始供应方数据集、供应方清单是否包括调温热量及成本责任；水携焓流属于载体来源，绝不属于热源热量或泵来源。水数据集已包含的供应方调温不得再次作为热量购买。除同一自有内部供回水回路外的外部载体返流或转移不在本路线内，须先审查扩展；普通循环回水属于内部转移并抵销。以实测 kg 和 kJ/kg 在同一参考下计算期初期末水内能 U = sum(m * (u_raw - h0)) / 1000 MJ；u 须来自已验证物性方法，不得用 h 替代。已转换的 u_c 按 sum(m * u_c) / 1000 计算，不得再次扣减偏移。依 thermal_reference_history 重建期初来源。结转储存的物理载体热来源。载体水供应负荷遵循初始充水与运行水质量规则，不增加虚构热量商品或抵扣。  H_carrier_in 只用实际跨入热回路交界的注水量及该处实测状态，不能用尚存冷水储罐的采购交接量；原供应方与注水点之间的调温、传热或功输入须通过独立计量的原子卡及原始来源台账核算，不能藏进载体显热。存在未计量调温则完整性不成立。 | m_b; h_b; h0; carrier_origin_ledger; cp_heat; cp_water; u_raw; thermal_reference; thermal_reference_history | H_carrier_in; U_open_carrier; 载体责任台账 | iapws-water-energy-reference-2018 |
| `pump_fluid_energy` | aux_electricity; heat_distribution_service; replacement_heat | 在本入口声明的适用范围内，按顺序完整执行规则组：pump_fluid_energy_measurement; pump_fluid_energy_energy_channels; pump_fluid_energy_reconciliation; pump_fluid_energy_interpretation; pump_fluid_energy_unit_conversion。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat; pump_fluid_energy_measurement; pump_fluid_energy_energy_channels; pump_fluid_energy_reconciliation; pump_fluid_energy_interpretation; pump_fluid_energy_unit_conversion | W_to_fluid; 独立对账及不确定性 |  |
| `makeup_allocation` | makeup_water; drained_water; water_to_soil; water_to_freshwater; initial_fill_water | 逐笔将水分为投运初装、运行补充或未使用可退库存。初装水完整供应数量仅在initial_fill_water按原管网资产份额计一次，不作运行补水。后续补水记录原供应方及批次负荷。对声明合并储罐管网内相同未投药水按交接时间及不可变ID采用FIFO；先拆分独立隔离储罐。逐批b对账 S_open_b + I_b - R_supplier_b = D_b + L_b + S_close_b，其中D为实际排水产生，L为实际泄漏，排除内部循环，先从最旧可用批次发出。m_makeup_attributed = sum(D_b + L_b)，仅对运行补充来源批次求和，按原供应方负荷；初装来源退出不重复买水。尚存运行库存携带未归属供应负荷至后续实际退出。实际退役时，剩余运行水须经实测排水或退供应方对账：排水进入同一FIFO的D一次，退回进入R_supplier一次；无正Q退役期将该原批次实测退出及尚未归属供应负荷一次修订至最后正Q批次，不再另列资产补水或未来处理负荷。任何实际废水按产生事件在drained_water或site_washwater之一记录，载体及其余热止于交接，不按供应水来源重计。未知批次或余额阻止完成。 最后正 Q 的运行退出修订仅适用于原运行水责任，绝不适用于初装水或资产分配余额。初装水供应及已观察初装来源资本交接按 asset_service 最终全部受益方份额及各来源原服务群更正；已按 FIFO 归属的运行来源水不再乘资本份额。无论负担如何分配，同份实测水在原始水平衡中仅列一次。 | S_open_b; I_b; R_supplier_b; D_b; L_b; S_close_b; initial_fill_register; original_supplier; cp_water; cp_assets | m_makeup_attributed及FIFO供应负荷结转 | |
| `asset_service` | 所有清单行 | 在本入口声明的适用范围内，按顺序完整执行规则组：asset_service_initial_driver; asset_service_remaining_life; asset_service_final_correction; asset_service_source_scope; asset_service_constraints。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q; asset_service_initial_driver; asset_service_remaining_life; asset_service_final_correction; asset_service_source_scope; asset_service_constraints | 一次归属资产、初装水及已观察资本事件；原服务群更正 |  |
| capital_source_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 在本入口声明的适用范围内，按顺序完整执行规则组：capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | 原来源单位的归属总量；原队列N_c仅归一一次 |  |
| `site_activity` | 所有清单行 | 汇总前识别每项实际现场任务或仪表及原管网服务批次。专用经常作业直接归属。采用shared_assets固定细分顺序及对象驱动：共享电网电力无任务子表时用已核实运行待机kW*h，共享经常物料作业用同一来源工单本服务人员小时除以全部受益方人员小时，释放继承来源份额一次。实际一次性现场安装投运退役资源及释放，包括对应实际废物交接，仅随原保留资产alpha一次；经常修理及运行废物实际交接采用原产生服务批次和实测因果份额，不纳入供应方制造或场外运输处理。按现场期初期末库存及有证据供应方退回修正交接使用量；不得把部件投入固定为Q，或令拆除废物等于原采购质量。设备退回再用验收与拒收材料废物分别记录，不自动给回收抵扣。供水交接至回路注入之间的现场电调温在 site_electricity 和热来源台账独立计量；供应水数据已含供应方调温不得重复采购。实际未列前景投入或排放须在完整前增加一个具体对象属性单位卡及协议，不得预列推测背景清单。 最终资产退役时，资本事件采用 asset_service 的 w 及各来源带符号更正归各原正 Q_k；不得把任何余额集中归最后服务群。原始现场 QA 及已归属数量不得再次叠加。 | task_event; meter; original_cohort; site_stocks; supplier_returns; fixed_driver_share; task_submeter; verified_device_state_power_kW; actual_state_hours_by_beneficiary; common_meter_kWh; personnel_hours_service; personnel_hours_all_beneficiaries; source_work_order; original_asset_alpha; cp_site_work; cp_site_waste | 已归属实际现场交换 |  |
| `site_fuel_emissions` | 所有清单行 | 仅实际日志证明的现场机械或发电机排放进入 site_air 卡；依燃料记录、发动机规格及适用测量或来源因子证据确认任务和物质发生缺席。电网输入与现场内部发电分开：内部电力抵销一次，实际燃料和物质保留一次，不得同时计发电电力背景及其燃料。采用物质直接实测量，或原始燃料乘因子，并记录原基准、组成、氧化、控制及接收介质。每项换算组成去向份额仅在因子尚未包含时施加一次。化石及生物碳分开，NO和NO2分开，不大于2.5与大于2.5至10微米颗粒区间互斥，不叠加重叠PM10总量。实际其他现场物质须精确审查卡；未测数量、未知因子或身份为缺口，不得视零。年度核查不是额外排放。供应方接收方排放、废料加工试剂及场外车辆道路制造属于背景，不列入本清单。 | onsite_task; fuel_records; measured_species; native_factor; composition; destination; cp_site_emissions | 实际不重复现场排放 |  |
| pump_fluid_energy_measurement | aux_electricity; heat_distribution_service; replacement_heat | 本条属于 pump_fluid_energy。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对每台电泵及驱动模块设置独立仪表控制体，排除换热器和其他能源。同步采集校准的进出口质量流量、水温、压力及可追溯焓值；测量进出口管道面积、速度、高程、模块期初期末流体与固体热状态、电机及驱动电量 kWh 和外部传热。 | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | 方法组成部分；清单结果归原入口 |  |
| pump_fluid_energy_energy_channels | aux_electricity; heat_distribution_service; replacement_heat | 本条属于 pump_fluid_energy。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。由积分水焓流增量加动能及势能流差、流体储能变化计算 W_fluid_check；采用 1 MJ = 1000 kJ 和 1 kWh = 3.6 MJ，并对速度与高程能量明确量纲换算。另以电机实测供电及水外实测电机、驱动和壳体散热，计入干模块储能，独立计算 W_to_fluid = E_pump_MJ - Q_motor_drive_outside - delta_E_dry_module。外部热量采用校准热流积分，或覆盖实际负载、转速及温度区间的已验证量热或损耗图测量；铭牌效率不足。 | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | 方法组成部分；清单结果归原入口 |  |
| pump_fluid_energy_reconciliation | aux_electricity; heat_distribution_service; replacement_heat | 本条属于 pump_fluid_energy。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。要求两条独立推导结果在有记录的合成不确定性内一致。轴扭矩与转速以及质量流量与压差得到的水力功率用于额外对账，不是额外能源投入。要求 0 <= W_to_fluid <= E_pump_MJ；不满足时调查传感器和状态，另行识别非电热量或动能、势能与储存影响，解决前不得完成，严禁截断或从全管网残差反求 W_to_fluid。本路线须证明交界净动能、势能传递及其储存变化在已记录不确定性内可忽略；否则须先在审查下以实测项扩展平衡再使用。 | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | 方法组成部分；清单结果归原入口 |  |
| pump_fluid_energy_interpretation | aux_electricity; heat_distribution_service; replacement_heat | 本条属于 pump_fluid_energy。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。供电减水外散热及实测模块储能修正为主测通道，流体能量通道为独立校核；W_to_fluid 是进入流体的总能量，包括水力机械能，不等于瞬时显热增量。水力能后续耗散不得再加一次。报告区间须聚合至实测可比干模块热状态，净干储能变化在有依据不确定性内可忽略，否则本路线不能完成。 | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | 方法组成部分；清单结果归原入口 |  |
| pump_fluid_energy_unit_conversion | aux_electricity; heat_distribution_service; replacement_heat | 本条属于 pump_fluid_energy。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。扭矩单位 N*m，角速度单位 rad/s，转速日志为 rpm 时仅换算一次 omega = rpm * 2*pi/60。轴功率 P_shaft = torque_Nm * omega_rad_s W；水力功率 P_hydraulic = delta_p_Pa * m_dot_kg_s / rho_kg_m3 W，密度须状态匹配并有测量或可追溽物性依据。外散热 Q_out_MJ = sum(flux_Wm2 * area_m2 * dt_s) / 1000000；表面积与持续时间须实测记录。 | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | 方法组成部分；清单结果归原入口 |  |
| asset_service_initial_driver | 所有清单行 | 本条属于 asset_service。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对每项保留交付管网资产 a，保留不可变原键、规格、按主单位验收数量 q_a、投运信息及全部受益方期间服务群 k。保留既有实物容量小时驱动 u_k：经核实负荷容量乘归属 k 的实际可用小时；专用固定容量可约为实际可用小时，并使用同一实测受益份额。初始 alpha_a,k = u_k / 有证据全部受益方全寿命容量小时 L_a。 | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | 方法组成部分；清单结果归原入口 |  |
| asset_service_remaining_life | 所有清单行 | 本条属于 asset_service。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。每次寿命或利用修订时冻结已接受历史记账：F_prev_all 为全部期间及受益方已记原资产份额总和。之后每时段采用 alpha_a,k = (1 - F_prev_all) * u_current / U_remaining_all，其中有依据且为正的剩余容量小时须包含本时段及全部剩余受益方。要求 0 <= F_prev_all <= 1 及 0 <= u_current <= U_remaining_all；每次记账后更新余额，不得重新起算原数量。 | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | 方法组成部分；清单结果归原入口 |  |
| asset_service_final_correction | 所有清单行 | 本条属于 asset_service。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。实际最终退役时，按全部原服务群计算 w_a,k = u_actual_k / sum_all_lifetime_actual_u；随后逐项已观察来源数量 s，以该来源台账计算 delta_a,s,k = w_a,k - F_booked_a,s,k。通过版本化更正将 delta_a,s,k * q_a,s 归回各原服务群结果，仅除以其自身正 Q_k 一次；保留原记录和原始实物量。最终份额总和为一；不得把余额集中归给最后正 Q 或处置期间服务群。负 delta 仅冲回过度归属，不是负物理交换或替代抵扣。 | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | 方法组成部分；清单结果归原入口 |  |
| asset_service_source_scope | 所有清单行 | 本条属于 asset_service。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。交付设备、独立供应初装水、实际一次性现场资本资源释放及实际资本关联交接载体仅用同一 alpha 和最终 w 一次。各来源保留各自已记份额；新观察载体或事件在未记账处取 F_booked=0。最终退役前才观察到的资本事件数量，使用原冻结服务群份额及剩余分配台账，不得整项归发生年；最终退役再按 w 对账。x_attributed = sum(q_a,s * alpha_a,k)，或采用最终 w 及版本化更正，再仅除 Q_k 一次。 | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | 方法组成部分；清单结果归原入口 |  |
| asset_service_constraints | 所有清单行 | 本条属于 asset_service。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。全寿命或剩余驱动缺失/非正、既往记账或原 Q_k 缺失均阻止单位参考结果；不得等分或替用当期 Q。管长、明确设备计数及实测水 kg 保持各自唯一主单位，容量小时不能代替它们。不得虚构质量、寿命、容量、未来事件数量或无依据未来交接。更换资产使用新原键，经常耗材归任务服务群，同笔不得兼作更换资产及耗材。makeup_allocation 的运行水 FIFO 与资产/初装水分配分开。不递归供应方/接收方内部或支持资本。 终态结算、来源数量/模型版本更正及原分母更正须执行capital_source_amendment；本行delta份额乘来源量仅在该规则规定的同源量/同模型条件下成立。 | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_history | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本规则补全既有冻结历史/剩余寿命政策，不要求每次寿命修订都追溯更换历史寿命份额。保留原资产key、每项原单位来源s及版本、确切产品/事件gate、全部受益者—期间队列c、不可覆盖的实测原始记录和已接受记账。实际最终退役前，寿命/使用修订冻结历史份额，仅按既有有据剩余驱动分配剩余份额；要求0<=F_prev_all<=1，有据正的剩余分母包含当前期间及全部未来受益者。晚到证据的首次资本来源使用各历史已接受份额及同一剩余账本，不全部归事件年。使用既有经核实的负荷/容量乘实际可用小时，包含全部原受益者；专属恒定容量保留既有可用小时简化。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_final_shares | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。实际最终退役时，w_c=u_actual_c/U_final，U_final=sum_all_original_beneficiaries(u_actual)>0；最终全部份额和为一，包含原驱动已规定的非研究、失败和待机责任。转交继续使用不是最终退役。寿命活动为零或未知、历史份额无依据或缺少原队列时，最终分配未完成；保留实物总量和缺口，不等分、不虚构使用。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_source_revision | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。退役前来源更正使用各原队列已接受份额g_c，最终退役时使用g_c=w_c。Q_s,new为原卡单位下有据的寿命分配前完整来源实物量，不是未摊余额或已加权量。B_s,c为该来源/队列实际已记账的归属原始量，附当时数量/模型版本和原归一结果。计算A_s,c,new=Q_s,new*g_c，delta_A_s,c=A_s,c,new-B_s,c。首次观测的来源在未记账处B=0；对既有来源更正须替换同一来源ID，不增加采购或处置事件。仅当来源量及链接模型版本不变且B=F_booked*Q_s时，才可使用(g_new-F_booked)*Q_s简式；否则必须采用A_new-B。实物毛收货、库存、转移、交接另行对账；有正负号的更正是模型修订，绝不是负实物交换或替代信用。链接供应/处理模型发生变化时，即使delta_A=0也须替换受影响原队列清单/结果，移除旧模型贡献并保留新旧版本及范围。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_normalization | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。完整修订归属量仅除以该原队列当前已核实参考分母N_c一次（本地分别记为Q、D或A）。若N_c本身更正，替换完整旧归一结果，不将delta_A/new_N加到按old_N计算的旧结果。零产出事件仍归既定因果父队列；父队列无正N_c时保留归属实物总量及未完成的归一结果，不转移给无关正产出期间。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_scope | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对既有gate内各实际资本来源执行本规则，包括适用时独立初装、验收后资本现场事件和实际退役载体；不创建新来源、不扩大背景边界、不重复已含供应阶段、不对例行运行乘寿命份额。这些是明确的候选核算规则，不声称所引分类或技术来源规定了这些数值方法。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `quality_metering` | 所有清单行 | 保留全部热量、电力及水计量的同步原始数据、校准、量程有效性、组成与物性版本及不确定性。不得虚构换算系数或数字默认值；仪表或供应方证书不意味着本 PCR 建立了法律合规。 | cp_heat、cp_energy、cp_water 记录与证书 |
| `quality_identity` | 所有清单行 | 逐卡确认一个对象、角色、状态、方向、属性、单位及接收介质。未确认 UUID 的候选保持未绑定，仅可用于方法讨论；可发布数据集须有核实的精确身份或有记录的受治理身份解决决定，不得虚构 UUID 或以商品替代服务。 | 直读身份载荷与哈希回执；清单元数据中的未解决身份登记 |
| `quality_completeness` | 所有清单行 | 逐区段及现场任务筛查运行、待机、拒收损失、泄漏排水、储水储热、实际设备交付更换、现场能源清洗润滑和实际废物移交。按日志巡检证明发生或缺席，不预列供应方材料或推测场外排放。投药或其他热路线仍须审查扩展；路线内实际新增前景对象须具体卡和协议。单一属性单位不代表任意同单位对象可以合并。 | 现场资产图、工单、仪表、交接签署及完整性矩阵 |
| `quality_missing` | 所有清单行 | 未知读数、组成、UUID、实物供应交界或接收去向不是零。保留明确缺口，仅在可辩护时以有记录替代值量化不确定性并标明范围；否则完成状态为不确定。不得将估计、示例或仪表容差当作默认合规限值。 | 缺口登记；替代证据；不确定性评估；失败检查清单 |
| `quality_cohort` | 所有清单行 | 要求已验收 Q、全部原始交换及库存与废物交接结转台账属于同一服务批次。区分拒收或返流热量，保留事件调查及拒收原因，并在有依据的合成测量不确定性内对账热源至用户热量和水平衡。不闭合平衡须调查，并阻止无保留完整结果。 要求不可变原资产/来源/服务群键、全部受益方实际容量小时总量及各来源已记份额。最终退役时核对 sum(w)=1，各受治理更正均对应原 Q_k；允许负更正但不得作为负物理流抵扣。分母未知或非正阻止单位参考结果。 | 批次台账；验收与拒收仪表；库存及废物交接结转记录；不确定性计算 |
| `quality_bilingual` | 所有清单行 | 两种语言维持相同顺序的行 ID、公式、单位、协议引用、例外、正式名称及约束强度。核实实际解析投影内容，包括边界、质量及计算规则；模式、指纹或本地化标记不构成科学正确性批准。 | 双语语义比较及实际生成的机器指导比较 |
| inv_site_emissions | site_air_co2_fossil; site_air_co2_biogenic; site_air_co; site_air_ch4; site_air_n2o; site_air_no; site_air_no2; site_air_so2; site_air_pm25; site_air_pmcoarse | 以实际现场燃料或任务发生及物质证据为条件；记录直接实测质量，或实际燃料活动乘来源特定且原质量或能量基准明确的因子，不是供应方排放。每种物质及去向仅计一次；保留来源、校准或因子范围及不确定性。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_custody_balance | 原批次废物保管及实际损失 | 按 custody_mass_balance 和 custody_loss_link 核验带日期的原批次库存、实际交接凭证、配对移动、校准损失证据及传播后的不确定性。区分已证 L 与未解释 epsilon；数量、身份或去向未解决时不得无保留宣称完成。验证其他项为零时 G=10、H=9、L=1 闭合且 H 仍为 9，每笔排放仅在首次介质计一次，分配/归一化不得改变原始实物闭合。 |  |
| `validate_reference` | heat_distribution_service | 要求 Q > 0、1 MJ 参考服务、已验收用户供回水交界计量对、声明热品质，且不得为拒收、返工或循环热量抵扣。不得仅凭能量将不同路线或品质视为等价。 |  |
| validate_thermal_reference | 全部热载体、库存及来源计算 | 任何热源或电力分配前，核验 thermal_reference 和 thermal_reference_history。对同一有记录的实物案例，在全部原始 h、原始 u 及实现参考 C_j 上同时加非零常数 c 后重算；规范基准下的全部载体能量、库存、热表焓差、P、来源份额、Q_source_accepted、Q_source_extra、电力结转及归一数量必须在有依据的数值容差内保持不变。还须检验非零载体流入和排出、期初期末水质量不等以及历史热源/电热库存情形，分别核验质量与能量闭合。拒绝替换物理参考状态、h/u 分别置零、换基准后保留旧份额或将期初来源缺失填零。此检验只改变数值表示，不改变实测运行或物理温度；仅能量平衡通过不足以证明分配正确。 | iapws-water-energy-reference-2018 |
| validate_heat_release | heat_to_air; heat_to_soil; heat_to_freshwater; drained_water | 归一化前，以实测事件记录核验 carrier_release_heat 和 heat_fates。管网能量按完整规范基准载体焓闭合，环境热负荷按相对于接收状态的差值独立闭合；核验每笔 H_out = H_receiver_base + E_excess 及全部互斥事件总量。重算同温同压、较热液体释放、非零数值焓偏移换算、接收温度变化、土壤与淡水分份额释放及废物交接案例。相同状态须得到零超额热且不得删去水质量；接收温度变化只应改变直接释放热负荷计算，不得改变已有管网能量与来源平衡。废物交接不产生直接前景热排放。接收证据缺失、符号不确定或出现冷却时，须保留未完成，不得填零或生成负值抵扣流。核验后续 UUID 数量含义兼容，且已经测得的管道、拒收及电耗散热不得再次换基准或重复计入。 | epa-nccw-thermal-load |
| `validate_balance` | 所有清单行 | 在归一化前，按原始总量核实 heat_meter、carrier_thermal_inflow、pump_fluid_energy、heat_balance、heat_fates、water_balance、makeup_allocation 与 waste_cohort。核对固定热基准及入口载体焓、独立泵控制体测量及 0 <= W_to_fluid <= E_pump_MJ、完整三来源库存历史、批次先进先出和初始充水资产涵盖；调查残差，不得以全管网残差反求泵热或载体热。 | |
| `validate_overlap` | 所有清单行 | 核对commodity_complement、asset_service、site_activity、site_fuel_emissions和makeup_allocation；热源商品、交付设备、初装水、FIFO补水和现场作业各一次。所有卡恰有一个主属性单位。排水只到交接，无供应方制造运输支持资本或场外接收处理卡；未执行背景义务不得伪装当前前景量。 核实寿命修订冻结历史并分配余额、最终全部原服务群 w/delta 更正、新观察载体各来源既往零记账及原正 Q_k。拒绝最后服务群承担余额、初装/FIFO 水负担重复，或把分配更正叠加到实物 QA。 | |
| validate_capital_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 验证capital_source_amendment中原驱动、freeze/remaining账本、实际最终w、逐来源完整Q_s/B/版本、原N及整个归一结果替换。重算同量份额更正、来源量变化而份额不变、模型变而物理delta=0、原N变化及零产出反例；核对资本/例行分量互斥及全部受益者。缺乏可追溯旧记账或正分母时保留未完成，不允许处置年兜底、负实物流、重复归一或第二次份额。 |  |
| `validate_completion` | 所有清单行 | 分别报告已执行跳过检查、发现、不确定性、未绑定身份及前景完整性。未绑定参考身份、未知实际交接、未闭合运行批次或缺少具体设备验收数量阻止无保留前景完整。背景链接是否补齐须另外披露，不得把前景完整声称为全生命周期已完成、方法批准或发布批准。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 分配专用服务补充 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅声明未投药水介质自营供热前景；另加Q_source_accepted / Q有效热源商品，后续背景从明确供应及交接gate连接且去重 |
| excluded_use | 独立到户供热或热生产、其他热路线、整个CPC叶覆盖，或把此前景清单当成完整生命周期模型 |
| required_metadata | 原参考限定、原始总量与Q、三个热来源池及库存、实际设备规格验收及单属性单位、原资产分配、现场任务、供应涵盖和实际废物交接；强制 IAPWS-95 能量参考、物性偏移、重建期初来源及不变性证据 接收状态观测、规范载体能量与超额热负荷分账对账、兼容的热流数量含义及 validate_heat_release 证据。 |
| required_quality_disclosure | 前景检查覆盖、不确定性、损失拒收、交接接收方、实际首环境介质、身份缺口及另行背景链接状态 |
| update_trigger | 路线、前景交界、交付设备规格供应涵盖、热源水组成、现场任务、仪表或证据变动 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-69220 | official_guidance | 联合国统计司，CPC 3.0 子类 69220， https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69220 | 仅支持分类范围：自营蒸汽、热水、冷空气及冷冻水分配，排除收费或合同服务。不代表认可本更窄方法。 |
| oiml-heat-meters-2002 | standard | OIML R 75-1:2002《热量表》第1部分，第8节及附录A， https://www.oiml.org/en/files/pdf_r/r075-1-e02.pdf | 液体热计量以质量流量和成对供回水焓差为基础的历史技术依据；不提供水物性、仪表容差或法规合规默认值。其他边界、采集及核算要求是本 PCR 声明的前景方法选择。 |
| logstor-steel-insulated-pipes-2024 | literature | LOGSTOR《钢制保温管》环境产品声明 EPD-LOG-20240214-CBA3-EN，2024年9月3日发布，产品章节，https://ibudata.lca-data.com/resource/processes/40693bdd-19e6-4ff5-8c89-1c2f5e5f1b3d/epd?version=00.01.000 | 仅支持完整保温管作为需明确载水管、保温和护套配置的具体供应对象；不采用该案例尺寸、材料比例、寿命、因子或回收抵扣。前景范围及单主属性单位是本PCR依用户要求作的方法选择，不是该EPD的强制要求。 |
| iapws-water-energy-reference-2018 | official_guidance | IAPWS R6-95(2018)《普通水物质一般及科学用途热力学性质的 IAPWS 1995 公式修订发布》，第3节，式(7)-(8)。https://iapws.org/technical-guidance/release/IAPWS-95 | 支持三相点饱和液态水的内能参考约定，以及焓与内能的区别。本 PCR 强制换算至此约定；比例 LCA 分配、库存来源归属及不确定性/完成规则是作者提出的候选选择，不是 IAPWS 要求或运行默认值。 |
| epa-nccw-thermal-load | official_guidance | US EPA, Noncontact Cooling Water General Permit, Attachment B: Example Engineering and Dilution Factor Calculations, pages 2-4. https://www.epa.gov/system/files/documents/2025-11/nccw-final-gp-2024-attachment-b-dilution-factors.pdf | 支持以物理温差区分接收水体热效应与载体总能量。本文相对于接收环境的 LCI 热负荷约定、土壤比较状态、采集与完成规则及来源归属为候选方法的编写选择；不采用许可限值、默认比热、温度或混合稀释假设。 |
