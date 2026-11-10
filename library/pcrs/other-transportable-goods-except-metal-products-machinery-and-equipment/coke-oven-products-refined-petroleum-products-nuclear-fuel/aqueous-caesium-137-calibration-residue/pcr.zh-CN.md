---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.aqueous-caesium-137-calibration-residue
language: zh-CN
status: candidate
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铯-137水性校准残留物的形成、表征与交接

## 1. 范围与适用性

本归因型 PCR 覆盖经认证盐酸基质铯-137氯化物校准溶液在实际民用计量使用中形成的一股源头隔离水性残留液，及其表征、面向具名接收者的首次放行、可归属场内容纳与交接。液体须有证据符合接收体系有文件依据的低放或中放液体类别。通用原生名称或含铯-137本身不能证明分类。参考量是残留液湿质量，包含实际水、酸和稳定载体，不含容器、另收玻璃及擦拭物。残留物已无继续校准用途；不暗示可销售性、正价值、解控或处置许可。

原计量使用与残留物形成保留在物理前景内。采购现成废物后仅重包装不实现本方法。追溯实际源批次、使用批期、无继续用途决定、隔离、表征、拒收/返工及首次交接准备完成状态。使用既有合格记录；本环境方法不提供开启、核素生产、分离、浓缩、去污或放射性操作程序和参数。

排除密封源、混合核素残留物、铀/钍/钚、有机闪烁液、污泥、固化废物、以玻璃为参考、燃料循环残留物及以处理服务为参考。实际冲洗水进入有记录源流时，须实测数量并证明最终基质相容，不规定稀释/混合操作。实际收集容器须符合有文件依据的化学/放射性相容性及接收要求。

NIST 证明真实铯-137校准溶液形态，并区分认证活度与未认证化学信息。IAEA SSG-45 独立说明测量/研究使用产生的水性废物及表征/管理记录。生产商的不同基质及化学纯度未认证是适用限制对照。各来源均不提供工厂清单、通用废物阈值、核素配比、半衰期、残留率、化学化验、能耗或排放默认值。整股原生参考实际为 Product flow，同时保留其物理放射性废物属性，不将其变成有用校准溶液或处理服务输出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.aqueous-caesium-137-calibration-residue |
| classification_refs | CPC 3.0 33690; narrower product and route boundary |
| covered_products | 一股源头隔离、经表征、盐酸基质明确的铯-137氯化物水性校准残留液 |
| excluded_products | 密封源；混合核素；燃料材料；有机液；固体；处理服务 |
| representative_product | 源自同一认证校准溶液谱系、无继续预定用途的可追溯残留物队列 |
| production_route | 原民用校准使用/残留物形成 → 隔离 → 表征 → 首次接收准备完成放行 → 场内交接 |
| market_state | 水性放射性液体残留物；实际接收类别/准则明确；不声称可销售 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在产生单位交接准备完成门提供经表征的物理放射性残留液 |
| How much | 1 kg 参考流 |
| How well | 实际源基质、核素/活度/时刻证据、接收类别及有文件依据接收条件 |
| How long or cycle | 一个新首次放行队列及其可归属后续场内服务；不承诺下游处理 |
| reference_flow_link | `finished` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 中低放射性液体废物 `598474f7-e317-401d-b61a-9709b8af6c4f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 源批次/认证溶液谱系; 实际氯化铯/盐酸/水/稳定载体组成及独立化学化验限制; 原民用使用及无继续用途决定; 实际核素/杂质及检出限; 接收类别、实际定义和接收测试; 不含容器/固体的液体净湿质量; 独立实测的唯一首次接收准备完成放行液体湿质量事件及锁定原Q（kg）、事件ID与谱系、同基准互斥D_new/FG_new/L_new及净退回、损失、处置、降级和已验收物料转回在制品; 活度测量时刻、比较日期、时区、不确定度及有支持衰变方法; 原料/在制品/成品期初期末库存及继承逐交换向量; 留存可用溶液; 拒收/Q0/返工负荷; 计量共功能及逐交换分配; 实际容器相容性、权属及全部归还/报废; 匹配源提供者及原负荷边界; 实际环境介质/物种、未检出政策及后续服务修正 |

原生Product flow表示整股物理残留液，不只表示所含铯。数据包须声明每个限定信息，并明确实际废物属性及接收类别。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用1 kg液体净湿质量，包含实际组分、排除容器皮重及另收固体。采用cp_release独立称量每个唯一首次接收准备完成放行事件，锁定其原液体湿质量kg及事件谱系形成Q。后续水分、组成或活度变化不改写该事件质量。 |
| unit_basis | all inventory rows | 实际行属性 | row unit | 保留原数量；1 kWh = 3.6 MJ，1000 Bq = 1 kBq。体积转质量须有独立实际同基质密度和温度，不采用目录值。质量采用单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；电力能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` 参考单位为MJ。 |
| activity_time | finished, cs_air, cs_water | 放射性活度 `93a60a56-a3c8-17da-a746-0800200c9a66` | kBq | 按核素保留活度及测量/参考时刻、时区和不确定度。单位组 `93a60a57-a3c8-16da-a746-0800200c9a66` 参考单位为kBq。不将母子核素活度之和当作铯-137，不由活度推断化学质量，不虚构半衰期数据。 |
| one_normalization | all inventory rows | 实际行属性 | per reference flow | 先归属原交换负荷，再仅除以原正值Q一次。Q = sum(m_first,e)，按唯一首次接收准备完成放行事件e的液体净湿质量kg独立求和，禁止由发出或库存反推Q。另在同一原事件基准核对Q = D_new + FG_new + L_new；只有其他验收后去向有据为零才可用D_new + FG_new。旧成品、退回、复检和再次放行不新增Q。Q零或未知时保留原负荷，不给归一化结果。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际民用使用前的认证铯-137氯化物水性校准溶液，附源谱系与继承负荷 |
| starting_condition_role | 原使用/残留物形成前景，含计量共功能，不是采购废物包装 |
| product_classification_scope | CPC33690中较窄水性校准残留物子组；证明实际接收低放/中放类别 |
| recursive_input_rule | 每次真实外部残留物退回保留原队列和负荷历史，不新造首次放行Q |
| upstream_dataset_requirement | 实际认证溶液及容器提供者；继承负荷在服务/残留物功能间明确归属，不以零负荷或递归替代 |
| disclosure | 产生单位交接门；不含场外运输、处理和处置；扩展系统声明须完整相容链接 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| sb_original | all inventory rows | 纳入原民用使用、残留物形成、隔离、表征和场内交接。实际加入物逐项记录，不规定核素生产、分离、混合或处理操作。 | `nist-cs137-2019`; `iaea-ssg45-2019` |
| sb_identity | finished | 核实无继续预定用途、实际源基质和核素、物理液态及有文件依据接收类别/准则。不同核素、有机流和固体分开。 | `iaea-ssg45-2019` |
| sb_stocks | all material gates | 保留期初期末原料、在制品及已放行成品数量和继承交换向量。纳入失败/Q0、启停、待机、拒收、清洁、重复表征和返工负荷。仅抵销状态、数量、时刻及继承向量相同的匹配内部转移。 | `jrc-ilcd-2010` |
| sb_atomic | all inventory rows | 完整性声明前，将每种实际能源载体、化学品、容器组件、清洁材料、过滤物、废物流及环境物种逐一补成具体交换。库存保留与接收者转移不是环境排放。 | `iaea-ssg45-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| residue_generation | 原使用、残留物形成、表征及交接 | required | 声明隔离水性铯-137路线 | foreground | 1 kg参考流 |

本单元内分阶段留存记录：源接收/使用 → 残留物形成 → 隔离/容纳 → 表征/首次放行 → 场内储存/交接。匹配内部转移在物理层抵销，继承向量保留。监测行仅适用于实际排放。

### 过程：原校准使用与残留物形成（`residue_generation`）

#### 输入

##### 产品流

###### 认证铯-137氯化物水性校准溶液 (`source_solution`)

实际使用的原溶液，其水/酸/载体仅计一次；可用原料库存另存。准确整溶液UUID和提供者待解决，不能用纯盐或基本流排放替代。

- 选定流: 认证铯-137氯化物水性校准溶液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_source 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_source`
- 来源: `nist-cs137-2019`; `iaea-ssg45-2019`

###### 原封硼硅玻璃源安瓿 (`source_ampoule`)

在声明接收门随源溶液进入、尚未完成原民用使用的实际完整原安瓿。空包装净质量与液体分别实测，追踪原包装/批次ID、实际污染玻璃去向、留存液、库存及任何退回；它不同于后加收集瓶。准确整包装原生身份未解决。即使源溶液提供者负荷已含包装，也保留包装实物输入；同一安瓿制造负荷不得再加第二次。不规定开启或操作程序。

- 选定流: 原封硼硅玻璃源安瓿
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_source 取得实际可归属源包装交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_source`
- 来源: `nist-cs137-2019`; `iaea-ssg45-2019`

###### 实验室去离子冲洗水 (`rinse_water`)

仅为另行实测、实际进入同一有记录水性流并使最终基质相容的水。source_solution已含水不再投入，不假定冲洗量。

- 选定流: 实验室去离子冲洗水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_streams 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_streams`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 交流电 (`electricity`)

所选完整记录是低于1 kV向用户交付的电网平均电力。匹配实际电压、地区、时期及损耗边界。身份不提供数量，也不表示燃烧。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 从 cp_energy 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶 (`bottle_purchase`)

有文件证明相容和接收的实际采购完整瓶，瓶盖包含在整组件中。实际相容容器不同时，不能原样采用本指定容器路线。

- 选定流: 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_container 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_container`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶 (`bottle_entrusted`)

该完整瓶规格的首次外部非采购接收，保留权属与继承制造/使用历史；不是采购，也不是新制造事件。

- 选定流: 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_container 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_container`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶 (`bottle_return`)

已跟踪瓶的真实外部退回，附原序列/池及负荷。场内移位不是跨界接收。

- 选定流: 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_container 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_container`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 干式纤维素实验室擦拭纸 (`wipe`)

仅记录本范围批期实际使用纸，保留组成与污染去向。不规定通用消耗量或清洁配方。

- 选定流: 干式纤维素实验室擦拭纸
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_streams 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_streams`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成民用放射性测量仪器校准（`calibration_service`）

原源使用批期实际完成的计量共功能。每次已完成服务须有仪器、方法、验收事件和报告结果定义；物理工作量与残留物质量分开保留。其UUID/属性/单位链及提供者待确认；本共功能绝非参考输出。

- 选定流: 已完成民用放射性测量仪器校准
- 流属性/单位: 已完成校准服务次数 / service
- 数量规则: 从 cp_source 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_source`
- 来源: `nist-cs137-2019`; `jrc-ilcd-2010`

###### 中低放射性液体废物 (`finished`)

首次完成表征并面向声明接收类别放行的整股铯-137氯化物水性残留液。保持实际原生Product flow类型和物理废物属性，不声称可销售。液体湿质量排除容器及另收固体。1 kg卡表示归一化参考事件产出，不是在发出、库存和废物之外另加实物Q输出；验收后去向保留原事件基准。

- 选定流: 中低放射性液体废物 `598474f7-e317-401d-b61a-9709b8af6c4f`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: 固定值（`fixed_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_release`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶 (`bottle_dispatch`)

实际随残留物跨交接门的完整瓶；皮重与液体分开。发出旧已放行液体或容器不新增Q。

- 选定流: 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_container 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_container`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶 (`bottle_to_owner`)

真实外部归还原所有者，附污染/接收状态，匹配原接收。场内留存是库存，不是外发交换。

- 选定流: 带聚丙烯螺旋盖的完整硼硅玻璃收集瓶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_container 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_container`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

##### 废物流

###### 铯-137污染硼硅玻璃安瓿废物 (`glass_waste`)

实际另分固体安瓿流。排除已计入finished的液体；剩余污染与玻璃质量分开。不用洁净碎玻璃身份或默认回收抵扣。

- 选定流: 铯-137污染硼硅玻璃安瓿废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_streams 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_streams`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 铯-137污染纤维素擦拭纸废物 (`wipe_waste`)

实际污染擦拭纸转移，所含液体仅计一次，并记库存及接收者。不是普通废纸。

- 选定流: 铯-137污染纤维素擦拭纸废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_streams 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_streams`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 铯-137污染硼硅玻璃收集瓶废物 (`bottle_retired`)

实际报废含盖完整瓶，附污染和接收证据。内液与皮重分开，保留原容器池负荷；不是普通玻璃回收。

- 选定流: 铯-137污染硼硅玻璃收集瓶废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_container 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_container`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

##### 基本流

###### 铯-137 (`cs_air`)

仅为有证据实际室外空气排放，子介质未指明仅在证据相符时采用。使用带时刻活度，不假定正排放，也不把未检出自动作零。

- 选定流: 铯-137 `4d9a8790-3ddd-11dd-9b37-0050c2490048`
- 流属性/单位: 放射性活度 `93a60a56-a3c8-17da-a746-0800200c9a66` / kBq
- 数量规则: 从 cp_emissions 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emissions`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 铯-137 (`cs_water`)

仅为实际淡水排放。容纳中液体或接收者转移不是水排放；实际不同子介质须用另一核实记录。

- 选定流: 铯-137 `4d9a8790-3ddd-11dd-9b3b-0050c2490048`
- 流属性/单位: 放射性活度 `93a60a56-a3c8-17da-a746-0800200c9a66` / kBq
- 数量规则: 从 cp_emissions 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emissions`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 氯化氢 (`hcl_air`)

有合格监测依据的实际大气氯化氢，子介质未指明。大气氯化氢与留在液体内酸基质分开，不规定正排放因子。

- 选定流: 氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_emissions 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emissions`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### 向室外空气排放的水蒸气 (`water_air`)

仅记录实测跨界净水蒸发及衡算不确定度。水分损失不能证明铯-137排放或化学纯度。

- 选定流: 向室外空气排放的水蒸气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 从 cp_emissions 取得实际可归属交换；保留原总量和原队列归属，仅归一化一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emissions`
- 来源: `iaea-ssg45-2019`; `jrc-ilcd-2010`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| al_subdivide | all inventory rows | 物理总量 V 与可归属 A 分开。先按实际源批次、仪表和任务记录细分计量使用、残留物专属表征/容纳及共用服务。 | `jrc-ilcd-2010` |
| al_shared | shared source and services | 对剩余共用交换逐项采用有证据决定性物理因果，全部共功能权重之和为一。仅液体质量不能分配校准服务。无因果依据时保留交换，记录与研究一致的有理由替代方法及敏感性供审查；完成前不作完整定量声明。 | `jrc-ilcd-2010` |
| al_residue | finished | 不得虚构正残留物售价，也不把处置服务付款混同产品收入。不自动给材料替代、核素回收或放射性衰变抵扣。物理废物属性不抹去原源负荷。 | `jrc-ilcd-2010`; `iaea-ssg45-2019` |
| al_cohort | released cohorts | Q按唯一首次接收准备完成放行事件的液体湿质量kg独立实测求和。以原验收基准核对新队列互斥且穷尽的Q = D_new + FG_new + L_new；损失、处置、降级及已验收物料回WIP均在L_new追踪，不得省略。仅其他验收后去向全部有据为零时，才可用D_new + FG_new作桥接。旧成品发出、真实退回、复检及再次放行不新增Q。后续储存、交接失败、重复表征和真实返工修正原队列分子并保留原Q，失败/Q0负荷不得丢弃。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

权威Q = sum(m_first,e)，是在固定参考门将唯一首次接收准备完成放行事件e的校准液体净湿质量kg独立求和。锁定每个原事件质量、身份和谱系；发出、库存变化、退回和再次放行均不定义或增加Q。在同一截点、同一原事件基准核对Q = D_new + FG_new + L_new。D_new为扣除真实退回后仍在外部持有的已验收物料，不是毛发出量；FG_new为新队列仍在场内、保持已放行且接收准备完成状态的物料。L_new合计该已验收物料其余全部互斥去向，包括不可逆损失、处置/报废、降级、退回待检以及已验收物料回到在制品/返工状态。保留各子状态，不能只把L_new当废物。退回份额在截点只属于最终D_new、FG_new或L_new之一；退回在制品再次放行只转移状态，不新增验收事件。仅所有其他验收后去向均有据为零时，才可用Q = D_new + FG_new作两项核对，绝不能据此代替独立Q测量。谱系不全或去向未决须保留缺口，不得缩减Q。

三项为原已验收物料互斥且穷尽的份额，统一以原液体湿质量验收kg表示。后续吸水、蒸发或组成变化须独立记录实测物理交换及回到原验收物料基准的可追溯换算；新增物料不得扩大Q或原物料分区。存续已验收物料及其损失部分各计一次，不得把存续量复原到损失前数量又另加损失。实际液体湿质量、组分、元素物理账，有据物种转化及带时刻核素/活度账，均与事件等效量桥独立。事件等效kg不是当前实物流、活度转质量换算或新增外部输出。保留不确定度和未决换算，不用拟合项填平余差。

按原队列另列期初已放行成品及其后续状态，均不得进入本期新Q。后续储存、交接失败、表征、损失和返工服务仍用其原正值Q。首次放行前的在制品和失败/Q0工作保留实际负荷及继承向量，真实首次放行前不产生Q。原Q缺失时不得归一化。本计量账要求不提供材料操作或核工艺方法。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | residue_generation | source_solution, source_ampoule, calibration_service | 原事件与库存台账 | SKU/批次/证书；供应方；已完成校准服务定义和验收事件；期初期末可用原料库存；实际使用；无继续用途决定；盐酸/水/载体；化验；源向量；原安瓿/批次ID与独立实测包装皮重；源提供者包装覆盖；包装库存/退回/去向及留存液 | 核对校准净质量及既有使用/证书记录；源物理量与其功能分配分开保留。不为采集PCR数据操作材料。 | kg; 组成; 活度/时刻分列 | 每批、实际区间和库存对账 | 实际源/使用/队列时期及可归属后续服务 | 声明产生单位、源和接收者 | 每 1 kg 参考流 | 校准；原事件/库存；证书/接收记录；不确定度 |
| cp_release | residue_generation | finished | 原事件与库存台账 | 队列与唯一首次事件ID/时刻；独立实测的原事件液体毛重/皮重/净湿质量kg；原锁定Q；源谱系；毛发出与真实退回；截点互斥D_new及接收准备完成FG_new；L_new全部子状态，包括损失、处置/报废、降级、退回待检及已验收物料回WIP/返工；期初旧已放行成品及原队列Q；首次放行前在制品与Q0；实际当前物理质量及独立原事件基准换算；接收测试/类别；化验/核素/活度/时刻/不确定度 | 以校准称量和合格表征/接收记录独立测量每个首次接收准备完成事件一次，不由发出/库存推定。按原液体湿质量基准追踪每份已验收物料至一个最终D_new/FG_new/L_new状态，保留毛退回/返工历史和原Q。重称、返工及再次放行不产生Q；去向/换算未决须保留，实际物理账和活度账分开。 | kg; 组成; 带时刻 kBq | 每批、实际区间和库存对账 | 实际源/使用/队列时期及可归属后续服务 | 声明产生单位、源和接收者 | 每 1 kg 参考流 | 校准；原事件/库存；证书/接收记录；不确定度 |
| cp_energy | residue_generation | electricity | 原事件与库存台账 | 仪表/区间；kWh/MJ；电压/地区/提供者；使用/表征任务；待机/启停/复检/Q0；共用驱动因素 | 读取校准仪表及匹配任务日志，保留原总量及服务/残留物功能间独立归属证据。kWh仅转MJ一次。 | MJ | 每批、实际区间和库存对账 | 实际源/使用/队列时期及可归属后续服务 | 声明产生单位、源和接收者 | 每 1 kg 参考流 | 校准；原事件/库存；证书/接收记录；不确定度 |
| cp_streams | residue_generation | rinse_water, wipe, glass_waste, wipe_waste | 原事件与库存台账 | 行/数量/组成；留液；原料/在制品/成品库存；去向/接收者；物种/元素分区；负荷；返工/Q0 | 采用可追溯秤、水表及接收记录，每股流仅计一次。玻璃/擦拭物留液不再计入finished。不把具体交换合成集合。 | kg; 组成/活度分列 | 每批、实际区间和库存对账 | 实际源/使用/队列时期及可归属后续服务 | 声明产生单位、源和接收者 | 每 1 kg 参考流 | 校准；原事件/库存；证书/接收记录；不确定度 |
| cp_container | residue_generation | bottle_purchase, bottle_entrusted, bottle_return, bottle_dispatch, bottle_to_owner, bottle_retired | 原事件与库存台账 | 序列/池；瓶/盖规格和相容性；权属；采购/委托/退回/外发/报废；期初期末库存；清洁/修理；继承制造向量/使用史 | 逐次核对件数和实测净皮重，保留权属及实际服务史。区分首次采购、委托接收和真实外部退回。制造负荷按有证据实际使用归属，不虚构通用复用次数。 | kg; 件数分列 | 每批、实际区间和库存对账 | 实际源/使用/队列时期及可归属后续服务 | 声明产生单位、源和接收者 | 每 1 kg 参考流 | 校准；原事件/库存；证书/接收记录；不确定度 |
| cp_emissions | residue_generation | cs_air, cs_water, hcl_air, water_air | 原事件与库存台账 | 物种/核素；最终介质/子介质；匹配浓度/出口量区间；负荷；采样/活度/参考时刻；检出限；不确定度；未检出政策；容纳/接收者转移 | 采用既有合格监测和匹配出口量。保留实际活度日期及有独立支持的比较日期修正。保留未检出界限或测量缺失，不虚构零。 | kBq 用于铯-137; kg 用于氯化氢/水 | 每批、实际区间和库存对账 | 实际源/使用/队列时期及可归属后续服务 | 声明产生单位、源和接收者 | 每 1 kg 参考流 | 校准；原事件/库存；证书/接收记录；不确定度 |

所有协议保留未归一化原记录及独立物理V/归属A台账。汇总表示归属并仅除原Q一次后的每1 kg最终结果；不得再次归一化卡片。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_Q | finished | Q = sum(m_first,e)，对唯一首次接收准备完成放行事件e的独立实测液体净湿质量kg求和，排除容器/固体；归一化须Q > 0。另以原事件基准核对互斥且穷尽的Q = D_new + FG_new + L_new，涵盖全部损失、处置、降级及已验收WIP状态。两项桥仅在其他验收后去向全部有据为零时适用。旧成品、退回、复检及再次放行不新增Q。Q零/未知保留原负荷，不给单位结果。 | cp_release | 原正值Q或明确不可用结果 | `jrc-ilcd-2010` |
| calc_vectors | all inventory rows | 逐交换独立保留物理 V 和负荷 A。原料消耗承接期初原料负荷加实际接收减期末原料负荷。期初在制品向量前结转、增加新归属负荷、另存期末在制品向量并将放行向量归原队列。期末已放行成品已归锁定原事件队列，不再减其负荷。已验收物料转回WIP保留原Q和继承向量，再次放行只转状态、不新增Q；须与从未验收在制品区分，保留失败/Q0/返工服务。继承向量未知/不相容阻止完整性。 | cp_source; cp_release; cp_energy; cp_streams; cp_container | 队列交换分子 | `jrc-ilcd-2010` |
| calc_once | all inventory rows | 归一化交换 = 原队列可归属交换分子 / 以kg计的原正值Q。分子保留自身单位。后续服务以带日期修正加入原分子并保留同一原分母；累计修正结果替换旧结果，不叠加另一产品。 | cp_release; cp_energy; cp_streams; cp_container; cp_emissions | 每1 kg参考流交换 | `jrc-ilcd-2010` |
| calc_material | source_solution, rinse_water, finished, glass_waste, wipe_waste, water_air | 逐材料及相关元素核对期初库存加外部投入与期末库存、外部输出及有证据转化。整液湿质量与不可加的组成分区分开。化学物种可反应，仍须在声明材料基准下核对元素闭合；相关时另列有证据的核嬗变/子核素项，不虚构衰变质量换算。调查余差并保留测量不确定度。 | cp_source; cp_release; cp_streams; cp_container; cp_emissions | 整材料及元素台账 | `nist-cs137-2019`; `iaea-ssg45-2019` |
| calc_activity | finished, cs_air, cs_water | 按核素另存带实际测量/参考日期的活度台账。仅采用适用证书/合格衰变方法和有支持核数据，在有证据共同日期比较库存/转移活度；保留子核素身份及不确定度。活度减少不是溶液缺失质量。不跨衰变强制活度守恒，不虚构kg转Bq因子。 | cp_source; cp_release; cp_emissions | 带时刻活度对账 | `nist-cs137-2019`; `iaea-ssg45-2019` |
| calc_outlet | cs_air, cs_water, hcl_air, water_air | 仅在单位和活度日期相容时对匹配浓度与出口量区间积分。记录实际物种/最终介质。容纳/接收者转移与直接排放分开，绝不再计为排放。 | cp_emissions | 物种/介质特定外部负荷 | `iaea-ssg45-2019` |
| acceptance_event_bridge | all inventory rows | 以原液体湿质量kg锁定独立实测、唯一首次放行Q。同一截点D_new为扣除真实退回后外部净持有的已验收物料，FG_new为场内接收准备完成的已放行成品，L_new涵盖其余全部互斥已验收物料状态：损失、处置/报废、降级、退回待检和已验收WIP/返工。按穷尽份额谱系核对Q = D_new + FG_new + L_new；只有L_new所有子状态均有据为零才可用两项桥。退回份额只定位一次，回WIP再放行不新增Q。期初旧成品和原队列Q另列。实际液体湿质量/元素/物种/核素账及后续交换换算独立保留；事件等效量不是额外实物输出或活度转质量因子。事件、状态或换算证据未决时完整归一化不成立。 | original acceptance events; net parcel-state bridge; original cohort quantities | auditable positive event Q and separate physical stock bridge |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | finished | 须有实际源谱系、基质化验、无继续用途决定、接收类别与测试。化学纯度、核素纯度及活度是不同声明。原生上位身份不是场址证书。 | 源/接收记录；NIST/IAEA范围 |
| dq_complete | all inventory rows | 不虚构质量、活度、核素配比、半衰期或经验数量范围。补齐缺失原子交换并保留拒收/Q0/库存负荷。重要数据缺失阻止完整数据集，不能作零投入。 | 原始记录、校准、对账和不确定度 |
| dq_provider | all selected flows | 分别核查物理身份、属性/单位链和提供者相容性。源溶液/容器/固体废物UUID待解决项保持明确。不以基本流排放、洁净玻璃或通用化学品代理。 | 完整原生/提供者记录与实际边界 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| val_reference | finished | 须有唯一链接1 kg液体输出、完整限定信息、实际类别证明及整残留物原生身份。不得以有用认证溶液、固体废物、搬运服务或纯核素排放替代。 | `iaea-ssg45-2019` |
| val_account | all inventory rows | 核对独立实测的唯一首次接收准备完成放行液体湿质量事件及锁定原Q，并以同一基准核对互斥且穷尽的D_new/FG_new/L_new，含净退回、损失、处置/报废、降级和已验收WIP/返工。拒绝由发出加期末成品反推Q；两项桥须其他去向全部有据为零且事件测量仍独立，拒绝再次放行新增Q。期初旧成品另核对，后续/失败/返工服务及继承向量保留原队列Q。仅归一化一次；Q零/未知或状态/换算未决时无完整单位结果。检查源至服务/残留物归属和共用权重，不虚构残留物价值；实际材料/物种/核素平衡独立。 | `jrc-ilcd-2010` |
| val_balances | all material and emission rows | 分别核查整材料/元素闭合，不混同物种转化及随时间变化活度。检查固体留液、容器皮重、源水重复计入、实际介质和未检出不确定度。 | `nist-cs137-2019`; `iaea-ssg45-2019` |
| val_limits | all inventory rows | 上游负荷、归属、类别/接收者或下游链接缺失时，不作完整性或从摇篮到坟墓声明。本环境PCR不认证安全，也不批准放射性活动或排放。 | `iaea-ssg45-2019`; `jrc-ilcd-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际采集/资格确认后作为secondary_dataset；仅在明确边界相容时作为background_dataset |
| downstream_use | 同一有记录铯-137水性残留物路线，链接相容接收管理 |
| allowed_use | 计量共功能明确、从产生至交接门物理残留物清单 |
| excluded_use | 剂量、安全或法律合规判断；核操作；处理性能；可销售性/解控；其他核素/形态；完整CPC覆盖 |
| required_metadata | 源批次/认证溶液谱系; 实际氯化铯/盐酸/水/稳定载体组成及独立化学化验限制; 原民用使用及无继续用途决定; 实际核素/杂质及检出限; 接收类别、实际定义和接收测试; 不含容器/固体的液体净湿质量; 独立实测的唯一首次接收准备完成放行液体湿质量事件及锁定原Q（kg）、事件ID与谱系、同基准互斥D_new/FG_new/L_new及净退回、损失、处置、降级和已验收物料转回在制品; 活度测量时刻、比较日期、时区、不确定度及有支持衰变方法; 原料/在制品/成品期初期末库存及继承逐交换向量; 留存可用溶液; 拒收/Q0/返工负荷; 计量共功能及逐交换分配; 实际容器相容性、权属及全部归还/报废; 匹配源提供者及原负荷边界; 实际环境介质/物种、未检出政策及后续服务修正 |
| required_quality_disclosure | 非参考身份/提供者待解决项；分配及不确定度；库存/Q0/退回修正；实际类别和监测限制；未纳入下游阶段 |
| update_trigger | 源基质、核素杂质、路线、接收者/类别、Q约定、容器或监测/提供者边界变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| nist-cs137-2019 | official_guidance | NIST SRM 4233f Cesium-137 Radioactivity Standard Certificate, 25 October 2019, pp.1–2 Tables1–2 and footnotes; https://tsapps.nist.gov/srmext/certificates/4233f.pdf | 真实原溶液；活度与化学信息/参考时刻的区别；历史SKU值不是残留物默认值 |
| ezag-single-solutions | handbook | Eckert & Ziegler Single Nuclide Solutions; retained snapshot 13 October 2026; Nuclitec Accuracy/Purity/Packaging/Carrier and complete Cs-137 entries; https://www.ezag.com/products/isotope-products/isotrak-calibration-sources/standardized-solutions/calibrated-solutions/single-nuclide-solutions/ | 独立生产商适用限制对照：不同基质/容器、化学纯度未认证；不移用配方、数量或操作 |
| iaea-ssg45-2019 | official_guidance | IAEA Safety Standards SSG-45, 2019, §§1.4,4.15–4.17,4.31–4.32,4.42–4.43; printed pp.2,33,37,40–41; https://www-pub.iaea.org/MTCD/publications/PDF/PUB1758_web.pdf | 水性废物来源、表征/隔离/容器/接收背景；不提供分类阈值、操作参数或许可 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–257; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅归因细分和决定性因果框架；无放射性残留物分配系数 |
