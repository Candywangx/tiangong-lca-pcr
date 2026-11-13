---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.cotton-pulp-single-hole-flat-viscose-strip
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 棉浆单孔扁平粘胶条带的工厂制造

## 1. 范围与适用性

制造所报告的棉浆单根扁平粘胶条带子类型，包括全部湿纺、清洗和后处理至固定工厂验收关口。1mm/100D专利实例建立有意义的有限子类型，不是统一牌号。排除尼龙/PET/PP合成材料、短纤/丝束/切断纤维、复丝束、薄膜分切带、缝纫/并捻纱、零售工艺转换、莱赛尔/铜氨/醋酯及未合格宽拉菲丝。第9节完整限定均为必须。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.cotton-pulp-single-hole-flat-viscose-strip |
| classification_refs | CPC 3.0 35560; narrower product and route boundary |
| covered_products | 具有实测合格条带几何、经过清洗及实际脱硫/漂白/上油/烘干的棉浆单孔连续扁平粘胶元素。 |
| excluded_products | 合成聚合物；短纤/丝束；束状复丝；薄膜切带；其他再生路线；完整产品/提供者/关口不匹配者。 |
| representative_product | 报告的扁平1mm/100D棉浆实施例，不是规定配方、收率或SKU。 |
| production_route | 棉浆→粘胶黄原酸酯液→单孔酸浴凝固→清洗/脱硫→过氧化氢漂白→上油→烘干/卷绕。 |
| market_state | 固定工厂质量验收关口的实际完整整理后条带；产品净质量排除全部筒管/皮重。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供下游纺织加工用合格连续扁平再生纤维素条带。 |
| How much | 1 kg |
| How well | 实际合格几何、单根、声明水/油剂、完整来源/原生/状态/提供者匹配。 |
| How long or cycle | 一次原始首次验收事件队列；不声称使用寿命。 |
| reference_flow_link | flat_strip |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 再生纤维素连续长丝 `5fdd8e27-825e-4767-9a79-2f9164fa7bd2` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际生产者和地理; 棉浆来源及上游; 粘胶黄原酸酯单孔设备及权利要求限定; 实际表观宽度和纤度方法/状态; 单根及扁平几何; 清洗及完整后处理状态; 水及油剂组成; 实际固定工厂首次关口及原Q; 完整在制/成品/容器/提供者历史; 实际回收及处理边界; 完整物理与归属服务分账 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在固定完整整理后首次关口采用校准实测完整产品净质量。排除全部皮重；经cp_acceptance和cp_cohorts保留原Q、实际水/油剂及事件谱系。 |
| `strip_geometry` | flat_strip | 表观宽度和线密度 | mm; dtex | 采用实际整理后宽/长/质量记录及方法不确定度；条带表观宽度≤5mm。报告100D→1000/9dtex仅为实例单位换算，不是牌号默认。不推定厚度/密度。 |
| `whole_solution` | 实际材料及废物接口 | 整物质量及嵌套组成 | kg | 完整水溶混合物记录一次，实际溶质/水分别嵌套。反应物种及实际元素/水平衡按cp_materials/cp_species，不采用化学式默认。 |
| `physical_service` | spent_filter; spent_bobbin; filter_cloth; winding_bobbin | 完整实物质量及兼容服务单位 | kg | 完整保留一次物理Qt/物品群，并另列可归属A/Q服务向量。Qt/Qanalysis是实物分析展示，不是自动重复处理需求。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际供入棉质溶解浆及各实际完整化学品/公用工程投入，并具完整上游生产者。 |
| starting_condition_role | foreground_start |
| product_classification_scope | 有限人造扁条子类型；不声称35560全覆盖或已接受映射。 |
| recursive_input_rule | 真实同类返回按原事件/历史记录；内部返工不新增Q或原生制造抵扣。 |
| upstream_dataset_requirement | 实际完整投入牌号/状态/地理及供应者匹配的完整生产/运输/服务记录。另行建模的现场生产者须完整链接，不得用通用处置桩。 |
| disclosure | 实际关口、完整路线、圆孔/扁平产品限定、来源、原Q、全部存量/历史、物理/物种/水闭合及提供者/服务限制。 |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `include_complete_route` | 纳入至声明关口的全部实际生产、回收、处理、失败/返工、公用工程及物品负荷，以及后续原队列服务；应用第9节完整背景。 | `grace-single-hole-2015`; `jrc-polymers-2007` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| strip_line | 完整棉浆单孔扁平粘胶生产线 | required | 实际匹配路线；完整回收/公用/处理链接 | foreground | 每1kg参考流 |

### 过程：完整扁条制造 (`strip_line`)

#### 输入

##### 产品流

###### 棉质溶解浆 (`cotton_pulp`)

实际供入完整棉浆；水/灰分/纤维素为嵌套含量。

- 选定流: 棉质溶解浆
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `jrc-polymers-2007`; `grace-single-hole-2015`

###### 氢氧化钠水溶液 (`caustic_solution`)

碱化/溶解/脱硫的新鲜完整溶液；不重复加入纯NaOH或载水。

- 选定流: 氢氧化钠水溶液
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `jrc-polymers-2007`; `grace-single-hole-2015`

###### 液态二硫化碳 (`fresh_cs2`)

实际黄化新鲜供应；另列内部回收液及实际含量。

- 选定流: 液态二硫化碳
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `jrc-polymers-2007`

###### 硫酸水溶液 (`sulfuric_acid`)

实际新鲜完整纺丝浴酸溶液。

- 选定流: 硫酸水溶液
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `jrc-polymers-2007`; `grace-single-hole-2015`

###### 纺丝浴用硫酸钠盐 (`sodium_sulfate`)

声明实际水合态/纯度/相态；不默认结晶水或回收盐。

- 选定流: 纺丝浴用硫酸钠盐
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `grace-single-hole-2015`

###### 纺丝浴用硫酸锌盐 (`zinc_sulfate`)

完整实际水合牌号及水分；Zn元素为嵌套含量。

- 选定流: 纺丝浴用硫酸锌盐
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `grace-single-hole-2015`

###### 过氧化氢水溶液 (`peroxide_solution`)

实际漂白供应及含量；不默认专利浓度。

- 选定流: 过氧化氢水溶液
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `grace-single-hole-2015`

###### 粘胶纺丝油剂制剂 (`finish_preparation`)

一种实际完整供入整理制剂；须真实组成/提供者，不虚构脂肪酸成分。

- 选定流: 粘胶纺丝油剂制剂
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `grace-single-hole-2015`; `jrc-polymers-2007`

###### 工艺用水 (`fresh_water`)

仅实际单独新鲜工艺补水；溶液/蒸汽/回收水另列。

- 选定流: 工艺用水
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- Sources: `jrc-polymers-2007`

###### 生产线供电 (`electricity`)

实际全部生产线/回收/辅助需求；实测kWh按3.6MJ/kWh作单位换算，未最终绑定UUID/属性。

- 选定流: 生产线供电
- 流属性/单位: 能量 / MJ
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `jrc-polymers-2007`

###### 工艺蒸汽 (`steam`)

实际完整蒸汽进口，记录压温/干度/焓及链接生产者；不假定燃料。

- 选定流: 工艺蒸汽
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `jrc-polymers-2007`

###### 冷却补水 (`cooling_water`)

存在时的实际购入补水；另保留毛循环/回水和全部冷却负荷。

- 选定流: 冷却补水
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `jrc-polymers-2007`

###### 粘胶过滤布服务物品 (`filter_cloth`)

使用该真实完整物品时；实物群及供应者服务单位与归属需求区分。

- 选定流: 粘胶过滤布服务物品
- 流属性/单位: 质量 / kg
- 数量规则: 完整实际物品/物品群交接与存量另保留；以兼容提供者单位对有依据的完整物品服务可归属A/原正值Q建模一次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `jrc-polymers-2007`

###### 可复用卷绕筒管 (`winding_bobbin`)

实际完整筒管；不虚构材质、单件重量或寿命，随产品供货记录物品交接。

- 选定流: 可复用卷绕筒管
- 流属性/单位: 质量 / kg
- 数量规则: 完整实际物品/物品群交接与存量另保留；以兼容提供者单位对有依据的完整物品服务可归属A/原正值Q建模一次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `jrc-polymers-2007`

###### 归还的可复用卷绕筒管 (`returned_bobbin`)

接收方实际归还的完整可用筒管；不构成新制造采购、Q或复用抵扣。

- 选定流: 归还的可复用卷绕筒管
- 流属性/单位: 质量 / kg
- 数量规则: 记录实际完整物品交接Bt、接收方及原谱系；实物分析展示Bt/Qanalysis。此交接不是额外制造/处理需求或产品Q；真实服务负荷按cp_assets/cp_cohorts另行归属。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `jrc-polymers-2007`

##### 基本流

###### 取自大气的空气 (`ambient_air`)

在老成/通风/回收平衡重要时记录实际空气吸入；O2/N2/水是嵌套组成，不重复完整投入。

- 选定流: 取自大气的空气
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `jrc-polymers-2007`

#### 输出

##### 产品流

###### 再生纤维素连续长丝 (`flat_strip`)

固定首次验收关口的完整合格整理后单根扁条；须符合原生Washed/At plant准入。

- 选定流: 再生纤维素连续长丝 `5fdd8e27-825e-4767-9a79-2f9164fa7bd2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_acceptance`
- Sources: `grace-single-hole-2015`; `wco-hs2022-ch54`

###### 随条带供出的可复用卷绕筒管 (`supplied_bobbin`)

随产品实际交付的完整物品；与产品净质量及原Q区分，不是分配共产品或负制造抵扣。

- 选定流: 随条带供出的可复用卷绕筒管
- 流属性/单位: 质量 / kg
- 数量规则: 记录实际完整物品交接Bt、接收方及原谱系；实物分析展示Bt/Qanalysis。此交接不是额外制造/处理需求或产品Q；真实服务负荷按cp_assets/cp_cohorts另行归属。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `jrc-polymers-2007`

###### 回收液态二硫化碳 (`recovered_cs2_sale`)

仅实际合格对外销售；内部循环为存量/物流账，不是此产出。

- 选定流: 回收液态二硫化碳
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### 回收硫酸钠产品 (`recovered_sulfate_sale`)

仅实际可售完整产品，须真实水合态/纯度/水；实际结晶/干燥负荷保留。

- 选定流: 回收硫酸钠产品
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### 退回供应者的蒸汽冷凝水 (`condensate_return`)

实际实物返回，记录温度/组成和生产者链接；不另给新水抵扣。

- 选定流: 退回供应者的蒸汽冷凝水
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- Sources: `jrc-polymers-2007`

##### 废物流

###### 不合格粘胶条带废物 (`waste_viscose`)

物理独立的拒收/不可逆废弃条带，包括水/油剂；内部返工不是外部废物。

- 选定流: 不合格粘胶条带废物
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次；实物分析展示Qt/Qanalysis。链接建模处理/服务需求为各原受服务队列有依据的可归属A/Q，须提供者单位兼容且不重复收取全Qt；cp_assets；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_recovery`
- Sources: `grace-single-hole-2015`; `jrc-polymers-2007`

###### 处理接收界面的粘胶工艺废水 (`process_wastewater`)

仅实际合流时的一次完整接收交接；保留各排水/含量/来源，否则拆分实际接口。

- 选定流: 处理接收界面的粘胶工艺废水
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次；实物分析展示Qt/Qanalysis。链接建模处理/服务需求为各原受服务队列有依据的可归属A/Q，须提供者单位兼容且不重复收取全Qt；cp_assets；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### 送处理的含硫粘胶废气 (`exhaust_to_treatment`)

实际送链接完整生产者的全部气体，包括载气/水汽及CS2/H2S分账；不是最终空气排放。

- 选定流: 送处理的含硫粘胶废气
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次；实物分析展示Qt/Qanalysis。链接建模处理/服务需求为各原受服务队列有依据的可归属A/Q，须提供者单位兼容且不重复收取全Qt；cp_assets；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### 受污染的废粘胶过滤布 (`spent_filter`)

一次实际完整接收出口，含基材及附着粘胶/液体/水；Qt保留全量，链接归属A/Q需求另列。

- 选定流: 受污染的废粘胶过滤布
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次；实物分析展示Qt/Qanalysis。链接建模处理/服务需求为各原受服务队列有依据的可归属A/Q，须提供者单位兼容且不重复收取全Qt；cp_assets；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `jrc-polymers-2007`

###### 受污染的废弃卷绕筒管 (`spent_bobbin`)

一次实际完整废弃物品，含附着油剂/纤维/水；可用筒管归还为另行实物返回。

- 选定流: 受污染的废弃卷绕筒管
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次；实物分析展示Qt/Qanalysis。链接建模处理/服务需求为各原受服务队列有依据的可归属A/Q，须提供者单位兼容且不重复收取全Qt；cp_assets；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- Sources: `jrc-polymers-2007`

###### 含锌废水处理污泥 (`zinc_sludge`)

仅纳入实际处理的真实边界出口；完整污泥/固体/水/提供者负荷；不默认沉淀剂或效率。

- 选定流: 含锌废水处理污泥
- 流属性/单位: 质量 / kg
- 数量规则: 实际完整接收交接Qt只记一次；实物分析展示Qt/Qanalysis。链接建模处理/服务需求为各原受服务队列有依据的可归属A/Q，须提供者单位兼容且不重复收取全Qt；cp_assets；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_recovery`
- Sources: `jrc-polymers-2007`

##### 基本流

###### 排入空气的二硫化碳 (`cs2_air`)

真实治理后最终烟道/无组织/异常CS2，不重计送处理气体。

- 选定流: 排入空气的二硫化碳
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `jrc-polymers-2007`

###### 排入空气的硫化氢 (`h2s_air`)

实际最终H2S，与总硫及CS2分别测量。

- 选定流: 排入空气的硫化氢
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `jrc-polymers-2007`

###### 排入空气的水蒸气 (`water_air`)

实际最终蒸发/水汽，区分游离/反应/蒸汽来源；不拟合闭合。

- 选定流: 排入空气的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `jrc-polymers-2007`

###### 排入空气的二氧化碳 (`co2_air`)

纳入老成/治理/燃烧实际排放时；须完整真实生成生产者及碳来源。

- 选定流: 排入空气的二氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `jrc-polymers-2007`

###### 排入空气的二氧化硫 (`so2_air`)

纳入硫处理实际排放时；不假定氧化/治理系数。

- 选定流: 排入空气的二氧化硫
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `jrc-polymers-2007`

###### 排入淡水的水 (`water_fresh`)

仅实际最终直接排放的水组分，与送处理生产者废水交接另核对。

- 选定流: 排入淡水的水
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `jrc-polymers-2007`

###### 排入淡水的锌 (`zinc_fresh`)

实际最终排放的元素Zn报告量，不以总Zn测定自动指定Zn2+形态。

- 选定流: 排入淡水的锌
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `jrc-polymers-2007`

###### 排入淡水的硫酸盐 (`sulfate_fresh`)

实际最终排放硫酸盐，采用特定测定；不得用总S或COD替代。

- 选定流: 排入淡水的硫酸盐
- 流属性/单位: 质量 / kg
- 数量规则: 实测实际可归属量A/原正值Q，仅一次；另保留全部原始实物交接及组成；cp_cohorts。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_species`
- Sources: `jrc-polymers-2007`

## 7. 分配与共产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_hierarchy` | 尽可能按实际细分/直接归属避免分配。其余交换逐项按已证明的决定性物理因果关系和受服务功能归属；仅对缺乏此关系的剩余多功能采用有依据的出口状态市场价值。内部回收、归还筒管、废物处理、存量承继与失败产物不是自动共产品或替代抵扣。环境份额不改变全部实际共产品/废物实物量，并披露提供者范围、时空及敏感性。来源：`ilcd-allocation-2010`；`jrc-polymers-2007`。 | `ilcd-allocation-2010`; `jrc-polymers-2007` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | strip_line | 唯一首次关口验收及几何 | 未归一化实际记录 | 批次；事件ID；原始净kg；表观宽mm；单根数；长度；质量；dtex；温湿度/时间；水/油剂；皮重；来源路线/设备；全部拒收/退回/在制/成品 | 质量负责人：在声明干燥/整理验收后校准整批净称重；对可追溯实际供货状态样品作光学表观宽度测量，记录平直/展开/折叠几何及不确定度；测量长度和调湿净样质量确定线密度，记录实际方法/校准与采样方案。原事件只记一次；准入前核实完整设备/路线及原生关口/状态。 | kg; mm; dtex | 每批/事件；连续计量；完整期间核对 | 全部匹配生产、存量及旧队列历史，包括失败/零产出期间 | 实际生产线、供应者及完整链接生产者 | 每 1 kg 参考流 | 校准；原始单据/测定；方法及采样QA；完整来源；不确定性及未解决缺口 |
| cp_materials | strip_line | 完整材料/溶液存量及耗用 | 未归一化实际记录 | 收货/批次/提供者；原始整物kg；含量/水合态；水分；浆固体；真实油剂组成；期初末存量；内部回收流；在制谱系/向量 | 物料会计与实验室：保留全部未归一化完整原料收货、耗用、储罐/存量及原始组成证明，包括失败/返工期间。分解实际水/溶质但不重复加入；链接完整实际上游生产者，区分内嵌和分解历史。 | kg | 每批/事件；连续计量；完整期间核对 | 全部匹配生产、存量及旧队列历史，包括失败/零产出期间 | 实际生产线、供应者及完整链接生产者 | 每 1 kg 参考流 | 校准；原始单据/测定；方法及采样QA；完整来源；不确定性及未解决缺口 |
| cp_utilities | strip_line | 实际公用及辅助生产者 | 未归一化实际记录 | 原始kWh/MJ；蒸汽kg/压温/干度/焓；冷凝水kg/状态；冷却补回水；仪表；真空/通风/回收/干燥/待机负荷；提供者单位/历史 | 公用工程师：采集全部匹配工序、失败/零产出及回收/处理装置的毛供回仪表序列。匹配提供者单位及完整实际生成负荷。kWh×3.6仅换算电能单位；实际热焓/密度须实测状态，不虚构燃料假定。 | kg; kWh; MJ | 每批/事件；连续计量；完整期间核对 | 全部匹配生产、存量及旧队列历史，包括失败/零产出期间 | 实际生产线、供应者及完整链接生产者 | 每 1 kg 参考流 | 校准；原始单据/测定；方法及采样QA；完整来源；不确定性及未解决缺口 |
| cp_recovery | strip_line | 完整回收及接收交接 | 未归一化实际记录 | 原始物流ID/整物质量；组成/C/S/Na/Zn；水合态/水；内部存量；实际回收设备；接收者；提供者全部Qt/单位；队列来源；非重叠服务向量；处理进出口 | 回收/环境工程师：匹配全部实际完整液/气/固交接单和测定，保留回收存量及全部已发生处理负荷。提供者实际全量只记一次，再按队列及原始Q证明单独归属服务向量。物理独立拒收物另列，内部循环抵消。未证明去向/组成/提供者或份额仍未解决。 | kg | 每批/事件；连续计量；完整期间核对 | 全部匹配生产、存量及旧队列历史，包括失败/零产出期间 | 实际生产线、供应者及完整链接生产者 | 每 1 kg 参考流 | 校准；原始单据/测定；方法及采样QA；完整来源；不确定性及未解决缺口 |
| cp_species | strip_line | 实际物种、介质、元素及水 | 未归一化实际记录 | 气体速率序列/累计体积；状态；密度/组成；物种浓度；样品QC；实际空气；水相；反应程度；最终出口/无组织/异常；废水载水；元素测定；原始闭合 | 分析/环境负责人：采用实际场址物种方法及基质QA，对实测速率积分或采用匹配浓度×累计体积而不再乘时间。独立建立反应程度、水来源、元素平衡与不确定性。最终介质/出口及链接生产者排放仅识别一次；不得用COD替代、守恒反应物种或拟合残差。 | kg; m3; mg/m3 | 每批/事件；连续计量；完整期间核对 | 全部匹配生产、存量及旧队列历史，包括失败/零产出期间 | 实际生产线、供应者及完整链接生产者 | 每 1 kg 参考流 | 校准；原始单据/测定；方法及采样QA；完整来源；不确定性及未解决缺口 |
| cp_assets | strip_line | 完整资产/包装实物及服务账 | 未归一化实际记录 | 物品ID/材质/尺寸/整物质量；收/还/装/备/供/废/末存；基材/附着液/水；提供者实际Qt；原队列/Q；服务向量及单位 | 资产/包装保管员：校准实测重量及完整物品群谱系，核对每件供出/归还/报废物品及实际污染接收交接。干基材/污染物嵌套在完整废物中，服务需求另列并证明不重叠、生产者单位兼容及旧队列。绝不虚构未知寿命/份额；其他真实包装须单独原子接口。 | kg; item | 每批/事件；连续计量；完整期间核对 | 全部匹配生产、存量及旧队列历史，包括失败/零产出期间 | 实际生产线、供应者及完整链接生产者 | 每 1 kg 参考流 | 校准；原始单据/测定；方法及采样QA；完整来源；不确定性及未解决缺口 |
| cp_cohorts | strip_line | 物理存量/事件/归属核对 | 未归一化实际记录 | 原事件ID/Q；期初原料/在制/成品/资产；实际进出/退回；期末全部状态；损失/增加/水/油剂；去向；承继向量；期内失败/返工负荷；提供者历史；归属A | 生产控制员：完整实物存量/交接独立于原始唯一首次验收Q及归属交换向量核对。原始关口后基准划分至互斥交付、状态、损失及终局去向。真实在制/历史承继一次，全部已发生负荷和后来服务对应原队列。保留原始零/未知Q期间及未解决份额；采集端不归一化、不重复相除。 | kg; provider unit | 每批/事件；连续计量；完整期间核对 | 全部匹配生产、存量及旧队列历史，包括失败/零产出期间 | 实际生产线、供应者及完整链接生产者 | 每 1 kg 参考流 | 校准；原始单据/测定；方法及采样QA；完整来源；不确定性及未解决缺口 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `event_basis` | 所有清单行 | Q=同一固定关口及声明状态下唯一原始正净质量首次验收事件之和；退回/返工/复验不再新增事件。另保留完整一般存量/去向桥接和原基准换算。 | cp_acceptance; cp_cohorts; original_eventIDs | 原Q及物理桥接 | `grace-single-hole-2015` |
| `cohort_attribution` | 所有清单行 | 实际期初在制历史向量加已发生期间负荷（含失败/返工），减有证据期末在制承继及单独追踪去向，构造可归属A；后续服务保留原队列/Q。不重复提供者内嵌历史。实物交接与全部存量独立于A保留全量。 | cp_cohorts; cp_materials; cp_utilities; cp_recovery; cp_assets | 按原队列及提供者单位的可归属A | `ilcd-allocation-2010` |
| `normalize_cohort` | 所有清单行 | 每个建模交换以兼容提供者单位的实际可归属A除原正值Q（kg），恰好一次；flat_strip为Q/Q=1kg。原始完整废物Qt及实物分析Qt/Qanalysis不自动等于各队列A/Q处理需求。Q为零/未知时保留原始总量及未解决状态。 | A; Q; cp_cohorts; cp_acceptance | 每1kg参考流交换量 | `ilcd-allocation-2010` |
| `physical_elements_water` | 所有清单行 | 独立保持整物流质量与C/S/Na/Zn平衡，以及实际纤维素、溶质、物种、水分和油剂分账。纤维素/黄原酸酯、CS2、H2S、酸碱及漂白剂参与反应，不能跨厂逐一守恒反应物种。供入溶液游离水、蒸汽/冷凝水、蒸发水、结晶水及实际反应生成/消耗水须分别有证据和实际反应程度。不得用拟合闭合同时反推两个未知数，或用理论化学强配配方/收率。气体量采用浓度乘对应累计体积，或对实测速率积分，不能再给累计体积乘时间。COD是指标，不是特定有机物种或额外废水质量。 | cp_materials; cp_recovery; cp_species; cp_assets | 完整物理/元素/物种/水平衡及不确定性 | `jrc-polymers-2007` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| scope_native | 参考及每个实际批次 | 建立实际完整产品/几何/路线/清洗后整理关口匹配，不用组分代理或隐藏硬字段覆盖。 | cp_acceptance; complete native admission in section9 |
| whole_route | 全部实际生产者 | 不遗漏已知设备、回收、化学品、处理或公用工程；全部真实交换须完整链接及补充原子行。 | cp_materials; cp_utilities; cp_recovery; cp_species |
| three_ledgers | 存量、Q及服务向量 | 独立保持全部实物存量/交接、原验收事件及非重叠可归属环境/提供者服务向量。 | cp_acceptance; cp_cohorts; cp_assets |
| source_limits | 来源及数量 | 保留全部来源限定及反向证据；专利/报告/BREF数值不得成为配方、收率、系数、清单默认或提供者可用证明。 | section9; source originals; actual methods/provider records |

## 9. 校验规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_geometry_gate` | 核实实际整理后合格条带几何及完整来源/原生/设备/关口准入，不假定厚度、不改为µm、不移用商业SKU。 | `wco-hs2022-ch54`; `grace-single-hole-2015` |
| `validate_whole_route` | 检查全部生产/回收/公用/处理/材料/物种接口及真实链接生产者；研究合格前解决实际缺失原子身份/方法。 | `jrc-polymers-2007` |
| `validate_event_vectors` | 检查三个账户、原正值Q、完整物理桥接/历史及恰好一次归属除法；保留完整污染废物及不重复提供者需求。 | `ilcd-allocation-2010` |
| `validate_source_context` | 两种语言投影须保留下列每个完整适用/记账段落，不能仅保留来源摘要。 | `grace-single-hole-2015`; `grace-flat-counterexample-2015`; `jrc-polymers-2007` |

### 完整适用及记账背景

本有限子类型是CN103233289B实施例6实际报告的棉浆、单孔、扁平粘胶单根元素：宽1mm、纤度100D。实施例6明确继承实施例1，包括棉浆、纺丝液制备、计量单孔凝固以及脱硫、漂白、上油和烘干。同一原件权利要求1明确写明圆形喷丝孔及抛物线入口孔道。两种原文陈述均须保留：圆孔与扁平产品的组合没有解释，但尚未证明物理上不可能。不得替换异形喷丝孔、添加无记录成形工序或虚构解释。实际批次须证明所报告形态及实际设备/路线；来源名称不能使其他几何形态自动合格。来源：`grace-single-hole-2015`。

此处人造是天然有机高聚物的溶解/再生或化学改性，不是泛指人工制造。选定分类论证采用人造条带分支：实际表观宽度不得超过5mm。独立的单丝分支还要求≥67dtex且任一截面尺寸不超过1mm；厚度未知时不得声称符合该分支。报告的100D即100g/9000m，因此精确等于1000/9dtex；仅描述该实施例，不是强制牌号或配方。实际批次须在声明的整理后状态测定纤度和表观宽度。不得以假定密度、旦数、扁平度或喷丝孔尺寸反推宽厚。来源：`wco-hs2022-ch54`；`grace-single-hole-2015`。

另一个扁丝专利CN103215679B实际印刷的是毫米：权利要求7为3–60mm，全部实施例为10–60mm。它没有建立合格窄条带实施例，不能把其喷丝孔几何拼接到选定实施例。丝丽雅2023年报告独立证明真实333.3–4440dtex/1f扁平粘胶产品族，但没有整理后宽厚或精确专利/SKU/工厂身份。制造商族关联不等于SKU或工厂等同。报告产能、专利工艺条件、拉伸结果、含水率、收率、回收系数或商业筒重都不是默认值。来源：`grace-flat-counterexample-2015`；`grace-products-2023`；`grace-single-hole-2015`。

绑定的完整Product为Regenerated cellulose continuous filaments，实际原生名称组件为Washed和At plant；正式中文baseName为再生纤维素连续长丝。原生CPC26190及保留来源399属于反向分类元数据，保留为未解决资料债务，不得默默修正。此广义身份未指定单根数量、条带宽厚、棉来源、粘胶或其他再生路线、烘干、油剂、含水率、供应商或地理位置。准入必须实际证明完整终端产品是在所声明工厂关口的再生纤维素连续单根扁平元素，已经清洗及选定后处理，并符合实际组成/状态。Washed不证明湿态或干态，也不建立终端关口。不得绑定纯纤维素组分、已洗中间体，或用另一提供者地理/路线覆盖原生硬字段。

保留从购入棉质溶解浆开始的完整实际路线：碱化/压榨/老成、CS2黄化、氢氧化钠水溶液溶解、熟成、脱泡和过滤、单孔酸/硫酸盐/硫酸锌凝固、清洗/脱硫、过氧化氢漂白、实际油剂整理、烘干和卷绕。实际溶液配方与整理剂组成属于提供者/批次实测事实。JRC木浆/多孔与短纤实例是技术背景，不是本单孔棉浆配方；不得规定短纤切断、硫化钠/次氯酸盐替代或11%含水率。购入完整化学品水溶液/油剂只称量一次，含量/水为嵌套组分，不再重复加入纯物质。棉浆须有完整实际上游生产及运输负荷，原生纤维素不是完整棉浆提供者代理。来源：`jrc-polymers-2007`；`grace-single-hole-2015`。

实际回收、通风、真空、冷却、浴液循环、废水处理和整理辅助工序连同真实负荷和出口均须纳入。CS2冷凝、活性炭吸附、H2S洗涤/氧化、盐结晶或锌沉淀是不同来源实例，不是假定已装设备或效率。内部回收CS2、浴液和水分别保留完整物流/组分/存量账，在合并边界抵消；仅实际新鲜进口和对外出口是交换。回收售出产品须有实际化学形态、水合态/纯度、水及市场功能，不预设盐/硫产出或避免生产抵扣。研究合格前，全部实际存在的试剂、燃料、吸附剂、催化剂、化学品、废物和排放须各增设原子行。来源：`jrc-polymers-2007`；`ilcd-allocation-2010`。

公用工程与处理生产者必须有完整实际链接：实际蒸汽/电力/冷却接口及生产者全部负荷，不假定公开通用提供者已合格。现场回收、燃烧、硫控制或废水装置若单独建模，须保留完整气/液/冷凝液的对应交接测量、组成及全部试剂/燃料/空气/水/能量/排放/废物清单。这是链接的完整生产者，不是场外断言或零值/截断处置桩。实际燃烧须有依据的空气/O2、生成水、碳/硫/氮物种和热接口，不得为套入购入公用工程标签而删除已知设备。来源：`jrc-polymers-2007`。

维持三个独立账户：完整物理交接/存量、唯一首次验收参考事件Q、可归属环境/服务向量。在选定工厂关口完成干燥/整理质量验收后，锁定每事件原始净质量及声明的含水/油剂基准。Q是唯一原始事件的正值之和，不是另一笔物理产出。复验、退回、重绕、返工和重发不产生第二次事件。后来水/油剂增减是真实物理变化，不得把已损失质量还原给幸存物又另计损失。实际状态不同须用独立实测证据明确进行组分基准换算。

一般关口后桥接将原始验收基准分成互斥的净剩余交付、全部实际现场验收状态、不可逆损失及其他终局去向；按原始谱系抵消毛循环及退回。仅在没有其他状态/出口时才可只用交付加期末存量。完整原料/在制/成品/容器/资产实物存量及全部交接须另记，包括承继的期前生产历史。实际期初在制向量及全部已发生失败/零产出/返工负荷只归入一次；有证据的期末在制向量带给未来队列，关口后服务仍对应原验收队列/Q。上游汇总提供者若已包含某历史，不得再叠加该历史分解。Q为零或未知时保留原始总量与未解决结果，不得相除或删去。

独立保持整物流质量与C/S/Na/Zn平衡，以及实际纤维素、溶质、物种、水分和油剂分账。纤维素/黄原酸酯、CS2、H2S、酸碱及漂白剂参与反应，不能跨厂逐一守恒反应物种。供入溶液游离水、蒸汽/冷凝水、蒸发水、结晶水及实际反应生成/消耗水须分别有证据和实际反应程度。不得用拟合闭合同时反推两个未知数，或用理论化学强配配方/收率。气体量采用浓度乘对应累计体积，或对实测速率积分，不能再给累计体积乘时间。COD是指标，不是特定有机物种或额外废水质量。

每个实际最终环境出口在真实治理后逐一识别排放物种及介质。送处理生产者的原气是一个完整物理接口，组成嵌套，不再把同一CS2/H2S另计空气排放；最终接收者/提供者释放只纳入一次。废水送处理与实际最终水排放及其锌/硫酸盐分账同理。保留实际回收损失、无组织和异常源、载气及水证据。特定身份、提供者或采样不确定性未知时仍为缺口，在具体研究中解决，不能用零值、固定治理率或虚构闭合排放代替。来源：`jrc-polymers-2007`。

纳入的卷绕筒管与过滤布是完整服务物品，须有实际材质/尺寸/质量/存量历史，不假定单件重量或寿命。记录收货、归还、安装、备用、交付、报废及留存完整物品，以及全部受污染接收交接。一件报废污染布/筒管恰好一次包含基材、附着粘胶/油剂/液体和水。干基材与污染物是嵌套组分，除非边界前实际分离，否则不得虚构额外废物交换。产品净Q排除所有物品/皮重；具体数据集合格前，全部其他真实包装材料须另有交付/归还/报废接口。

共享物品/废物须将实际一次完整接收交接与提供者实际全部处理量只记录一次，另列已知的物理队列/组分来源，以及有证据且不重叠的各队列服务/负荷向量。建模数量是可归属A/Q，完整物理量为Qt，其分析展示为Qt/Qanalysis；Qt/Qanalysis不自动等于每队列处理需求。即使负荷份额不同，提供者接口仍保留完整实物组成。服务份额不得缩小真实出口质量，也不得向每队列重复收取全部交接。份额、提供者兼容单位、前期队列或非重叠关系未知时仍未解决。

仅为合成记账检验而非经验默认值：实际一次污染过滤物10kg含8kg基材和2kg附着颜料，为新旧队列服务。有依据的新25%/旧75%处理服务份额形成兼容提供者单位下的2.5kg等效与7.5kg等效需求（或相应负荷向量）；新Q100/旧Q200时，每参考为0.025/0.0375kg等效。接收者仍一次收到10kg。不产生2.5kg实物出口、额外2kg粉料交换、重复10kg需求、假定份额或寿命。仅在袋/筒管废物真实共享历史支持时应用同样精度。

尽可能按实际细分/直接归属避免分配。其余交换逐项按已证明的决定性物理因果关系和受服务功能归属；仅对缺乏此关系的剩余多功能采用有依据的出口状态市场价值。内部回收、归还筒管、废物处理、存量承继与失败产物不是自动共产品或替代抵扣。环境份额不改变全部实际共产品/废物实物量，并披露提供者范围、时空及敏感性。来源：`ilcd-allocation-2010`；`jrc-polymers-2007`。

CN103233289B原件PDF2权利要求1完整报告背景（仅为来源描述，全部数值是所报告条件/性能而非默认值）：以纤维素纤维浆粕为原料，经纺丝液制备—纺丝—后处理得到粘胶单根丝。A：浆粕经浸渍、老成、黄化、溶解、脱泡和过滤制得纺丝液；纺丝液含甲纤6～10%、含碱5～7g/L、粘度40～70s、熟成度4～8mL。B：供胶管路送入纺丝机，计量泵定量送入，纺丝液经单孔喷头在压力下通过喷丝孔形成粘胶细流，进入凝固浴成型为生丝条；喷头拉伸+60%～+80%；入口孔道形状呈抛物线；纺速30～80m/min；喷丝孔为圆形，入口孔道长度与喷丝孔直径比为1.0～1.5:1。C：生丝条经脱硫、漂白、上油、烘干后得到粘胶单丝；所报告纤度50～6000D、强力75cN以上、干断裂强度1.5～2.0cN/dtex、湿断裂强度1.0～1.5cN/dtex、干断裂伸度15～20%。完整保留圆孔限定，不把来源工艺范围转为必需设定或性能承诺。来源：`grace-single-hole-2015`。

CN103233289B原件PDF5段0036～0048实施例1完整报告背景（仅为来源描述）：纤维素浆粕经纺丝液制备、纺丝、后处理形成粘胶单根丝；纺丝液制备为浸渍、老成、黄化、溶解、脱泡、过滤。供胶管路和计量泵将纺丝液送经单孔喷头，在压力下形成细流并入凝固浴成型。所报告喷头拉伸+60%、入口孔道呈抛物线、纺速30m/min。生丝条经脱硫、漂白、上油、烘干。浆粕为棉浆粕。报告产品为70D、强力75CN、干断裂强度1.5CN/dtex、湿断裂强度1.0CN/dtex、干断裂伸度15%。保留原文大写CN记号，不作性能换算或默认。实施例6继承此完整路线与棉来源，改动其明确写出的条件/产品；不继承实施例2/3的木/竹来源。来源：`grace-single-hole-2015`。

CN103233289B原件PDF6段0079～0085实施例6完整报告背景（仅为来源描述）：“与实施例1基本相同，在此基础上”，入口孔道为抛物线，喷头拉伸+76%，纺速65m/min；凝固浴硫酸100g/L、硫酸钠200g/L、硫酸锌20g/L、温度40℃。所得粘胶单丝为扁平型、幅宽宽度1mm、纤度100D、强力78CN、干断裂强度1.8CN/dtex、湿断裂强度1.3CN/dtex、干断裂伸度16%。这些是一个报告实施例的条件与声称，不是现行工业实测清单、批次验收公差、配方/收率默认或自动场址/SKU证明。批次准入须记录实测几何/状态及完整路线匹配，披露需独立证据的偏离；不能默默把原宽度改为微米。来源：`grace-single-hole-2015`。

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 前景生产清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际匹配的有限整理后扁平粘胶条带，须完整合格供应者/链接生产者及研究证据。 |
| excluded_use | 全部人造材料市场平均；其他路线/形态；食品/医疗/认证声称；实际核心身份/方法或提供者不匹配者。 |
| required_metadata | 全部有序限定、实际场址/时间/地理、原关口/Q、完整来源/原生限定、组成/水分、存量/历史、物种/水及链接提供者边界。 |
| required_quality_disclosure | 实际方法/不确定性、未解决特定UUID/提供者单位、缺失历史或份额、来源限制及独立审查/研究状态。 |
| update_trigger | 路线/设备/形态/状态/关口/整理/几何/提供者变化，或新的重要来源/分析证据。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | United Nations, CPC Version3.0 Explanatory Notes,30June2025, complete page175,35550/3556/35560. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 现行35560名称及相邻长丝纱背景。本页没有数值几何定义，也不构成已接受的PCR映射。 |
| `wco-hs2022-ch54` | official_guidance | WCO, HS2022 Chapter54, Note1 and heading5405. https://www.wcotradetools.org/en/harmonized-system/2022/en/1154 | 人造与合成的区别；分别区分单丝≥67dtex且任何截面尺寸≤1mm的分支，与条带表观宽度≤5mm的分支。分类阈值不是工厂工艺或清单默认值。 |
| `grace-products-2023` | literature | 宜宾丝丽雅股份有限公司,2023可持续发展报告, PDF8/printed11–12,雅菲特长丝/Raffia product table. https://www.cn-grace.com/Uploadfiles/Files/2024-8-27/20248271758132479.pdf | 真实333.3–4440dtex/1f扁平粘胶产品族。没有宽厚或专利与SKU/工厂对应；不能移用左栏普通长丝产能。产能不是清单或收率。 |
| `grace-single-hole-2015` | literature | CN103233289B,一种粘胶单丝的生产工艺,22April2015, claim1 and complete examples1/6, paragraphs0036–0048/0079–0085,PDF2/5/6. https://patentimages.storage.googleapis.com/1d/56/76/e6731b38e838c6/CN103233289B.pdf | 一手报告的扁平1mm/100D实施例、继承的棉浆条件、完整湿纺/脱硫/漂白/上油/烘干链，以及圆形喷丝孔权利要求限定。不得虚构成形机理、配方/收率/性能默认值或商业批次等同性。 |
| `grace-flat-counterexample-2015` | literature | CN103215679B,一种粘胶扁平单丝的生产工艺,11February2015, claim7 and worked examples1–14,PDF2/5–9. https://patentimages.storage.googleapis.com/83/48/27/6b6806ceebd8c5/CN103215679B.pdf | 原件实际印刷的权利要求宽度为3–60mm、实施例为10–60mm。不能当作微米笔误或≤5mm实施条带证据，也不向CN103233289B拼接其异形喷丝孔。 |
| `jrc-polymers-2007` | official_guidance | European Commission, Reference Document on BAT in the Production of Polymers,August2007,§§11.2.1/11.2.3/11.3,Figure11.1,§§12.7.2–12.7.7. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | 独立支持粘胶化学、长丝与短纤分支、清洗/整理/干燥、CS2/H2S回收、盐/锌/废水及公用工程接口。木浆/多孔实例不取代棉浆/单孔实例；短纤Na2S/NaOCl、11%含水率及全部历史数值都不是本路线默认值。 |
| `ilcd-allocation-2010` | official_guidance | European Commission JRC,ILCD Handbook: General guide for LCA—Detailed guidance,FirsteditionMarch2010,§7.9.3.1–7.9.3.2,printed257–258/PDF277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因分配：细分/直接归属后采用逐项交换的决定性物理因果关系；否则采用共功能实际离开状态下有依据的市场价值。不是统一质量/等比分配或回收抵扣规则。 |
