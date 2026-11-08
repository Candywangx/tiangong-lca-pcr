---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.bulk-dimethylacetamide-acetic-acid-amidation
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 醋酸与二甲胺法制散装 N,N-二甲基乙酰胺


## 1. 范围与适用性

本方法适用于由冰醋酸和无水二甲胺经二甲胺醋酸盐成盐、受热脱水生成水、胺酸回收及分馏精制而制得的完整未配制工业 N,N-二甲基乙酰胺（DMAC），CAS 127-19-5。所选配置保留 Solutia WO2000073251A1 所述洗涤塔、冷凝器、压力受控反应器及反应塔、脱酸回流系统、釜残塔和盘式干燥器，包含实际采用的铁调理料和陶瓷填料，并包括最终储罐及散装转移。加热采用外购蒸汽和电力；水冷配置包含实际冷却回路及其需求。本有界配置不包含现场燃烧或废气焚烧炉。只有具备真实链接的公用工程生产负荷及实际最终排放界面时才适用；实际运行这些额外工序的工厂须先补全清单并修改边界。

以下第5节保留完整适用条件。所有资料均不证明特定现供方的工厂绩效；来源案例的量值不作默认。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.bulk-dimethylacetamide-acetic-acid-amidation |
| classification_refs | CPC 3.0 35220; narrower product and route boundary |
| covered_products | 醋酸与无水二甲胺法未配制工业 DMAC 整液 |
| excluded_products | DMF、NMP、酯法、醋酐法、乙酰氯法、配制溶剂和废溶剂再生 |
| representative_product | 声明真实合同等级及方法的首次验收散装 DMAC |
| production_route | 成盐 → 脱水 → 胺酸回收及分馏 → 釜残处理 → 验收与散装转移 |
| market_state | 含实测水分和杂质的未配制液体；净质量排除包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供另行规定下游用途的工业 DMAC 溶剂 |
| How much | 首次验收整商品净质量 1 kg |
| How well | 符合真实合同含量、水分、酸碱度和杂质要求及其分析方法，不默认同等溶剂性能 |
| How long or cycle | 一次制造及首次验收周期，无下游服务寿命声明 |
| reference_flow_link | finished_dmac |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | N,N-二甲基乙酰胺 `5acd7c98-6445-4e38-8c65-10e8592dae7d` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | DMAC 身份及 CAS127-19-5; 未配制整液状态; 实际合同等级与供方; 含量和水分分析方法; 酸与无水二甲胺进料; 成盐脱水及胺酸回收路线; 实际铁与填料; 外购公用工程及完整供方负荷; 首次验收门及唯一事件; 原队列与库存谱系; 包装排除和散装转移; 真实最终排放与整份废物接收方; 场址及期间 |

所有限定信息须记录于具体数据包；缺少者不具备完整参考流。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| whole_mass | finished_dmac | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用校准秤、质量流量计或有据罐量换算测量首次验收整液净质量；排除皮重，保留实测水分和杂质，不按纯DMAC当量缩减。 |
| assay_convention | finished_dmac | 实际分析基准 | % | 采用第5节完整方法约定；GC减水分仅在相同基准和真实适用方法下作百分点相减，不额外乘干物率，不改变整液参考质量。 |
| utility_basis | purchased_steam; condensate_return; electricity | 质量与能量分账 | kg; kWh | 蒸汽及回水各保留质量和焓；受入电量保留kWh，需转MJ时按1kWh=3.6MJ，仅换算一次。外购蒸汽的焓不得另加为进口热流。 |
| gas_liquid_basis | dimethylamine; nitrogen; dmac_air; dma_air; acid_air; nma_air; water_air; nitrogen_air | 真实状态和组成 | kg | 体积到质量换算须实测温压、干湿基、组成和相容密度；整股混合物及其组分不同时加量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收有完整上游负荷的实际醋酸、无水二甲胺及实际辅助料 |
| starting_condition_role | 前景实物采集起点，非无负荷截断 |
| product_classification_scope | CPC3.0 35220; narrower |
| recursive_input_rule | 外购DMAC仅按真实开车料另列；退回和内部回流保留原历史，不视为新合成产量 |
| upstream_dataset_requirement | 相容真实原料、公用工程、设备材料和处理生产者及实测需求；同一背景边界不得重复嵌入 |
| disclosure | 真实路线、供方、等级、相态、库存、全部最终出口及受限范围 |

本方法适用于由冰醋酸和无水二甲胺经二甲胺醋酸盐成盐、受热脱水生成水、胺酸回收及分馏精制而制得的完整未配制工业 N,N-二甲基乙酰胺（DMAC），CAS 127-19-5。所选配置保留 Solutia WO2000073251A1 所述洗涤塔、冷凝器、压力受控反应器及反应塔、脱酸回流系统、釜残塔和盘式干燥器，包含实际采用的铁调理料和陶瓷填料，并包括最终储罐及散装转移。加热采用外购蒸汽和电力；水冷配置包含实际冷却回路及其需求。本有界配置不包含现场燃烧或废气焚烧炉。只有具备真实链接的公用工程生产负荷及实际最终排放界面时才适用；实际运行这些额外工序的工厂须先补全清单并修改边界。

所绑定原生 Product 的准确名称为 N,N-二甲基乙酰胺。完整记录没有 CAS、分子式、固定含量、制造路线或地理限制字段；精确化合物名称及液态溶剂描述与 IARC 身份一致，而非 DMF 或 NMP。保留原生 CPC 35499 反证元数据及中文非质子溶剂误译备注，不对数据库作改写。适用性按已核化学身份和 CPC 3.0 35220 的无环酰胺边界判断，并须核准实际供方、等级、杂质、水分、场址和路线。整份商品必须是未配制 DMAC 液体；任意混合溶剂、聚合物溶液或废物不得沿用本 UUID。原生身份既不提供数量，也不代表已合格的背景供方。

主反应净式为 CH3COOH + (CH3)2NH → CH3CON(CH3)2 + H2O。这是反应身份，不是默认收率或每千克配方。保留真实盐库存、转化、旁产物、进料水分及独立总质量和 C、H、N、O 元素账。N-甲基乙酰胺可在釜残中富集；实际铁和杂质须有各自组分账。反应中的醋酸、二甲胺和生成水不得分别按不变物种守恒。不包含生成甲醇的乙酸甲酯路线、醋酐法、乙酰氯法、DMF 羰基化、聚合物配制或废溶剂再生。来源案例的温度、压力、转化改善、配比和纯度论述均非默认范围或环境优势。

将最终精制、质量放行后的首次验收固定为参考事件。独立合计唯一验收整产品的净质量得到 Q，排除全部皮重，并锁定原队列。毛交付、退回、返工、复测及重复放行均不产生第二次验收。按原验收质量基准，将 Q 与互不重叠的净外部持有交付量、全部现场已验收状态、不可逆损失及其他终结处置核对。退回待检和返工库存属于真实状态。已验收水分蒸发时，实际存续产品和损失的原验收部分仅各计一次，不得复原存续质量再加一次损失。新增水或污染物为独立交换，不是已验收材料。旧队列服务使用原 Q0；Q 为零或未知时保留原始总量并将结果标为未解决。

每次截点均保留完整原料、盐液、反应器、回流、中间馏出液、釜残、盘式干燥、成品罐及退货的实物库存和内部转移。以批次谱系保留其自身累计前景和在制品负荷；继承量仅计一次进入放行队列，未验收期末在制品的负荷仍随在制品保留。同一上游边界的真实供方汇总需求与已展开、已嵌入的清单属于替代表达，不可叠加历史。完整实物收发量与环境服务、负荷向量分开。每次废物事件保留接收方实际收到的整份受污染转移量，基材、料液、固体和水仅各计一次；嵌套组成不成为另一项外运废物。多个队列可共享一个实物事件，但各队列不重叠的建模处理需求必须合计为真实供方需求。分配不得将整份共享外运改写为较小实物外运，也不得对每个队列都收取整次处理。

保留完整蒸汽、冷凝水质量和焓界面，以及冷却水补水、回水、排污、飘水、蒸发账。声明气量为实际或标准状态、湿基或干基，保留实测温度、压力、组成及换算，不假定密度。由电或蒸汽产生的过程热不再次计作进口。外部生产及处理须有相容真实生产者数据集和实测服务需求；缺少供方或负荷属于未解决，不是零。实际采用燃料燃烧、氧化炉、额外试剂、一次性包装或不同进料时须扩展范围。每项新增工序均须保留所有原子物种及完整废物、包装实物界面；单列 CO2 不能代表燃烧器。

声明真实合同含量、杂质限值及完整分析约定，不规定默认等级、剂量、能耗或收率。Eastman T51093 是一项商品规格，其 DMAC 报告纯度为 GC 百分纯度减去水分百分数，另以 GC 测酸度、碱度和 DMF，并以卡尔费休法测水。相同基准的百分点相减不再乘一次干物率。本供方约定不自动转用于其他含量方法。保留逐批校准、原始色谱、水分方法和基质适用性、放行记录。IARC 的工作场所空气采样不是烟道排放速率方法；真实放空负荷须有相容基质的浓度、气量测量，回收、冷凝检查，波动、限值及最终出口身份。工作暴露数值或来源案例均不转为工厂排放因子。

该供应商质控／放行指标不自动等同于经校准的DMAC质量分数。百分数刻度相同并不证明GC响应或水分／干湿基准相同；将报告百分数用于组分或元素质量账前，须证明校准和基准相容性。完整交付参考质量保持不变。

`solutia-dmac-2000`; `eastman-dmac-t51093`; `iarc-dmac-2020`; `eu-cww-2016`; `un-cpc3-2025`

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| acid_amidation | 酸胺成盐脱水和精制 | required | 第5节完整适用条件 | foreground | finished_dmac |

### 过程：酸胺成盐脱水和精制 (`acid_amidation`)

#### 输入

##### 产品流

###### 冰醋酸 (`acetic_acid`)

记录实际交付整份醋酸的含量、水分及收货、领用和库存质量；不得以纯酸组分质量代替外购整料。回收醋酸属于带有原负荷历史的内部转移。

- 选定流: 冰醋酸
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `solutia-dmac-2000`

###### 无水二甲胺 (`dimethylamine`)

本边界采用实际无水二甲胺，记录杂质和气态或液态交付状态。二甲胺水溶液为另一整料，须另审路线及水账；不得以纯二甲胺 UUID 代替水溶液。

- 选定流: 无水二甲胺
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `solutia-dmac-2000`

###### N,N-二甲基乙酰胺 (`startup_dmac`)

仅记录实际外部收到的未配制 DMAC 开车料；保留实际等级、供方及期初罐料历史。内部循环不是外购投入或新验收产品。

- 选定流: N,N-二甲基乙酰胺 `5acd7c98-6445-4e38-8c65-10e8592dae7d`
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `solutia-dmac-2000`

###### N,N-二甲基乙酰胺 (`returned_dmac`)

记录实际退回整份 DMAC 商品及原批次、杂质、水分状态和原负荷，保留原验收身份。稀释混合废溶剂不得使用本产品身份。

- 选定流: N,N-二甲基乙酰胺 `5acd7c98-6445-4e38-8c65-10e8592dae7d`
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `solutia-dmac-2000`

###### 反应器调理用铁钉 (`iron_nails`)

仅在实际通过来源所述加钉口加入时纳入。测量整件质量、组成、留存库存、溶解和移出；不规定单钉质量、加铁剂量或已证实的催化性能。

- 选定流: 反应器调理用铁钉
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_assets`
- 来源: `solutia-dmac-2000`

###### 陶瓷精馏填料环 (`ceramic_rings`)

记录实际新填料收货及全部未用、在役实物库存、尺寸和材质。仅按有据服务分摊环境负荷；不得把每批生产视为重新购买填料。

- 选定流: 陶瓷精馏填料环
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_assets`
- 来源: `solutia-dmac-2000`

###### 储罐氮封用气态氮 (`nitrogen`)

仅在实际使用储罐或仪表吹扫供气时纳入，不属于化学计量反应物或默认投入。保留纯度、压力、实测质量或实测气体换算及制氮上游。

- 选定流: 储罐氮封用气态氮
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`
- 来源: `solutia-dmac-2000`

###### 设备清洗用工艺水 (`cleaning_water`)

将实际外部清洗供水与反应生成水、内部冷凝水回用分开测量，不假定固定清洗量。

- 选定流: 设备清洗用工艺水
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `solutia-dmac-2000`

###### 冷却回路补给水 (`cooling_makeup`)

计量水冷配置下的实际补水及库存。循环冷却水不得反复计作外购；保留泵用电、排污、飘水及蒸发界面。

- 选定流: 冷却回路补给水
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`
- 来源: `solutia-dmac-2000`

###### 外购工艺蒸汽 (`purchased_steam`)

测量交付整份蒸汽质量、压力、温度、干度及上游生产需求。焓差属于能量账，不另加一次进口热流；真实供方须保留产汽负荷。

- 选定流: 外购工艺蒸汽
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`
- 来源: `solutia-dmac-2000`

###### DMAC 工厂受入电力 (`electricity`)

计量反应辅助、泵、真空、实际制冷、精馏、釜残干燥及装运用电。保留电压及供方计量约定，不将同一负荷重复计入分表和全厂余量。

- 选定流: DMAC 工厂受入电力
- 流属性/单位: 能量 / kWh
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`
- 来源: `solutia-dmac-2000`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### N,N-二甲基乙酰胺 (`finished_dmac`)

最终精制和等级检测后首次验收的完整未配制工业液体，包含实测水分和杂质，排除包装。本卡为 1 kg 参考输出；Q 为验收事件账，不是另一实物输出。

- 选定流: N,N-二甲基乙酰胺 `5acd7c98-6445-4e38-8c65-10e8592dae7d`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_acceptance`
- 来源: `solutia-dmac-2000`; `eastman-dmac-t51093`; `iarc-dmac-2020`

###### 退回公用工程供方的蒸汽冷凝水 (`condensate_return`)

保留实际冷凝水转移质量、焓和所有权。它是蒸汽界面的回水，不是可售共功能、自动抵扣或重复工艺供水。

- 选定流: 退回公用工程供方的蒸汽冷凝水
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`
- 来源: `solutia-dmac-2000`

##### 废物流

###### 送处理的富水 DMAC 与胺蒸馏馏出液 (`aqueous_distillate`)

指含反应水、进料水及实测 DMAC、二甲胺、醋酸的一股实际分离水相冷凝液。保留完整湿态转移量；溶解组分为嵌套组成，不另列为分别外运的废物。

- 选定流: 送处理的富水 DMAC 与胺蒸馏馏出液
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `eu-cww-2016`

###### 富含 N-甲基乙酰胺的釜残干燥残渣 (`nma_heels`)

釜残塔、盘式干燥器处理后移出的实际整份残渣，记录残余 DMAC、醋酸、水及铁。上游液态釜残、干后残渣及干燥排放属于不同阶段状态，不是同一弃料的三次计数。

- 选定流: 富含 N-甲基乙酰胺的釜残干燥残渣
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `eu-cww-2016`

###### DMAC 设备清洗废水 (`cleaning_wastewater`)

清洗产生的一股实际废水，与蒸馏馏出液分开。保留接收方整份转移、组成、去向、处理基准及队列来源，不默认废水为零。

- 选定流: DMAC 设备清洗废水
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `eu-cww-2016`

###### 废弃不合格 DMAC 液体 (`offspec_dmac`)

仅记录实际废弃部分。返工料留在在制品或原验收队列中，不同时计为废物或新验收产量。

- 选定流: 废弃不合格 DMAC 液体
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `eu-cww-2016`

###### 带残留 DMAC 料液的废陶瓷填料 (`spent_packing`)

完整记录实际受污染填料外运，陶瓷、留液及固体仅计一次。嵌套干陶瓷、溶剂和水分测量不构成另行外运或额外处理需求，除非已实际分离。

- 选定流: 带残留 DMAC 料液的废陶瓷填料
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `eu-cww-2016`

###### 带残留 DMAC 料液的移出反应器铁钉 (`removed_nails`)

仅记录实际移出整件，保留金属溶解历史及污染物。仍溶于料液的铁不得同时计作废钉；实物库存与服务负荷分开。

- 选定流: 带残留 DMAC 料液的移出反应器铁钉
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `eu-cww-2016`

###### 冷却回路排污水 (`cooling_blowdown`)

将实际整份排污及接收处理服务与蒸发水、内部循环分开测量，不规定默认浓缩倍数或处理量。

- 选定流: 冷却回路排污水
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `eu-cww-2016`

##### 基本流

###### 排入环境空气的 N,N-二甲基乙酰胺 (`dmac_air`)

记录放空、装运、真空及干燥环节最终未捕集的 DMAC，最终排放前的回收和治理须实测。同一 DMAC 不得同时计入捕集废流及空气。

- 选定流: 排入环境空气的 N,N-二甲基乙酰胺
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `eu-cww-2016`

###### 排入环境空气的二甲胺 (`dma_air`)

测量冷凝、洗涤回流后实际剩余二甲胺；回流二甲胺不属于排放，也不重复外购。

- 选定流: 排入环境空气的二甲胺
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `eu-cww-2016`

###### 排入环境空气的醋酸 (`acid_air`)

将最终实际醋酸排放与回收酸和废水中酸分开定量，不以通用 VOC 数量代替。

- 选定流: 排入环境空气的醋酸
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `eu-cww-2016`

###### 排入环境空气的 N-甲基乙酰胺 (`nma_air`)

仅在该物种实际排放时纳入，重点包括釜残处理、干燥；不得因残渣含该物种而推定排放因子。

- 选定流: 排入环境空气的 N-甲基乙酰胺
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `eu-cww-2016`

###### 排入环境空气的水蒸气 (`water_air`)

将实际冷却蒸发、干燥蒸气和其他最终蒸气与液态转移分开；按真实反应进度核对反应水，不以虚构补差流闭合。

- 选定流: 排入环境空气的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `eu-cww-2016`

###### 排入环境空气的氮气 (`nitrogen_air`)

仅在实际氮气放空时按实测状态和组成纳入；未变化的载气氮不构成反应消耗抵扣，也不另加同一整股废气外运。

- 选定流: 排入环境空气的氮气
- 流属性/单位: 质量 / kg
- 数量规则: 每 1 kg 参考流的有据归属量；保留独立完整实物账，采用下列采集协议。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `eu-cww-2016`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | all inventory rows | 先细分可独立计量阶段和共享设施；仅按有据相关因果关系归属环境服务和负荷。所列馏出液和釜残不预设可售共产品或替代抵扣；真实共功能须另证明和审查。废物和资产整份实物量保持不变，服务向量不重叠，并使用各原队列Q。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | acid_amidation | finished_dmac | 每次首次验收台账 | 事件编号; 原队列; 批次谱系; 日期; 校准整产品净质量; 皮重; 含量与水分; 不重叠期末状态; 真实损失和处置 | 独立于交付称重并绑定首次质量放行；去除退货和返工重复 | kg | 每批、每次转移及库存截点 | 同一队列和完整期间，含开停机及旧队列服务 | 完整所选工厂阶段及共享界面 | 每 1 kg 参考流 | 校准、签字原始记录、方法适用性、谱系及供方和接收证据 |
| cp_material | acid_amidation | acetic_acid; dimethylamine; startup_dmac; returned_dmac; cleaning_water | 外部整料收用及实物库存 | 整料收货领用; 组成; 水分; 批次; 实际相态; 原供方; 原料在制成品罐期初期末; 回流与退回; 自身和供方继承边界 | 使用校准称量、罐量或流量记录；保留实测密度换算，不对已校正库存的消耗二次校正 | kg | 每批、每次转移及库存截点 | 同一队列和完整期间，含开停机及旧队列服务 | 完整所选工厂阶段及共享界面 | 每 1 kg 参考流 | 校准、签字原始记录、方法适用性、谱系及供方和接收证据 |
| cp_utility | acid_amidation | nitrogen; cooling_makeup; purchased_steam; electricity; condensate_return | 完整公用工程界面计量 | 表计; 服务; 单位; 温压; 气体干湿基与实标状态; 组成; 蒸汽干度焓; 冷凝水; 冷却库存排污飘水蒸发; 供方边界 | 分表计量全部纳入阶段及共享服务；核对完整实物流与另列的归属生产需求 | kg; kWh | 每批、每次转移及库存截点 | 同一队列和完整期间，含开停机及旧队列服务 | 完整所选工厂阶段及共享界面 | 每 1 kg 参考流 | 校准、签字原始记录、方法适用性、谱系及供方和接收证据 |
| cp_waste | acid_amidation | aqueous_distillate; nma_heels; cleaning_wastewater; offspec_dmac; spent_packing; removed_nails; cooling_blowdown | 实际整份废物转移及独立供方需求 | 实物事件编号; 完整湿态转移kg; 嵌套基材料液固体水; 批次历史; 接收方; 处理技术; 供方单位需求; 不重叠队列归属; 实际余库 | 称量真实接收方外运，嵌套组成只计一次；另核对不重叠建模处理和服务数量 | kg | 每批、每次转移及库存截点 | 同一队列和完整期间，含开停机及旧队列服务 | 完整所选工厂阶段及共享界面 | 每 1 kg 参考流 | 校准、签字原始记录、方法适用性、谱系及供方和接收证据 |
| cp_air | acid_amidation | dmac_air; dma_air; acid_air; nma_air; water_air; nitrogen_air | 最终物种排放及气态记录 | 出口; 阶段; 物种; 浓度; 气量; 时间; 温压; 干湿基; 冷凝回收; 背景空白; 方法基质和检出限; 波动 | 使用实际适用出口试验和实测气量时间；区分捕集流、气液相和内回流，不将工作场所数据换成烟道量 | kg | 每批、每次转移及库存截点 | 同一队列和完整期间，含开停机及旧队列服务 | 完整所选工厂阶段及共享界面 | 每 1 kg 参考流 | 校准、签字原始记录、方法适用性、谱系及供方和接收证据 |
| cp_assets | acid_amidation | iron_nails; ceramic_rings; spent_packing; removed_nails | 完整资产材料实物及环境服务历史 | 件批次; 整质量; 尺寸材质; 新收货; 未用在役期初期末; 溶解; 实物移出接收方; 实测使用; 残留污染物; 原队列Q; 供方历史边界 | 完整实物库存闭合与环境服务向量分开；污染物随整份废物只跨界一次，不假定寿命或重复制造 | kg | 每批、每次转移及库存截点 | 同一队列和完整期间，含开停机及旧队列服务 | 完整所选工厂阶段及共享界面 | 每 1 kg 参考流 | 校准、签字原始记录、方法适用性、谱系及供方和接收证据 |
| cp_quality | acid_amidation | finished_dmac; acetic_acid; dimethylamine | 逐批分析身份及方法基准 | 样批次; 实际合同等级; 校准GC色谱; 方法匹配的DMAC二甲胺醋酸DMF含量; KF水分; 同基准约定; 校准空白平行样; 签字放行 | 按有据实际等级方法检测并留原始证据；来源供货规格不是实测组成或通用分析约定 | %; kg | 每批、每次转移及库存截点 | 同一队列和完整期间，含开停机及旧队列服务 | 完整所选工厂阶段及共享界面 | 每 1 kg 参考流 | 校准、签字原始记录、方法适用性、谱系及供方和接收证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_amounts | all inventory rows | Q = sum(m_first,e)，仅合计唯一首次验收整产品事件，Q>0。a_j = A_j,new / Q；A_j,new为有据归属交换或独立环境服务向量，不覆盖整份实物记录。旧队列a_j,old=A_j,old/Q0；无正的已知Q时只保留原始总量。 | cp_acceptance; cp_material; cp_utility; cp_waste; cp_air; cp_assets | 各参考量及独立完整实物账 |  |
| acceptance_bridge | finished_dmac | 独立核对Q = D_net + S_accepted + L + X；按原验收基准分别划分净外部持有交付、所有现场验收状态、不可逆损失和其他终结处置。毛循环不增加Q；失水不复原存续量再加损失。 | cp_acceptance; event genealogy | 核对差额，不作为Q定义 |  |
| stocks_and_history | all inventory rows | 逐阶段核对期初实物+外部收货+真实生成=期末实物+外部移出+真实消耗，内部转移成对抵消。自身前景在制品负荷按谱系继承一次；供方汇总需求与同边界展开清单不重复。 | cp_material; cp_utility; cp_waste; cp_assets; lot histories | 实物残差和另列继承向量 |  |
| reaction_and_water | all inventory rows | CH3COOH+(CH3)2NH→CH3CON(CH3)2+H2O仅给主反应身份；按实际反应进度和旁反应核对，不设默认转化率。分别核对总质量、C/H/N/O、铁、液态和气态水、能量；不得令各反应物种不变守恒或虚构补差。 | cp_material; cp_utility; cp_waste; cp_air; cp_quality | 独立物料、元素、水和能量残差 | `solutia-dmac-2000` |
| whole_waste_service | all inventory rows | 每个实物废物事件记录接收方整份湿质量一次；基材、留液、固体、水只作嵌套组成。各原队列不重叠处理服务需求之和=实际接收方供方需求；分配份额不缩减实际外运，不向每个队列重复收取整事件。 | cp_waste; cp_assets; receiver demand; original Q | 完整实物转移及独立队列处理向量 |  |
| asset_service | iron_nails; ceramic_rings; spent_packing; removed_nails | 完整未用和在役期初+新收货=期末+实际移出+有据溶解或消耗。保留真实尺寸、材料和历史；环境服务按实测使用归属原队列，不假定寿命、单件质量或重复制造需求。 | cp_assets; cp_waste; material and provider histories | 完整实物库存和独立环境服务 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 满足第5节整产品及真实原料、供方、等级、相态、去向；无核心身份时不得应用。 | 完整原生记录、合同、真实方法和接收记录 |
| dq_methods | all inventory rows | 保留实际适用方法、校准、色谱、水分和物种气量基准，不以来源案例代替实测。 | 原始方法、校准、GC和KF记录及检出限 |
| dq_history | all inventory rows | 完整原料、在制、成品、资产和废物实物量与环境向量分开，继承负荷只计一次。 | 截点、谱系、接收方和不重叠供方边界 |
| dq_completeness | all inventory rows | 所有真实条件流需数量或有据不适用；未知、未检出及未测不等于零；缺供方和方法不静默跳过。 | 全流程核对、方法覆盖、未解决项和不确定度 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_admission | all inventory rows | 核查第5节完整原生身份、真实等级路线、原料整物及边界条件；35499标签不单独决定身份，DMF或NMP不替代DMAC。 | `iarc-dmac-2020`; `un-cpc3-2025` |
| validate_accounting | all inventory rows | 核查唯一首次验收Q、所有互斥终态、旧Q0、真实原料在制成品资产库存、整份废物接收量及不重叠处理需求。 |  |
| validate_chemistry | all inventory rows | 核查受支持的酸胺生成水路线、实际旁反应和单列总量元素水能量账；不从甲酯路线导入甲醇，也不将反应水补作外购水。 | `solutia-dmac-2000` |
| validate_measurements | all inventory rows | 核查真实GC/KF约定、实标干湿气基及最终出口采样适用性；职业暴露浓度不是工厂排放速率或默认因子。 | `eastman-dmac-t51093`; `iarc-dmac-2020`; `eu-cww-2016` |

任何核心身份、必要方法、真实供方需求或不重叠物料关系未解决时，保留原始记录和未解决结论，不以结构投影、有限计量检查或本候选方法等同科学批准。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 明确相容等级和用途的DMAC投入 |
| allowed_use | 本有界工业整液制造和真实上游链接 |
| excluded_use | 纯DMAC当量、DMF或NMP替代、未知路线、通用溶剂功能和无负荷外购截断 |
| required_metadata | 第3节所有限定信息及第5节完整条件 |
| required_quality_disclosure | 方法、供方、库存谱系、数量、未解决项、范围及科学审查状态 |
| update_trigger | 产品、原料、路线、供方方法、公用工程、废物接收或验收门改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| solutia-dmac-2000 | literature | Solutia Inc. WO2000073251A1, Process for manufacture of dimethyl acetamide, 7 December 2000; printed pp.1–5 and claims1–21; referenced drawings are absent from the retained ten-page PDF. https://patents.google.com/patent/WO2000073251A1/en | 酸与二甲胺成盐脱水生成水、胺酸回流、放空、釜残及盘式干燥、可选铁调理；历史工艺证据，不证明现供方采用，不转用配方、案例转化、收率、安全比较或能耗默认值 |
| eastman-dmac-t51093 | standard | Eastman, Dimethylacetamide sales specification T51093, effective27March2017, complete1page. https://www.eastman.com/supplemental/salespecs/71103648.pdf | 商品整液身份及受方法约束的 GC 减水分、卡尔费休报告约定；供方限值不是通用等级或实测工厂组成 |
| iarc-dmac-2020 | official_guidance | IARC Monographs123, Some nitrobenzenes and other industrial chemicals (2020), N,N-Dimethylacetamide, Exposure Data §§1.1,1.2.1,1.3–1.4. https://www.ncbi.nlm.nih.gov/sites/books/NBK561930/ | 独立 CAS127-19-5、C4H9NO、液态身份及醋酸二甲胺工业路线；仅采用放空、废水和分析限制，不转用毒理、暴露值或工业排放因子 |
| eu-cww-2016 | official_guidance | European Commission JRC, CWW BREF (2016), BAT2, printed543/PDF573. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | 完整过程、废水和废气流及波动清单；不宣称法律适用、处理效率或 DMAC 排放因子 |
| eu-pef-2021 | official_guidance | Commission Recommendation(EU)2021/2279 AnnexI§4.5, pp.63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 通用过程细分和有据多功能分配层级；不规定固定份额、自动抵扣或整套 PEF 合规 |
| un-cpc3-2025 | official_guidance | UNSD CPC3.0 Structure,30June2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅提供 35220 无环酰胺分类背景；不按代码确立身份，不构成已接受映射或工艺规定 |
