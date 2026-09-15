---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.gauze-other-than-narrow-fabrics
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: reviewed
sync_with: pcr.en-US.md
---

# 纱罗（狭幅织物除外）

## 1. 范围与适用性

本 PCR 适用于成匹纱罗织物的工厂门口生产；其机织结构由地经和绞经构成，绞经绕过地经形成供纬纱穿过的线圈。可销售织物的宽度必须大于 30 cm，且不得属于以下更具体的产品身份：医用敷料、制成品、非织造布、针织或钩编网、花边、玻璃纤维机织物、归入其他类别的涂层或层压织物，或狭幅机织物。结构与宽度规则依据 `unsd-cpc-3-0-2025` 和 `eu-cn-gauze-narrow-fabric-1989`。

前景边界始于接收经纱和纬纱，止于制造厂门口净重、干燥且可销售的纱罗织物。边界包括纱线准备、条件性经纱上浆、纱罗织造、按路线区分的湿法预处理、漂白或匹染、干燥或热定形、检验、卷装、包装，以及实际运行时的场内天然气蒸汽生产和工艺废水处理。纤维生产和纱线制造需要采用上游数据集。出厂后的配送、加工成绷带或其他制成品、灭菌、使用以及生命周期终结均不属于前景边界。

坯布、预处理、漂白和匹染状态必须分别申报。不得仅因不同条件路线生产相同质量的纱罗就将其平均。数据包应申报纤维组成、织物组织、成品宽度、单位面积质量、整理状态、适用时的染料或化学品配方、织机技术、湿处理路线、供热路线、废水路线、场址、报告期和生产批次覆盖范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.gauze-other-than-narrow-fabrics |
| classification_refs | CPC 3.0：26860，纱罗（狭幅织物除外），精确分类语境 |
| covered_products | 宽度大于 30 cm 的成匹机织纱罗织物，由地经和绞经形成供纬纱穿过的线圈；实际路线已申报时，包括坯布、预处理、漂白或匹染的市场状态 |
| excluded_products | 按所引海关规则定义的宽度不超过 30 cm 的狭幅机织物；筒状狭幅织物；非织造布；针织或钩编网；网眼薄纱和花边；玻璃纤维机织物；归入其他类别的涂层、浸渍、橡胶化或层压织物；经裁切、折叠、浸渍、药物处理、灭菌或以其他方式制成的医用纱布、绷带和敷料；服装及其他制成品 |
| representative_product | 一卷可销售的机织纱罗织物，宽度大于 30 cm，并申报纤维组成、宽度、单位面积质量和整理状态 |
| production_route | 接收纱线 -> 络筒/整经/卷经 -> 条件性经纱上浆 -> 纱罗织造 -> 按路线门禁的预处理、漂白或匹染 -> 按路线门禁的干燥/热定形 -> 检验/卷装 -> 包装；仅在实际运行时纳入场内蒸汽生产和废水处理 |
| market_state | 工厂门口以卷装或折叠长度交付的干燥可销售纱罗织物；包装计入清单，但不计入参考产品净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 内容（`what`） | 供应具有已申报结构和整理状态的成匹机织纱罗织物（狭幅织物除外） |
| 数量（`how_much`） | 1 kg 可销售纱罗织物净干质量，不包括纸板卷芯、薄膜、纸箱、托盘及所有其他包装皮重 |
| 质量要求（`how_well`） | 地经和绞经构成线圈、纬纱穿过线圈的组织；成品宽度大于 30 cm；申报纤维组成、单位面积质量、水分或调湿基准、颜色和整理状态；通过生产商的可销售质量规范 |
| 时间或周期（`how_long_or_cycle`） | 已申报生产批次的一次工厂门口交付；不主张使用阶段寿命 |
| 参考流关联（`reference_flow_link`） | 下述参考数量按产品净质量基准实现本功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净干、可销售纱罗织物 |
| 参考产品流 | 工厂门口干燥且可销售的机织纱罗织物（狭幅织物除外） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纤维组成；地经和绞经组织；成品宽度；单位面积质量；水分或调湿基准；坯布/预处理/漂白/染色状态；颜色；整理配方；织机技术；生产地域；场址；报告期；批次覆盖范围；包装配置 |

参考产品 UUID 仍未解析；质量流属性 UUID、质量单位组 UUID 和 kg 参考单位已经确认。人类可读流名称有意保持精确和原子化；不得以范围更宽的棉织物、医用纱布或玻璃纤维 UUID 替代。发布前仍须通过新的 `state_code=100` 直接读取确认精确产品流 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考纱罗输出 | 质量 | kg | 称量调湿后的可销售纱罗，扣除纸板卷芯、薄膜、纸箱、托盘及所有其他包装皮重；将全部清单归一化至 1 kg 产品净重。保留毛重、皮重和净重读数。 |
| `fabric_width_identity` | 成品织物宽度 | 长度 | cm | 横跨织物可用幅宽测量成品宽度。本 PCR 要求宽度大于 30 cm；宽度不超过 30 cm 的织物不得由本参考流表示。`eu-cn-gauze-narrow-fabric-1989` |
| `area_mass_crosscheck` | 参考纱罗输出 | 单位面积质量 | g/m2 | 记录调湿后的单位面积质量、可用宽度和可销售长度。用面积乘以单位面积质量交叉核对净质量；对实质性差异进行调查，而不得强行使其相等。 |
| `moisture_basis` | 纱线、中间品和最终纺织品质量 | 质量 | kg | 申报调湿状态或实测水分基准，并对投入、产出、损失和收率计算采用一致基准。 |
| `utility_units` | 电力、热能、蒸汽、水和压缩空气 | 能量、质量或体积 | kWh；MJ；kg；m3；Nm3 | 采用经校准仪表或发票单位；记录换算系数、热值基准、蒸汽压力/温度基准以及压缩空气的标准状态。 |
| `chemical_mass` | 每种上浆、预处理、漂白、染色和处理化学品 | 质量 | kg | 按实际使用质量，将每种采购或内部配制的化学成分记录为独立原子交换；采购溶液时另行记录有效成分浓度。 |
| `emission_mass` | 直接空气和水排放 | 质量 | kg | 根据实测浓度乘以同期实测标准化气体或废水体积计算；无法直接测量时，采用有引证且已披露的方法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 纱罗制造场址接收的经纱和纬纱，并申报纤维组成、供应商、质量、水分基准和上游数据集引用 |
| starting_condition_role | 前景纱罗制造系统的上游产品投入 |
| product_classification_scope | 成匹机织纱罗织物，CPC 3.0 26860 分类语境；宽度大于 30 cm；不是制成品或医疗用品 |
| recursive_input_rule | 若加工同类别的外购纱罗，应将其作为具有自身数据集的独立上游产品投入记录；不得将其质量或上游负荷与场址自产纱罗暗中合并 |
| upstream_dataset_requirement | 纤维和纱线生产、外购电力、外购蒸汽或热、燃料、化学品、供水、包装和外部废物处理需要具有地域和技术代表性的上游数据集 |
| disclosure | 申报纤维和纱线来源、组织与宽度、整理状态路线、外包操作、内部中间品转移、公用工程路线、废水路线、包装皮重、截断决定、分配决定和未解决的数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_received_yarn_to_gate` | 前景系统 | 纳入从纱线接收至可销售纱罗检验/卷装和包装的每项实际运行步骤，以及场内公用工程生产和废水处理；纤维/纱线生产不纳入前景，但需要上游数据集。 | `ifc-textile-ehs-2007`; `ec-ef-method-2021` |
| `boundary_route_gate` | 条件性制造路线 | 仅在已申报批次实际采用时纳入上浆、湿法预处理、漂白、染色、热定形、直接燃烧干燥、场内蒸汽生产和废水处理；保留独立路线合计，绝不平均互斥状态或技术。 | `jrc-textiles-bref-2023`; `ifc-textile-ehs-2007` |
| `boundary_packaging_tare` | 参考输出和包装 | 在清单中纳入包装生产和包装损失，但从 1 kg 参考产品质量中排除全部包装皮重。 | `ec-ef-method-2021` |
| `boundary_outsourced_steps` | 外包加工 | 若外包操作位于接收纱线与已申报出厂边界之间，则通过具体上游过程数据集和运输将其纳入；披露其外包性质，并避免重复记录场址公用工程或排放。 | `ec-ef-method-2021` |
| `boundary_post_gate_exclusion` | 下游阶段 | 从本前景数据包中排除出厂后配送、加工成医疗用品或制成品、灭菌、使用和生命周期终结。 | `unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | 络筒、整经和卷经 | required | 所有采用接收纱线的路线 | 为纱罗织造准备全幅经轴和纬纱供应 | 供应织造的已准备经纱和纬纱 kg |
| `warp_sizing` | 经纱上浆和干燥 | conditional | 仅在报告场址施加浆料时纳入 | 施加已申报的浆料配方，以在织造期间保护经纱 | 上浆经轴 kg |
| `gauze_weaving` | 纱罗织造 | required | 每种覆盖产品 | 将地经和绞经与纬纱交织，生产纱罗坯布 | 纱罗坯布 kg |
| `desizing_scouring` | 退浆、煮练、水洗和中和 | conditional | 在报告场址去除浆料或杂质时纳入 | 为销售或后续湿整理准备纱罗坯布 | 预处理纱罗 kg |
| `peroxide_bleaching` | 过氧化氢漂白、水洗和中和 | conditional | 仅用于已申报的过氧化氢漂白路线 | 生产漂白纱罗，不与坯布或染色路线平均 | 漂白纱罗 kg |
| `reactive_piece_dyeing` | 活性匹染、固色和水洗 | conditional | 仅用于已申报的纤维素纤维路线；应为实际批准配方中的每种染料和助剂增设一个原子交换，而不得预先指定任意染料身份 | 生产已申报的染色纱罗 | 染色纱罗 kg |
| `drying_heat_setting` | 机械脱水、干燥和条件性热定形 | conditional | 湿处理后纳入，并在已申报路线采用拉幅或热定形时纳入 | 使纱罗达到已申报的干燥和尺寸状态 | 干燥整理纱罗 kg |
| `inspection_rolling_packaging` | 检验、修补、修边、卷装和包装 | required | 每条路线 | 生产可销售净纱罗并单独盘查包装 | 可销售纱罗净重 kg |
| `thermal_supply` | 场内天然气蒸汽生产 | conditional | 仅在场址燃烧天然气、在前景边界内供应蒸汽时纳入；采用其他锅炉燃料时，必须建立单独审查的路线以及原子化燃料和排放行 | 供应实测工厂蒸汽并记录直接燃烧交换 | 供应蒸汽 kg |
| `wastewater_treatment` | 场内纺织废水处理和排放 | conditional | 工艺废水由报告场址处理并排放时纳入 | 处理合并计量的纺织废水，同时不掩盖各上游产生步骤 | 处理废水 m3 |

### 过程：络筒、整经和卷经（`yarn_preparation`）

#### 输入

##### 产品流

###### 接收经纱（`warp_yarn`）

接收经纱跨越场址边界，并被准备成地经和绞经系统。

- 选定流：机织纱罗用经纱
- 流属性/单位：质量 / kg
- 数量规则：按供应商和批次记录发放至纱线准备工序的调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_preparation`
- 来源：`ifc-textile-ehs-2007`

###### 接收纬纱（`weft_yarn`）

接收纬纱跨越场址边界，经准备后穿过纱罗经纱形成的线圈。

- 选定流：机织纱罗用纬纱
- 流属性/单位：质量 / kg
- 数量规则：按供应商和批次记录发放至纱线准备工序或直接发放至织造工序的调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_preparation`
- 来源：`ifc-textile-ehs-2007`

###### 络筒和整经用电（`yarn_prep_electricity`）

电力驱动络筒、整经和卷经设备。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：纱线准备工序的分表电量，或由总表电量分配所得的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发放至织造的已准备经纱和纬纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_preparation`
- 来源：`ifc-textile-ehs-2007`; `ec-ef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备经轴（`prepared_warp_beam`）

全幅经轴是转移至上浆工序或直接转移至织造工序的实测中间产品。

- 选定流：机织纱罗用已准备经轴
- 流属性/单位：质量 / kg
- 数量规则：经轴上的调湿经纱质量，不包括可重复使用的经轴硬件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已准备经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_preparation`
- 来源：`ifc-textile-ehs-2007`

##### 废物流

###### 纱线准备废物（`yarn_prep_waste`）

络筒、整经和卷经过程中清除的断纱、缠结纱和不可用纱线以纺织废物形式离开过程。

- 选定流：纱罗纱线准备产生的废纱
- 流属性/单位：质量 / kg
- 数量规则：按批次称量废物，不包括归一化前返回同一过程的纱线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已准备经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_preparation`
- 来源：`ifc-textile-ehs-2007`

##### 基本流

### 过程：经纱上浆和干燥（`warp_sizing`）

#### 输入

##### 产品流

###### 进入上浆工序的已准备经轴（`sizing_warp_beam_input`）

只有在已申报路线于报告场址施加浆料时，已准备经轴才进入上浆工序。

- 选定流：机织纱罗用已准备经轴
- 流属性/单位：质量 / kg
- 数量规则：装入上浆机组的调湿经纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 上浆经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`
- 来源：`ifc-textile-ehs-2007`

###### 玉米淀粉浆料（`corn_starch_size`）

实际施用的经纱浆料配方含有玉米淀粉时，将其单独记录。

- 选定流：上浆级玉米淀粉
- 流属性/单位：质量 / kg
- 数量规则：根据批次配方和领料记录计算实际使用的淀粉质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 上浆经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_warp_sizing`
- 来源：`ifc-textile-ehs-2007`

###### 聚乙烯醇浆料（`pva_size`）

聚乙烯醇是一项独立的条件性交换，不得与淀粉或其他浆料合并。

- 选定流：经纱上浆级聚乙烯醇
- 流属性/单位：质量 / kg
- 数量规则：根据批次配方和领料记录计算实际使用的 PVA 质量；仅在确认未使用时记为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 上浆经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_warp_sizing`
- 来源：`ifc-textile-ehs-2007`

###### 上浆工艺水（`sizing_water`）

加入浆料配制和施加系统的外部补充水应与冷却水、生活用水和内部回用水分别计量。

- 选定流：经纱上浆工艺水
- 流属性/单位：体积 / m3
- 数量规则：计量供应上浆工序的外部补充水；内部回用水另行报告，不得计入本产品交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 上浆经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 上浆用电（`sizing_electricity`）

电力驱动浆料配制、泵、传动装置和控制系统。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：上浆工序分表电量，或依据文件记录从共用电表分配所得的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 上浆经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`
- 来源：`ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### 上浆和干燥用蒸汽（`sizing_steam`）

输送至上浆机组的蒸汽作为一项热力产品交换记录；其上游来源为外购蒸汽或条件性的场内供热过程。

- 选定流：供应经纱上浆的饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：计量输送至浆料蒸煮和经轴干燥的蒸汽，并披露冷凝水处理方式
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 上浆经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`
- 来源：`ifc-textile-ehs-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 上浆经轴（`sized_warp_beam`）

上浆经轴转移至纱罗织造工序，同时记录上浆率和干质量。

- 选定流：机织纱罗用上浆经轴
- 流属性/单位：质量 / kg
- 数量规则：经纱加留存干浆料的调湿质量，不包括可重复使用的经轴硬件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 上浆经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`
- 来源：`ifc-textile-ehs-2007`

##### 废物流

###### 上浆废水（`sizing_wastewater`）

废弃浆液和上浆设备清洗水在处理前作为一股具体废水流离开过程。

- 选定流：经纱上浆废水
- 流属性/单位：体积 / m3
- 数量规则：计量送往处理或外部处置的废水，或根据槽体体积推算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 上浆经轴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### 基本流

### 过程：纱罗织造（`gauze_weaving`）

#### 输入

##### 产品流

###### 织造用经轴（`weaving_warp_beam`）

一个已准备或上浆的经轴产品进入织机；路线限定信息应说明是否进行了上浆。

- 选定流：纱罗织造用经轴
- 流属性/单位：质量 / kg
- 数量规则：发放至纱罗织机的调湿经纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 纱罗坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gauze_weaving`
- 来源：`eu-cn-gauze-narrow-fabric-1989`; `ifc-textile-ehs-2007`

###### 织造用纬纱（`weaving_weft_yarn`）

纬纱穿过绞经与地经系统形成的线圈。

- 选定流：机织纱罗用纬纱
- 流属性/单位：质量 / kg
- 数量规则：发放至纱罗织机的调湿纬纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 纱罗坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gauze_weaving`
- 来源：`eu-cn-gauze-narrow-fabric-1989`; `ifc-textile-ehs-2007`

###### 纱罗织造用电（`weaving_electricity`）

电力驱动织机、卷取、送经、控制系统和局部物料搬运。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：织机区域分表电量，或同期依据机器功率形成文件记录的分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 纱罗坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gauze_weaving`
- 来源：`ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### 喷气织造用压缩空气（`weaving_compressed_air`）

压缩空气仅用于喷气织机路线，不得与剑杆、梭织、片梭或喷水路线平均。

- 选定流：纱罗厂压缩空气
- 流属性/单位：标准体积 / Nm3
- 数量规则：计量输送至喷气织机的压缩空气，并申报压力和标准状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 喷气织机生产的纱罗坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gauze_weaving`
- 来源：`ifc-textile-ehs-2007`

###### 喷水织造用水（`water_jet_water`）

仅在喷水织机实际提供引纬水流时纳入外部补充水；内部循环水另行披露。

- 选定流：喷水织造工艺水
- 流属性/单位：体积 / m3
- 数量规则：计量供应喷水织机的外部补充水；内部循环水作为独立原始字段保留，不得计入本交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 喷水织机生产的纱罗坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gauze_weaving`
- 来源：`ifc-textile-ehs-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机织纱罗坯布（`greige_gauze`）

纱罗坯布是具有规定地经和绞经组织的下机产品。

- 选定流：机织纱罗坯布（狭幅织物除外）
- 流属性/单位：质量 / kg
- 数量规则：湿法预处理或最终检验前离开纱罗织机的调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 纱罗坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gauze_weaving`
- 来源：`unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989`

##### 废物流

###### 织造纺织废物（`weaving_textile_waste`）

仅在断头纱、织机开机布、布边废料和不可用坯布段被实际共同收集时，才将其作为一股实测织造废物流离开过程。

- 选定流：纱罗织造纺织废物
- 流属性/单位：质量 / kg
- 数量规则：称量从纱罗织机清除且未返回同一生产批次的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 纱罗坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gauze_weaving`
- 来源：`ifc-textile-ehs-2007`

###### 喷水织机废水（`water_jet_wastewater`）

喷水织造排出的水是路线特定废水流，在干式织机路线中不存在。

- 选定流：喷水织机废水
- 流属性/单位：体积 / m3
- 数量规则：计量喷水织机循环和排污系统的排水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 喷水织机生产的纱罗坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gauze_weaving`
- 来源：`ifc-textile-ehs-2007`

##### 基本流

###### 织造颗粒物（`weaving_pm10`）

经捕集设备后排出的实测纺织粉尘作为直接空气排放记录，不作为产品流或废物流。

- 选定流：排放至空气的粒径小于 10 µm 的颗粒物
- 流属性/单位：质量 / kg
- 数量规则：生产期间的烟道或车间排风测量；仅纳入跨越环境边界的释放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 纱罗坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_gauze_weaving`
- 来源：`ifc-textile-ehs-2007`

### 过程：退浆、煮练、水洗和中和（`desizing_scouring`）

#### 输入

##### 产品流

###### 进入湿法预处理的纱罗坯布（`prep_greige_gauze`）

仅在已申报路线于报告场址去除浆料或天然杂质、加工杂质时，纱罗坯布才进入本过程。

- 选定流：机织纱罗坯布（狭幅织物除外）
- 流属性/单位：质量 / kg
- 数量规则：装入退浆煮练生产线的调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 退浆和煮练工艺水（`prep_water`）

供应退浆、煮练、水洗和中和的外部补充工艺水在生产线边界计量；内部回用水另行追踪。

- 选定流：纺织湿法预处理工艺水
- 流属性/单位：体积 / m3
- 数量规则：计量供应生产线的外部补充水；内部回用水作为独立原始字段保留，不得计入本交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 退浆和煮练用蒸汽（`prep_steam`）

输送至湿法预处理的蒸汽与电力和直接燃料分别记录。

- 选定流：供应纺织湿法预处理的饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：计量输送至退浆、煮练和水洗的蒸汽，并披露冷凝水回收情况
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`

###### 退浆和煮练用电（`prep_electricity`）

电力驱动浴液循环、水洗、加料、脱水和控制系统。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：适用湿法预处理生产周期的分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### 煮练用氢氧化钠（`prep_sodium_hydroxide`）

进行碱煮练时，将氢氧化钠作为独立化学品记录。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：根据批次领料量和溶液浓度计算氢氧化钠有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 淀粉退浆用淀粉酶制剂（`prep_amylase_enzyme`）

仅在已申报的酶退浆路线使用淀粉酶去除淀粉或改性淀粉浆料时，记录该酶制剂。

- 选定流：纺织退浆级淀粉酶制剂
- 流属性/单位：质量 / kg
- 数量规则：根据批准配方和领料记录计算实际使用的酶制剂质量；将酶活性和制剂浓度保留为质量证据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 经酶法淀粉退浆得到的预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 脂肪醇聚氧乙烯醚表面活性剂（`prep_surfactant`）

可生物降解的非离子表面活性剂是一个原子配方成分，仅在实际配方含有该物质时纳入。

- 选定流：脂肪醇聚氧乙烯醚表面活性剂
- 流属性/单位：质量 / kg
- 数量规则：根据配方、浓度和批次领料记录计算表面活性剂有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 中和用乙酸（`prep_acetic_acid`）

煮练后使用乙酸中和残余碱时，将其单独记录。

- 选定流：乙酸
- 流属性/单位：质量 / kg
- 数量规则：根据批次领料量和浓度记录计算乙酸有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理纱罗（`prepared_gauze`）

预处理纱罗经退浆、煮练、水洗、中和和机械脱水后离开过程。

- 选定流：湿态预处理机织纱罗织物
- 流属性/单位：质量 / kg
- 数量规则：记录转移至销售整理、漂白或染色工序的湿质量和另行测定的干纺织品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### 废物流

###### 退浆和煮练废水（`prep_wastewater`）

湿法预处理产生的废浴液和洗水在处理前作为实测废水流离开过程。

- 选定流：退浆和煮练废水
- 流属性/单位：体积 / m3
- 数量规则：计量适用浴液、水洗和排污的排水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干预处理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desizing_scouring`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### 基本流

### 过程：过氧化氢漂白、水洗和中和（`peroxide_bleaching`）

#### 输入

##### 产品流

###### 进入漂白工序的预处理纱罗（`bleach_prepared_gauze`）

仅在申报过氧化氢漂白时，预处理纱罗才进入这一互斥门禁路线。

- 选定流：湿态预处理机织纱罗织物
- 流属性/单位：质量 / kg
- 数量规则：装入过氧化氢漂白生产线的干纺织品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干漂白纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_peroxide_bleaching`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 漂白工艺水（`bleach_water`）

供应漂白、水洗和中和的外部补充水与前序步骤用水分别计量；内部回用水另行追踪。

- 选定流：过氧化氢漂白工艺水
- 流属性/单位：体积 / m3
- 数量规则：计量供应漂白生产线的外部补充水；内部回用水作为独立原始字段保留，不得计入本交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干漂白纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_peroxide_bleaching`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 漂白用蒸汽（`bleach_steam`）

输送至漂白生产线的蒸汽作为一项热力产品流记录。

- 选定流：供应过氧化氢漂白的饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：计量输送至加热和水洗的蒸汽，并披露冷凝水回收情况
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干漂白纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_peroxide_bleaching`
- 来源：`ifc-textile-ehs-2007`

###### 漂白用电（`bleach_electricity`）

电力驱动循环、加料、水洗、脱水和控制系统。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：过氧化氢漂白生产周期的分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干漂白纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_peroxide_bleaching`
- 来源：`ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### 过氧化氢（`bleach_hydrogen_peroxide`）

过氧化氢是已申报的漂白剂，不与含氯替代品合并。

- 选定流：过氧化氢
- 流属性/单位：质量 / kg
- 数量规则：根据采购溶液浓度和批次领料记录计算过氧化氢有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干漂白纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_peroxide_bleaching`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 过氧化氢漂白用氢氧化钠（`bleach_sodium_hydroxide`）

用于建立漂白浴碱度的氢氧化钠应单独计量。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：根据浓度和批次领料记录计算氢氧化钠有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干漂白纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_peroxide_bleaching`
- 来源：`ifc-textile-ehs-2007`

###### 漂白后用乙酸（`bleach_acetic_acid`）

漂白后使用乙酸中和时将其纳入。

- 选定流：乙酸
- 流属性/单位：质量 / kg
- 数量规则：根据浓度和批次领料记录计算乙酸有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干漂白纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_peroxide_bleaching`
- 来源：`ifc-textile-ehs-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 漂白纱罗（`bleached_gauze`）

漂白纱罗离开生产线时，记录其干纺织品质量、残余水分和白度规范。

- 选定流：湿态过氧化氢漂白机织纱罗织物
- 流属性/单位：质量 / kg
- 数量规则：记录转移至干燥或进一步整理的湿质量和另行测定的干纺织品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干漂白纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_peroxide_bleaching`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### 废物流

###### 过氧化氢漂白废水（`bleach_wastewater`）

废漂白浴液、洗水和中和冲洗水在处理前作为一股具体废水流离开过程。

- 选定流：过氧化氢漂白废水
- 流属性/单位：体积 / m3
- 数量规则：计量过氧化氢漂白和水洗序列的排水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干漂白纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_peroxide_bleaching`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### 基本流

### 过程：活性匹染、固色和水洗（`reactive_piece_dyeing`）

#### 输入

##### 产品流

###### 进入活性染色的纱罗（`dye_gauze_input`）

仅在申报活性匹染产品状态时，预处理或漂白后的纤维素纤维纱罗才进入本过程。

- 选定流：湿态预处理纤维素纤维机织纱罗织物
- 流属性/单位：质量 / kg
- 数量规则：装入已申报染色批次的干纺织品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干染色纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reactive_dyeing`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 染色工艺水（`dye_water`）

对供应已申报染色批次的染料施加、固色和水洗外部补充水进行计量；内部回用水另行追踪。

- 选定流：活性匹染工艺水
- 流属性/单位：体积 / m3
- 数量规则：计量供应染浴和水洗序列的外部补充水；内部回用水作为独立原始字段保留，不得计入本交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干染色纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reactive_dyeing`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 活性染色用蒸汽（`dye_steam`）

输送至染色和水洗的蒸汽与电力和直接燃料分别记录。

- 选定流：供应活性匹染的饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：计量输送至染色、固色和水洗的蒸汽，并披露冷凝水回收情况
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干染色纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reactive_dyeing`
- 来源：`ifc-textile-ehs-2007`

###### 活性染色用电（`dye_electricity`）

电力驱动加料、染液循环、水洗、脱水和控制系统。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：已申报活性染色生产周期的分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干染色纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reactive_dyeing`
- 来源：`ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### 活性染色用氯化钠（`dye_sodium_chloride`）

氯化钠是一项独立的条件性电解质投入，绝不与染料或碱合并。

- 选定流：氯化钠
- 流属性/单位：质量 / kg
- 数量规则：根据配方和批次领料记录计算实际使用的氯化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干染色纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_reactive_dyeing`
- 来源：`ifc-textile-ehs-2007`

###### 活性染色用碳酸钠（`dye_sodium_carbonate`）

使用碳酸钠建立固色碱度时，将其单独记录。

- 选定流：碳酸钠
- 流属性/单位：质量 / kg
- 数量规则：根据配方和批次领料记录计算实际使用的碳酸钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干染色纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_reactive_dyeing`
- 来源：`ifc-textile-ehs-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 活性染色纱罗（`dyed_gauze`）

染色纱罗离开过程时，记录颜色标识、色调、干质量和残余水分。

- 选定流：湿态活性染色机织纱罗织物
- 流属性/单位：质量 / kg
- 数量规则：记录转移至干燥工序的湿质量和另行测定的干纺织品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干染色纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reactive_dyeing`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### 废物流

###### 活性染色废水（`dye_wastewater`）

废染浴、固色液和洗水在处理前作为一股具体废水流离开过程。

- 选定流：活性匹染废水
- 流属性/单位：体积 / m3
- 数量规则：计量染料施加、固色和水洗过程的排水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干染色纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reactive_dyeing`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### 基本流

### 过程：机械脱水、干燥和条件性热定形（`drying_heat_setting`）

#### 输入

##### 产品流

###### 进入干燥工序的湿纱罗（`drying_wet_gauze`）

预处理、漂白或染色后的湿纱罗进入本过程时，应保留路线身份和干纺织品质量。

- 选定流：湿态整理机织纱罗织物
- 流属性/单位：质量 / kg
- 数量规则：进入机械脱水或干燥工序的湿质量，并另行测定干纺织品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干燥整理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_finishing`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 脱水和干燥用电（`drying_electricity`）

电力驱动离心脱水、传动装置、风机、控制系统和热定形设备。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：适用干燥和热定形生产周期的分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥整理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_finishing`
- 来源：`ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### 间接纺织品干燥用蒸汽（`drying_steam`）

仅在间接蒸汽加热式干燥机或拉幅机为已申报路线供热时记录蒸汽；不得与直接燃烧天然气或其他热载体合并。

- 选定流：供应间接纺织品干燥的饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：计量输送至适用干燥机或拉幅机的蒸汽，并披露压力、温度和冷凝水回收情况
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 间接蒸汽干燥得到的干燥整理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_finishing`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 直接燃烧干燥用天然气（`drying_natural_gas`）

只有在直接燃烧式干燥机或拉幅机于本过程中燃烧天然气时，天然气才跨越前景边界；外购热和场内蒸汽通过各自路线记录。

- 选定流：天然气
- 流属性/单位：低位热值能量 / MJ
- 数量规则：用供应商低位热值将直接燃烧设备的计量燃气体积换算为能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 直接燃烧干燥得到的干燥整理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_finishing`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干燥整理纱罗（`dried_gauze`）

干燥整理纱罗离开过程时，测量调湿净质量、宽度、单位面积质量和整理状态。

- 选定流：干燥整理机织纱罗织物（狭幅织物除外）
- 流属性/单位：质量 / kg
- 数量规则：转移至检验和卷装工序的调湿干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干燥整理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_finishing`
- 来源：`unsd-cpc-3-0-2025`; `ifc-textile-ehs-2007`

##### 废物流

##### 基本流

###### 直接燃烧干燥产生的化石二氧化碳（`drying_co2_fossil`）

仅对直接燃烧路线记录天然气直接燃烧释放的化石二氧化碳。

- 选定流：排放至空气的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：烟道测量，或采用已披露的方法根据计量天然气的碳含量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 直接燃烧干燥得到的干燥整理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_finishing`
- 来源：`ifc-textile-ehs-2007`

###### 直接燃烧干燥产生的氮氧化物（`drying_nox`）

排放至空气的氮氧化物应与二氧化碳和其他烟气排放分别记录。

- 选定流：排放至空气的氮氧化物
- 流属性/单位：质量 / kg
- 数量规则：烟道浓度乘以生产期间的标准化干烟气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 直接燃烧干燥得到的干燥整理纱罗
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_finishing`
- 来源：`ifc-textile-ehs-2007`

### 过程：检验、修补、修边、卷装和包装（`inspection_rolling_packaging`）

#### 输入

##### 产品流

###### 进入最终整理的纱罗（`finish_gauze_input`）

坯布或干燥整理纱罗进入最终检验时，应保留路线身份。

- 选定流：进入最终检验的机织纱罗织物
- 流属性/单位：质量 / kg
- 数量规则：进入检验和卷装工序的调湿纺织品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_finishing_packaging`
- 来源：`unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989`

###### 检验和包装用电（`finish_electricity`）

电力驱动验布台、修补设备、卷装、裁切和包装机械。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量，或在同一可销售产出期间依据文件记录的设备分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_finishing_packaging`
- 来源：`ec-ef-method-2021`

###### 纸板卷芯（`paperboard_core`）

卷芯作为包装计入清单，但不计入参考产品净质量。

- 选定流：纸板卷芯
- 流属性/单位：质量 / kg
- 数量规则：称量消耗的采购卷芯，扣除报告期内返还的可重复使用卷芯
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_finishing_packaging`
- 来源：`ec-ef-method-2021`

###### 低密度聚乙烯包装膜（`ldpe_film`）

用于卷装保护的初级或次级 LDPE 薄膜作为一项包装材料交换记录。

- 选定流：低密度聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：归属于已申报可销售产出的包装膜领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_finishing_packaging`
- 来源：`ec-ef-method-2021`

###### 瓦楞纸板运输箱（`corrugated_board`）

仅在已申报交付配置使用箱体时纳入瓦楞纸板。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：称量已申报产出消耗的箱体，不包括另行追踪的可重复使用运输包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_finishing_packaging`
- 来源：`ec-ef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售纱罗净重参考输出（`reference_gauze_output`）

这是尚未解析的精确参考产品流；包装皮重经过测量，但不计入其质量。

- 选定流：工厂门口干燥且可销售的机织纱罗织物（狭幅织物除外）
- 流属性/单位：质量 / kg
- 数量规则：扣除卷芯、薄膜、纸箱、托盘和其他包装皮重后的 1 kg 调湿纱罗净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_finishing_packaging`
- 来源：`unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989`

##### 废物流

###### 不合格纱罗废物（`offspec_gauze_waste`）

未返回同一批次的拒收或修边纱罗作为实测纺织废物离开过程。

- 选定流：不合格机织纱罗废物
- 流属性/单位：质量 / kg
- 数量规则：按去向路线称量拒收和修边纱罗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_finishing_packaging`
- 来源：`ec-ef-method-2021`

###### LDPE 包装边角料（`ldpe_packaging_scrap`）

薄膜裁切边料和不合格薄膜作为独立聚合物废物流离开过程。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：称量送往再使用、回收、处理或处置的薄膜边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_finishing_packaging`
- 来源：`ec-ef-method-2021`

###### 纸板包装边角料（`paperboard_packaging_scrap`）

不合格卷芯和瓦楞纸板边角料作为独立纸板废物流离开过程。

- 选定流：废纸板包装
- 流属性/单位：质量 / kg
- 数量规则：称量送往再使用、回收、处理或处置的纸板边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售纱罗净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_finishing_packaging`
- 来源：`ec-ef-method-2021`

##### 基本流

### 过程：场内天然气蒸汽生产（`thermal_supply`）

#### 输入

##### 产品流

###### 蒸汽锅炉用天然气（`boiler_natural_gas`）

仅在场内锅炉供应前景蒸汽时纳入天然气；外购蒸汽不包含本内部燃料行。

- 选定流：天然气
- 流属性/单位：低位热值能量 / MJ
- 数量规则：用供应商低位热值换算锅炉计量燃气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 供应蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_supply`
- 来源：`ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### 锅炉补充水（`boiler_feedwater`）

外部供应的锅炉补充水属于产品交换；回流冷凝水属于内部循环量，应在原始记录中另行保留。

- 选定流：锅炉补充水
- 流属性/单位：体积 / m3
- 数量规则：计量供应锅炉的外部补充水；回流冷凝水另行披露，不得计入本交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 供应蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_supply`
- 来源：`ifc-textile-ehs-2007`

###### 锅炉用电（`boiler_electricity`）

电力驱动锅炉风机、泵、控制系统和水处理设备。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：蒸汽生产期间锅炉房的分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 供应蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_supply`
- 来源：`ec-ef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂蒸汽（`mill_steam`）

内部供应的蒸汽是传递至上浆和湿处理用户的实测产品。

- 选定流：纱罗厂饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：计量输送的蒸汽，并申报压力、温度和冷凝水回收基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 供应蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_supply`
- 来源：`ifc-textile-ehs-2007`

##### 废物流

###### 锅炉排污废水（`boiler_blowdown`）

锅炉排污水作为一股具体公用工程废水流，在处理或排放前离开过程。

- 选定流：天然气锅炉排污废水
- 流属性/单位：体积 / m3
- 数量规则：计量，或根据排污事件和容器体积计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 供应蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_supply`
- 来源：`ifc-textile-ehs-2007`

##### 基本流

###### 锅炉产生的化石二氧化碳（`boiler_co2_fossil`）

场内天然气燃烧产生的化石二氧化碳与外购能源的背景排放分别记录。

- 选定流：排放至空气的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：烟道测量，或采用已披露的方法根据计量燃气的碳含量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 供应蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_supply`
- 来源：`ifc-textile-ehs-2007`

###### 锅炉产生的氮氧化物（`boiler_nox`）

离开锅炉烟囱的氮氧化物应与二氧化碳分别测量。

- 选定流：排放至空气的氮氧化物
- 流属性/单位：质量 / kg
- 数量规则：烟道浓度乘以蒸汽生产期间的标准化干烟气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 供应蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_supply`
- 来源：`ifc-textile-ehs-2007`

### 过程：场内纺织废水处理和排放（`wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理用电（`wastewater_treatment_electricity`）

电力驱动均质、泵送、曝气、澄清、污泥脱水和控制系统。

- 选定流：纱罗厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：在相同废水体积和报告期内计量污水处理设施的分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 氯化铁混凝剂（`ferric_chloride`）

仅在场内处理设施实际采用氯化铁作为混凝剂时记录。

- 选定流：氯化铁
- 流属性/单位：质量 / kg
- 数量规则：根据采购溶液浓度和投加记录计算氯化铁有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### 废水中和用氢氧化钠（`wastewater_neutralization_naoh`）

在废水处理中用于 pH 控制时，氢氧化钠作为独立条件性投入记录。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：根据浓度和投加记录计算氢氧化钠有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`

##### 废物流

###### 进入处理设施的合并纺织废水（`wastewater_input`）

在处理设施入口计量这股实际合并的工厂废水；上游上浆、织造、预处理、漂白和染色废水行仍应分别量化并核对。

- 选定流：纱罗厂合并工艺废水
- 流属性/单位：体积 / m3
- 数量规则：处理设施入口流量计合计值，并与每个产生过程和公用工程废水流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 脱水废水处理污泥（`wastewater_sludge`）

处理设施清除的污泥属于废物流；同时保留湿质量和干固体比例。

- 选定流：脱水纺织废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：称量脱水污泥，并测定干固体比例和记录去向路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`
- 数量范围：IFC 脱水污泥产生量 QA 基准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kg
  - 基准：每 m3 纺织废水处理后脱水的污泥
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ifc-textile-ehs-2007`

##### 基本流

###### 排放至淡水的处理水（`treated_water_to_freshwater`）

跨越场址边界进入淡水受纳环境的处理后废水体积属于基本水流。

- 选定流：排放至淡水的水
- 流属性/单位：体积 / m3
- 数量规则：许可排放流量计合计值；适用其他受纳环境时另设一行
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`

###### 排放至淡水的生化需氧量（`bod_to_freshwater`）

BOD 质量由实测浓度和相匹配的排放水量计算。

- 选定流：排放至淡水的生化需氧量
- 流属性/单位：质量 / kg
- 数量规则：实验室 BOD 浓度乘以相匹配的废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`

###### 排放至淡水的化学需氧量（`cod_to_freshwater`）

COD 质量与 BOD 及其他水污染物分别记录。

- 选定流：排放至淡水的化学需氧量
- 流属性/单位：质量 / kg
- 数量规则：实验室 COD 浓度乘以相匹配的废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`

###### 排放至淡水的总悬浮物（`total_suspended_solids_to_freshwater`）

总悬浮物应与需氧量指标和营养盐指标分别报告。

- 选定流：排放至淡水的总悬浮物
- 流属性/单位：质量 / kg
- 数量规则：实验室总悬浮物浓度乘以相匹配的废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`

###### 排放至淡水的总氮（`total_nitrogen_to_freshwater`）

总氮质量由相匹配的实验室结果和排放体积计算。

- 选定流：排放至淡水的总氮
- 流属性/单位：质量 / kg
- 数量规则：总氮浓度乘以相匹配的废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`

###### 排放至淡水的总磷（`total_phosphorus_to_freshwater`）

总磷作为独立基本排放报告。

- 选定流：排放至淡水的总磷
- 流属性/单位：质量 / kg
- 数量规则：总磷浓度乘以相匹配的废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`

###### 排放至淡水的可吸附有机卤素（`aox_to_freshwater`）

仅在进行 AOX 测量，或含氯投入使其具有相关性时纳入；不得与 COD 合并。

- 选定流：排放至淡水的可吸附有机卤素
- 流属性/单位：质量 / kg
- 数量规则：AOX 浓度乘以相匹配的废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ifc-textile-ehs-2007`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用过程和公用工程 | 优先通过细分独立计量的纱线准备、织造、湿处理、整理、公用工程和处理操作来避免分配；仅在替代功能明确且有充分理由时采用系统扩展。 | `ec-ef-method-2021` |
| `allocation_physical_relation` | 无法避免的共用负荷 | 无法通过细分消除共用负荷时，采用实测物理因果关系，例如机器时间、计量能耗、浴液体积、蒸汽焓或处理废水体积。如果产品净质量并不驱动该负荷，不得仅因其易于获得而采用净质量。 | `ec-ef-method-2021` |
| `allocation_economic_last` | 剩余多功能性 | 仅在不存在可辩护物理关系时采用经济分配；披露价格、期间、币种、波动性和敏感性，且不得对同一负荷混用经济分配和物理分配。 | `ec-ef-method-2021` |
| `allocation_internal_recycling` | 在系统内返回的纱线、浆液、水、冷凝水和纺织边角料 | 将经核实的同一系统内再使用视为内部循环：记录总投入、回收量、排污或损失及循环能耗，但不得为返回同一前景系统的材料建立共产品抵扣。 | `ec-ef-method-2021`; `ifc-textile-ehs-2007` |
| `allocation_external_scrap` | 出售或转移的纱线、纱罗、聚合物、纸板或污泥输出 | 分别保留每项外部输出的质量和去向。一致采用所选多功能性层级；没有已记录的替代产品和兼容的下游边界，不得主张避免负荷抵扣。 | `ec-ef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色（flow_role） | 记录类型（record_type） | 原始字段（raw_fields） | 采集方法（collection_method） | 单位（unit） | 频次（frequency） | 时间覆盖范围（temporal_coverage） | 场址范围（site_scope） | 汇总规则（aggregation_rule） | 质量证据（quality_evidence） |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_preparation` | `yarn_preparation` | 纱线、电力、已准备经轴和废纱 | 称重单、ERP 领料记录、分表记录和废物日志 | 纱线批次；纤维组成；毛重/皮重/净重；调湿基准；kWh；已准备经轴质量；废物质量 | 经校准秤、供应商/ERP 核对、分表或有文件记录的总表分配 | kg; kWh | 每批次及每月抄表结算 | 至少 12 个有代表性的月份，或完整的较短生产周期 | 为已申报产出服务的全部络筒、整经和卷经设备 | 对匹配记录求和，并按调湿后的已准备产出和最终参考质量归一化 | 秤和仪表校准；批次谱系；发票/ERP 核对；缺失记录日志 |
| `cp_warp_sizing` | `warp_sizing` | 经纱、每种浆料成分、水、电力、蒸汽、上浆经轴和废水 | 批次配方、化学品领料记录、浓度记录、仪表记录、质量记录和槽体记录 | 经纱质量；每种化学品质量和浓度；水；kWh；蒸汽；上浆后质量；废水体积 | 配方与领料核对，并使用经校准仪表和秤 | kg; m3; kWh | 每个上浆批次及每月抄表结算 | 与已申报纱罗所用上浆经纱相同的期间 | 全部适用上浆机组 | 分别计算有效成分质量；汇总公用工程；按上浆经纱和参考输出归一化 | 配方批准记录；浓度证书；仪表校准；质量平衡审查 |
| `cp_gauze_weaving` | `gauze_weaving` | 经纱、纬纱、织机公用工程、纱罗坯布、废物、废水和粉尘 | 织机生产日志、纱线领料记录、分表、流量计、废物秤和空气检测 | 织机类型；经纱/纬纱质量；kWh；Nm3 空气；m3 水；坯布质量；废物；排风浓度和体积 | 批次级织机记录，并采用路线特定仪表或有文件记录的设备分配 | kg; kWh; Nm3; m3 | 每批次；公用工程至少每班或每月 | 覆盖已申报织机路线的代表性生产周期 | 生产已申报纱罗的全部织机 | 保留路线合计；按调湿坯布产出归一化 | 织机谱系；校准；停机记录；废物核对；实验室报告 |
| `cp_desizing_scouring` | `desizing_scouring` | 坯布投入、每种化学品和酶制剂、水、蒸汽、电力、预处理纱罗和废水 | 批次表、领料记录、制剂浓度或酶活性记录、仪表记录、质量记录和废水日志 | 纺织品干质量；每种化学品或酶制剂质量；浓度或活性；水；蒸汽；kWh；输出干质量；废水 | 批次核对和经校准生产线仪表 | kg; m3; kWh | 每批次及每月结算 | 与已申报产出相同的湿法预处理生产周期 | 范围内全部退浆/煮练生产线 | 保持每种化学品或酶制剂原子化；汇总公用工程；按干预处理纱罗归一化 | 配方版本；制剂证书或酶活性证据；仪表校准；投入/产出干质量检测；废水核对 |
| `cp_peroxide_bleaching` | `peroxide_bleaching` | 预处理投入、过氧化氢、碱、酸、水、蒸汽、电力、漂白纱罗和废水 | 批次表、化学品领料记录、仪表、白度检测和质量检测 | 投入/产出干质量；有效 H2O2、NaOH 和乙酸；水；蒸汽；kWh；废水 | 批次级化学品和公用工程核对 | kg; m3; kWh | 每个漂白批次及每月结算 | 与已申报产出相同的漂白生产周期 | 范围内全部过氧化氢漂白生产线 | 保持化学品原子化；按干漂白纱罗归一化 | 配方和浓度证据；校准；白度检测；废水日志 |
| `cp_reactive_dyeing` | `reactive_piece_dyeing` | 纺织品、每种染料/助剂、水、蒸汽、电力、染色纱罗和废水 | 配色处方、领料记录、仪表、色调检测和质量检测 | C.I. 标识；制剂浓度；每种化学品质量；纺织品干质量；水；蒸汽；kWh；废水 | 配方与领料核对，并使用经校准仪表 | kg; m3; kWh | 每个染色批次及每月结算 | 与已申报产出相同的染色生产周期 | 每条已申报活性染色生产线 | 绝不将染料或助剂汇总为集合行；按干染色纱罗归一化 | 已批准配色处方；SDS/证书；色调结果；仪表校准；废水日志 |
| `cp_drying_finishing` | `drying_heat_setting` | 湿纺织品、电力、间接蒸汽、直接燃气、干纺织品和烟气排放 | 干燥机批次日志、水分检测、电力表、蒸汽表、燃气表和烟气报告 | 湿/干质量；kWh；蒸汽质量和状态；燃气体积；低位热值；烟气浓度和气体体积 | 匹配批次、能源和排放记录 | kg; kWh; MJ | 每个生产周期；燃料、蒸汽和电力每月；烟气按许可要求 | 各干燥技术的代表性期间 | 范围内每条干燥机/拉幅机路线 | 保持间接蒸汽、直接燃烧和其他单独申报的供热路线分离；按干产出归一化 | 水分检测；仪表校准；蒸汽平衡；燃料发票；烟气方法和实验室认可资质 |
| `cp_final_finishing_packaging` | `inspection_rolling_packaging` | 检验纱罗、电力、每种包装材料、参考输出和废物 | 检验日志、秤、包装领料记录、仪表和废物日志 | 宽度；长度；单位面积质量；毛重/皮重/净重；kWh；卷芯、薄膜和纸板质量；不合格品和边角料 | 经校准产品称量和皮重称量，并保留批次谱系 | kg; cm; m; g/m2; kWh | 每个可销售卷装或批次，并每月核对 | 完整的已申报产出期间 | 全部检验、卷装和包装生产线 | 参考流仅汇总产品净重；每个包装和废物流分别归一化 | 秤校准；宽度和单位面积质量检测；检验放行；包装物料清单和废物接收凭证 |
| `cp_thermal_supply` | `thermal_supply` | 燃气、给水、电力、蒸汽、排污水和烟气排放 | 燃料、水、电力和蒸汽仪表；燃料证书；烟气检测 | 燃气体积；NCV；给水；冷凝水回收；kWh；蒸汽质量/状态；排污水；烟气结果 | 经校准公用工程仪表和符合许可要求的烟气测量 | MJ; m3; kWh; kg | 连续或每月；烟气按许可要求 | 与使用过程相同的期间 | 供应前景蒸汽的锅炉机组 | 根据实测体积和 NCV 计算燃料能量；按输送蒸汽和最终产出归一化 | 仪表校准；供应商 NCV；蒸汽平衡；烟气报告；排污日志 |
| `cp_wastewater_treatment` | `wastewater_treatment` | 入口废水、电力、每种处理化学品、排放水、污染物和污泥 | 进/出口流量、投加、实验室、电力、污泥和处置记录 | m3；每种化学品质量/浓度；kWh；pH；BOD；COD；TSS；TN；TP；AOX；污泥湿/干质量 | 与经校准流量和投加记录匹配的混合样采集 | m3; kg; kWh; mg/L | 流量连续；水质按许可频次；每月质量平衡 | 与产生废水的湿法操作相同的期间 | 整个场内处理系统和已申报排放口 | 浓度 x 匹配体积；保持污染物行分离；同时按每 m3 和参考输出归一化 | 获认可实验室；样品监管链；流量计校准；许可；污泥接收凭证；进/出口核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则（formula_or_rule） | 输入（inputs） | 输出（output） | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 归属于已申报路线的期间数量 / 同一路线和期间的可销售纱罗净 kg。 | 匹配的流记录；路线分配；`reference_net_mass` | 每 1 kg 可销售纱罗净重的数量 | `ec-ef-method-2021` |
| `calc_active_chemical_mass` | 化学品溶液和制剂 | 有效成分质量 = 实际使用溶液质量 x 经认证的质量分数。载体水或溶剂具有实质性时，作为独立流保留。 | 领料质量；浓度证书；批次配方 | 有效成分 kg | `ifc-textile-ehs-2007` |
| `calc_textile_mass_balance` | 从纱线至最终纱罗 | 调湿纱线投入 + 留存干浆料 = 调湿可销售纱罗 + 纺织废物 + 实测库存变化；调查残差，不得将其分配给产品。 | 调湿后的投入/产出/废物质量；留存浆料；库存变化 | 质量平衡残差和收率 | `ec-ef-method-2021` |
| `calc_pollutant_load` | 每种水或空气污染物 | 排放质量 = 代表性实测浓度 x 匹配的标准化气体或废水体积，并披露单位换算和未检出值处理。 | 浓度；流量/体积；采样期间 | 每期间和每参考流的污染物 kg | `ifc-textile-ehs-2007` |
| `calc_thermal_energy` | 天然气 | 低位热值能量 = 计量燃气体积 x 同期供应商低位热值；未披露时不得以高位热值替代。 | 燃气体积；NCV | 天然气投入 MJ | `ec-ef-method-2021` |
| `calc_wet_finish_totals` | 可比的完整机织物整理路线 | 在与官方 QA 校验范围比较前，汇总所有适用预处理、漂白/染色、水洗和干燥步骤的水、电力和热能；绝不得将总量范围分别应用于每个步骤。 | 路线特定湿法操作行和干燥整理质量 | 合计 L/kg、kWh/kg 和 MJ/kg | `ifc-textile-ehs-2007` |

### 数据质量要求

| requirement_id | 适用对象 | 要求（requirement） | 证据（evidence） |
| --- | --- | --- | --- |
| `dq_identity` | 产品和路线 | 证明纱罗经纱组织、宽度大于 30 cm、纤维组成、整理状态、批次谱系和精确路线；拒绝医疗用品、非织造布和其他排除身份。 | 织造规范、宽度和单位面积质量检测、产品规范、批次和分类记录；`unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989` |
| `dq_temporal` | 前景数据 | 存在连续生产时至少使用 12 个有代表性的月份；仅在披露季节性、开机、停机和代表性后，方可接受较短但完整的生产周期。 | 仪表期间、生产计划、停机和生产周期记录；`ec-ef-method-2021` |
| `dq_completeness` | 材料、公用工程、废物和排放清单 | 核对采购/领料、仪表、产品和废物。每种实际纱线、浆料成分、染料、助剂、燃料、包装组件、废物和直接排放都是独立原子行；零值或不适用必须有证据。 | 核对工作簿、配方、发票、仪表、废物接收凭证、实验室和许可记录 |
| `dq_route_separation` | 互斥路线 | 在采集和归一化全过程中，将坯布、预处理、漂白、染色、织机技术、直接燃烧/间接加热以及场内/外购蒸汽路线分开。 | 路线编码的生产和公用工程记录；`ifc-textile-ehs-2007` |
| `dq_measurement` | 秤、仪表和实验室结果 | 使用经校准设备、匹配采样和可追溯方法；保留不确定性、未检出值处理和数据修正。 | 校准证书、样品监管链、获认可实验室报告；`ifc-textile-ehs-2007` |
| `dq_secondary_data` | 上游数据集 | 选择具有地域、技术和时间代表性的纱线、电力、燃料、化学品、水、包装和处理数据集；记录每项代理及其影响。 | 数据集元数据、选择记录和敏感性；`ec-ef-method-2021` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 确认纱罗经纱组织、宽度大于 30 cm、调湿净质量以及排除的医疗用品/制成品身份；若采用范围更宽的织物或医疗产品 UUID，则校验失败。 | `unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989` |
| `validate_reference_uuid` | Tiangong 身份 | 发布前必须取得精确的产品流 UUID，并直接核实 CPC 26860、英文和中文 baseName、质量属性 UUID、单位组 UUID 和参考单位；该核实必须来自 `state_code=100` 直接读取。未解析状态会阻止发布，但不阻止候选方法编写。 |  |
| `validate_atomic_inventory` | 每个过程清单 | 拒绝复数选择器或组合载能体。每张卡必须仅含一个物理或化学交换，并为每种实际染料、助剂、燃料、包装材料、废物和基本排放分别设置一行。 |  |
| `validate_route_gates` | 条件性过程 | 拒绝对互斥的坯布、漂白、染色、织机、干燥和供热路线取平均；每个纳入过程必须有肯定性生产记录，每个排除路线必须有明确的不适用依据。 | `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023` |
| `validate_mass_balance` | 纺织品链 | 核对调湿纱线、留存浆料、中间品转移、可销售纱罗、纺织废物和库存变化；调查并披露残差。 | `ec-ef-method-2021` |
| `validate_packaging_tare` | 参考输出 | 确认参考质量排除卷芯、薄膜、纸箱、托盘和其他包装，同时每个消耗的包装组件仍保留在清单中。 | `ec-ef-method-2021` |
| `validate_wet_finish_resource_qa` | 边界兼容的完整机织物整理路线 | 将前景合计而非单个步骤与 IFC 比较范围进行比较：成品机织物电力 0.5-1.5 kWh/kg、热能 30-70 MJ/kg、水 50-100 L/kg。这些范围源自数量有限的设施，仅作为 QA 标志；应解释偏差，绝不得替代实测数据。 | `ifc-textile-ehs-2007` |
| `validate_effluent_qa` | 最终场内淡水排放 | 将代表性排放与更严格的适用许可或 IFC 指南值比较，包括 pH 6-9、BOD 30 mg/L、COD 160 mg/L、TSS 50 mg/L、AOX 1 mg/L、总磷 2 mg/L 和总氮 10 mg/L；报告超标情况，不得将阈值转化为清单默认值。 | `ifc-textile-ehs-2007` |
| `validate_allocation` | 共用负荷和外部输出 | 要求记录细分/系统扩展、物理因果关系和经济分配的层级；拒绝无说明的分配和重复回收抵扣。 | `ec-ef-method-2021` |
| `validate_evidence` | 最终前景数据包 | 通过文件审查和模型校验核实覆盖范围、精度、完整性、代表性、一致性、可重复性、来源和不确定性；保留底层记录的访问条件。 | `ec-ef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门口一个已申报机织纱罗产品和路线的前景制造数据集 |
| downstream_use | 方法学、身份、翻译和发布审查完成后，可支持 `secondary_dataset` 或 `background_dataset` 用途 |
| allowed_use | 当纤维组成、宽度、整理状态、技术、地域、时间和分配兼容时，用于纱罗织物生产的路线特定和产品特定建模 |
| excluded_use | 医用纱布或绷带用品；非织造布；狭幅织物；玻璃纤维织物；涂层/层压织物；作为未披露纤维或整理路线的代理；基于候选或未经审查数据集作比较性声明 |
| required_metadata | 精确参考流身份和 UUID 状态；CPC 语境；纤维组成；织物组织；宽度；单位面积质量；水分基准；整理状态；染料/配方；织机和湿处理技术；场址和地域；期间和生产覆盖范围；公用工程和废水路线；包装配置；分配；截断；上游数据集；未解决缺口 |
| required_quality_disclosure | 原始数据覆盖范围、校准、采样、质量平衡、路线分离、分配基准、次级数据代表性、不确定性、偏离 QA 校验范围的情况、许可合规情况和未解析 UUID |
| update_trigger | 产品身份、宽度或组织；纤维或配方；织机或湿处理路线；公用工程或废水技术；场址；分配；参考流身份；实质性数据源发生变化，或有证据表明现行 QA 规则不再具有代表性 |

## 11. 数据源

| 来源（source_id） | 类型（type） | 参考文献（reference） | 用途（used_for） |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `standard` | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory material, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/CPC and https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-21) | CPC 26860 类别边界，以及与相邻纺织品和制成品类别的区分 |
| `eu-cn-gauze-narrow-fabric-1989` | `standard` | Council Regulation (EEC) No 2886/89, Combined Nomenclature Chapter 58 notes for headings 5803 and 5806, https://eur-lex.europa.eu/eli/reg/1989/2886/oj/eng (retrieved 2026-08-21) | 用于身份和计量的纱罗经纱组织与狭幅织物宽度定义 |
| `jrc-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry (retrieved 2026-08-21) | 按路线门禁的纤维准备、预处理、酶法淀粉退浆、水洗、漂白、染色和整理操作，以及水、化学品、能源、废水和排放的相关性 |
| `ifc-textile-ehs-2007` | `official_guidance` | World Bank Group/IFC, Environmental, Health, and Safety Guidelines for Textile Manufacturing, 30 April 2007, Annex A and pp. 2-14, https://www.ifc.org/content/dam/ifc/doc/2000/2007-textiles-manufacturing-ehs-guidelines-en.pdf (retrieved 2026-08-21) | 络筒、整经、卷经、上浆、织造和整理单元操作；原子化投入和释放；监测；官方机织物整理和脱水污泥比较范围；包括 TSS 在内的废水指南值 |
| `ec-ef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, sections 3.2, 4.5, 4.6 and 8, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230 (retrieved 2026-08-21) | 功能单位和参考流、系统边界、企业特定数据、分配层级、数据质量、报告以及验证/校验 |
