---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.films-and-other-video-content-on-discs-tape-or-other-physical-media
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 光盘、磁带或其他实物载体上的电影及其他视频内容

## 1. 范围与适用性

本 PCR 规定以商品形式供应、载有已录制电影或其他视频内容的实物载体之前景数据生产规则，包括音乐视频。不包括作为参考产品的空白介质、纯音频介质、软件、播放设备、在线视频、零售服务、不拥有所产商品所有权而提供的复制服务，以及连同全部产权出售的原始作品。生产本类别商品所需的制造操作仍须纳入。官方范围依据 `un-cpc-3-0-structure-2025` 和 `un-cpc-3-0-explanatory-notes-2025`。

代表路线采用外购聚碳酸酯和成品镍压模复制单面单层 DVD-Video；在外购 DVD-R 上录制为条件替代路线。NIST 区分模压只读光盘与染料记录层可录光盘，并展示 DVD 的粘合结构（`nist-sp-500-252-2003`，第 3.1–3.4 节）。EPA 支持注塑、金属化、印刷及包装的过程划分（`us-epa-life-cycle-cd-dvd`）。

对于录像带、蓝光光盘、Video-CD 或其他载体，保留类别规则，但须在数据集使用前落实实际参考交换、部件清单、记录过程、质量检验及废物流。不得套用 DVD 用量或层结构。一个数据集对应同一载体、版本及路线；混合产品组合须分别建模并明确汇总权重。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.films-and-other-video-content-on-discs-tape-or-other-physical-media |
| classification_refs | CPC 3.0: 47620；仅作分类关联信息 |
| covered_products | 以商品形式供应、载有已录制电影或其他视频内容的实物载体 |
| excluded_products | 空白介质；纯音频介质；软件；播放设备；在线视频；零售及复制服务；连同全部产权出售的原始作品 |
| representative_product | 某一已声明版本的可销售单面单层 DVD-Video |
| production_route | 实物版本准备；使用外购压模复制或有条件地在 DVD-R 上录制；检验；包装 |
| market_state | 生产者发运门口的成品可读录制载体；包装单独计量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产者门口供应以可读实物载体承载的指定视频版本 |
| How much | 1 kg 录制载体净质量；同时报告对应复制品数量及可播放内容时长 |
| How well | 版本及语言正确、内容完整；通过所声明的格式、兼容性及质量验收检验 |
| How long or cycle | 一个生产及放行周期；不预设观看次数或档案保存寿命 |
| reference_flow_link | `reference_video_dvd` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 预录视频 DVD 光盘 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 载体及记录格式；版本标识；单份时长；语言；面数及层数；只读或可录状态；兼容性及区域限制；验收检验及抽样方案；单份载体净质量；每销售单元数量；包装清单及质量；路线；视频母版及压模交接边界；场址、地域及报告期；成品率及不合格品；电力交付条件；上游覆盖及排除项 |

必需限定信息须在数据集元数据或关联生产记录中提供。本质量声明单位用于制造交换，质量相同不表示观看服务等同。按观看小时比较时须具备可比的内容质量、观看次数、设备、分销及报废模块（`shehabi-video-streaming-2014`，研究方法及 DVD 系统假设部分）。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mu_net_mass | 参考产品及中间品 | Mass | kg | 称量裸录制载体。分母不含盒、内页、包膜及运输纸箱，其质量保留为投入。 |
| mu_count_mass | 数量记录 | Mass | kg | 合格数量乘以实测代表性裸载体质量；保留抽样及校准记录。多盘套装须逐一计数。 |
| mu_electricity | 电力 | Net calorific value | MJ | 保留已核验能量属性；精确换算为 1 kWh = 3.6 MJ。记录电网、电压、损耗及交接边界；区分外购电力和一次能源。 |
| mu_water | 补水及排水 | Mass | kg | 体积换算须有依据明确的密度及计量条件；不得将循环水重复计为外部供应。 |
| mu_formulations | 油墨、胶粘剂及气体 | Mass | kg | 区分外购配方与有效成分或固化物，记录化学组成及固化状态。气体体积换算须用记录温压下的密度。 |
| mu_tools | 压模及靶材服务 | Mass | kg | 将称量的接收、退役及库存变化与服务分配核对；原金属本身不代表已制造工具。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已有经授权并完成创作编辑的视频母版；复制路线外购材料和成品压模，或录制路线外购完整空白 DVD-R |
| starting_condition_role | 实物复制品生产的前景交接条件；不证明上游负荷为零 |
| product_classification_scope | 录制视频实物商品；服务具有独立身份，不构成排除其商品生产操作的理由 |
| recursive_input_rule | 通过匹配上游数据集展开外购投入。不得将成品版本递归作为自身投入。内部转移仅链接一次，仅在汇总时抵销。 |
| upstream_dataset_requirement | 按实际交接状态链接材料、成品压模、空白介质、包装、能源及场外处理供应链；披露时间、地域、技术及完整性。外购空白盘替代内含载体制造，不能替代录制。 |
| disclosure | 区分前景及上游覆盖。本实物复制模块不含电影创作、选角、拍摄、创作编辑及版权获取；完整内容产品声明须另行论证相应贡献。出厂分销、播放及消费后处理须另加模块。 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| sb_identity | product_scope | 采用第 1–2 节的商品边界及排除项；连同全部产权出售的原始作品与复制服务具有不同类别身份。 | `un-cpc-3-0-explanatory-notes-2025` |
| sb_routes | disc_production | 复制须纳入注塑、金属化及粘合。外购完整空白 DVD-R 则纳入写入、封盘及上游空白盘制造，不得重复将其内含树脂、金属或胶粘剂列为前景投入。 | `nist-sp-500-252-2003` |
| sb_operations | site_operations | 按第 8 节协议纳入可归属的版本准备、试运行、不合格品、返工、待机、产线辅助及包装。 | |
| sb_stamper | purchased_tools | 纳入外购成品压模的上游制造。场内母版制作或电铸则须扩展实测的实际玻璃母版、光刻胶、电镀、漂洗及按物种区分的排放交换，替代外购压模操作。 | |
| sb_complete | route_instantiation | 用配方、计量或废物记录确认每项 inclusion_condition。实际增加的化学品、燃料、制冷剂损失、运输及处理须分别列为原子交换；代表清单未列出不证明用量为零。 | |
| sb_supply | upstream_links | 通过匹配供应商或路线数据集纳入入厂运输和场外处理，并核对重叠。场内处理须有实测清单；废物转移不是基本流排放。 | `us-epa-life-cycle-cd-dvd` |
| sb_claims | downstream_use | 结果标注为实物复制品生产数据。没有可比附加模块时，不得推断视频服务总影响、流媒体比较优势或观看寿命。 | `shehabi-video-streaming-2014` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| edition_preparation | 版本准备及文件验证 | required | | 前景生产 | 分配至 1 kg 最终合格载体的工作量 |
| disc_production | 光盘生产及质量控制 | required | 批次路线通过各交换条件选择复制或 DVD-R 录制 | 前景生产 | 转入包装的合格未包装 DVD 质量 |
| packing | 包装及发运放行 | required | | 整备 | 1 kg 可销售录制 DVD 净质量，包装另行计量 |

每张卡片对应一个交换，其纳入条件须按声明批次判定。记录条件交换不存在的依据，按批次核对 DVD 内部转移，并将供应商数据集与声明的产品物理状态匹配。内部转移是记账链接，不是新增外部产出。

### 过程：版本准备及文件验证（`edition_preparation`）

#### 输入

##### 产品流

###### 电力（`edition_electricity`）

纳入条件: 始终纳入，仅计归属于实物版本准备的部分

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：将计量的版本准备用电分配至有记录的放行复制品，换算为 MJ 后除以最终载体净质量 M。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_edition`

### 过程：光盘生产及质量控制（`disc_production`）

#### 输入

##### 产品流

###### 聚碳酸酯颗粒（`polycarbonate`）

纳入条件: 使用外购成品压模的复制路线

- 选定流：聚碳酸酯颗粒 `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由库存平衡确定外购颗粒消耗并除以 M；声明光学级别及再生比例，不重复计入内部回用料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_disc`
- 来源：`nist-sp-500-252-2003`

###### 铝溅射靶材（`aluminium_target`）

纳入条件: 使用外购成品压模的复制路线

- 选定流：铝溅射靶材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按工具及库存记录确定归属于批次的成品靶材质量并除以 M；保留未用库存，另记退役铝料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_tools`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 成品镍制 DVD 压模（`nickel_stamper`）

纳入条件: 使用外购成品压模的复制路线

- 选定流：成品镍制 DVD 压模
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按实际服务模压次数分配成品压模质量并除以 M；供应商边界包含母版制作及电铸。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_tools`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 紫外光固化丙烯酸酯 DVD 粘合胶（`bonding_adhesive`）

纳入条件: 复制路线实际使用该粘合配方

- 选定流：紫外光固化丙烯酸酯 DVD 粘合胶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外购湿配方消耗量除以 M；分别记录固含量、固化工艺、固化后保留量及未固化废胶。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_disc`
- 来源：`nist-sp-500-252-2003`

###### 油墨（`printing_ink`）

纳入条件: 场内以所声明油墨配方进行盘面印刷

- 选定流：油墨 `7627af63-d2c2-4245-906f-023847c7739f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外购油墨配方消耗量除以 M；保留配方、固化状态及印刷方法，在实例数据集中分开记录不同配方。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_disc`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 氩气（`argon_gas`）

纳入条件: 运行氩气溅射且交接状态为气态氩

- 选定流：氩气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量气体质量除以 M；体积换算须有记录温压下的供应商密度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`

###### 工艺用水（`process_water`）

纳入条件: 外购工艺用水作为补水供应

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测新补水量除以 M；不计循环体积，披露水质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 电力（`production_electricity`）

纳入条件: 始终纳入，按声明的复制或录制路线

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：产线、检验、待机及可归属冷却和压缩空气用电换算为 MJ 后除以 M；避免电表边界重叠。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`

###### 空白 DVD-R 光盘（`blank_dvd_r`）

纳入条件: DVD-R 录制路线替代同一载体的复制材料投入

- 选定流：空白 DVD-R 光盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外购空白盘消耗数量乘以实测裸盘质量后除以 M；链接完整空白介质供应链。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_disc`
- 来源：`nist-sp-500-252-2003`

#### 输出

##### 产品流

###### 未包装预录视频 DVD 光盘（`unpackaged_dvd_out`）

纳入条件: 始终纳入，合格载体转入包装

- 选定流：未包装预录视频 DVD 光盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测合格转移质量除以 M；按批次与 unpackaged_dvd_in 及在制品库存核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_disc`

##### 废物流

###### 废聚碳酸酯注塑浇口料（`polycarbonate_sprue_waste`）

纳入条件: 分类收集的洁净浇口料离开复制边界

- 选定流：废聚碳酸酯注塑浇口料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外运聚碳酸酯浇口废料称量值除以 M；内部粉碎回用仍属内部流。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste`

###### 不合格复合 DVD 光盘（`dvd_reject_waste`）

纳入条件: 废弃不可修复的已录制或半成品盘，包括返回本台账的包装不合格盘

- 选定流：不合格复合 DVD 光盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：复合盘不合格品称量值除以 M；记录组分清单、固化状态及接收方，不含已回收返工品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste`

###### 退役镍制 DVD 压模（`nickel_stamper_waste`）

纳入条件: 成品镍压模退役并离场

- 选定流：退役镍制 DVD 压模
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：退役压模称量质量按实际服务一致分配后除以 M。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_tools`

###### 铝废料（`aluminium_target_scrap`）

纳入条件: 退役靶材分离出的铝料离场，不含背板或混合废物

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分类铝废料称量值除以 M；核对靶材蚀耗、剩余库存及废料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_tools`

###### 废未固化丙烯酸酯粘合胶（`uncured_adhesive_waste`）

纳入条件: 未固化粘合胶单独废弃

- 选定流：废未固化丙烯酸酯粘合胶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：送处理的未固化胶称量值除以 M；不含已保留在废盘上的固化胶。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste`

###### 非接触冷却系统排污水（`cooling_blowdown`）

纳入条件: 非接触冷却排污水跨界送场外处理

- 选定流：非接触冷却系统排污水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测排污水质量除以 M，记录水质及接收处理；直接排放须另列基本流物种。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste`

##### 基本流

###### 排入空气的氩（`argon_to_air`）

纳入条件: 核实溅射系统向环境空气释放氩

- 选定流：排入空气的氩
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：经核实的供应氩减去库存增加及回收气体后除以 M；声明受纳环境及平衡证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`

###### 水蒸气（`water_vapour`）

纳入条件: 存在水蒸发释放且未明确空气子环境

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测或有依据的蒸发损失除以 M；不得自动将无法解释的水平衡差额归为水蒸气。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`

### 过程：包装及发运放行（`packing`）

#### 输入

##### 产品流

###### 未包装预录视频 DVD 光盘（`unpackaged_dvd_in`）

纳入条件: 始终纳入，由 disc_production 内部转入

- 选定流：未包装预录视频 DVD 光盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测内部转移质量除以 M；与 unpackaged_dvd_out 和库存变动核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing`

###### 聚丙烯 DVD 盒（`dvd_case`）

纳入条件: 实际版本使用外购聚丙烯盒

- 选定流：聚丙烯 DVD 盒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：成品盒实测消耗质量除以 M；供应商链接包含制盒注塑，不只包含树脂生产。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 包装, 纸质说明书内页（`paper_insert`）

纳入条件: 包含外购印刷纸质说明书内页

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：成品印刷内页实测质量除以 M；包含上游印刷及纸张生产。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 低密度聚乙烯薄膜（PE-LD）（`ldpe_wrap`）

纳入条件: 版本采用 LDPE 包装膜

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测薄膜库存消耗除以 M；区分保留包膜和分类边角料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 瓦楞纸箱（`corrugated_box`）

纳入条件: 使用瓦楞运输纸箱

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按实际装载分配成品纸箱实测质量后除以 M；记录纸板结构及适用的周转使用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 电力（`packing_electricity`）

纳入条件: 包装和裹膜使用电力时纳入

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：含可归属待机的包装计量电力换算为 MJ 后除以 M。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack_energy`

#### 输出

##### 产品流

###### 预录视频 DVD 光盘（`reference_video_dvd`）

纳入条件: 始终纳入，发运时的最终可销售录制 DVD

- 选定流：预录视频 DVD 光盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：M / M = 1 kg 合格录制载体净质量；另保留放行数量及逐项包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing`

##### 废物流

###### 废聚乙烯（`polyethylene_film_waste`）

纳入条件: 分类聚乙烯薄膜边角料离场

- 选定流：废聚乙烯 `7e78f0a8-c042-47ca-a742-3bac92be1477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：聚乙烯薄膜边角料称量值除以 M；记录接收方，不含混合聚合物废物。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售录制载体净质量，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing`


## 7. 分配与共产品处理

以下为基于第 8 节实测记录的本 PCR 记账规则。

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| al_subdivide | shared_operations | 优先按批次独立计量。剩余共用电力按实测机器时间乘以代表性功率分配并与电表核对；销售收入不是默认驱动量。 |  |
| al_edition | edition_preparation | 将实物版本准备分摊至实际生产周期中有记录的放行复制品；核对重印批次并修订分母，不假设无限未来产量。 |  |
| al_tools | stamper_service | 按工具身份及实际服务模压次数分配成品压模制造和退役，包括失败复制品次数，其负荷归入合格产出。仍在用工具须披露暂定剩余服务。 |  |
| al_rework | internal_transfers | 保留返工能耗和损失。仅在汇总模型中抵销 DVD 内部转移及洁净聚碳酸酯回用，保留核对记录。仅出界材料属于外部废物。 |  |
| al_scrap | recovered_material | 记录实际废物转移和处理，不自动给予替代原生材料信用。单独设置回收信用情景时须明确边界，且不得与上游信用重叠。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_edition | edition_preparation | 版本电力 | 电表及作业记录 | edition_id; job_id; meter_start; meter_end; preparation_hours; released_copies; campaign_id | 计量版本准备工作站或服务器及可归属辅助用能，将作业与实物版本关联。 | kWh; h; copy | 每次作业及周期结束 | 完整准备周期，含修订 | 准备场址及外包准备供应商 | 汇总可归属用能，按有记录的放行数量分摊，再除以 M。 | 电表校准、作业报告及分母核对 |
| cp_disc | disc_production | 材料、空白盘及中间品记录 | 批次清单、称量及检验记录 | lot_id; route; recipe; grade; opening_stock; receipts; returns; closing_stock; accepted_count; rejected_count; sample_mass; rework_mass; transferred_mass | 称量库存及消耗，计数并抽样称量载体，明确配方和供应状态。 | kg; copy | 每批次及库存核对 | 声明期内全部生产，含启动、不合格品及返工 | 产线及供应商交接 | 按批次核对材料消耗及合格转移，除以最终放行净质量 M。 | 秤检查、供应商规格及安全数据表、检验结果及库存账 |
| cp_tools | disc_production | 压模及靶材服务 | 序列化工具台账 | tool_id; material; received_mass; retired_mass; remaining_mass; shots_by_lot; recovered_mass; supplier | 称量工具，识别批次服务次数及靶材蚀耗。 | kg; shot | 安装、使用及退役 | 实际工具使用周期，并披露剩余服务 | 复制线及工具供应商 | 按服务一致分配压模投入及退役，核对靶材供应、保留及废料。 | 工具身份、上游边界、称量及模压次数记录 |
| cp_utilities | disc_production | 电力、氩气及水平衡 | 计量、供应商及平衡记录 | meter_id; start; end; line_hours; gas_mass; temperature; pressure; density; water_makeup; blowdown; evaporative_loss; stock_change | 计量产线电力及新补水，称量气体或按明确条件转换体积，分别闭合平衡。 | kWh; kg; m3; h | 每个计量批次及期末核对 | 期内生产、待机及辅助操作 | 产线含可归属冷却及压缩空气用电 | 按实测驱动量分配共用需求，不计循环量，分别归一化各交换。 | 校准、账单、平衡差额说明及参考条件 |
| cp_waste | disc_production | 具体固体及液体废物 | 分类废物台账 | stream_id; chemistry; contamination; mass; stock_change; receiver; treatment_route; transport_boundary | 逐股称量独立废物流并核对转移和存储，按需要采样液体组成。 | kg | 每次转移及期末 | 同一生产期并修正废物库存 | 场址边界及明确接收方 | 各物流分别除以 M，区分废物处理和直接排放。 | 转移记录、秤校准、废物分析及接收方确认 |
| cp_packing | packing | 光盘、包装、发运及薄膜边角料 | 包装清单及放行检验 | lot_id; incoming_disc_mass; released_count; net_mass_per_disc; component_mass; damaged_disc_mass; film_trim; stock_change; package_design | 逐项称量组件，计数放行载体，核对转移、返工及发运。 | kg; copy | 每包装批次及发运放行 | 期内全部可归属包装及不合格品 | 包装线及发运门口 | 组件按裸载体 M 归一化，损坏光盘仅一次转入光盘不合格品或返工台账。 | 包装规格、经校准抽样及发运库存核对 |
| cp_pack_energy | packing | 包装电力 | 分表及产线日志 | meter_start; meter_end; runtime; standby; lot_id | 计量裹膜、封装及包装电力，含可归属待机。 | kWh; h | 每批次或分配计量时段 | 同一包装期 | 包装线 | 按实测用能驱动量汇总或分配，再除以 M。 | 校准、产线日志及外购电力核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_net_output | 所有行 | M = 同一版本验收放行数量 × 实测裸载体质量；须满足 M > 0。 | cp_disc; cp_packing | 最终载体净质量 M，kg |  |
| calc_normalize | 外部交换 | q_i = 期内可归属数量 Q_i / M。先分配再归一化。参考产品按定义恰为 1 kg。 | Relevant protocol; M | 每 1 kg 净载体交换量 |  |
| calc_stocks | 材料消耗 | Q = 期初库存 + 接收 - 期末库存 - 未使用退货。核对材料保留、损失及废物，内部回用另记。 | cp_disc; cp_tools; cp_packing; cp_waste | 净投入及材料平衡 |  |
| calc_transfer | DVD 内部转移 | 按有记录的跨期库存调整后，转出 = 转入；返回返工只计一次。 | cp_disc; cp_packing | 关联中间品质量 |  |
| calc_energy | 电力 | E_MJ = 3.6 × E_kWh；核对电表边界重叠后再汇总准备、生产及包装。 | cp_edition; cp_utilities; cp_pack_energy | 外购电力 MJ |  |
| calc_tool_share | 压模 | 批次工具份额 = 工具负荷 × 批次次数 / 有记录的总服务次数。披露并更新暂定剩余服务估计。 | cp_tools | 归属批次的工具投入及废物 |  |
| calc_water_balance | 水及水蒸气 | 补水 + 期初库存 = 排污 + 蒸发 + 其他实测流出 + 期末库存。按计量不确定性说明差额，不自动归为蒸发。 | cp_utilities; cp_waste | 核实水平衡及水蒸气 |  |
| calc_argon_balance | 氩释放 | 外购气体 + 期初库存 - 期末库存 - 未使用退货 = 回收气体 + 已核实空气释放。 | cp_utilities | 氩释放质量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_scope | 数据集身份 | 声明载体、版本、路线、交接状态、期间及原始内容和下游排除项。 | 材料清单、供应商边界及参考限定信息 |
| dq_measurement | 所有行 | 区分实测、分配及计算数量，附不确定性、校准及缺失数据处理。 | 协议关联记录及计算工作簿 |
| dq_coverage | 报告期 | 覆盖完整生产周期或报告期，含启动及不合格品；说明代表性及外推。 | 周期及电表覆盖日志 |
| dq_readability | 成品载体 | 保留内容完整性、可读性、兼容性及缺陷验收证据；操作保管指南不构成保证寿命。 | 场址质量方案；nist-sp-500-252-2003 第 4–5 节 |
| dq_waste | 废物及排放 | 区分废物转移与环境释放；识别组成、接收方及环境介质。身份缺失不表示数量为零。 | 转移、分析、平衡及释放记录 |
| dq_other_media | 非 DVD 路线 | 用于录像带、蓝光或 Video-CD 前，提供完整载体专属交换清单及质量依据。 | 实际载体清单、记录路线及验收检验 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| val_identity | reference_flow | 须有全部限定信息、正的合格净质量及录制视频商品；空白或软件介质不得作为最终参考。 | `un-cpc-3-0-explanatory-notes-2025` |
| val_route | inventory | 核对每批次一条路线；复制材料与成品空白供应不得同时代表同一载体制造。 | `nist-sp-500-252-2003` |
| val_rows | flow_identity | 每行须为类型、物理状态、属性、单位及环境介质正确的单一原子交换。空 UUID 须明确记录为未解决，不得静默代用近似流。 |  |
| val_records | amounts | 须有协议关联记录、驱动量、换算及计算；拒绝无法解释的负数量、缺少条件依据及无来源替代默认值。 |  |
| val_balances | balances | 根据有记录的不确定性核对数量、载体及包装质量、废物、工具库存、水及氩平衡、转移及电表；不规定通用百分比容差。 |  |
| val_quality | final_product | 须有可追溯内容及可读性检验和操作损伤记录；不合格及销毁复制品不计入可销售产出。 | `nist-sp-500-252-2003` |
| val_claims | dataset_use | 披露上游覆盖及排除的创作生产、分销、使用和报废阶段；无可比附加模块时不得进行观看服务比较。 | `shehabi-video-streaming-2014` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 明确场址、版本及路线的 `secondary_dataset`；只有经独立代表性及上游完整性审查后才作为 `background_dataset` |
| downstream_use | 实物介质供应建模及另行组装的视频服务生命周期模型 |
| allowed_use | 针对匹配载体、质量、路线及供应边界缩放；作为更广生命周期模型的明确组成 |
| excluded_use | 未披露地套用其他载体；完整电影生产声明；无使用数据的观看小时比较；空白或软件代用 |
| required_metadata | 参考限定信息、供应商及场址地域、日期、路线、材料清单、质量及数量、边界、协议、分配、废物去向及背景链接 |
| required_quality_disclosure | 不确定性、外推、缺失记录、未解决身份、缺少外部范围、验收检验、平衡差额及上游完整性 |
| update_trigger | 载体层结构或包装改版、新化学配方、路线供应商电网变化、周期分母修订及重要质量或成品率变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，CPC 3.0 结构表，2025 年 6 月 30 日，47620 行。 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；访问日期 2026-09-09 | 已核验 CSV 原始标题及层级，SHA-256 与提供的缓存回执一致。 |
| un-cpc-3-0-explanatory-notes-2025 | official_guidance | 联合国统计司，CPC 3.0 解释性说明，2025 年 6 月 30 日，印刷页 261，47620 子类。 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf；访问日期 2026-09-09 | 已核验原页：录制视频商品与纯音频、服务及原始作品产权的区分。 |
| us-epa-life-cycle-cd-dvd | official_guidance | 美国 EPA，Life Cycle of a CD or DVD，海报 P1001UU0，材料获取、制造及包装部分。 https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1001UU0.TXT；访问日期 2026-09-09 | 已核验官方原文以支持定性过程划分；未采用数值默认量或寿命范围。 |
| nist-sp-500-252-2003 | official_guidance | Fred R. Byers，Care and Handling of CDs and DVDs: A Guide for Librarians and Archivists，NIST SP 500-252 / CLIR，2003 年，第 3–5 节，特别是印刷页 5–11。 https://nvlpubs.nist.gov/nistpubs/legacy/sp/NISTspecialpublication500-252.pdf ; https://doi.org/10.6028/NIST.SP.500-252；访问日期 2026-09-09 | 已核验结构原文及层结构图：复制与可录区别、粘合及操作保管和可读性。该指南不是符合性标准。 |
| shehabi-video-streaming-2014 | literature | Arman Shehabi、Ben Walker 和 Eric Masanet，The energy and greenhouse-gas implications of internet video streaming in the United States，Environmental Research Letters 9（2014）054007。 https://doi.org/10.1088/1748-9326/9/5/054007 ; 全文 https://files.ifi.uzh.ch/hilty/t/Literature_by_RQs/RQ%20100/2014_Shehabi_Walker_Masanet_Energy_and_greenhouse-gas_implications_of_internet_video_streaming_in_US.pdf；访问日期 2026-09-09 | 已核验研究方法、DVD 系统假设及图 1 原文，区分生产、运输、观看及设备。历史美国情景不构成可移植经验范围。 |
