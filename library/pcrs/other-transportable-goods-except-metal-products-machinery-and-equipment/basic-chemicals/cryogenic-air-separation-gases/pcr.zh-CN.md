---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.cryogenic-air-separation-gases
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
translation_status: aligned
---

# 低温空分气体

## 1. 范围与适用性

本PCR针对环境空气低温精馏制取氧（O2）、氮（N2）及氩（Ar）的共同前景制造与分离边界。各气态或液态产品分别规定，不能当成一种可互换的“工业气体”。参考配置采用电加热再生预净化器、透平或空气循环制冷、未加药水冷或空冷；无燃烧公用工程、外购蒸汽、化学制冷剂回路及氩氢化脱氧。包括实际分离、压缩或内部泵送汽化、液化、储存和散装装载，终点为声明厂门。依据：`eiga-asu-environment-2025`第2.1、4.3节；`linde-air-separation-2019`第10–11页；`eiga-air-gases-pcf-2026`第4.1节。

`eiga-asu-environment-2025`第4.3.2.1节描述电再生路线，但所引示例没有证明一个实际未加药且无燃烧的组合工厂。该配置是受限适用条件，须有设备、加热能源、化学品收货及供给记录。EIGA第4.3.4.1节明确描述循环冷却水化学处理。空冷不能证明压缩机中冷、直接接触冷却、预净化或维护不用水；工艺图或冷却标签均不能证明某化学品或燃料交换不存在。保留各实际物流；不能证明受限配置时须审查范围。

排除制氢、回收或井源CO2、乙炔、氧化亚氮、PSA/VPSA或膜法生产、其他稀有气体提取、非金属含氧化合物、人为配制混合气、气体水溶液、化学制冷剂、燃烧公用工程、加药冷却回路、外购成品气备供、钢瓶灌装及客户物流或使用。采用这些路线前，须另有实证前景交换并审查适用性。本配置须有非零验收GOX产出；不得为纯液体或纯制氮工厂虚构GOX。

O2/N2/Ar商品可含实测微量杂质，但不是人为混配的多气体混合物。参考质量为规定质量下的实供产品总质量，不是纯物种当量质量。不预设载水或活性物浓度。每种辅助配制材料按一种实供材料采集，并另记实际组分及水分；不得把整份配制材料当纯活性物。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.cryogenic-air-separation-gases |
| classification_refs | CPC 3.0:34210；narrower范围限于本件定义的产品和路线；映射接受决策由classifications/mappings/另行维护。 |
| covered_products | 同一低温空分装置在参考配置下分别规定的GOX、GAN、GAR、LOX、LIN和LAR |
| excluded_products | 氢；回收CO2；PSA或膜法气体；其他稀有气体；混合气和溶液；非金属含氧化合物 |
| representative_product | 厂门验收气态氧（GOX），同时保留同一空分装置完整联产品实物账 |
| production_route | 空气过滤压缩→冷却及可再生吸附→制冷及低温精馏→安装时的氩精馏→产品压力和状态调节及储存装载 |
| market_state | 规定纯度、水分、压力和温度的管道就绪气体或散装低温液体；各物种状态分别计量 |

## 3. 参考流

本规则采用中间产品声明单位，不构成完整终端功能比较。以下功能单位字段描述该声明服务。本参考配置仅以GOX为分母。独立审查的其他产品数据集须一致选择自身已核参考对象及分母，不得把该GOX分母当成一千克液体或一千克氮。

| 字段 | 值 |
| --- | --- |
| 功能是什么 | 以独立规定的气态中间产品供应工业氧 |
| 功能量 | 每 1 kg 参考流 |
| 功能质量 | 实际证实的牌号、O2纯度、各杂质限值及水分；实际厂门压力和温度；无通用纯度假设 |
| 持续时间或周期 | 一次验收厂门交付；采集覆盖完整运行年，包括启停和库存变化 |
| reference_flow_link | gox |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 氧气 `4f19ca15-7b3b-11dd-ad8b-0800200c9a66` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 工厂及机组；运行年；低温路线；再生和冷却配置；物种及实际纯度或SKU；各杂质及水分基准；气液状态；厂门及交接点；压力及绝压表压约定；温度；湿干基准；用体积时的参考状态及压缩因子；供方参考单位；所有联产品、拒收和损失；分配依据 |

全部必需限定信息须在数据集元数据、参考流说明或等效数据包字段中声明。UUID不提供前景数量，也不证明背景数据集兼容。`eiga-air-gases-pcf-2026`第4.1节支持按kg产品及声明纯度压力；本PCR明确止于厂门，而非该文献的客户厂门。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用cp_products确定规定厂门验收净实供GOX质量G，排除容器、管道及包装。全部清单和采集汇总均采用每 1 kg 参考流。G须为正。 |
| gas_volume_basis | gox, gan, gar, oxygen_intake, nitrogen_intake, argon_intake, oxygen_return, nitrogen_return, argon_return | 质量 | kg | 保留原始气体体积、绝压、温度、含水量、组成、仪表参考状态及压缩因子。用这些实测或规格字段及可追溯有效换算确定密度，不得由数据库系数推断运行密度。关联供方前核对标况体积约定。 |
| liquid_basis | lox, lin, lar | 质量 | kg | 采用经校准质量流量计或扣皮重及罐底余液的罐体车辆称量。体积质量换算须有实测温度、液体组成及有效密度。气体标况体积不等于液体体积。原件系数元数据不是密度默认值。 |
| purity_basis | 所有产品输出 | 质量 | kg | 分开产品质量与纯物种质量。按实际组成及可追溯摩尔质量将摩尔或体积纯度转为质量分数；不得通用替换产品与纯物种基准。产品杂质进入组分平衡，不另建产品行。 |
| water_units | cooling_water, compressor_condensate, cooling_bleed, evaporated_water, direct_water | 按各行规定的质量或体积 | kg或m3 | direct_water保留原件Volume/m3。水平衡按实测密度和温度换算体积。区分补水、内部循环、进气湿度冷凝、蒸发、排污及排放。 |
| electricity_units | electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 这是电力原件参考属性标签，不是燃料燃烧假设。保留电表kWh，并按1 kWh = 3.6 MJ换算。声明电压、供电组合、变压及损耗；不得对电功采用燃料热量口径。 |

本PCR不固定收率、纯度、配方、净损失、能耗强度或排放因子，均由协议按实际记录确定。依据：`eiga-air-gases-pcf-2026`第4.1–4.6节；`eiga-asu-environment-2025`第4.3节；`linde-air-separation-2019`第10–11页。

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 入口环境空气及外供电力、自来水和实际耗材；无外购成品气库存 |
| starting_condition_role | environmental_resource_and_upstream_product_inputs |
| product_classification_scope | 仅CPC34210的O2/N2/Ar低温空分子集 |
| recursive_input_rule | 内部回流、吹扫或冷却不得虚构自供气投入。外购同类气体不属于本参考配置，须另有实证上游数据集及身份审查。 |
| upstream_dataset_requirement | 外供公用工程、耗材及废物处理须与实际产品、牌号、地区、时间、原件参考单位及边界匹配；单有流身份不足。 |
| disclosure | 披露厂门、期间、仪表覆盖、工艺配置、六种物种状态产出、拒收、库存、排放、废物去向及未分配与已分配账；披露与EIGA客户厂门碳足迹边界的差异。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_applicability | asu | 仅覆盖有非零GOX的O2/N2/Ar低温空分参考配置：电加热再生、未加药冷却、无燃烧蒸汽化学制冷剂及氢化脱氧、无外购成品气，且为厂门散装或管道供货。采用清单或分配规则前，实际设备及供给记录须证明适用性。 | eiga-asu-environment-2025; linde-air-separation-2019; eiga-air-gases-pcf-2026 |
| boundary_complete | asu | 包括进气过滤压缩、预净化再生、制冷、空气与氩精馏、实际产品状态压力调节、储存装载及可归属运行维护。独立保留阶段计量，不虚构重复中间产品交换。 | linde-air-separation-2019; eiga-asu-environment-2025 |
| boundary_internal | physical_ledger | 回流、粗氩、液氧返回及内部氮冷却吹扫均按两端等量的内部链接记录，在聚合空分单元抵消。可销售外供产品、弃料及环境返回分别记录。 | linde-air-separation-2019; eiga-air-gases-pcf-2026 |
| boundary_emissions | asu | 建立源及受纳物流登记。进气污染物取入后返回同一大气须保留总实物账；迁移、捕集或净新增排放另行报告。不得虚构环境CO2的化石或生物来源、去除信用或商品CO2输出。实际化石和生物排放均保留在LCI，不依碳足迹排除而删去。 | eiga-asu-environment-2025; jrc-cww-bref-2016 |
| boundary_completeness | site_survey | 核对实际SDS和物料单、排水、放空及维护记录。实际新增原子流，包括污染物物种、污染粉尘、污泥或保温材料更换，须先识别、计量及关联再声明数据集完整，不得用化学品、能源或废物总类选择器替代。排除的配置须有不存在的依据。 | eiga-asu-environment-2025; jrc-cww-bref-2016 |
| boundary_whole_mass | physical_ledger | 除O2/N2/Ar组分外，还须核对完整实测空分质量：环境空气及外供水物料跨界收货量加期初库存，等于全部验收产品、最终大气返回、冷凝水、送处理排水或直接水排放、单独拆出固体油废物及期末库存。总实物账保留湿度、环境CO2、捕获杂质及实测微量物种，不虚构产品或碳信用身份。产品杂质已含在产品质量内，不得外加重复计量。各残差须有不确定性及调查。耗材负荷按服务期平均只进入负荷账，不得在无更换的年份虚构实物收货。分别保留完整湿空气、压缩空气及最终放空气计量；O2/N2/Ar流卡投影其组分，不再叠加整份空气质量。湿残渣载体已含H2O及杂质，组分分析和能源不得另加为载体质量。压缩机中冷及预净化排水、状态损失和库存分别可追溯。跨厂门实供或返回容器须有独立材料、皮重、交接及库存登记；保留每项实际原子交换，服务负荷与实物移动分开。 | linde-air-separation-2019; eiga-asu-environment-2025; jrc-cww-bref-2016 |
| boundary_gate | downstream | 排除厂门后配送、钢瓶灌装、客户储存使用及报废。上游供给及下游废物处理仍须关联。不得把厂门数据集宣称为摇篮至客户厂门或完整使用阶段比较。 | eiga-air-gases-pcf-2026 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | role | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| asu | 一体化低温空分及厂门状态调节 | required | 规定参考配置且有非零GOX | joint_manufacturing_and_separation | 每 1 kg 参考流 |

聚合空分单元保留四个计量阶段：（1）进气过滤和空气压缩；（2）冷却、吸附和再生；（3）制冷及O2/N2/Ar精馏；（4）气体压力调节或液体储存装载。绘制实际过程图，将仪表及原始记录归属这些阶段。内部流是实物链接，不是附加外部产品清单行。氩精馏及各液体产品仅在实际安装生产时适用。判定无某流须有设备或生产依据，不得虚构零值。

以下流卡采用**每 1 kg GOX的未分配联合实物清单**。联产品数量为实际厂门质量比。第7节另行将环境负荷分配给产品，不能把已分配负荷与过程实物账混淆。

物流登记须保留完整湿空气入口质量及完整压缩空气、尾气和放空气质量，并有实测H2O、CO2及微量物种。O2/N2/Ar资源和排放流卡是这些相同物流的组分投影，不得在物种合计上再叠加整份环境空气或放空气质量。湿残渣或废水整份载体已含水和杂质；物种分析是组分或影响记录，不是附加载体质量。热负荷及电功不进入物料质量合计。压缩机、中冷器及预净化冷却的各实际冷凝排水须分别计量，保留库存变化及实际接收方；compressor_condensate流卡只能在保留独立排水账后汇总兼容的空气工艺冷凝水。吸附湿度随再生气返回时为蒸气，不得虚构液态冷凝水。分配前独立记录全部气液状态损失。

跨越选定厂门的实供及返回容器须按实际材料、容器编号、皮重、内容物、余液、交接移动及期初期末库存独立登记，不得计入验收气体质量。若容器或处理化学品实际跨界，须先增加每项独立原子交换及身份才能完成数据集。排除钢瓶灌装或按复用服务平均负荷，均不能抹去实物容器移动或预设寿命。本规则不规定容器材料或数量。

### 过程：一体化低温空分（`asu`）


#### 输入

##### 产品流

###### 场址电力 (`electricity`)

本身份仅用于实际CN地区到用户的1–35 kV电网平均供电。记录供方损耗边界及变压；其他地区、电压或供电路线须另核身份。空气压缩、再生、制冷、氩精馏、液化及供货压力调节分别保留阶段电表记录。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：cp_energy中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 外购冷却补充水 (`cooling_water`)

仅用于实际自来水；本参考配置不主动加药。计量跨厂界净补充量，不是循环水流量。由水表转为kg须测定密度并核对供方质量基准。

- 选定流：自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_water中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 预净化分子筛更换 (`zeolite_adsorbent`)

采集一种实供颗粒牌号，包括粘结剂、水分、组成、供方规格和实际更换服务周期。该数量为配制吸附剂质量，不是纯沸石质量；不预设13X配方。

- 选定流：可再生沸石分子筛颗粒
- 流属性/单位：质量 / kg
- 数量规则：cp_consumables中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 条件适用的预净化氧化铝 (`alumina_adsorbent`)

仅在独立安装该吸附剂时适用；采集实际牌号、粘结剂、水分和服务周期。不得替代为冶炼用氧化铝或CAS矛盾记录。判定无此投入须有设备或物料记录。

- 选定流：活性氧化铝吸附珠
- 流属性/单位：质量 / kg
- 数量规则：cp_consumables中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 进气滤芯更换 (`inlet_filter`)

一种组装滤芯牌号；采集材料组成及更换时干质量。不得用活性炭或超滤膜替代该身份。

- 选定流：机械式进气滤芯
- 流属性/单位：质量 / kg
- 数量规则：cp_consumables中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 矿物润滑油 (`lubricating_oil`)

仅适用于实际石油馏分润滑油。采集配制牌号、领用量和库存变化；排除合成PAO及蜡溶剂润滑剂。原件热值元数据不是燃烧或数量默认值。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_consumables中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

##### 废物流

##### 基本流

###### 环境氧气取入 (`oxygen_intake`)

环境空气中的O2组分，为空气资源取入。使用实测进气量及组成；不得当成外购氧气或氧排放。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_air中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 环境氮气取入 (`nitrogen_intake`)

环境空气中的N2组分，为空气资源取入；不是不含N2的总氮、氨、NOx或肥料氮。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_air中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 环境氩取入 (`argon_intake`)

环境空气中的天然非放射性氩，为空气资源取入；不是放射性惰性气体汇总或氩40活度流。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_air中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`


#### 输出

##### 产品流

###### 验收气态氧参考输出 (`gox`)

按实际压力调节后，在声明厂门交付的最终气态O2产品。记录实际纯度与水分；参考质量为实供气体质量，含经证实的微量杂质，不含容器和管道。不得再建同UUID的中间产品输出。

- 选定流：氧气 `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_products`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 验收气态氮联产品 (`gan`)

同一低温空分装置的最终气态N2；独立计量厂门验收质量。所选原件气体身份的质量参考系数为1.0，保留GLO生产组合字段和保护气氛用途说明。用途不是专属牌号或制造商规格。原件不证明低温生产路线、实际纯度、压力或供方，须另行核实。不得用灌装排放补充气服务替代验收商品气。

- 选定流：氮气 `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_products中本产品实际验收厂门质量 / G；保留完整实物比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_products`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 验收气态氩联产品 (`gar`)

仅用于实际分离得到的气态Ar，含精馏与压力调节。宽广气态身份不证明纯度、路线或供方数据；不含人为混配焊接气。

- 选定流：氩气 `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_products中本产品实际验收厂门质量 / G；保留完整实物比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_products`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 验收液态氧联产品 (`lox`)

在声明厂门完成液化及散装装载的最终液态O2。采用罐体称重或经校准的液体质量计量。所选原件明确为液态分子氧，质量参考系数为1.0。水产育苗用途说明未给出专属牌号、制造商或生产路线限制，不得由用途示例推断医用纯度或低温供方。按工厂记录确立实际路线、牌号、组成、压力、温度及厂门。

- 选定流：液氧 `2e810cb4-86c3-4f0c-aad9-ccd73443338e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_products中本产品实际验收厂门质量 / G；保留完整实物比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_products`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 验收液态氮联产品 (`lin`)

所选身份要求证实纯度≥99.9%、液态空气分馏路线及原件GJB 3403A-2019规格；这是记录适用条件，不是通用纯度默认值。记录实际温度、压力及质量。其他牌号须另核身份。

- 选定流：液氮 `dd17be27-229a-4236-ae93-29835cf7e1a8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_products中本产品实际验收厂门质量 / G；保留完整实物比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_products`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 验收液态氩联产品 (`lar`)

氩精馏所得最终液态Ar，包括实际液化、储存及装载。保留实际实物质量，不乘环境负荷分配份额。

- 选定流：液态氩 `e34ce81d-4b72-4ea7-b914-9ca973e2f017`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_products中本产品实际验收厂门质量 / G；保留完整实物比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_products`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

##### 废物流

###### 废分子筛 (`spent_sieve`)

实际拆出的分子筛颗粒，保留水分、粘结剂、捕获杂质及可能油污染。单独称量并声明接收处理；原件身份保留locationOfSupply CN-JX-SRS，不确定处理路线。仅当实际产生或供给地点匹配时采用该绑定；其他地点须核实兼容身份，同时保留实际废物数量。

- 选定流：废分子筛 `2328c994-b537-46f8-81a2-60cdbe77a095`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_waste中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 废氧化铝吸附剂 (`spent_alumina`)

仅在单独安装并拆出氧化铝时适用。湿干基准、污染状态和接收方与沸石废物分别记录；无此废物须有依据。

- 选定流：废活性氧化铝吸附珠
- 流属性/单位：质量 / kg
- 数量规则：cp_waste中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 废进气滤芯 (`spent_filter`)

组装滤芯及其捕获粉尘；保留组成和湿干基准。另行称量的拆出粉尘不得再计入滤芯质量。不得替代为泛称颗粒物排放。

- 选定流：废机械式进气滤芯
- 流属性/单位：质量 / kg
- 数量规则：cp_waste中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 废润滑油 (`used_oil`)

与水分离的废润滑油；采集污染、水分及接收设施。含油废水、油泥和润滑油产品是不同流。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_waste中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 空压机冷凝水送处理 (`compressor_condensate`)

由压缩机、中冷器及预净化冷却各实际排水的进气水分冷凝形成，兼容汇总前保留各排水，测定酸度、金属及可能油含量。单独计量，明确接收入口条件及处理。硅或锰工艺废水及已处理出水身份不相容。

- 选定流：空压机冷凝废水
- 流属性/单位：质量 / kg
- 数量规则：cp_water中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 冷却排水送处理 (`cooling_bleed`)

仅用于送往处理运营方的冷却排水。声明溶解盐、温度、流量及接收方。同一实物水流不得再当直接淡水排放重复计量。

- 选定流：未加药冷却系统排放废水
- 流属性/单位：质量 / kg
- 数量规则：cp_water中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

##### 基本流

###### 返回空气的氧 (`oxygen_return`)

进入室外空气的尾气、再生吹扫、拒收产品及储存装载损失中的实测O2。明确声明室外空气子介质未特指；若确定更具体受纳介质则另核身份。不是可销售联产品。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_air中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 返回空气的二氮 (`nitrogen_return`)

实际返回室外空气的N2，包括先在内部用于再生或冷却后排出的未销售氮。内部部分既不是外购产品也不是销售输出。不得选不含N2的总氮。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_air中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 返回空气的氩 (`argon_return`)

最终室外尾气或损失中的实际天然Ar，不是放射性惰性气体。使用实测组成，不因LCIA未表征而删掉实物质量。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_air中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 排向空气的水蒸气 (`evaporated_water`)

净冷却蒸发及另行识别的返回进气水分。水账保留总湿度项；不得把循环水流量计作蒸发。室外空气，子介质未特指。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：cp_water中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### 直接返回淡水的液态水 (`direct_water`)

仅用于实际直接淡水排放，采用原件Volume/m3参考。记录受纳水体、实测温度及密度、排放许可和污染物分析。该UUID不是取水或污水处理服务；实际污染物须另列原子流。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：cp_water中本原子流实际跨界数量 / G；未分配实物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

## 7. 分配与共产品处理

低温精馏同时产出可分别识别的物种和状态物流。分别保留（a）未分配实物过程图及物种、水和物料平衡，（b）负荷分配账。`eiga-air-gases-pcf-2026`第4.6节支持按各产品生产所需电功率分配且不重复计量；其PP33例子不适用于全部氩、压力或纯度，本规则不采用该例系数。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | asu | 仅在boundary_applicability内应用；已分配数据集保留完整配置及厂门限定。先将可独立计量的产品特定压缩、液化、氩净化和装载活动直接归属该产品及状态，再从共同池扣除；每个电表只计一次。细分须反映真实可分离设备，不得假设拆分。 | eiga-air-gases-pcf-2026; linde-air-separation-2019 |
| allocation_power | shared_pool | 对剩余共同池，采用覆盖所有实际可销售物种状态i的场址工程电功率需求模型。权重W_i = m_i × e_i；m_i为厂门验收产品质量，e_i为同边界、纯度和压力下有据且可比的比电功率需求，单位kWh/kg。份额a_i = W_i / sum(W_j)。求和包括所有实际GOX/GAN/GAR/LOX/LIN/LAR；无某产品须有依据。权重及分母须为正，不得用产品热值或随意等质量拆分。 | eiga-air-gases-pcf-2026 |
| allocation_conservation | burden_ledger | 对每项适用的共同环境交换或负荷向量C，分配B_i = D_i + a_i × C；D_i为直接归属活动。sum(B_i)须等于sum(D_i) + C，比结果为B_i / m_i。保存模型、校准或工程依据、不确定性、适用期间及每项分配决定。非电共同交换须有因果归属依据，或经独立审查的合理扩展。 | eiga-air-gases-pcf-2026 |
| allocation_physical | physical_ledger | 实物输出保留m_i，或在GOX归一化联合过程保留m_i / G，绝不能变成a_i × m_i。组分平衡含实测纯度杂质、库存、拒收及损失；内部链接等量抵消。已分配产品数据集不得声称全部联合联产品只属于该产品。 | eiga-air-gases-pcf-2026; linde-air-separation-2019 |
| allocation_review | method_selection | 完整因果电功率依据不足时，保留完整联合清单，将产品特定负荷结果标为待定，不得编造权重。经济或其他替代分配须显式独立方法审查及实际价格期间依据。不自动给予避免生产信用或自由负荷归属。 | eiga-air-gases-pcf-2026 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

G为共同采集期间厂门验收最终GOX质量，单位kg。原始记录保留完整年度场址总量；下列汇总字段只说明最终共同分母，不代替原始数据。采用完整运行年，包括启停、不合格生产、维护、装载损失及期初期末库存；较短覆盖须披露限制（`eiga-air-gases-pcf-2026`第4.3节）。不得由单一设计点或单厂观察推导通用配方。每条记录保留时间、仪表或批号、不确定性、负责人员及来源单据。

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_products | asu | 参考及联产品输出 | 仪表及交接记录 | 物种；状态；SKU纯度；各杂质质量或摩尔分数；水分；质量体积；绝压；温度；体积参考状态；压缩因子；拒收损失；期初期末库存；验收GOX质量G | 经校准气体质量流量计，或有可追溯密度组成温压压缩因子换算的气体体积；液体质量流量计或扣皮重余液称量。各状态分别核对罐平衡、生产及验收交接。 | kg；保留原始体积 | 连续计量；每次交接；月度核对 | 完整共同运行年 | 一个指明的工厂或机组及声明厂门 | 每 1 kg 参考流 | 校准、密度方法、分析证书、交付库存核对及不确定性 |
| cp_energy | asu | 电力 | 仪表层级及账单 | 电表及供电电压；供方；kWh；共同和产品特定阶段电表；运行负荷；再生周期；电功率需求模型e_i；共同池归属 | 经校准电表层级与账单核对，各阶段独立记录。变压及损耗只计一次；kWh转MJ。按实际纯度、压力及输出组合的设备和电力记录验证因果模型。 | kWh；MJ；分配依据kWh/kg | 连续或班次总量；月度仪表账单核对 | 与cp_products同运行年及设备配置 | 同一空分装置；指明公用工程及输出状态 | 每 1 kg 参考流 | 电表校准、账单、阶段核对、模型验证及不确定性 |
| cp_air | asu | 资源取入及大气返回 | 气体计量及实物平衡 | 进气排气仪表；物流位置；气体体积；温压压缩因子；湿干基准；N2/O2/Ar组成；湿度；CO2及其他实际环境杂质；尾气吹扫放空；产品损失 | 采用经校准气表及代表性组成采样测入口和每个实际出口，包括启停装载事件；按可追溯密度或组成计算各组分kg。环境杂质总返回及实际物种迁移净生成另行记录。 | kg；原始气体体积及温压组成 | 连续流量；覆盖运行的代表性组成；每次损失事件 | 与cp_products相同完整期间 | 指明进气及每个实际大气排出点 | 每 1 kg 参考流 | 气表及分析仪校准、采样点、物种平衡、湿度修正及不确定性 |
| cp_water | asu | 冷却补水、冷凝、排污、蒸发及直接排放 | 水平衡、仪表及分析 | 物流及接收方；水体积密度温度；补水；冷凝；蒸发；排污；直接排放；油、溶解盐、金属、pH及其他实际识别污染物；库存变化 | 经校准水表或称量；各独立排水及实际接收方配对采集流量浓度。含进气湿度和库存核对水质量。蒸发按实测或闭合实测平衡计算并披露残差不确定性，不采用固定损失率。 | kg；m3；原始实验室单位 | 连续或班次流量；代表性配对采样；月度平衡 | 与cp_products相同完整期间 | 指明冷却系统排水及实际处理或淡水接收方 | 每 1 kg 参考流 | 校准、密度、流量采样同步、废水接收条件及水平衡残差 |
| cp_consumables | asu | 各吸附剂、滤芯及润滑油 | 收货、库存及维护记录 | 行及供方SKU；湿干实供质量；组成粘结剂添加物；水分；实际服务周期和库存变化；设备 | 称量更换物或按一种材料牌号核对可追溯收货、领用及库存记录。覆盖实际更换服务期间，归属被服务设备并保留周期依据，不得每个运行周期都将整床装料当成消耗。 | kg | 每次收货更换；月度库存核对 | 实际完整服务期间并显式归属采集年 | 同一空分装置指明设备 | 每 1 kg 参考流 | 称量库存轨迹、供方SDS规格、更换服务日志及不确定性 |
| cp_waste | asu | 各独立拆出固体或油废物 | 称量及接收联单 | 行；实际组成；水分油污染；拆出质量；进出库存；接收方及接收路线；滤芯粉尘质量划分 | 各隔离废物在边界称量，并与维护拆出及授权接收记录核对。氧化铝、分子筛、滤芯及油不得合并；拆出粉尘不得重复计量，不预设回收信用。 | kg | 每次拆出转运；月度核对 | 同一采集年及实际材料服务期间 | 指明废物产生及转移点 | 每 1 kg 参考流 | 秤校准、废物联单、污染测试、接收条件及库存核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| joint_normalization | 所有清单行 | 联合归一化数量 = 实测跨界交换量 / G；G = 同期间验收最终气态氧质量，单位kg。保留原始总量、各仪表单位及实测单位换算。GOX输出恰为1千克。这是联合清单归一化，不是产品特定已分配结果。 | cp_products; cp_energy; cp_air; cp_water; cp_consumables; cp_waste | 每 1 kg 参考流的联合实物清单 | eiga-air-gases-pcf-2026 |
| component_balance | physical_ledger | 对组分k：入口 + 期初库存 = 各实测产品质量乘其组分k质量分数之和 + 外部废物空气水出口 + 期末库存。呈现实物内部等量链接及含计量不确定性的残差。不得以标称大气组成或默认纯度强行闭合。 | cp_products; cp_air; cp_water; cp_consumables; cp_waste | 有明确残差的物种物料水平衡 | linde-air-separation-2019; jrc-cww-bref-2016 |
| gas_mass_conversion | gas_volume_basis | 气体组分质量 = 原始实测气体体积 × 同温压压缩因子湿干组成基准下的有效气体密度 × 组分质量分数。标况体积仪表使用自身声明的参考温压和水分约定；按实测环境压力记录将表压转为绝压。 | cp_products; cp_air | 规定气体或组分的可追溯kg | eiga-air-gases-pcf-2026 |
| liquid_mass_conversion | liquid_basis | 液体产品质量 = 实测液体体积 × 有效实际液体密度，或适用时装载总质量 − 皮重 − 保留余液。显式保留实际计量边界及期初期末库存修正。 | cp_products | 验收液体产品kg | eiga-air-gases-pcf-2026 |
| water_load | cp_water | 实际污染物负荷 = 对匹配期间的配对浓度 × 排水体积求和，并采用实际实验室单位换算；识别化学物种及受纳方。COD或TOC、总氮汇总检验不能替代独立物种身份，重叠总量不得相加。 | cp_water | 原子物种负荷及直接排放体积 | jrc-cww-bref-2016 |
| electricity_conversion | electricity | MJ电量 = 实测kWh × 3.6；任何分配前，先将共同电表及直接归属电表与场址边界总量核对。 | cp_energy | 联合及直接归属电力MJ | eiga-air-gases-pcf-2026 |
| burden_allocation | burden_ledger | 对真实期间总量应用allocation_subdivide、allocation_power及allocation_conservation。保存每个m_i、e_i、W_i、a_i、直接归属D_i及共同C。产品特定结果及不确定性敏感性与联合清单分别报告。 | cp_products; cp_energy | 守恒的产品特定负荷账 | eiga-air-gases-pcf-2026 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | 所有清单行 | 每项非零交换须有一个精确实物身份及兼容原件单位和供方基准。非参考行空UUID是披露身份缺口，不能用邻近物质、处理路线或修正流替代。 | 原始身份记录及供方SDS接收方依据 |
| dq_scope | asu | 核实实际参考配置。燃烧公用工程、化学制冷剂、冷却水加药、氢催化剂、外购气体或新排放物种不得隐去。维护颗粒释放按实际粒径及收集依据检查；只用互斥PM粒径分组，捕获粉尘与空气释放分开。 | 过程图、设备登记、SDS物料单、排水放空调查及维护记录；eiga-asu-environment-2025 |
| dq_period | 所有采集协议 | 场址、期间和库存一致。耗材保留实际完整更换周期；归一化前保留原始收货总量及换算。缺失记录标为待定，不是实测零值。 | 校准及原始数据审计；eiga-air-gases-pcf-2026 |
| dq_balance | physical_ledger | 按实测杂质库存信息核对整厂总质量、O2/N2/Ar、水及物料平衡。允许残差由实际计量不确定性确定，调查无法解释的差异；不得编造数值容差或强行闭合。 | cp_products; cp_air; cp_water; cp_consumables; cp_waste |
| dq_allocation | burden_ledger | 在实际状态、压力纯度及输出组合下验证完整电功率需求依据，共同负荷及各原始电表守恒。流属性系数和文献基准不是前景默认值。 | cp_energy; cp_products; eiga-air-gases-pcf-2026 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | gox | 按实际设备供给记录核实boundary_applicability全部配置及厂门条件。要求一个1千克GOX参考输出；核实厂门净G > 0、低温气态路线、证实组成、全部限定信息及原件Mass/kg。拒绝用基本氧流身份或液体参考替代气体。 | eiga-air-gases-pcf-2026 |
| validate_joint_outputs | asu | 核实全部实际气液物种输出、独立验收质量、库存变化、不合格损失及状态。无产出须有依据；实物联产品质量不得乘分配份额或隐去。 | eiga-air-gases-pcf-2026; linde-air-separation-2019 |
| validate_ledger | physical_ledger | 要求实际过程图、等量内部链接、总质量及组分水平衡及基于不确定性的残差审查；环境O2/N2/Ar取入和返回不得当成商品销售。环境CO2返回不是回收商品CO2或虚构去除信用。 | linde-air-separation-2019; eiga-asu-environment-2025 |
| validate_uuid_units | 所有清单行 | 按原件核对各身份、状态、物种及存在时的CAS、参考属性及单位。采用的上游或处理供方还须有数量、组成和边界兼容性；身份检索成功不足。显式保留未决精确非参考身份。 | eiga-asu-environment-2025 |
| validate_allocation | burden_ledger | 核对直接归属与共同池拆分、完整电功率模型输入、正权重、份额和为一、各共同负荷守恒及不同产品分母。缺少因果依据阻塞已分配产品结果，不阻塞诚实保留联合实物记录。 | eiga-air-gases-pcf-2026 |
| validate_emissions | site_survey | 核对放空、水接收方分析及维护释放。送处理废物不能再算直接环境排放。数据集完成前，实际新识别的化学品、制冷剂、燃料或排放须为另有据的原子流；即使温室气体指标排除，真实生物CO2也保留。 | eiga-asu-environment-2025; jrc-cww-bref-2016 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明厂门低温空分气体前景数据，含完整联合过程及另有实证的已分配产品结果 |
| allowed_use | 匹配实际物种、状态、纯度、压力、水分、厂门、场址期间及供方单位；采用分别披露的共同及产品特定负荷 |
| excluded_use | 全部工业气体代理；制氢或CO2回收；PSA膜法；化学溶液或混合气；钢瓶客户物流；未审查分配；将不完整身份前景依据冒充完整 |
| required_metadata | PCR身份版本；数据集参考产品及单位；完整限定信息；运行期间配置；清单协议来源ID；供方处理边界；平衡；分配模型及不确定性 |
| required_quality_disclosure | 原始实测总量及单位换算；物料水平衡残差；实际覆盖及缺失精确身份；各条件流实际存在或不存在；联合与已分配表示；与EIGA碳足迹边界相比的厂门及完整LCI差异 |
| update_trigger | 工艺公用工程吸附剂改变；纯度压力状态改变；新增输出或接收方；仪表密度供方修正；新增污染物；分配模型期间更新；相关技术来源修订 |

## 11. 数据源

以下外部来源仅支持方法规则，不提供默认数量。检索日期为2026-10-13。EIGA167采用实际2026年7月的167/26版本，其客户厂门碳足迹排除及PP33系数不作通用LCI默认值。CWW仅支持化工物流登记和监测原则，不声称其对空分装置的特定法律BAT适用、排放限值或通用污染物配方。

| source_id | type | reference | 用途 |
| --- | --- | --- | --- |
| eiga-asu-environment-2025 | handbook | EIGA，《空分装置的环境影响》，Doc94/25，2025年2月。https://www.eiga.eu/uploads/documents/DOC094.pdf | 第2.1节低温范围；第4.3节环境因素、过滤压缩、冷却排水、维护及废物；附录2工艺图。实际物流调查和采集，不采用示例能耗或损失默认值。 |
| eiga-air-gases-pcf-2026 | handbook | EIGA，《建立空气气体产品碳足迹的方法》，Doc167/26，2026年7月。https://www.eiga.eu/uploads/documents/DOC167.pdf | 第4.1节，印刷5/PDF8页，物种状态范围及质量压力纯度声明单位；第4.3节年度数据；第4.5–4.6节，印刷6–8/PDF9–11页，清单、电功率分配守恒及PP33限制。明确披露本PCR厂门与完整LCI差异。 |
| linde-air-separation-2019 | handbook | 林德工程，《空分的历史与技术进步》，2019。https://assets.linde.com/-/media/global/engineering/engineering/home/products-and-services/process-plants/air-separation-plants/air-separation-plants-history-and-technological-progress-2019.pdf | 印刷/PDF10–11页：压缩、水冷、可再生分子筛净化、透平制冷、内部产品泵送及O2/N2/Ar精馏返回链接。仅生产者技术示例，无固定压力配方或收率。 |
| jrc-cww-bref-2016 | official_guidance | 欧盟委员会JRC，《化工行业公共废水和废气处理管理系统BREF》，2016。https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | BAT2，印刷543/PDF573页：源过程物流登记及特征；BAT3/4，印刷544/PDF574页：流量参数监测及配对浓度流量依据。适配物理分离，不自动套法律限值或频率默认值。 |

