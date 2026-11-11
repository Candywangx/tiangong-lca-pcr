---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.wood-derived-steam-activated-carbon-powder
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 木基蒸汽活化粉状活性炭制造

## 1. 范围与适用性

一种实际未浸渍木基蒸汽活化粉炭牌号的完整制造，从实际供入木质原料至完整整理后的固定工厂首次验收。包括炭化、活化、粉磨、实际均化/配制、治理及全部真实链接生产者；第9节完整条件均须保留。排除未活化木炭、颗粒/颗粒设备、煤基产品、用后再生、化学活化、酸洗或浸渍变体及仅成品改包装；不声称整个35499范围、等同吸附功能或医疗/认证效能。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.wood-derived-steam-activated-carbon-powder |
| classification_refs | CPC 3.0 35499; narrower product and route boundary |
| covered_products | 一种实际未浸渍木基物理蒸汽活化粉炭牌号 |
| excluded_products | 未活化炭；煤/椰壳/泥炭及颗粒/压块路线；化学/酸洗/浸渍/再生变体；成品重包 |
| representative_product | 按声明整物状态首次验收的木基蒸汽粉炭 |
| production_route | 木材预处理→炭化→破碎/蒸汽活化→粉磨→实际均化/配制→牌号验收及实际包装；完整治理/公用链接 |
| market_state | 工厂内完整粉体；实测水分/灰分/牌号；外包装另账 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供下游工业纯化用完整合格木基活化粉炭 |
| How much | 1 kg |
| How well | 实际物化牌号、蒸汽/粉体/未浸渍状态及原生/提供者匹配 |
| How long or cycle | 一次原始首次验收队列；不推定吸附寿命或等效服务 |
| reference_flow_link | finished_carbon |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生物炭基粉状活性炭 `8273217c-f2f4-46e2-b54a-022123ca32fb` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际生物质/木材来源及供入预处理; 完整粉体牌号及未浸渍蒸汽状态; 实际炭化活化与整理接口; 实测水分灰分及粒径方法; 实际均化及全部真实牌号组分; 固定首次关口原事件Q0及皮重; 完整供应者地理期间及提供者单位; 原料在制成品混合及自产历史负荷向量; 反应气体水相元素及能量平衡; 完整真实热治理产汽及废水生产者; 完整资产包装接收及服务历史; 物种介质方法来源限制及不确定性 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 固定完成牌号关口的校准整批净质量按cp_acceptance锁定原首次事件Q；水/灰分为嵌套组成，不用纯碳或皮重替代。 |
| extensive_units | 各清单行 | 行声明广延属性 | kg; m3; MJ; Item(s) | 各行实际单位与提供者兼容：质量kg、燃气状态体积m3、电力原生净热值MJ、完整物品件数；kWh×3.6仅单位换算。不得把件数、电/气量当质量。 |
| physical_mass_phase | 真实质量流及分账 | 整物质量与实测状态 | kg | 整物、元素、反应生成/消耗及水相独立，密度/焓/灰分/含水/反应程度均不设默认；不缩放实物闭合以满足负荷分配。 |
| stock_service | 资产/包装/废物 | 实物与提供者服务分账 | kg; Item(s) | 实际整物数量Qt与有据归属服务A/Q分别保留；Qt/Qanalysis不自动成为每队列处理需求，未知份额/原Q仍待解决。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际未处理木质原料与完整供应物；实际水/蒸汽/燃料/吹扫/设备/包装 |
| starting_condition_role | foreground_material_receipt |
| product_classification_scope | 有限35499延续性分类推断 |
| recursive_input_rule | 同类已验收炭返回保留原谱系/负荷不新增Q；真实购入炭不能替代完整木基制造 |
| upstream_dataset_requirement | 匹配完整材料/状态/地理/广延单位及真实供应者边界；完整生产者和内嵌/分解历史不重叠 |
| disclosure | 完整制造/气液治理/公用/股存/服务/原Q/分类及所有第9节条件 |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| complete_route | 真实木材至完整粉炭制造及实际全部链接生产者、失败/零产出/整理/包装服务均须纳入；第9节完整条件具有规范性。 | `calgon-acticarbone-2017`; `gu-wood-carbon-2018` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| carbon_line | 完整木基活化粉炭制造及原队列服务 | required | 实际匹配完整路线及完整真实生产者 | foreground | 1 kg reference flow |

### 过程：完整木基活化粉炭制造 (`carbon_line`)

#### 输入

##### 产品流

###### 未处理木片 (`wood_chips`)

一种实际完整木质原料，记录来源、处理状态、树种、水分、灰分及供应者预处理。纳入真实林业或残余原料归属及运输；残余物名称不代表上游负荷为零。

- 选定流: 未处理木片
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_materials采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 工艺用水 (`process_water`)

仅实际单独供入的水；区分原料水分、冷却淬水、锅炉/冷却补水、内部循环及购入蒸汽。

- 选定流: 工艺用水
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_utilities采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 工艺蒸汽 (`steam`)

跨生产者界面的实际完整蒸汽，记录实测质量、压力、温度、干度与焓。现场产汽装置仍须作为完整链接单元。

- 选定流: 工艺蒸汽
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_utilities采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 交流电 (`electricity`)

真实交付点的匹配生产线及辅助电力，保留原生净热值/MJ；kWh×3.6仅作单位换算，不是燃料热量或效率。实际电压、地理、供电结构和损耗须匹配提供者。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_utilities采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 管道天然气 (`natural_gas`)

仅纳入的产能、炭化、活化或治理实际使用的燃料。保留仪表基准状态、组成及完整链接燃烧负荷；不设天然气热值默认。

- 选定流: 管道天然气
- 流属性/单位: 体积 / m3
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_utilities采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 丙烷燃料 (`propane`)

仅实际丙烷供应。Gu的中试产汽不证明每厂都用丙烷；实际液化石油气混合物须有独立完整混合物身份与清单。

- 选定流: 丙烷燃料
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_utilities采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 液氮 (`nitrogen`)

仅实际完整液相供应并纳入汽化和交付负荷。气态吹扫是内部相态/用途账，不是第二笔氮采购；实际其他供货相态须匹配其接口。

- 选定流: 液氮
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_materials采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 木材炭化反应器 (`carbonizer`)

实际完整反应器物品及服务历史；安装/备用/退役实物质量与件数独立于归属资本服务需求。不假定单机质量或寿命。

- 选定流: 木材炭化反应器
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 以兼容完整提供者单位记录有据归属服务A/原正值Q；完整实物质量/件数/历史独立保留；cp_assets。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 回转活化炉 (`calciner`)

实际完整活化炉及兼容提供者单位；真实维修与承继服务只纳入一次。中试或工程放大不是固定工业寿命或设备尺寸。

- 选定流: 回转活化炉
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 以兼容完整提供者单位记录有据归属服务A/原正值Q；完整实物质量/件数/历史独立保留；cp_assets。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 活性炭粉磨机 (`grinding_mill`)

实际完整整理粉磨机；保留全部安装/物品历史与有据服务需求，不把整机重复计给每一队列。

- 选定流: 活性炭粉磨机
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 以兼容完整提供者单位记录有据归属服务A/原正值Q；完整实物质量/件数/历史独立保留；cp_assets。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 粉磨机衬板 (`grinding_liner`)

一个实际磨损部件，记录材质、尺寸、质量及更换；不猜测磨耗率或采用纯金属代理。

- 选定流: 粉磨机衬板
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 以兼容完整提供者单位记录有据归属服务A/原正值Q；完整实物质量/件数/历史独立保留；cp_assets。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 粉炭收集过滤元件 (`filter_element`)

仅实际安装的完整元件，并记录基材与服务。来源不证明统一安装袋式除尘器；其他真实治理设备须各有特定行。

- 选定流: 粉炭收集过滤元件
- 流属性/单位: 质量 / kg
- 数量规则: 以兼容完整提供者单位记录有据归属服务A/原正值Q；完整实物质量/件数/历史独立保留；cp_assets。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 可复用粉炭吨袋 (`powder_bag`)

一种实际完整购入袋配置，供应者内含内衬负荷只计一次。声明材质/BOM、实测净皮重、所有权、物品群和服务；不推定聚合物、重量或复用寿命。

- 选定流: 可复用粉炭吨袋
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 以兼容完整提供者单位记录有据归属服务A/原正值Q；完整实物质量/件数/历史独立保留；cp_pack。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 归还的可复用粉炭吨袋 (`returned_bag`)

接收方实际归还的可用完整物品，保留原交接ID；不新增产品Q、原生袋采购或避免生产抵扣。

- 选定流: 归还的可复用粉炭吨袋
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 记录带原谱系及接收者的完整实物Bt，实物展示Bt/Qanalysis；不新增Q或制造/处理需求；cp_pack; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

##### 基本流

###### 取自大气的空气 (`ambient_air`)

真实纳入反应器、热处理与燃烧的实际空气吸入。O2/N2/水为嵌套实物组成，不重复完整空气投入；内部循环另列。

- 选定流: 取自大气的空气
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_streams采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_streams`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

#### 输出

##### 产品流

###### 生物炭基粉状活性炭 (`finished_carbon`)

实际整理/均化后固定首次牌号验收关口的完整合格木基蒸汽活化粉炭。包含实测灰分、水分及已准入牌号组分；不得用纯碳当量质量。

- 选定流: 生物炭基粉状活性炭 `8273217c-f2f4-46e2-b54a-022123ca32fb`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 kg
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_acceptance`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 对外供应的木材热解气 (`pyrolysis_gas_sale`)

仅有实测组成、状态及真实接收功能的对外完整气体产品。内部燃气利用是须保留全部燃烧负荷的内部链接流，不是本项销售或假定抵扣。

- 选定流: 对外供应的木材热解气
- 流属性/单位: 质量 / kg
- 数量规则: 记录实际完整产出Pg及原谱系，完整实物Pg/Qanalysis独立于环境负荷分配向量；cp_streams; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_streams`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 退回供应者的蒸汽冷凝水 (`condensate_return`)

实际对外返回，记录毛质量、组成、温度/焓及提供者水边界；不自动抵扣新水，也不是空气排放。

- 选定流: 退回供应者的蒸汽冷凝水
- 流属性/单位: 质量 / kg
- 数量规则: 记录实际完整产出Pg及原谱系，完整实物Pg/Qanalysis独立于环境负荷分配向量；cp_utilities; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 随粉炭供出的可复用吨袋 (`supplied_bag`)

实际交付完整容器，独立于粉炭净质量及Q；保留供应者/接收者保管及全部归还/报废，不使其成为共产品功能。

- 选定流: 随粉炭供出的可复用吨袋
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 记录带原谱系及接收者的完整实物Bt，实物展示Bt/Qanalysis；不新增Q或制造/处理需求；cp_pack; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

##### 废物流

###### 未活化木炭拒收物 (`unactivated_reject`)

记录水分/灰分与去向的实际对外固体拒收物；内部再加工不是对外出口。

- 选定流: 未活化木炭拒收物
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_waste; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 拒收活性炭粉 (`activated_reject`)

保留原状态及历史的实际不可逆废弃成品/中间粉炭。内部回收细粉不产生废物出口或新的首次验收事件。

- 选定流: 拒收活性炭粉
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_waste; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 送完整处理的木材炭化尾气 (`carbonizer_gas`)

一次实际完整气体交接，载气、水汽及有机/无机组成嵌套。必须链接完整接收治理/产能单元；该单元后最终释放只计一次。

- 选定流: 送完整处理的木材炭化尾气
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_streams; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_streams`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 送完整处理的蒸汽活化尾气 (`activation_gas`)

实际治理前完整气体接口。Gu测得的氧化器前数据不是最终室外排放，不能替代实际氧化器投入、反应产物、热量及出口。

- 选定流: 送完整处理的蒸汽活化尾气
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_streams; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_streams`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 送处理的木材炭化冷凝液 (`carbonization_condensate`)

仅实际收集的完整液体，水/有机物/固体嵌套并有真实接收者。既不是纯水，也不是用于配平的残差流。

- 选定流: 送处理的木材炭化冷凝液
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_waste; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 送处理的活性炭工艺废水 (`wastewater`)

仅在排水实际合流时记录完整接收物流；保留原排水、组成及全部真实处理负荷。不得因来源LCA遗漏而删除处理。

- 选定流: 送处理的活性炭工艺废水
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_waste; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 送处理的分离活性炭粉尘 (`captured_dust`)

仅物理独立的散装粉尘出口。废滤材或袋中附着粉炭嵌套在完整污染物品中，不在本行重复出现。

- 选定流: 送处理的分离活性炭粉尘
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_waste; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 受污染的废粉炭过滤元件 (`spent_filter`)

接收者完整物品质量一次包含基材、附着粉炭/液体及水；组分为分析分账，不是虚构的额外废物出口。

- 选定流: 受污染的废粉炭过滤元件
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_assets; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 受污染的废弃粉炭吨袋 (`spent_bag`)

一次实际完整污染袋出口，与可用归还袋区分；保留接收者/提供者实际全量及不重叠队列服务向量。

- 选定流: 受污染的废弃粉炭吨袋
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_pack; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 受污染的废粉磨机衬板 (`worn_liner`)

含附着粉炭及水分的实际完整磨损物品；除非事先实际分离，否则不再增设一笔粉炭出口。

- 选定流: 受污染的废粉磨机衬板
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_assets; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 废炭处理耐火衬料 (`spent_refractory`)

实际独立衬料废物，记录牌号、沉积物、水分及接收者；不推定退役等于原生更换，也不设默认寿命。

- 选定流: 废炭处理耐火衬料
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_assets; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### 分离的炭处理灰渣 (`separated_ash`)

仅实际物理分离的灰渣，记录真实残炭/水分及接收者。已留在产品或另一完整废物内的矿物灰分是嵌套组分，不再另记出口。

- 选定流: 分离的炭处理灰渣
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次，实物分析Qt/Qanalysis；另以兼容提供者单位记录有据非重叠队列处理需求A/Q；cp_waste; cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

##### 基本流

###### 排入空气的生物源二氧化碳 (`co2_bio`)

纳入治理后的实际最终生物源CO2，保留来源及完整碳平衡。不自动按碳中性处理或给予负储存抵扣。

- 选定流: 排入空气的生物源二氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的化石源二氧化碳 (`co2_fossil`)

真实燃料/治理生产者的实际最终化石CO2；保留完整燃烧接口及来源，不能只用CO2代表燃烧器。

- 选定流: 排入空气的化石源二氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的生物源一氧化碳 (`co_bio`)

实际最终生物源物种质量，不用来源燃烧代理，也不重计治理前气体。

- 选定流: 排入空气的生物源一氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的化石源一氧化碳 (`co_fossil`)

由实际气体组成及源谱系独立建立的最终化石物种质量。

- 选定流: 排入空气的化石源一氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的生物源甲烷 (`methane_bio`)

实际最终生物源CH4；不得复制来源LCI中的重复行或排放因子。

- 选定流: 排入空气的生物源甲烷
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的化石源甲烷 (`methane_fossil`)

实际最终化石CH4，包含声明边界内真实无组织或异常释放；未知不等于零。

- 选定流: 排入空气的化石源甲烷
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的氢气 (`hydrogen_air`)

仅实际最终H2。FTIR不能建立H2量；须有特定适用气体方法及匹配采样/校准和载气状态证据。

- 选定流: 排入空气的氢气
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `doe-permanent-gases-1990`

###### 排入空气的氮气 (`nitrogen_air`)

包含吹扫及载气来源的实际最终N2；其实物气体账与归属液氮生产需求区分。单靠FTIR不能测得N2。

- 选定流: 排入空气的氮气
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method3c`

###### 排入空气的氧气 (`oxygen_air`)

具有实测组成/状态的实际最终未反应O2；炭化、活化或燃烧消耗的氧另行核对。

- 选定流: 排入空气的氧气
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method3c`

###### 排入空气的水蒸气 (`water_vapour`)

实际最终水汽，独立区分供入水分/蒸汽、冷凝水及反应生成/消耗水。废蒸汽不自动成为淡水排放。

- 选定流: 排入空气的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的一氧化氮 (`no_air`)

实际分子NO；总NOx或以NO2计的报告不能直接建立本行。

- 选定流: 排入空气的一氧化氮
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的二氧化氮 (`no2_air`)

实际分子NO2，与NO及N2O区分；不得把总NOx与已分解组分叠加。

- 选定流: 排入空气的二氧化氮
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的一氧化二氮 (`n2o_air`)

仅单独测得的实际N2O；来源“氮氧化物”标签不能作为替换分子身份的许可。

- 选定流: 排入空气的一氧化二氮
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的二氧化硫 (`so2_air`)

核对燃料/原料硫及实际治理反应后的最终SO2；不假定统一来源浓度。

- 选定流: 排入空气的二氧化硫
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的含碳颗粒物 (`particulate_air`)

实际完整最终颗粒物，包含真实矿物部分，不用纯碳当量粉尘。干态可过滤PM不能证明全部湿态可凝结或雾滴质量；须区分基质、粒径部分及方法范围。

- 选定流: 排入空气的含碳颗粒物
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method5`

###### 排入空气的苯 (`benzene_air`)

仅采用适当分析物/基质方法建立的指定空气区室最终苯；不另加总VOC伴随质量。

- 选定流: 排入空气的苯
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的甲醛 (`formaldehyde_air`)

仅已建立采样损失、检出限与不确定性的实际最终甲醛。

- 选定流: 排入空气的甲醛
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的甲醇 (`methanol_air`)

仅实际最终甲醇；来源案例中存在只是筛查线索，不是本牌号或工厂的正值默认。

- 选定流: 排入空气的甲醇
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的苯酚 (`phenol_air`)

仅实际最终苯酚；区分真实气体、已收集冷凝液与送处理出口，不重计同一质量。

- 选定流: 排入空气的苯酚
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的乙醛 (`acetaldehyde_air`)

仅有特定方法及接收介质的实际最终乙醛；排除宽泛有机物篮子。

- 选定流: 排入空气的乙醛
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### 排入空气的萘 (`naphthalene_air`)

仅实际最终萘；保留相态及可凝结损失证据，不假定一项气体测定覆盖全部相态。

- 选定流: 排入空气的萘
- 流属性/单位: 质量 / kg
- 数量规则: 实测可归属交换量，按每 1 kg参考流经cp_species采集；以锁定原Q恰好相除一次，另保留完整实物交接/存量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

## 7. 分配与共产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_hierarchy | 分配前先细分/直接归属。其余共过程环境交换须逐项按每个交换与功能已证明的决定性物理因果关系归属；只有缺乏该关系的剩余多功能可采用有依据、条件/关口匹配的市场价值并作敏感性分析。全部气体/炭/共产品/废物实物量独立于份额。内部余热回收、处置、包装归还或来源声称不自动产生共功能或避免负荷。 | `ilcd-allocation-2010`; `gu-wood-carbon-2018` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | carbon_line | 成品牌号及首次事件 | 未归一化实际记录 | 批次; 事件ID; 整物净kg; 皮重; 水分; 灰分; 粒径方法; 牌号; 生物质来源; 蒸汽路线; 整理; 原ID | 质量负责人：实际完成整理和牌号验收后校准整批净称重；可追溯代表性水分/灰分/粒径采样，记录真实方法及不确定性。建立原生整物/状态匹配并锁定原事件，不用发货总量。 | kg | 每事件/批次；连续读数及完整存量期 | 全部匹配制造及原队列历史，包括失败/零产出 | 实际生产线、供应者及全部完整链接生产者 | 每 1 kg参考流 | 校准/方法/采样QA；原单据；真实组成/状态；完整谱系；不确定性及缺口 |
| cp_materials | carbon_line | 完整原料及制备记录 | 未归一化实际记录 | 批次; 供应者; 整物原料kg; 干固体; 水; 灰分; 处理; 来源; 存量; 混合谱系; 实际牌号组分; 内部交接 | 物料会计/实验室：保留全部原始收货、供货形态、测定及存量交接，不用固定碳替代整物质量。全部实际完整供入制剂或另购组分只记一次；保留供应者/现场处理及内含历史。 | kg | 每事件/批次；连续读数及完整存量期 | 全部匹配制造及原队列历史，包括失败/零产出 | 实际生产线、供应者及全部完整链接生产者 | 每 1 kg参考流 | 校准/方法/采样QA；原单据；真实组成/状态；完整谱系；不确定性及缺口 |
| cp_utilities | carbon_line | 实际公用及完整生产者链接 | 未归一化实际记录 | 仪表; 原始kWh/MJ; 气体体积/状态/组成/Z; 燃料; 蒸汽kg/压温/干度/焓; 冷凝水kg/状态; 热量; 水; 全部失败/空转负荷; 提供者单位 | 公用工程师：对匹配完整工序、回收/治理、待机及启停校准毛供回读数。匹配广延单位与实际状态；kWh×3.6仅换算电力。保留完整真实产汽/燃烧/治理生产者负荷及损失，不假定燃料效率。 | kg; m3; kWh; MJ | 每事件/批次；连续读数及完整存量期 | 全部匹配制造及原队列历史，包括失败/零产出 | 实际生产线、供应者及全部完整链接生产者 | 每 1 kg参考流 | 校准/方法/采样QA；原单据；真实组成/状态；完整谱系；不确定性及缺口 |
| cp_streams | carbon_line | 反应实物流及生产者交接 | 未归一化实际记录 | 物流ID; 实际进出口; 整物kg; 流量/时间; 气体状态; 组成; C/H/O/N/S; 相态; 水分; 内部循环; 热/治理接收者; 实际销售功能 | 工艺/环境工程师：对每一真实链接单元两侧配对测量整物物流及实际气液固组成/状态；记录反应生成/消耗、载气、水相与能量。区分内部循环、真实共产品及最终环境出口，绝不拟合未知数以闭合。 | kg; m3; MJ | 每事件/批次；连续读数及完整存量期 | 全部匹配制造及原队列历史，包括失败/零产出 | 实际生产线、供应者及全部完整链接生产者 | 每 1 kg参考流 | 校准/方法/采样QA；原单据；真实组成/状态；完整谱系；不确定性及缺口 |
| cp_species | carbon_line | 实际最终环境分析物及基质 | 未归一化实际记录 | 物种; 介质; 来源; 相态; 采样点; 浓度; 累计体积/速率; 压温/湿度; 粒径切割; 检出; 空白; 回收; 不确定性; 无组织/异常; 治理前后 | 分析负责人：采用实际分析物/基质方法，记录采样位置及合格证据。对实测速率积分，或仅一次以匹配浓度乘累计气量。可过滤PM与气体FTIR范围不同；H2/N2及实际湿雾/可凝结部分须有适当独立证据。保留来源氧化器前限定，最终生产者释放只计一次。 | kg; m3; mg/m3 | 每事件/批次；连续读数及完整存量期 | 全部匹配制造及原队列历史，包括失败/零产出 | 实际生产线、供应者及全部完整链接生产者 | 每 1 kg参考流 | 校准/方法/采样QA；原单据；真实组成/状态；完整谱系；不确定性及缺口 |
| cp_waste | carbon_line | 完整残余物接收事件 | 未归一化实际记录 | 事件ID; 物流; 整物Qtkg; 组成; 附着固体/液体/水; 来源队列; 储存; 接收者; 真实提供者Qt/单位; 非重叠A; 处理; 最终出口 | 环境保管员：校准各独立完整接收单据及实际组成，纳入全部内部存量及真实接收处理。完整实物量与原队列服务需求区分；不虚构嵌套污染物额外出口、假定消失或截断处置链接。 | kg | 每事件/批次；连续读数及完整存量期 | 全部匹配制造及原队列历史，包括失败/零产出 | 实际生产线、供应者及全部完整链接生产者 | 每 1 kg参考流 | 校准/方法/采样QA；原单据；真实组成/状态；完整谱系；不确定性及缺口 |
| cp_assets | carbon_line | 完整设备/物品实物及服务历史 | 未归一化实际记录 | 物品ID; 完整件数/质量; 材质; 尺寸; 安装/备用; 期初/收货/维修/退役/期末; 沉积物; 原队列; 实际提供者单位; 服务证据 | 资产保管员：实测实际完整资产/部件，保留完整实物群、维修及历史服务。仅以兼容完整提供者单位归属有据非重叠服务；保留污染完整退役质量及原接收事件。不猜设备质量、寿命或固定更换比。 | kg; Item(s) | 每事件/批次；连续读数及完整存量期 | 全部匹配制造及原队列历史，包括失败/零产出 | 实际生产线、供应者及全部完整链接生产者 | 每 1 kg参考流 | 校准/方法/采样QA；原单据；真实组成/状态；完整谱系；不确定性及缺口 |
| cp_pack | carbon_line | 完整包装保管及供应者负荷 | 未归一化实际记录 | 袋ID; 实际BOM/材质; 完整件数/皮重; 游离/附着在制/成品; 采购/收货; 供出/客户归还/池返还/报废/期末; 原队列; 提供者历史; 附着粉炭/水 | 包装保管员：校准完整袋/部件及确切保管ID；游离和附着包装与产品毛发货/退回及存量核对。保留全部实际交付/归还/报废接口、完整污染废物及非重叠服务；全部外部皮重排除于粉炭Q。 | kg; Item(s) | 每事件/批次；连续读数及完整存量期 | 全部匹配制造及原队列历史，包括失败/零产出 | 实际生产线、供应者及全部完整链接生产者 | 每 1 kg参考流 | 校准/方法/采样QA；原单据；真实组成/状态；完整谱系；不确定性及缺口 |
| cp_cohorts | carbon_line | 实物验收与归属账 | 未归一化实际记录 | 原事件ID/Q0; 原料/在制/成品/混合/资产/包装期初末; 全部实物交接; 退回/返工; 水/固体增减; 互斥去向; 承继向量; 期间负荷; 提供者历史; 归属A | 生产控制员：完整实物存量/交接独立于锁定唯一首次事件及归属环境/服务向量核对。真实自产历史只承继一次；原验收基准划分至全部互斥关口后去向；失败/零产出负荷及后来服务保留原队列/Q。原始零/未知Q及未解决归属均保留。 | kg; provider unit | 每事件/批次；连续读数及完整存量期 | 全部匹配制造及原队列历史，包括失败/零产出 | 实际生产线、供应者及全部完整链接生产者 | 每 1 kg参考流 | 校准/方法/采样QA；原单据；真实组成/状态；完整谱系；不确定性及缺口 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| event_q | 参考及原队列 | Q=同一固定完整牌号关口唯一原始首次验收整物净质量之和；锁定原水/灰分基准及事件ID，不把退回/重验/重包当新制造。 | cp_acceptance; cp_cohorts | 原Q及实物事件账 | `calgon-acticarbone-2017` |
| attributable_vector | 制造与后续服务 | 实际期初自产在制承继向量+全部已发生匹配负荷，减有据期末在制承继及独立去向，构成归属A；后来服务留给原队列/Q，完整实物存量及提供者Qt不随负荷份额改变。 | cp_materials; cp_utilities; cp_streams; cp_assets; cp_pack; cp_cohorts | 逐交换归属A及非重叠证据 | `ilcd-allocation-2010` |
| normalize_once | 全部建模交换 | 以兼容提供者单位的有据归属A除原正值Q恰好一次；finished_carbon为Q/Q=1kg。Qt/Qanalysis或Pg/Qanalysis/Bt/Qanalysis为独立实物展示，不自动等于服务需求。Q为零/未知时保留原量和未解决结果。 | A; Q; cp_cohorts | 每1kg参考的建模量及独立实物展示 | `ilcd-allocation-2010` |
| reactive_balance | 实物/元素/相态/能源 | 独立关闭整物C/H/O/N/S/灰分、水相与能量账，记录实际反应物消耗和产物生成、内部循环与真实外部出口。按匹配浓度×累计气量或对速率积分，不重复乘时间；不以残差、理论化学、COD或燃烧代理推造缺失物种/收率。 | cp_streams; cp_species; cp_materials; cp_utilities; cp_waste | 实物/反应/水/能量账及不确定性 | `gu-wood-carbon-2018`; `vilen-activated-carbon-2022`; `epa-method320`; `epa-method5`; `epa-method3c`; `doe-permanent-gases-1990` |
| custody_bridge | 包装/资产/废物 | 完整期初+实际收货/新增/真实归还=完整期末+真实供出/供应者返还/报废及其他有据去向；嵌套附着物保留在实际完整接收事件中。另按原队列有据服务向量建模，不能用份额缩放实物或重复原始处理量。 | cp_assets; cp_pack; cp_waste; cp_cohorts | 完整实物保管与服务非重叠桥接 | `calgon-acticarbone-2017`; `ilcd-allocation-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | 完整产品及每个真实接口 | 建立完整原生物料/形态/状态/提供者匹配，保留粉/粒/设备及来源反证；不以组分、类别码或同名替代。 | 完整原生准入及实际牌号/提供者证明 |
| complete_producers | 全部现场与链接单元 | 真实完整制造/气液/燃烧/公用/治理/废物接口；每个额外真实物料或物种各加特定原子行，无省略或假定零。 | 实际物流图、设备/仪表、供应者/处理者及源方法限制 |
| three_ledgers | 全部存量/原Q/归属服务 | 完整实物保管、唯一首次事件及有据非重叠A/Q独立；自产历史与汇总提供者不重叠。 | cp_acceptance; cp_cohorts; cp_assets; cp_pack; cp_waste |
| measurement_sources | 方法与数值 | 保留实际基质/采样位置/物种方法、源文范围和不确定性；来源中试/工程/代理/省略不变成默认或校验接受。 | 方法/校准/空白/检出证据；完整来源与第9节条件 |

## 9. 校验规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_native_scope | 核对完整粉体整品、实际木基蒸汽牌号、固定关口与全部第9节条件；保留真实反证与限定。 | `calgon-acticarbone-2017`; `un-cpc3-introduction-2025`; `un-cpc3-2025`; `un-cpc21-2015`; `wco-hs2022-38` |
| validate_interface_chemistry | 核对真实完整链接生产者、反应G/C、相态/元素/能源、最终环境位置及方法；不把氧化前数据当末端排放。 | `gu-wood-carbon-2018`; `vilen-activated-carbon-2022`; `epa-method320`; `epa-method5`; `epa-method3c`; `doe-permanent-gases-1990` |
| validate_original_events | 核对完整存量/历史、原Q0互斥去向与一次A/Q；完整污染废物/包装/资产交接不随服务份额改变。 | `ilcd-allocation-2010` |
| validate_complete_context | 两种语言投影均须保留下列全部完整段落和源限定，不得仅匹配ID或短摘要。 | `calgon-acticarbone-2017`; `gu-wood-carbon-2018`; `vilen-activated-carbon-2022`; `epa-method320`; `epa-method5`; `epa-method3c`; `doe-permanent-gases-1990`; `epa-activated-carbon-1977`; `un-cpc3-2025`; `un-cpc3-introduction-2025`; `un-cpc21-2015`; `wco-hs2022-38`; `ilcd-allocation-2010` |

### 完整适用与记账背景

本范围制造一种实际未浸渍木基物理蒸汽活化粉炭牌号，从供入未处理木质原料，经实际炭化、活化、粉体整理、均化/配制、最终质量验收及实际包装。制造商来源另有化学、酸洗和混合路线，不得默默纳入。全部实际牌号组分、混合批次、整理及辅助操作均须可见。不得把产出称为纯碳而删除配制框。实际不同添加物或处理须在数据集合格前各有特定原子投入和适用性审查。

原生完整Product为Biochar-based powdered activated carbon/生物炭基粉状活性炭，正面定义为生物质制成的多孔吸附材料，参考为质量/kg，未固定CAS、配方、活化路线、供应者地理或供货点。只有实际完整供入材料、牌号、水分、灰分、相态、整理及提供者边界均匹配时，才可准入本木基/蒸汽/粉状子类。CAS空白或未指定SKU本身不是阻碍。它不是未活化木炭、混合物中的元素碳组分、炭处理服务、用后吸附剂或吸附设备。

不得仅因说明描述GAC，就用按件计量的Granular active carbon unit/颗粒活性碳装置替换参考。另一煤质记录同时具有英文粉状名称、正文颗粒状描述及煤/蒸汽路线，应保留该记录特有不一致，不得借作木基粉炭。带Adsorption reaction/At the chemical plant限定的通用活性炭不建立制造关口。这些标签均不建立纯碳含量或统一件重关系。

有限分类论证明确为延续性推断：现行CPC3原则按实际物理性质及对应HS条文归类；现行HS3802.10列明活性炭；官方CPC2.1明确将35499与HS2007的3802.10关联。现行35499保留残余名称，在已读现行说明中未发现活性炭特有排除。活化天然矿物/动物炭黑与未活化木炭仍属不同已列背景。这既不是现行官方个案裁定，也不把旧对应表称为现行。

Calgon原件区分物理蒸汽活化粉体、化学粉体、可选清洗及其他牌号。完整物理支路包括木材预处理、炭化、破碎、蒸汽活化、粉磨、储存、均化/配制与包装。须保留实际现场及供应者责任划分。牌号表、认证、典型性质及应用图示不提供配方、工况、收率、寿命、环境优越性或统一验收规范。

Gu2018报告实际木材/生物炭活化试验及另行工程商业放大。中试电加热、丙烷产汽、吹扫安排与实测物流不能与工程燃气设计互换。上游炭化还产生合成气与炭。不得把来源物料比例、设备尺寸、热负荷、排放、质量分配份额或生物碳中性惯例变成默认，也不得把实测中试称为现行制造商。

Gu2018测量的是热氧化器前反应器尾气，不是最终室外排放。其可过滤PM方法与FTIR气体分析物方法范围不同，FTIR不能测定H2或N2，来源为这些气体另行采样。实际采样位置、基质、相态、物种、检出与校准必须建立。治理前数据、总NOx/VOC或干态滤膜质量不能代替全部最终物种、湿雾或可凝结物。

Vilén2022是实质环境反证，不是可互换的完整工厂清单。它说明部分炭化/活化清单采用燃烧排放代理、假定热量自足、遗漏启动或运输/废水/灰渣负荷及共产品信息不足。不得采用这些遗漏、残余原料零负荷假定、缩放燃烧数据、来源性能等价或未测热回收。全部真实已发生制造、失败、零产出、空转、启停与处理负荷均须保留。

维持完整实际木材至成品粉炭范围。另行建模的炭化、蒸汽、电力、气体治理、燃烧或废水生产者，须有完整实际投入/产出、气液固组成、能量及废物接口，并匹配提供者与单位。它不是假定场外处置或纸面收货关口。购入完整炭或制剂须有真正兼容的完整上游边界，不能删除来源炭化，也不能与已内含历史重复计入。

实际燃烧及热氧化须有各真实燃料、空气/O2、反应产物、生成/消耗水、氮/硫/碳物种、热量与损失。内部热解气可供能，但真实生成、完整交接、燃烧与治理均须保留；不假定免费能源或避免原生燃料抵扣。反应性碳消耗及气体生成/消耗独立于总质量与C/H/O/N/S/灰分平衡记录。

分别记录原料水分、冷却/补水、液氮及汽化、蒸汽、内部冷凝水、对外冷凝水返回、实际蒸发与反应生成/消耗水。体积/质量或热值换算前保留实际气温、压力、湿度、组成及压缩性；不设统一密度或蒸汽焓。内部循环只抵消交接，真实公用及损失负荷保留。

真实治理后逐一识别全部最终环境物种、相态与介质，包括真实无组织/异常释放。送完整生产者的气体或废水，不是在发送边界再次排放同一物料。收集冷凝液、独立粉尘与污染废物内附着物属于不同实物接收者。不得以COD、总VOC/NOx、灰渣估计或拟合残差虚构化学物种或同时配平两个未知数。未知与低于检出限不等于零。

Q0锁定为同一固定工厂关口、实际完成全部牌号整理后，完整成品粉炭净质量唯一首次验收事件之和。独立记录实际水分、灰分、细度/粒径方法、未浸渍蒸汽牌号状态与皮重。Q不是纯碳质量、毛发货或第二笔实物产出。已验收物料的退回、改包装、均化、返工与复验不新增事件；新旧混合须保留实测入口谱系及原队列负荷。

每个原验收基准须划分至互斥净剩余交付、全部实际现场已验收状态、不可逆损失与其他终局去向。毛退回循环按原ID抵消。只有没有其他状态/出口时，交付加期末存量才充分。后来水分、粉炭或整理组分增减须有实测组分/状态换算；不得把损失质量还原给幸存物又另计损失。Q为零/未知时保留原始总量及未解决归一化结果。

完整原料/在制/成品、混合、公用、资产及容器实物存量/交接，独立于验收事件及归属环境/提供者服务向量。期初自产在制真实完整前期负荷仅承继一次，期末在制有据负荷保留至未来队列。全部已发生失败/零产出/清理/返工负荷均纳入。提供者汇总清单与其内含同一历史的分解版本互斥。后来服务保留原Q0，不改用另一日历期间分母。

实际反应器、粉磨机、衬板、滤材及复用袋，须有完整实物件数/质量、尺寸、材质、安装/备用/退役存量及服务历史。另行兼容提供者服务需求可有据归属原队列，但不得猜寿命、件重或给每队列计整台新资产。维修/更换与退役是不同真实事件；内含资本服务不得再以组分代理重复采购。

实际游离与已附着袋/内衬/容器存量、原料包装收货、采购、向客户供出、接收方归还、供应者/周转池返还及报废，均按原ID保留。产品净质量排除全部外包装/皮重。完整购入袋BOM负荷只计一次；另购内衬、托盘或其他真实部件各须原子行及实物桥接。可用袋归还不产生新制造、产品Q或复用抵扣。

废弃污染滤材、衬板或袋，是一次实际完整接收事件，恰好一次包含基材、附着粉炭/液体及水。除非边界前实际分离，嵌套组分不是额外废物出口。完整接收者/提供者数量Qt及组成，独立于有据且不重叠的逐队列服务需求A/Q。分析展示Qt/Qanalysis不自动等于每队列处理需求；负荷份额既不缩小实物质量，也不重复收取全部Qt。

仅为示例算术，绝非来源默认：一次完整污染滤材事件10kg含8kg基材和2kg附着粉炭/液体。独立有据的25%/75%服务份额形成兼容提供者需求2.5/7.5kg等效；原Q为100/200kg时，每参考为0.025/0.0375kg等效。接收者仍一次收到10kg。不存在2.5kg实物出口、额外2kg污染物废物、重复10kg需求、假定份额或寿命。

分配前先细分/直接归属。其余共过程环境交换须逐项按每个交换与功能已证明的决定性物理因果关系归属；只有缺乏该关系的剩余多功能可采用有依据、条件/关口匹配的市场价值并作敏感性分析。全部气体/炭/共产品/废物实物量独立于份额。内部余热回收、处置、包装归还或来源声称不自动产生共功能或避免负荷。

声明一kg粉炭是生产参考，不证明等同吸附服务、饮用水认证或医疗效能。实际物化牌号、最终用途、提供者单位、方法、时空适用性及完整分析不确定性仍须研究合格。不把来源温度、配方、剂量、功率、收率、灰分/水分比例、发货量、性能、寿命或减排量作为默认或验收范围。

每个候选清单行仅在其实际实物接口存在时适用。明确区分存在、有据不存在、低于检出及未知状态。不得为匹配文献而虚构燃料、吹扫、资产、袋、治理或物种。全部真实额外试剂、材料、设备部件、供入包装、废物或环境物种，须在研究使用前各有特定原子接口及真实提供者/单位；缺UUID或未测数量绝不是篮子或零值。

对于实际红外活性蒸气物种，EPA Method320及完整Protocol提供抽取FTIR分析，包括参考光谱、干扰检查、加热输送或经验证调理及分析物加标/回收要求；它不覆盖同核H2/N2/O2或全部颗粒/液相。EPA Method5覆盖其定义的可过滤颗粒采样与回收，并非假定所有相态湿雾总量。EPA Method3C在其所述填埋气/另有指定来源范围内提供CO2/CH4/N2/O2的GC-TCD分析、组分校准/线性、重复分析及干湿/稀释修正；它不测H2，也不自动授权活性炭烟道采样。引用采样方法及任何稀释/背景修正均须匹配实际气体；真实吹扫或燃烧N2/O2不能自动作为污染扣除。DOE/ARCTECH1990年3月附录6提供H2/N2/CO/CH4/CO2的实际永久气体GC-TCD分离、组分外标校准及面积响应程序，但原采样来自不同来源基质；所称示例色谱图在留存末尾空白扫描页中不可见。这些原始程序建立分析途径，不自动允许迁移采样或来源设定。实际热湿气采样、代表性时间/流量、调理与冷凝损失、分析物分离、实际基质回收、参考气溯源、检出限、最终出口位置及不确定性，均须针对研究合格。缺少必需程序或尚未建立基质/相态覆盖仍是明确方法hold；日常现场校准/资格确认不能被称为已通过。任何原件仪器、校准混合物或工况数值均不是默认。

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际匹配完整木基蒸汽粉炭制造及原队列服务，须完整合格数据/提供者 |
| excluded_use | 35499全范围；吸附功能等同、食品/医疗/认证、未审实际路线/状态或用后再生 |
| required_metadata | 全部有序限定；实际场址/期间/牌号；完整接口/原Q/历史/物种/水/能源/提供者边界 |
| required_quality_disclosure | 实际方法/采样/不确定性；具体未绑定身份/提供者单位；源反证和全部独立审查/研究状态 |
| update_trigger | 原料、路线、相态、牌号、均化配制、关口、治理、公用、包装、提供者或新重要证据改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `epa-method3c` | official_guidance | US EPA, Method3C,8/2/2017 internet copy,complete4pages. https://www.epa.gov/sites/default/files/2017-08/documents/method_3c.pdf | CO2/CH4/N2/O2的GC-TCD分析及校准；保留来源范围/采样/稀释限制；不作H2或通用烟道方法批准。 |
| `epa-method320` | official_guidance | US EPA, Method320,1/14/2019 internet copy including full FTIR Protocol. https://www.epa.gov/sites/default/files/2019-06/documents/method_320.pdf | 红外活性蒸气分析及实际基质/调理/加标验证；不推断同核气体或全部相态。 |
| `epa-method5` | official_guidance | US EPA, Method5,8/2/2017 internet copy,complete source. https://www.epa.gov/sites/default/files/2017-08/documents/method_5.pdf | 定义的可过滤PM采样/回收/计算；不作湿雾总量或通用现场方法批准。 |
| `doe-permanent-gases-1990` | literature | ARCTECH/US DOE, Biological Gasification of Coals,FinalReport,March1990,Appendix6 printed129–130/PDF148–149 only; retained full original. https://www.netl.doe.gov/sites/default/files/netl-file/Arctech-20140331-Biological-Gasification-Coals.pdf | 仅环境永久气体GC-TCD分析/校准程序；保留不同来源采样基质及示例色谱图不可见限制。不采用生物生产规程或操作数值。 |
| `calgon-acticarbone-2017` | literature | Calgon Carbon, Acticarbone/Anticromos brochure,2017, completePDF2/4/5. https://www.calgoncarbon.com/app/uploads/17116_CCC_8.5x11_Acticarbone2017_BrochureSingleWeb.pdf | 真实植物基粉体产品族及完整物理/化学/清洗/均化/包装分支；不作数值默认或认证接受。 |
| `gu-wood-carbon-2018` | literature | Gu et al., Life Cycle Assessment of Activated Carbon from Woody Biomass, Wood and Fiber Science50(3),229–243(2018),PDF4–9/printed232–237. https://research.fs.usda.gov/download/treesearch/56818.pdf | 实际木材/生物炭活化及测量范围；中试与工程放大、氧化器前气体、真实公用及合成气/炭反限定；不默认LCI系数/配方/等价。 |
| `vilen-activated-carbon-2022` | literature | Vilén, Laurell and Vahala, Comparative life cycle assessment of activated carbon production from various raw materials, Journal of Environmental Management324,116356(2022),§§2.1–2.3/3.1–3.5. https://doi.org/10.1016/j.jenvman.2022.116356 | 独立环境覆盖及明确代理/遗漏/供热/共产品/生物碳假设作为反证；不复制零截断或系数。 |
| `epa-activated-carbon-1977` | official_guidance | US EPA, Chemical Technology and Economics in Environmental Perspectives,TaskIV—Activated Carbon,EPA-560/2-77-002,February1977,printed7–9/PDF13–15. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=91012EJI.TXT | 历史物理/化学活化及粉体/颗粒产品差别；不作现行数量、条件或法律限值。 |
| `un-cpc3-2025` | official_guidance | UNSD,CPC3.0 Explanatory Notes,30June2025,completePDF174 and actual neighboring categories. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 现行35499残余名称；不是已接受映射或个案裁定。 |
| `un-cpc3-introduction-2025` | official_guidance | UNSD,CPCVersion3.0 Introduction,§§25–27,49–51,93. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Introduction.pdf | 物理性质/HS解释及延续性原则；仅为标注推断。 |
| `un-cpc21-2015` | official_guidance | UNSD,CPC2.1,2015,detailed correspondence printed69/PDF83 and explanatorynote35499 printed291/PDF305. https://unstats.un.org/unsd/classifications/unsdclassifications/cpcv21.pdf | 明确历史35499与HS2007的3802.10关联，与现行证据区分；不是现行交叉表。 |
| `wco-hs2022-38` | official_guidance | WCO,HS2022 Chapter38,complete chapter notes and heading3802/3802.10,PDF1–3. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf?la=en | 现行活性炭品目与其他活化矿物/动物炭黑支路区分；不是CPC3个案裁定或工艺系数。 |
| `ilcd-allocation-2010` | official_guidance | European Commission JRC,ILCD Handbook,Detailed Guidance,FirsteditionMarch2010,§7.9.3,printed257–258/PDF277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分、决定性因果关系及剩余市场价值层级；不设统一份额或自动抵扣。 |
